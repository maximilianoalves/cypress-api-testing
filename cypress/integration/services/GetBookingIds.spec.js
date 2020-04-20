import bookingIdsSchema from '../../contracts/bookingIds.contract'

describe('Get Booking ids', () => {
    it('Garantir o contrato do retorno da lista de reservas - @contract',() => {
        cy.allBookings().should((response) => {
            return bookingIdsSchema.validateAsync(response.body)
        })
    })

    it('Listar IDs das reservas - @acceptance', () => {
        cy.allBookings().should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro firstname - @acceptance', () => {
        cy.allBookingWithQueryParams('firstname=Mary').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro lastname - @acceptance', () => {
        cy.allBookingWithQueryParams('firstname=Ericsson').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro checkin - @acceptance', () => {
        cy.allBookingWithQueryParams('checkin=2015-06-21').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro checkout - @acceptance', () => {
        cy.allBookingWithQueryParams('checkout=2016-12-10').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro checkout and checkout - @acceptance', () => {
        cy.allBookingWithQueryParams('checkin=2016-12-10&checkout=2019-09-10').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Listar IDs de reservas utilizando o filtro name, checkin and checkout date - @acceptance', () => {
        cy.allBookingWithQueryParams('checkout=2016-12-10&checkin=2015-06-21&name=Eric').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Visualizar erro de servidor 500 quando enviar filtro mal formatado - @e2e', () => {
        cy.allBookingWithQueryParams('checkout=12H^').should((response) => {
            expect(response.status).to.eq(500)
        })
    })
})