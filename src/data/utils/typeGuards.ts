export type HelloworldResponse = {
  id: number;
  hello: {
    id: number;
    name: string;
    tag: boolean;
  };
};
export const checkIsHelloworldResponse = (
  obj: any
): obj is HelloworldResponse => {
  return (
    typeof obj.id === "number" &&
    typeof obj.hello.id === "number" &&
    typeof obj.hello.name === "string" &&
    typeof obj.hello.tag === "boolean"
  );
};

// authentication
export type SignInResponse = {
  id: number;
  user_id: string;
  name: string;
  token: string;
};
export const checkIsSignInResponse = (obj: any): obj is SignInResponse => {
  return (
    typeof obj.id === "number" &&
    typeof obj.user_id === "string" &&
    typeof obj.name === "string" &&
    typeof obj.token === "string"
  );
};

// error handling
export type ErrorResponse = {
  error: string;
};
export const checkIsErrorResponse = (obj: any): obj is ErrorResponse => {
  return typeof obj.error === "string";
};
