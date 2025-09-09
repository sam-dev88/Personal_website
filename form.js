const scriptURL = "https://script.google.com/macros/s/AKfycbxmGKV9LMPNcgc_sEM7NXJAkWFidAoUygspRqH05b38X78jMo4LIrf2VJdSFwsHVFcG/exec";

const form = document.getElementById("contactform"); // more robust
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  msg.innerHTML = "Sending message...";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      // success
      msg.innerHTML = "✅ Message sent successfully!";
      form.reset();
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);
    })
    .catch((error) => {
      console.error("Form submit error:", error);
      msg.innerHTML = "❌ Failed to send message. Try again later.";
    });
});
