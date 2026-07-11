const socket = new WebSocket("wss://yourserver.com/chat");

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p><strong>${msg.user}:</strong> ${msg.text}</p>`;
};

function sendMessage() {
  const input = document.getElementById("chatInput");
  socket.send(JSON.stringify({ user: "Me", text: input.value }));
  input.value = "";
}
