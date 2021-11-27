const express = require("express");
const http = require("http");
const { connect } = require("http2");

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

//Middleware to access from outside of Server
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//connected user via socket.io
let connectedPeers = [];

//connect to socket io
io.on("connection", (socket) => {
  connectedPeers.push(socket.id);

  //received pre-offer request from client
  socket.on("pre-offer", (data) => {
    console.log("[server] pre-offer");
    const { calleePersonalCode, callType } = data;
    const connectedPeer = connectedPeers.find((peerSocketId) => {
      return peerSocketId === calleePersonalCode;
    });

    if (connectedPeer) {
      const data = { callerSocketId: socket.id, callType };
      //broadcast to callee regarding the pre-offer request
      io.to(calleePersonalCode).emit("pre-offer", data);
    } else {
      //show unavailable dialog by caller if the callee is not available
      const data = {
        preOfferAnswer: "CALLEE_NOT_FOUND",
      };
      io.to(socket.id).emit("pre-offer-answer", data);
    }
  });

  //answer the call
  socket.on("pre-offer-answer", (data) => {
    console.log("[server] pre-offer-answer");
    console.log(data);

    const { callerSocketId } = data;

    const connectedPeer = connectedPeers.find((peerSocketId) => {
      return peerSocketId === callerSocketId;
    });

    if (connectedPeer) {
      //broadcast to callee regarding the pre-offer request
      io.to(callerSocketId).emit("pre-offer-answer", data);
    }
  });

  socket.on("webRTC-signaling", (data) => {
    console.log("[server] webRTC-signaling");
    const { connectedUserSocketId } = data;

    const connectedPeer = connectedPeers.find((peerSocketId) => {
      return peerSocketId === connectedUserSocketId;
    });

    if (connectedPeer) {
      io.to(connectedUserSocketId).emit("webRTC-signaling", data);
    }
  });

  //remove the disconnected socket id from the connected user array
  socket.on("disconnect", () => {
    console.log("[server] user disconnected");

    const newConnectedPeers = connectedPeers.filter((peerSocketId) => {
      return peerSocketId !== socket.id;
    });

    connectedPeers = newConnectedPeers;
  });
});

app.get("/hello", (req, res) => {
  res.send("hello 1");
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
