export interface User {
  email: string;
  password: string;
}

export interface AuthError {
  code: string;
  message: string;
}

export interface AuthSuccess {
  user: User;
}