/// <reference types="cypress" />
import * as DeleteBooking from '../requests/deleteBooking.request';
import * as PostBooking from '../requests/postBooking.request';

describe('Delete Booking', () => {
    it('Excluir um reserva com sucesso - @acceptance', () => {
        PostBooking.createBooking().then((resCreateBooking) => {
            DeleteBooking.deleteBooking(resCreateBooking.body.bookingid, 'Basic YWRtaW46cGFzc3dvcmQxMjM=').should((response) => {
                expect(response.status).to.eq(201)
            })
        })
    })

    it('Tentar excluir uma reserva que não existe - @e2e', () => {
        DeleteBooking.deleteBooking(999, 'Basic YWRtaW46cGFzc3dvcmQxMjM=').should((response) => {
            expect(response.status).to.eq(405)
        })
    })

    it('Tentar excluir uma reserva sem autorização - @e2e', () => {
        DeleteBooking.deleteBooking(999, 'Basic bla bla bla').should((response) => {
            expect(response.status).to.eq(403)
        })
    })
})