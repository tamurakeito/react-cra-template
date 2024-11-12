import classes from "./styles.module.scss";
import { ReactNode } from "react";
import classNames from "classnames";

const Text = ({
  children,
  size = textSizes.md,
  color = textColors.black,
  className,
  onClick = () => {},
}: {
  children: ReactNode;
  size?: TextSize;
  color?: TextColor;
  className?: string;
  onClick?: () => void;
}) => {
  const clazz = classNames(
    classes.text,
    classes[`font_${size}`],
    classes[`color_${color}`],
    className
  );
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

export const textColors = {
  black: "black",
  gray100: "gray_100",
  gray200: "gray_200",
  gray300: "gray_300",
  gray400: "gray_400",
  gray500: "gray_500",
  gray600: "gray_600",
  gray700: "gray_700",
  gray800: "gray_800",
  gray900: "gray_900",
  white: "white",
} as const;
export type TextColor = (typeof textColors)[keyof typeof textColors];
