const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');


const socket = io();

//Message from Server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    //Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

//message Submit
chatForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //get message text
    const msg = e.target.elements.msg.value;

    console.log(msg);
  //Emit message to server
    socket.emit('chatMessage', msg);

    //clear input
    e.target.elements.msg.value ='';
    e.target.elements.msg.focus();
});

//Output message to Dom
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML =`<p class="meta">Casey <span>2:00</span></p>
    <p class="text">
    ${message}
</p>`;
document.querySelector('.chat-messages').appendChild(div);
}