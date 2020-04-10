describe('All Pokemon Tests', () => {
    beforeEach(() => {
        cy.request('GET','/pokemon').as('pokemon')
    });

    it('Validate status code - 200', () => {
        cy.get('@pokemon').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validate content-type', () => {
        cy.get('@pokemon').should((response) => {
            expect(response.headers["content-type"]).to.eq("application/json; charset=utf-8")
        })
    })

    it('Validate response time - 2000ms', () => {
        cy.get('@pokemon').should((response) => {
            expect(response.duration).to.lessThan(2000)
        })
    })

    it('Validate body results have content', () => {
        cy.get('@pokemon').should((response) => {
            expect(response.body.results.length).to.be.greaterThan(0)
        })
    })
})

describe('Pikachu Tests', () => {
    beforeEach(() => {
        cy.request('GET','/pokemon/pikachu').as('pikachu')
    });

    it('Validate status code - 200', () => {
        cy.get('@pikachu').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validate content-type', () => {
        cy.get('@pikachu').should((response) => {
            expect(response.headers["content-type"]).to.eq("application/json; charset=utf-8")
        })
    })

    it('Validate response time - 2000ms', () => {
        cy.get('@pikachu').should((response) => {
            expect(response.duration).to.lessThan(2000)
        })
    })
})