import React, { createElement } from "react";
import { Redirect, Route, RouteProps, RouteComponentProps } from "react-router-dom";

import { useAuth } from "./useAuth";

export function PrivateRoute(props: RouteProps) {
    const { component, location, ...rest } = props;
    
    const auth = useAuth();

    const renderRoute = (p: RouteComponentProps) => {       
    
        console.log("auth private", auth);
        
        return (auth?.user) ?
            (component && createElement(component, p)) :
            (<Redirect to={{ pathname: "/", state: { from: location }}} />);
    };

    return (<Route { ...rest } render={renderRoute} />);
}