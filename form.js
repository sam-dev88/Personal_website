const scriptURL =
  "https://script.google.com/macros/s/AKfycbxmGKV9LMPNcgc_sEM7NXJAkWFidAoUygspRqH05b38X78jMo4LIrf2VJdSFwsHVFcG/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  msg.innerHTML = "Sending message...";
  setTimeout(() => {
    msg.innerHTML = "Message sent succesfully!";
  }, 3000);
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      setTimeout(() => {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
