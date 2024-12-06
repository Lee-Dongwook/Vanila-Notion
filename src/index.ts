import "./styles/style.css";
import { AppComponent } from "./components/AppComponent";

document.addEventListener("DOMContentLoaded", () => {
  new AppComponent();
});

if (module.hot) {
  module.hot.accept();
}
