import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat.model';
import { Mensaje } from 'src/app/models/mensaje.model';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-view-chats',
  templateUrl: './view-chats.component.html',
  styleUrls: ['./view-chats.component.css']
})
export class ViewChatsComponent implements OnInit {

  public chatList: Array<Chat> = [];
  public chat!: Chat;

  usuario!: Usuario;
  constructor(private chatService: ChatService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.init();
    this.usuario = this.auth.getUsuarioEnSesion();
  }

  async init() {
    await this.getChats();
    const urlTree = this.router.createUrlTree([this.router.url]);
    const segment = urlTree.root.children.primary.segments[1]
    if (!segment) {
      return
    }
    const chatID = parseInt(segment.path);
    if (chatID) {
      const requestedChat = this.chatList.filter(this.compareKeyValuePair, chatID)[0]
      this.obtenerChat(requestedChat);
    }

  }
  private getKeyValuePair(chat: Chat) {
    const chatID = chat.reporteID;
    return [chatID, chat]
  }

  /**
   * Función utilizada para filtrar y  obtener el chat por chatID.
   * Revisar JavaScript function Array filter()
   * @param chat chat a comparar
   * @returns boolean indicando si pasó la prueba
   */
  private compareKeyValuePair(chat: any) {
    return chat.reporteID === this
  }

  userHasChats() {
    return this.chatList.length > 0
  }

  private async getChats(chatID?: number) {
    try {
      const result = await this.chatService.getAll(this.auth.getUsuarioEnSesion());
      this.chatList = result['data'];
    } catch (err) {
      console.log(err);
    }
  }

  public async obtenerChat(chat: Chat) {
    this.chat = chat;
    await this.datosChat();
  }

  private async datosChat() {
    if (this.chat) {
      try {
        const data = await this.chatService.obtenerMensaje(this.chat);
        this.chat.mensajes = data['data'];

      } catch (err) {
        console.log(err);
      }
    }
  }

  events: string[] = [];
  opened: boolean = false;

  contenido!: string | undefined;
  async enviarMensaje() {
    if (this.contenido) {
      try {
        const mensaje: Mensaje = new Mensaje(this.chat.reporteID,
          this.usuario.usuarioID, this.contenido);

        await this.chatService.crearMensaje(mensaje);
        this.contenido = undefined;

        await this.datosChat();
      } catch (err) {
        console.log(err);
      }
    }
  }
}
