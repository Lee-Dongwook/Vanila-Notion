export type Block = {
  id: string;
  text: string;
};

export type Page = {
  id: string;
  title: string;
  content: Block[];
};
