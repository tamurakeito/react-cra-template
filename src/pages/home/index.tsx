import Center from "ui/atoms/center";
import classes from "./styles.module.scss";
import Text, { textSizes } from "ui/atoms/text";
import Button from "ui/atoms/button";

export const Home = () => {
  return (
    <Center className={classes.home}>
      <div>
        <Text size={textSizes.h1}>hello world</Text>
      </div>
      <Button className={classes.button} onClick={() => {}}>
        id: 1
      </Button>
      <Button className={classes.button} onClick={() => {}}>
        id: 2
      </Button>
      <Button className={classes.button} onClick={() => {}}>
        id: 3
      </Button>
    </Center>
  );
};
