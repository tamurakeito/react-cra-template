import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.scss";
import Text, { textColors, textSizes } from "ui/atoms/text";
import { postSignIn } from "data/api/postSignin";
import { useAuthContext } from "providers/auth-provider";
import Center from "ui/atoms/center";
import Button from "ui/atoms/button";

export const SignIn = () => {
  const idRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const { user, signIn, signOut } = useAuthContext();

  useEffect(() => {
    idRef.current?.focus();
  }, []);

  const handleSignIn = async () => {
    const response = await postSignIn(id, pass);
    response && signIn(response.id, response.user, response.token);
  };
  const handleSignOut = signOut;
  // フロントエンド側でのエラーハンドリング
  return (
    <Center className={classes.sign_in}>
      <div>
        <Text size={textSizes.h2}>sign in</Text>
      </div>
      <div className={classes.status}>
        {user ? (
          <Text size={textSizes.md}>
            {user.id}: {user.user}
          </Text>
        ) : (
          <Text size={textSizes.sm} color={textColors.gray_600}>
            未サインイン
          </Text>
        )}
      </div>
      <div>
        {/* input atom層に実装 */}
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
      <Button className={classes.button} onClick={handleSignOut}>
        サインアウト
      </Button>
    </Center>
  );
};
