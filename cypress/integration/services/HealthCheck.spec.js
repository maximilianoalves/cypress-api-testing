describe('Get Ping', () => {
    it('Verificar se API está online - @health_check', () => {
        cy.ping().should((response) => {
            expect(response.status).to.eq(201)
        })
    })
})