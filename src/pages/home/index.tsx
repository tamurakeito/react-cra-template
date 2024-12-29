import Center from "ui/atoms/center";
import classes from "./styles.module.scss";
import Text, { textSizes } from "ui/atoms/text";
import Button from "ui/atoms/button";
import {
  checkIsHelloworldResponse,
  GetHelloworld,
  getHelloworldErrors,
} from "data/api/getHelloworld";
import { checkIsErrorResponse } from "data/utils/typeGuards";
import { setToast, toastTypes } from "components/toast";
import { handleUnexpectedError } from "data/utils/handleErrors";
import { tokenStorageKey } from "hooks/useLocalStrage";

export const Home = () => {
  return (
    <Center className={classes.home}>
      <div>
        <Text size={textSizes.h1}>hello world</Text>
      </div>
      <HelloWorldButton id={1} />
      <HelloWorldButton id={2} />
      <HelloWorldButton id={3} />
    </Center>
  );
};

const HelloWorldButton = ({ id }: { id: number }) => {
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
    <Button className={classes.button} onClick={() => handleHelloworld(id)}>
      id: {id}
    </Button>
  );
};
