export interface StyleProps {
    className?: string;
    style?: React.CSSProperties;
  }

export type Product = {
  id: string;
  name: string;
  image: string;
  colors: string[];
  label: string;
  subtext: string;
  tags: string[];
  price: string;
};