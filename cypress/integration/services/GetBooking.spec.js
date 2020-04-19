import bookingSchema from '../../contracts/booking.contract'

describe('Garantir o contrato do retorno de uma reserva específica - @contract', () => {
    let firstBookingId = null

    before(() => {
        cy.getFirstBookingId().then((res) => {
            firstBookingId = res.body[0].bookingid
        })
    });

    beforeEach(() => {
        cy.request('GET','/booking/'+firstBookingId).as('booking')
    });

    it('Validar o contrato',() => {
        cy.get('@booking').should((response) => {
            return bookingSchema.validateAsync(response.body)
        })
    })
})

describe('Listar uma reserva especifica - @acceptance', () => {
    let firstBookingId = null

    before(() => {
        cy.getFirstBookingId().then((res) => {
            firstBookingId = res.body[0].bookingid
        })
    });

    beforeEach(() => {
        cy.request('GET','/booking/'+firstBookingId).as('booking')
    });

    it('Health check de uma reserva espefico', () => {
        cy.get('@booking').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
})