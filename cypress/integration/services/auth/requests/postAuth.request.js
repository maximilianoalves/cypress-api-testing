
function auth() {
    return cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: '/auth',
        headers: {
            accept: "application/json"
        },
        body: {
            "username" : "admin",
            "password" : "password123"
        }
    })
}

export { auth };

