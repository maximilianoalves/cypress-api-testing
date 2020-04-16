import specificBookingSchema from '../contracts/specificBooking.contract'

describe('Testes para buscar uma reserva especifica', () => {
    beforeEach(() => {
        cy.request('GET','/booking/1').as('specificBooking')
    });

    it('Health check de uma reserva espefico', () => {
        cy.get('@specificBooking').should((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Validar o contrato de uma reserva especifica',() => {
        cy.get('@specificBooking').should((response) => {
            return specificBookingSchema.validateAsync(response.body)
        })
    })
})