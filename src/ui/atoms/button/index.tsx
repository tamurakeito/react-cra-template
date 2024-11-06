import { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

const Button = ({
  children,
  className,
  onClick,
  ...props
}: {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}) => {
  const clazz = classNames([classes.button, className]);
  return (
    <div className={clazz} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Button;
