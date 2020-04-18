import bookingSchema from '../../contracts/booking.contract'

describe('Testes para buscar uma reserva especifica', () => {
    beforeEach(() => {
        cy.request('GET','/booking/1').as('booking')
    });

    it('Health check de uma reserva espefico', () => {
        cy.get('@booking').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validar o contrato de uma reserva especifica @contract',() => {
        cy.get('@booking').should((response) => {
            console.log(response.body)
            return bookingSchema.validateAsync(response.body)
        })
    })
})