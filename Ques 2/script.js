const socket = io('http://localhost:3000');

const MessageContainer = document.getElementById('message-container');
const MessageForm= document.getElementById('send-container');
const MessageInput= document.getElementById('message-input');

socket.on('chat-message', (data)=>{
    appendMessage(data);
})
MessageForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const message=MessageInput.value;
    socket.emit('send-chat-message',message);
    MessageInput.value=''
})

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    MessageContainer.append(messageElement);

}