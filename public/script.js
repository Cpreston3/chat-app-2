const chatForm = document.getElementById('chat-form');



const socket = io();


socket.on('message', message => {
    console.log(message);
    outputMessage(message);
});

//message Submit
chatForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    console.log(msg);
  //Emit message to user
    socket.emit('chatMessage', msg);
});

//Output message to Dom
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML`<p class="meta"></p>`
}