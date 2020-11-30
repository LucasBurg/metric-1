import React, { ReactNode } from "react";

import { useProviderAuth, CtxAuth } from "./useAuth";

interface Props {
    children: ReactNode;
}

export function ProvideAuth(props: Props) {
    const { children } = props;
    const auth = useProviderAuth();

    return (
        <CtxAuth.Provider value={auth}>
            { children }
        </CtxAuth.Provider>
    );
}