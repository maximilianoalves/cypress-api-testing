describe('Verificar se API está online - @health_check', () => {
    beforeEach(() => {
        cy.request('GET','/ping').as('healthcheck')
    });

    it('Health check de todas as reservas', () => {
        cy.get('@healthcheck').should((response) => {
            expect(response.status).to.eq(201)
        })
    })
})