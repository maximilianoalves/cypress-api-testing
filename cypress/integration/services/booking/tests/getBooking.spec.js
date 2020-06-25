import bookingSchema from '../../../../contracts/booking.contract'
import * as GetBooking from '../requests/getBooking.request'

describe('Get Booking', () => {

    it('Garantir o contrato do retorno de uma reserva específica - @contract',() => {
        GetBooking.allBookings().then((resAllBookings) => {
            GetBooking.booking(resAllBookings.body[0].bookingid).should((response) => {
                return bookingSchema.validateAsync(response.body)
            })
        })
    })

    it('Listar uma reserva especifica - @acceptance',() => {
        GetBooking.allBookings().then((resAllBookings) => {
            GetBooking.booking(resAllBookings.body[0].bookingid).should((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
})