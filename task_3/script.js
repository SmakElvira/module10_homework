const wsUri = "wss://echo-ws-service.herokuapp.com";

function pageLoaded() {
  const infoOutput = document.querySelector(".info_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("input");
  const sendBtn = document.querySelector(".btn_send");
  const getGeo = document.querySelector(".btn_geo");
  
  let socket = new WebSocket(wsUri);
  
  socket.onopen = () => {
    infoOutput.innerText = "";
  }
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }
  
  socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }
  
  sendBtn.addEventListener("click", sendMessage);
  
  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    console.log(input.value);
    input.value = '';
            
  }
  
  getGeo.addEventListener("click", sendGeolocation);
  
  function sendGeolocation() {
    if ("geolocation" in navigator) {
      let locationOptions = {
        enableHighAccuracy: true
      };
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
    } else {
      writeToChat("Ваш браузер не поддерживает функцию определения местоположения");
    }
  };
  
  function locationSuccess(data) {
    let link = `https://www.openstreetmap.org/#map=18/${data.coords.latitude}/${data.coords.longitude}`;
    writeToChat(`<a href="${link}" target="_blank">Гео-локация</a>`);
    input.value = '';
  }
  
  function locationError() {
    writeToChat("При получении местоположения произошла ошибка");
  }

  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);