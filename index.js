import { dom } from "./modules/dom.js";
import { firebase } from "./modules/firebase.js";
import { contactPage } from "./modules/contact.js";
import { aboutPage } from "./modules/about.js";
import { displayLanding } from "./modules/landing.js";

displayLanding.then(() => {
  document.querySelector(".page-content").append(contactPage());
});


