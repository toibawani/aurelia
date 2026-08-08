export interface AureliaUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials
  extends AuthCredentials {
  name: string;
}