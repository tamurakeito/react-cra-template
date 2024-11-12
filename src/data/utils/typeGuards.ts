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

export type ErrorResponse = {
  error: string;
};
export const checkIsErrorResponse = (obj: any): obj is ErrorResponse => {
  return typeof obj.error === "string";
};
