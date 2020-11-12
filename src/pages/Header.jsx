import React from 'react';
import { withKeycloak } from '@react-keycloak/web';


const Header = ({ keycloak, keycloakInitialized }) => {
    return (
        <ul>
            <li><a href="/">Home Page </a></li>

            {keycloak && !keycloak.authenticated &&
                <li><a className="btn-link" onClick={() => keycloak.login()}>Login</a></li>
            }

            {keycloak && keycloak.authenticated &&
                <li>
                    <a className="btn-link" onClick={() => keycloak.logout()}>Logout ({
                        keycloak.tokenParsed.preferred_username
                    })</a>
                </li>
            }

        </ul>

    )
}

export default withKeycloak(Header)
