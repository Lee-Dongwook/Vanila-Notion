import { Page } from "../types/type";
import { SidebarComponent } from "./SidebarComponent";
import { EditorComponent } from "./EditorComponent";

export class AppComponent {
  private pages: Page[];
  private sidebar: SidebarComponent;
  private editor: EditorComponent;

  constructor() {
    this.pages = [];
    this.sidebar = new SidebarComponent(
      "sidebar",
      this.pages,
      this.selectPage.bind(this),
      this.createPage.bind(this)
    );
    this.editor = new EditorComponent("editor");
  }

  selectPage(id: string) {
    const page = this.pages.find((p) => p.id === id);
    if (page) {
      this.editor.setPage(page);
    }
  }

  createPage() {
    const newPage: Page = {
      id: Date.now().toString(),
      title: `Page ${this.pages.length + 1}`,
      content: [],
    };

    this.pages.push(newPage);
    this.sidebar.updatePage(this.pages);
    this.selectPage(newPage.id);
  }
}
