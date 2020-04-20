describe('Get Ping', () => {
    it('Verificar se API está online - @healthcheck', () => {
        cy.ping().should((response) => {
            expect(response.status).to.eq(201)
        })
    })
})