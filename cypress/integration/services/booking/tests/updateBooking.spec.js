import * as PostAuth from '../../auth/requests/postAuth.request'
import * as GetBooking from '../requests/getBooking.request'
import * as PutBooking from '../requests/putBooking.request'

describe('Put Booking', () => {

    it('Alterar uma reserva somente utilizando o token - @acceptance', () => {
        PostAuth.auth().then((resToken) => {
            GetBooking.allBookings().then((resAllBooking) => {
                PutBooking.updateBookingWithToken(resAllBooking.body[0].bookingid, resToken.body.token).then((response) => {
                    expect(response.status).to.eq(200)
                })
            })
        })
    })

    it('Alterar uma reserva somente utilizando Basic do Authorization - @acceptance', () => {
        GetBooking.allBookings().then((resAllBooking) => {
            PutBooking.updateBookingWithBasic(resAllBooking.body[0].bookingid).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    });

    it('Tentar alterar uma reserva quando o token não for enviado - @e2e', () => {
        GetBooking.allBookings().then((resAllBooking) => {
            PutBooking.updateBookingWithToken(resAllBooking.body[0].bookingid, "").then((response) => {
                expect(response.status).to.eq(403)
            })
        })
    })

    it('Tentar alterar uma reserva quando o token enviado for inválido - @e2e', () => {
        GetBooking.allBookings().then((resAllBooking) => {
            PutBooking.updateBookingWithToken(resAllBooking.body[0].bookingid, "bla bla bla").then((response) => {
                expect(response.status).to.eq(403)
            })
        })
    })

    it('Tentar alterar uma reserva que não existe - @e2e', () => {
        PostAuth.auth().then((resToken) => {
            PutBooking.updateBookingWithToken(5000, resToken.body.token).then((response) => {
                expect(response.status).to.eq(405)
            })
        })
    })
});