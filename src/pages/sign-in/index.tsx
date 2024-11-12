import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.scss";
import Text, { textColors, textSizes } from "ui/atoms/text";
import { PostSignIn, postSignInErrors } from "data/api/postSignin";
import {
  checkIsErrorResponse,
  checkIsSignInResponse,
} from "data/utils/typeGuards";
import { useAuthContext } from "providers/auth-provider";
import Center from "ui/atoms/center";
import Button from "ui/atoms/button";
import { handleUnexpectedError } from "data/utils/handleErrors";
import { setToast, toastTypes } from "components/toast";

export const SignIn = () => {
  const idRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const { user, signIn, signOut } = useAuthContext();

  useEffect(() => {
    idRef.current?.focus();
  }, []);

  const validation = (user: string, password: string) => {
    if (!user.trim()) {
      setToast("ユーザーIDを入力してください。", toastTypes.error);
      return false;
    }
    if (!password.trim()) {
      setToast("パスワードを入力してください。", toastTypes.error);
      return false;
    }
    return true;
  };

  const handleSignIn = async () => {
    if (!validation(id, pass)) {
      return;
    }

    const result = await PostSignIn(id, pass);

    if (checkIsSignInResponse(result)) {
      signIn(result.id, result.user_id, result.name, result.token);
      setId("");
      setPass("");
      setToast("サインインしました", toastTypes.success);
    } else if (checkIsErrorResponse(result)) {
      switch (result.error) {
        case postSignInErrors.unauthorized:
          setToast("パスワードが間違っています", toastTypes.error);
          return;
        case postSignInErrors.notFound:
          setToast("ユーザーが見つかりませんでした", toastTypes.error);
          return;
        default:
          handleUnexpectedError();
      }
    } else {
      handleUnexpectedError();
    }
  };
  const handleSignOut = () => {
    signOut();
    setId("");
    setPass("");
    setToast("サインアウトしました");
  };

  return (
    <Center className={classes.sign_in}>
      <div>
        <Text size={textSizes.h2}>sign in</Text>
      </div>
      <div className={classes.status}>
        {user ? (
          <Text size={textSizes.md}>
            {user.userId}: {user.name}
          </Text>
        ) : (
          <Text size={textSizes.sm} color={textColors.gray700}>
            未サインイン
          </Text>
        )}
      </div>
      {!!!user ? (
        <>
          {/* input atom層に実装 */}
          {/* inputにsanitizeギミックなども入れたい */}
          <div>
            <input
              ref={idRef}
              type={"text"}
              value={id}
              placeholder={"id"}
              onChange={(event) => setId(event.target.value)}
              onKeyDown={(event) => {
                event.key === "Enter" && passRef.current?.focus();
              }}
            />
          </div>
          <div>
            <input
              ref={passRef}
              type={"password"}
              value={pass}
              placeholder={"password"}
              onChange={(event) => setPass(event.target.value)}
              onKeyDown={(event) => {
                event.key === "Enter" && handleSignIn();
              }}
            />
          </div>
          <Button className={classes.button} onClick={handleSignIn}>
            サインイン
          </Button>
        </>
      ) : (
        <Button className={classes.button} onClick={handleSignOut}>
          サインアウト
        </Button>
      )}
    </Center>
  );
};
