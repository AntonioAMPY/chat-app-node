const socket = io();

const roomsTemplate = document.querySelector('#rooms-template').innerHTML;

socket.on("roomsActive", ({ rooms }) => {
  const html = Mustache.render(roomsTemplate, {
    rooms
  });
  document.querySelector("#rooms").innerHTML = html;
});
