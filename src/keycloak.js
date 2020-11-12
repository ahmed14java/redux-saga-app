import Keycloak from 'keycloak-js'

const keycloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'egaratk',
    clientId: 'egaratk'
}

const keycloak = new Keycloak(keycloakConfig);
export default keycloak;