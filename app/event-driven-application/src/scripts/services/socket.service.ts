import { io, Socket } from "socket.io-client";
import {  IChatEvents, IChatMessage, IChatUser, IChatRoom } from "../models";
import { EventManager } from "../core/eventManager";

const SOCKET_URL = "http://localhost:3001";

export class SocketService {
  private static instance: SocketService;
  private socket: Socket;
  private isConnected = false;
  private eventManager: EventManager<IChatEvents>;

  constructor(eventManager: EventManager<IChatEvents>) {
    this.socket = io(SOCKET_URL);
    this.eventManager = eventManager;

    this.setupListeners();
  }

  static getInstance(eventManager: EventManager<IChatEvents>): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService(eventManager);
    }
    return SocketService.instance;
  }

  private setupListeners() {
    this.socket.on("connect", () => {
      this.isConnected = true;
      console.log("Connected to server");
    });

    this.socket.on("disconnect", () => {
      this.isConnected = false;
      console.log("Disconnected from server");
    });

    this.socket.on('userJoined', (data) => {
      console.log("User joined room:", data);
    });

    this.socket.on('roomCreated', (room: IChatRoom) => {
        this.eventManager.dispatch('roomCreated', room);
    });
    
    this.socket.on('messageSent', (message: IChatMessage) => {
        this.eventManager.dispatch('messageSent', message);
    });
  }

  /**
   * Below are the methods to dispatch events to the server
   */

  dispatchRegister(user: IChatUser) {
    this.socket.emit("register", user);
  }

  dispatchRoomJoined(roomId: string, userId: string) {
    this.socket.emit("joinRoom", { roomId, userId });
  }

  dispatchMessageSent(message: IChatMessage) {
    this.socket.emit("messageSent", message);
  }

  dispatchLeaveRoom(roomId: string, userId: string) {
    this.socket.emit("leaveRoom", { roomId, userId });
  }

  get connected(): boolean {
    return this.isConnected;
  }
}
