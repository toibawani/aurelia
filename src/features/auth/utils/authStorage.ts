import type {
  AureliaUser,
  SignupCredentials,
} from "../types/auth";

const USER_KEY = "aurelia.user";
const ACCOUNT_KEY = "aurelia.account";

interface StoredAccount {
  user: AureliaUser;
  password: string;
}

export function getCurrentUser(): AureliaUser | null {
  try {
    const stored = localStorage.getItem(USER_KEY);

    if (!stored) {
      return null;
    }

    return JSON.parse(stored) as AureliaUser;
  } catch {
    return null;
  }
}

export function createAccount(
  credentials: SignupCredentials,
): AureliaUser {
  const user: AureliaUser = {
    id: crypto.randomUUID(),
    name: credentials.name.trim(),
    email: credentials.email.trim().toLowerCase(),
    createdAt: new Date().toISOString(),
  };

  const account: StoredAccount = {
    user,
    password: credentials.password,
  };

  localStorage.setItem(
    ACCOUNT_KEY,
    JSON.stringify(account),
  );

  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user),
  );

  return user;
}

export function login(
  email: string,
  password: string,
): AureliaUser | null {
  try {
    const stored = localStorage.getItem(ACCOUNT_KEY);

    if (!stored) {
      return null;
    }

    const account = JSON.parse(
      stored,
    ) as StoredAccount;

    if (
      account.user.email !==
        email.trim().toLowerCase() ||
      account.password !== password
    ) {
      return null;
    }

    localStorage.setItem(
      USER_KEY,
      JSON.stringify(account.user),
    );

    return account.user;
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}