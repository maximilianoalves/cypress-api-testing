import bookingSchema from '../contracts/booking.contract'

describe('Testes para buscar todas as reservas', () => {
    beforeEach(() => {
        cy.request('GET','/booking').as('allBookings')
    });

    it('Health check de todas as reservas', () => {
        cy.get('@allBookings').should((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Validar o contrato da lista das reservas',() => {
        cy.get('@allBookings').should((response) => {
            return bookingSchema.validateAsync(response.body)
        })
    })
})