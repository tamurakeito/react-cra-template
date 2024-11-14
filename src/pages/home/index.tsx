import Center from "ui/atoms/center";
import classes from "./styles.module.scss";
import Text, { textSizes } from "ui/atoms/text";
import Button from "ui/atoms/button";
import { GetHelloworld, getHelloworldErrors } from "data/api/getHelloworld";
import {
  checkIsErrorResponse,
  checkIsHelloworldResponse,
} from "data/utils/typeGuards";
import { setToast, toastTypes } from "components/toast";
import { handleUnexpectedError } from "data/utils/handleErrors";
import { tokenStorageKey } from "hooks/useLocalStrage";

export const Home = () => {
  const handleHelloworld = async (id: number) => {
    console.log(localStorage.getItem(tokenStorageKey));
    const result = await GetHelloworld(id);
    if (checkIsHelloworldResponse(result)) {
      setToast(`${result.id}: ${result.hello.name}`);
    } else if (checkIsErrorResponse(result)) {
      switch (result.error) {
        case getHelloworldErrors.notFound:
          setToast("データが見つかりません", toastTypes.error);
          return;
        default:
          handleUnexpectedError();
      }
    } else {
      handleUnexpectedError();
    }
  };

  return (
    <Center className={classes.home}>
      <div>
        <Text size={textSizes.h1}>hello world</Text>
      </div>
      <Button className={classes.button} onClick={() => handleHelloworld(1)}>
        id: 1
      </Button>
      <Button className={classes.button} onClick={() => handleHelloworld(2)}>
        id: 2
      </Button>
      <Button className={classes.button} onClick={() => handleHelloworld(3)}>
        id: 3
      </Button>
    </Center>
  );
};
