import classes from "./styles.module.scss";
import { ReactNode } from "react";
import classNames from "classnames";

const Text = ({
  children,
  size,
  className,
  onClick = () => {},
}: {
  children: ReactNode;
  size?: TextSize;
  className?: string;
  onClick?: () => void;
}) => {
  const clazz = classNames(classes.text, classes[`font--${size}`], className);
  return (
    <span className={clazz} onClick={onClick}>
      {children}
    </span>
  );
};

export default Text;

Text.displayName = "Text";

const textContentSizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;
const textHeaderSizes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;
export const textSizes = {
  ...textContentSizes,
  ...textHeaderSizes,
} as const;
export type TextSize = (typeof textSizes)[keyof typeof textSizes];
