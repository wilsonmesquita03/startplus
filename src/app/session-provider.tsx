"use client"
import React, { createContext, useContext } from 'react';

type User = {
  username: string;
  displayName: string | null;
  email: string;
  roleId: number;
  permissions: string[];
};

type SessionContextType =
  | { status: 'loading' | 'unauthenticated'; user: null }
  | { status: 'authenticated'; user: User };

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};

export const SessionProvider: React.FC<{ children: React.ReactNode; session: SessionContextType }> = ({ children, session }) => {
  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
};
