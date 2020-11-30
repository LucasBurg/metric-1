import { useState, createContext, useContext } from "react";

const fakeAuth = {
    isAuth: false,
    signIn(cb: Function) {
        fakeAuth.isAuth = true;
        setTimeout(cb, 100);
    },
    signOut(cb: Function) {
        fakeAuth.isAuth = false;
        setTimeout(cb, 100);
    },
};

export interface ProviderAuthProps {
    signIn: (cb: Function) => void;
    signOut: (cb: Function) => void;
    user: string | null;
}

export const CtxAuth = createContext<ProviderAuthProps | null>(null);

export function useProviderAuth(): ProviderAuthProps {
    const [user, setUser] =  useState<string | null>(null);

    const signIn = (cb: Function) => {
        return fakeAuth.signIn(() => {
            setUser("user");
            cb();
        });
    };

    const signOut = (cb: Function) => {
        return fakeAuth.signOut(() => {
            setUser(null);
            cb();
        });
    };

    return { user, signIn, signOut };
};

export function useAuth() {
    return useContext(CtxAuth);
};