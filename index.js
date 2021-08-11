const mainBoxContent = document.querySelector(".main__container-top");
const eventKey = document.querySelector(".event__key");
const eventLocation = document.querySelector(".event__location");
const eventWhich = document.querySelector(".event__which");
const eventCode = document.querySelector(".event__code");

document.addEventListener("keydown", (e) => {
  mainBoxContent.classList.remove("hidden");
  mainBoxContent.innerHTML = e.key;
  eventKey.innerHTML = e.key;
  eventLocation.innerHTML = e.location;
  eventWhich.innerHTML = e.which;
  eventCode.innerHTML = e.code;
});
