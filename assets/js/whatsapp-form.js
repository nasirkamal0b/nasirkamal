function sendWhatsApp(){

  const phone = "923150841514";

  const name = document.getElementById("name").value;
  const userPhone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const text =
`Hello 👋
Name: ${name}
Phone: ${userPhone}
Email: ${email}
Message: ${message}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}