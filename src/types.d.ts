declare interface ISidebarItem {
  title: string;
  icon?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  url: string;
  singleItem: boolean;
  bgColor?: string;
  items?: { title: string; url: string }[];
  newIconDesign?: boolean;
}

declare type HOC<props = unknown> = (
  component: React.FC<props>
) => (props: props) => React.ReactElement;

declare type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};
