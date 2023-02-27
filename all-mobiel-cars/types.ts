export interface headingProps {
  titleText: string;
  subtitleText?: string | null;
  align: "center" | "left" | "right";
}
export interface promotionCardProps {
    uuid: string;
    img: string;
    imgAlt: string;
    title: string;
    subtitle?: string;
    hasLink?: boolean;
    linkText?: string;
    linkHref?: string;
  }
  export interface serviceBlockProps {
    uuid: string;
    icon: JSX.Element;
    title: string;
    href: string;
  }

  export interface textBlockProps {
    uuid: string;
    title: string;
    text: string;
    hasLink?: boolean;
    linkText?: string;
    linkHref?: string;
  }