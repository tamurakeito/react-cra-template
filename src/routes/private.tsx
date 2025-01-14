import { useAuthContext } from "providers/auth-provider";
import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactElement;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuthContext();

  // ログインしていない場合、`/sign-in` にリダイレクト
  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  // ログイン済みならそのままレンダリング
  return children;
};

export default PrivateRoute;
