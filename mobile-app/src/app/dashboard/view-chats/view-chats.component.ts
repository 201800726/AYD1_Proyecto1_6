import { Component, OnInit } from '@angular/core';
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
  constructor(private chatService: ChatService, private auth: AuthService) { }

  ngOnInit(): void {
    this.getChats();
    this.usuario = this.auth.getUsuarioEnSesion()
  }

  userHasChats() {
    return this.chatList.length > 0
  }
  private async getChats() {
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
    await this.getChats();

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
