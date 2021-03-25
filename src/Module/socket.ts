function socket(io) {
  io.on("connection", (socket) => {
    console.log("연결완료");
    socket.on("disconnect", () => {
      console.log("connect finish");
    });
    socket.on("chat-msg", (msg) => {
      console.log(msg);
      io.emit("chat-msg", msg);
    });
  });
}
export default socket;
