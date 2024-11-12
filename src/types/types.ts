export type User = {
  id: number;
  userId: string;
  name: string;
  session: number;
};

// authentication
export type Account = {
  id: number;
  userId: string;
  name: string;
  token: string;
};
