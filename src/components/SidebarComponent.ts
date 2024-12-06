import { Page } from "../types/type";

export class SidebarComponent {
  private container: HTMLElement;
  private pages: Page[];
  private onPageSelect: (id: string) => void;
  private onNewPage: () => void;

  constructor(
    containerId: string,
    pages: Page[],
    onPageSelect: (id: string) => void,
    onNewPage: () => void
  ) {
    this.container = document.getElementById(containerId)!;
    this.pages = pages;
    this.onPageSelect = onPageSelect;
    this.onNewPage = onNewPage;
    this.render();
  }

  render() {
    this.container.innerHTML = `
    <button id="new-page-btn"> + New Page </button>
    <ul id="page-list"></ul>
    `;

    const pageList = this.container.querySelector("#page-list")!;
    this.pages.forEach((page) => {
      const li = document.createElement("li");
      li.textContent = page.title;
      li.onclick = () => this.onPageSelect(page.id);
      pageList.appendChild(li);
    });

    const newPageBtn = this.container.querySelector("#new-page-btn");
    if (newPageBtn instanceof HTMLButtonElement) {
      newPageBtn.onclick = this.onNewPage;
    }
  }

  updatePage(pages: Page[]) {
    this.pages = pages;
    this.render();
  }
}
