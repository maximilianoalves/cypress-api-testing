describe('Put Booking', () => {

    it('Alterar uma reserva somente utilizando o token - @acceptance', () => {
        cy.token().then((resToken) => {
            cy.allBookings().then((resAllBooking) => {
                cy.updateBookingWithToken(resAllBooking.body[0].bookingid, resToken.body.token).then((response) => {
                    expect(response.status).to.eq(200)
                })
            })
        })
    })

    it('Alterar uma reserva somente utilizando Basic do Authorization - @acceptance', () => {
        cy.allBookings().then((resAllBooking) => {
            cy.updateBookingWithBasic(resAllBooking.body[0].bookingid).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    });

    it('Tentar alterar uma reserva quando o token não for enviado - @e2e', () => {
        cy.allBookings().then((resAllBooking) => {
            cy.updateBookingWithToken(resAllBooking.body[0].bookingid, "").then((response) => {
                expect(response.status).to.eq(403)
            })
        })
    })

    it('Tentar alterar uma reserva quando o token enviado for inválido - @e2e', () => {
        cy.allBookings().then((resAllBooking) => {
            cy.updateBookingWithToken(resAllBooking.body[0].bookingid, "bla bla bla").then((response) => {
                expect(response.status).to.eq(403)
            })
        })
    })

    it('Tentar alterar uma reserva que não existe - @e2e', () => {
        cy.token().then((resToken) => {
            cy.updateBookingWithToken(5000, resToken.body.token).then((response) => {
                expect(response.status).to.eq(405)
            })
        })
    })
});