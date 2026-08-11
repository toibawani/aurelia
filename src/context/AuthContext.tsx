import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signup: (
    name: string,
    email: string,
    password: string,
  ) => Promise<void>;
  login: (
    email: string,
    password: string,
    remember: boolean,
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<
  AuthContextValue | undefined
>(undefined);

const USER_KEY = "aurelia_user";
const ACCOUNT_KEY = "aurelia_account";
const SESSION_KEY = "aurelia_session";

interface StoredAccount {
  id: string;
  name: string;
  email: string;
  password: string;
}

function readJSON<T>(
  storage: Storage,
  key: string,
): T | null {
  try {
    const value = storage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function writeJSON(
  storage: Storage,
  key: string,
  value: unknown,
) {
  try {
    storage.setItem(
      key,
      JSON.stringify(value),
    );
  } catch {
    // Storage may be unavailable.
  }
}

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<AuthUser | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    const sessionUser =
      readJSON<AuthUser>(
        localStorage,
        SESSION_KEY,
      );

    const rememberedUser =
      readJSON<AuthUser>(
        localStorage,
        USER_KEY,
      );

    setUser(
      sessionUser ?? rememberedUser,
    );

    setIsLoading(false);
  }, []);

  async function signup(
    name: string,
    email: string,
    password: string,
  ) {
    const normalizedEmail =
      email.trim().toLowerCase();

    const account: StoredAccount = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      password,
    };

    writeJSON(
      localStorage,
      ACCOUNT_KEY,
      account,
    );

    const authUser: AuthUser = {
      id: account.id,
      name: account.name,
      email: account.email,
    };

    writeJSON(
      localStorage,
      SESSION_KEY,
      authUser,
    );

    setUser(authUser);
  }

  async function login(
    email: string,
    password: string,
    remember: boolean,
  ) {
    const account =
      readJSON<StoredAccount>(
        localStorage,
        ACCOUNT_KEY,
      );

    if (!account) {
      throw new Error(
        "No Aurelia account exists yet. Please create an account first.",
      );
    }

    if (
      account.email !==
        email.trim().toLowerCase() ||
      account.password !== password
    ) {
      throw new Error(
        "The email or password is incorrect.",
      );
    }

    const authUser: AuthUser = {
      id: account.id,
      name: account.name,
      email: account.email,
    };

    writeJSON(
      localStorage,
      SESSION_KEY,
      authUser,
    );

    if (remember) {
      writeJSON(
        localStorage,
        USER_KEY,
        authUser,
      );
    }

    setUser(authUser);
  }

  function logout() {
    try {
      localStorage.removeItem(
        SESSION_KEY,
      );
      localStorage.removeItem(
        USER_KEY,
      );
    } catch {
      // Storage may be unavailable.
    }

    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated: Boolean(user),
      signup,
      login,
      logout,
    }),
    [user, isLoading],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider",
    );
  }

  return context;
}
