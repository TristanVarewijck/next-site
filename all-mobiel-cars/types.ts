export interface headingProps {
  size: 'small' | "medium" | "big";
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
  }
  export interface serviceBlockProps {
    uuid: string;
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

  export interface articleProps extends textBlockProps {
    image: string;
    index?: number
    createdAt: string;
  }