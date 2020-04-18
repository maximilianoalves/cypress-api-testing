describe('Testes para validar que a api está online', () => {
    beforeEach(() => {
        cy.request('GET','/ping').as('healthcheck')
    });

    it('Health check de todas as reservas', () => {
        cy.get('@healthcheck').should((response) => {
            expect(response.status).to.eq(201)
        })
    })
})