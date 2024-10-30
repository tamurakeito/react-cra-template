import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.scss";
import Text, { textSizes } from "ui/atoms/text";
import { postSignIn } from "data/api/postSignin";
import { useAuthContext } from "providers/auth-provider";

export const SignIn = () => {
  const idRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const { user, signIn } = useAuthContext();

  useEffect(() => {
    idRef.current?.focus();
  }, []);

  const handler = async () => {
    const response = await postSignIn(id, pass);
    response && signIn(response.id, response.user, response.token);
  };
  return (
    <div className={classes.signIn}>
      <div>
        <Text size={textSizes.h3}>sign in</Text>
      </div>
      <div>
        {user ? (
          <Text size={textSizes.md}>
            {user.id}: {user.user}
          </Text>
        ) : (
          <Text size={textSizes.md}>未サインイン</Text>
        )}
      </div>
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
            event.key === "Enter" && handler();
          }}
        />
      </div>
      <button onClick={handler}>サインイン</button>
    </div>
  );
};
