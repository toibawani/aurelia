import { useState } from "react";

import type {
  AuthCredentials,
  AureliaUser,
  SignupCredentials,
} from "../types/auth";

import {
  createAccount,
  getCurrentUser,
  login,
  logout,
} from "../utils/authStorage";

export function useAuth() {
  const [user, setUser] =
    useState<AureliaUser | null>(
      getCurrentUser,
    );

  function signUp(
    credentials: SignupCredentials,
  ) {
    const createdUser =
      createAccount(credentials);

    setUser(createdUser);

    return createdUser;
  }

  function signIn(
    credentials: AuthCredentials,
  ) {
    const authenticatedUser = login(
      credentials.email,
      credentials.password,
    );

    if (!authenticatedUser) {
      return null;
    }

    setUser(authenticatedUser);

    return authenticatedUser;
  }

  function signOut() {
    logout();
    setUser(null);
  }

  return {
    user,
    isAuthenticated: Boolean(user),
    signUp,
    signIn,
    signOut,
  };
}