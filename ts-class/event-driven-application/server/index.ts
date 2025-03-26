import express, { Express } from "express";
import http from "http";
import { Server, Socket } from "socket.io";

interface CustomSocket extends Socket {
  userId?: string;
}

interface UserRooms {
  [userId: string]: Set<string>;
}

const app: Express = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:1234",
    methods: ["GET", "POST"],
  },
});

const userRooms: UserRooms = {};

io.on("connection", (socket: CustomSocket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("register", async (userData) => {
    socket.userId = userData.id;
    socket.emit("registered", userData);
  });

  socket.on("joinRoom", ({ roomId, userId }) => {
    if (!userRooms[userId]) {
      userRooms[userId] = new Set();
    }
    userRooms[userId].add(roomId);

    socket.join(roomId);

    console.log(`User ${userId} joined room ${roomId}`);
    io.to(roomId).emit("userJoined", { roomId, userId });
  });

  socket.on("messageSent", (message) => {
    console.log(`Message sent: ${message}`);
    io.to(message.roomId).emit("messageSent", message);
  });

  socket.on("leaveRoom", ({ roomId, userId }) => {
    socket.leave(roomId);

    console.log(`User ${userId} left room ${roomId}`);

    io.to(roomId).emit("roomLeft", { roomId, userId });
    if (userRooms[userId]) {
      userRooms[userId].delete(roomId);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);

    const userId = socket.userId;
    if (userId && userRooms[userId]) {
      for (const roomId of userRooms[userId]) {
        io.to(roomId).emit("userLeft", { roomId, userId });
      }
      delete userRooms[userId];
    }
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});
