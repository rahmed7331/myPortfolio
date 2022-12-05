// --------------- Theme change Icon  --------------- //
let contrastToggle = false;
const toggleContrast = () => {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
};

// ------- Using EmailJS to activate email communication ------- //
const contact = (event) => {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_wxhph6h", //service code
      "template_awautsb", // template code
      event.target,
      "NACtL1j-tU189Z-h9" //public API Key
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please send me email directly at islam.rny@gmail.com"
      );
    });

  setTimeout(() => {
    console.log("it workd 2");
  }, 1000);
};

// --------------- toggle modal__overlay --------------- //
let isModalOpen = false;
const toggleModal = () => {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
};
