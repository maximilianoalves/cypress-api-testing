function ping() {
    return cy.request('GET','/ping')
}

export { ping };