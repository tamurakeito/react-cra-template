import classNames from "classnames";
import classes from "./styles.module.scss";
import { ReactNode } from "react";

const Center = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const clazz = classNames([classes.center, className]);
  return (
    <div className={clazz}>
      <div>{children}</div>
    </div>
  );
};

export default Center;
