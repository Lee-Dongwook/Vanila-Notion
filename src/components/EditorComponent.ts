import { Page, Block } from "../types/type";

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
    <div id="editor">    
      <h2 id="page-title"> No Page Selected </h2>
      <div id="content"></div>
      <button id="add-block-btn"> + Add Block </button>
    </div>
    `;

    const pageTitle = this.container.querySelector("#page-title")!;
    const content = this.container.querySelector("#content")!;
    const addBlockBtn = this.container.querySelector(
      "#add-block-btn"
    )! as HTMLButtonElement;

    if (this.currentPage) {
      pageTitle.textContent = this.currentPage.title;

      this.currentPage.content.forEach((block) => {
        const blockEl = document.createElement("div");
        blockEl.className = "block";
        blockEl.setAttribute("data-id", block.id);

        const input = document.createElement("input");
        input.value = block.text;
        input.oninput = () => this.updateBlock(block.id, input.value);

        blockEl.appendChild(input);
        content.appendChild(blockEl);
      });

      addBlockBtn.onclick = () => this.addBlock();
    }
  }

  setPage(page: Page) {
    this.currentPage = page;
    this.render();
  }

  addBlock() {
    if (!this.currentPage) return;
    const newBlock: Block = {
      id: Date.now().toString(),
      text: "",
    };
    this.currentPage.content.push(newBlock);
    this.render();
  }

  updateBlock(blockId: string, text: string) {
    if (!this.currentPage) return;

    const block = this.currentPage.content.find((b) => b.id === blockId);
    if (block) {
      block.text = text;
    }
  }
}
