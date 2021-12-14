export type Card = {
  icon?: {
    src: string;
    alt?: string;
    transform?: string;
  };
  title: string;
  text: string;
  link?: {
    href: string;
    text: string;
  };
};
