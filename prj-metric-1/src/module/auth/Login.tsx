import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useAuth } from "./useAuth";

interface Params {
    from: { pathname: string };
}

export function Login() {
    const history = useHistory();
    const location = useLocation<Params>();
    const auth = useAuth();

    const { from } = location.state || { from: { pathname: "/main" } };

    const login = () => {
        auth?.signIn(() => {
            history.replace(from);
        });
    };

    return (
        <>
            <h1>Login</h1>
            <p>page: { from.pathname } </p>
            <button onClick={login}>Log in</button>
        </>
    );
}