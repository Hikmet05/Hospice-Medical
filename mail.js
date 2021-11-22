const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    sendEmail();
})


function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "test@gmail.com",
    Password: "testing123",
    To: "test2@gmail.com",
    From: "test@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
    .then(function (message) {
        console.log(message);
      alert("mail sent successfully")
    });
}

