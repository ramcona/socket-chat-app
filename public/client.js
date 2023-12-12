const socket = io("http://localhost:3000");
let roomId = "";
let username = "";

//stucture
//1. emit "join" to join room by id
//2. socket.on("chat message") to observe when have update message on
//3. socket.emit("chat message", chatMessage) to send message

//emit lewat API
//.on / .listen teteap di device

document.getElementById("join-form").addEventListener("submit", (event) => {
  event.preventDefault();
  roomId = document.getElementById("room-id").value;
  username = document.getElementById("username").value;

  if (roomId.trim() !== "" && username.trim() !== "") {
    document.getElementById("join-form").style.display = "none";
    document.getElementById("chat-window").style.display = "block";
    document.getElementById("message-input").style.display = "block";
    document.querySelector("button").style.display = "block";

    socket.emit("join", roomId);
  } else {
    alert("Please fill in both the Room ID and Username.");
  }
});

function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  if (message.trim() !== "") {
    const chatMessage = {
      roomId,
      sender: username,
      message,
    };

    socket.emit("chat message", chatMessage);
    messageInput.value = "";
  }
}

socket.on("chat message", (msg) => {
  displayMessage(msg);
});

function displayMessage(msg) {
  const chatWindow = document.getElementById("chat-window");
  const messageElement = document.createElement("div");

  messageElement.classList.add("message");

  if (msg.sender === username) {
    messageElement.classList.add("sent");
  } else {
    messageElement.classList.add("received");
  }

  messageElement.innerHTML = `<strong>${msg.sender}:</strong> ${msg.message}`;
  chatWindow.appendChild(messageElement);
}
