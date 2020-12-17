export type User = {
  token: string;
  username: string;
};

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: null | string;
};
