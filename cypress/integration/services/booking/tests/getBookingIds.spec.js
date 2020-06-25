import bookingIdsSchema from '../../../../contracts/bookingIds.contract'
import * as GetBooking from '../requests/getBooking.request'

describe('Get Booking ids', () => {
    it('Garantir o contrato do retorno da lista de reservas - @contract',() => {
        GetBooking.allBookings().should((response) => {
            return bookingIdsSchema.validateAsync(response.body)
        })
    })

    it('Listar IDs das reservas - @acceptance', () => {
        GetBooking.allBookings().should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro firstname - @acceptance', () => {
        GetBooking.allBookingWithQueryParams('firstname=Mary').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro lastname - @acceptance', () => {
        GetBooking.allBookingWithQueryParams('lastname=Ericsson').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro checkin - @acceptance', () => {
        GetBooking.allBookingWithQueryParams('checkin=2015-06-21').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro checkout - @acceptance', () => {
        GetBooking.allBookingWithQueryParams('checkout=2016-12-10').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro checkout and checkout - @acceptance', () => {
        GetBooking.allBookingWithQueryParams('checkin=2016-12-10&checkout=2019-09-10').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro name, checkin and checkout date - @acceptance', () => {
        GetBooking.allBookingWithQueryParams('checkout=2016-12-10&checkin=2015-06-21&name=Eric').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Visualizar erro de servidor 500 quando enviar filtro mal formatado - @e2e', () => {
        GetBooking.allBookingWithQueryParams('checkout=12H^').should((response) => {
            expect(response.status).to.eq(500)
        })
    })
})