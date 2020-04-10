import abilitySchema from '../contracts/ability.contract'

describe('Ability Tests', () => {
    beforeEach(() => {
        cy.request('GET','/ability').as('ability')
    });

    it('Validate status code - 200', () => {
        cy.get('@ability').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validate ability contract',() => {
        cy.get('@ability').should((response) => {
            return abilitySchema.validateAsync(response.body)
        })
    })
})