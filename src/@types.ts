export type RootStackParamList = {
  splash: undefined;
  auth: undefined;
  tabMenu: undefined;
};

export type AuthContextType = {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: (email: string, password: string) => void;
};
