import bookingSchema from '../../contracts/booking.contract'

describe('Get Booking', () => {

    it('Garantir o contrato do retorno de uma reserva específica - @contract',() => {
        cy.allBookings().then((resAllBookings) => {
            cy.booking(resAllBookings.body[0].bookingid).should((response) => {
                return bookingSchema.validateAsync(response.body)
            })
        })
    })

    it('Listar uma reserva especifica - @acceptance',() => {
        cy.allBookings().then((resAllBookings) => {
            cy.booking(resAllBookings.body[0].bookingid).should((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
})