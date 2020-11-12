import React from 'react'
import { useKeycloak } from '@react-keycloak/web';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Header from '../pages/Header';
import Home from '../pages/Home';

export const AppRouter = () => {

    const { initialized } = useKeycloak();

    if (!initialized) {
        return <Spinner color="secondary" />
    }

    return (
        <div>
            <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
        </div>
    )
}
