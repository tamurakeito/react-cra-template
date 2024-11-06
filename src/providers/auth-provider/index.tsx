import React, { ReactNode, useContext, useEffect } from "react";
import useLocalStorage, {
  tokenStorageKey,
  userStorageKey,
} from "hooks/useLocalStrage";
import { useNavigate } from "react-router-dom";

export type User = {
  id: number;
  user: string;
  session: number;
};

type AuthContext = {
  user?: User;
  signIn: (id: number, user: string, token: string) => void;
  signOut: () => void;
};

const AuthContext = React.createContext<AuthContext>({
  signOut: () => {
    console.log("sign out unimplemented");
  },
  signIn: () => {
    console.log("sign in unimplemented");
  },
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | undefined>(
    userStorageKey,
    undefined
  );
  const [token, setToken] = useLocalStorage<string | undefined>(
    tokenStorageKey,
    undefined
  );
  const signIn = (id: number, user: string, token: string) => {
    const User = {
      id: id,
      user: user,
      session: Date.now(),
    };
    setUser(User);
    setToken(token);
  };
  const signOut = () => {
    setUser(undefined);
    setToken(undefined);
    redirect();
  };

  // redirect to signin
  const navigation = useNavigate();
  const redirect = () => {
    // パスが`/signup`以外であった場合ログイン画面へリダイレクト
    if (window.location.pathname.indexOf("/sign-up/") !== 0) {
      navigation("/sign-in");
    }
  };
  useEffect(() => {
    // ログインしていない場合
    const userUser = user?.user || undefined;
    if (!!!userUser) {
      signOut();
    }

    // セッション切れの場合
    const untilSessionExpire = 1440000; // １日分のミリ秒 // １日経過するとセッション切れとなる
    const userSession = user?.session || undefined;
    if (!!!userSession || Date.now() - userSession > untilSessionExpire) {
      signOut();
    }

    // トークンが無効である場合
  }, [user, token, navigation]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContext => {
  return useContext(AuthContext);
};
