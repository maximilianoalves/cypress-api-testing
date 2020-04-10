import Joi from 'joi';
import joiAssert from 'joi-assert';

describe('Ability Tests', () => {
    beforeEach(() => {
        cy.request('GET','/ability').as('ability')
    });

    it('Validate status code - 200', () => {
        cy.get('@ability').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validate ability contract', () => {
        const abilitySchema = Joi.object().keys({
            count: Joi.number(),
            next: Joi.string(),
            previous: Joi.string().allow(null),
            results: Joi.array().items(Joi.object().keys({
                name: Joi.string().required(),
                url: Joi.string().required()
            }))

        })
        
        cy.get('@ability').should((response) => {
            joiAssert(response.body, abilitySchema)
        })
    })
})