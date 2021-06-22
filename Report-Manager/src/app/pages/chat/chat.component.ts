import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';

import { Chat } from 'src/app/models/chat.model';
import { Mensaje } from 'src/app/models/mensaje.model';
import { Usuario } from 'src/app/models/usuario.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public usuario!: Usuario;
  public chats: Array<Chat>;
  public chat!: Chat;
  public contenido!: string | undefined;

  private subscription!: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _chatService: ChatService
  ) {
    this.chats = new Array<Chat>();
  }

  async ngOnInit(): Promise<void> {
    this.getUser();
    await this.getChat();

    const source = interval(2500);
    this.subscription = source.subscribe(() => this.datosChat());
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private getUser(): void {
    const usuario: string | null = localStorage.getItem('user');

    if (usuario !== null) this.usuario = <Usuario>JSON.parse(usuario);
  }

  private async getChat(): Promise<void> {
    let reporteID: number | undefined;

    this._activatedRoute.params.subscribe(
      params => { reporteID = params['reporteID']; }
    );

    if (reporteID) {
      this.chat = new Chat();
      this.chat.reporteID = reporteID;
    }

    await this.getChats();
  }

  private async getChats() {
    try {
      const data = await this._chatService.getAll(this.usuario);

      if (data['code'] === 200) {
        this.chats = data['data'];
      }
    } catch (err) {
      console.log(err);
    }
  }

  private async datosChat() {
    await this.getChats();

    if (this.chat) {
      try {
        const data = await this._chatService.obtenerMensaje(this.chat);
        if (data['code'] === 200) {
          this.chat.mensajes = data['data'];
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  public async obtenerChat(chat: Chat) {
    this.chat = chat;
    await this.datosChat();
  }

  public async enviarMensaje() {
    if (this.contenido) {
      try {
        const mensaje: Mensaje = new Mensaje(this.chat.reporteID,
          this.usuario.usuarioID, this.contenido);

        await this._chatService.crearMensaje(mensaje);
        this.contenido = undefined;

        await this.datosChat();
      } catch (err) {
        console.log(err);
      }
    }
  }
}
