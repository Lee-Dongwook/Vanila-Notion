import { Page } from "../types/type";

export class EditorComponent {
  private container: HTMLElement;
  private currentPage: Page | null;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId)!;
    this.currentPage = null;
    this.render();
  }

  render() {
    this.container.innerHTML = `
    <h2 id="page-title"> No Page Selected </h2>
    <div id="content"></div>
    `;

    if (this.currentPage) {
      const pageTitle = this.container.querySelector("#page-title")!;
      pageTitle.textContent = this.currentPage.title;

      const content = this.container.querySelector("#content")!;
      content.innerHTML = this.currentPage.content
        .map((block, index) => `<p data-id="${index}">${block}</p>`)
        .join("");
    }
  }

  setPage(page: Page) {
    this.currentPage = page;
    this.render();
  }
}
