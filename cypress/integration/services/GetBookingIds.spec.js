import bookingIdsSchema from '../../contracts/bookingIds.contract'

describe('Garantir o contrato do retorno da lista de reservas - @contract', () => {
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: '/booking',
            failOnStatusCode: false
        }).as('allBookings')
    });

    it('Validar o contrato',() => {
        cy.get('@allBookings').should((response) => {
            return bookingIdsSchema.validateAsync(response.body)
        })
    })
})

describe('Listar IDs das reservas - @acceptance', () => {
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: '/booking',
            failOnStatusCode: false
        }).as('allBookings')
    });

    it('Health check de todas as reservas', () => {
        cy.get('@allBookings').should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validar o contrato da lista das reservas',() => {
        cy.get('@allBookings').should((response) => {
            return bookingIdsSchema.validateAsync(response.body)
        })
    })
})

describe('Listar IDs de reservas utilizando o filtro firstname - @acceptance', () => {
    beforeEach(() => {
        cy.request('GET','/booking?firstname=Mary').as('allBookingsByFirstname')
    });

    it('Validar status code - 200', () => {
        cy.get('@allBookingsByFirstname').should((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
        })
    })
});

describe('Listar IDs de reservas utilizando o filtro lastname - @acceptance', () => {
    beforeEach(() => {
        cy.request('GET','/booking?firstname=Ericsson').as('allBookingsByLastname')
    }); 

    it('Validar status code - 200', () => {
        cy.get('@allBookingsByLastname').should((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
        })
    })
});

describe('Listar IDs de reservas utilizando o filtro checkin - @acceptance', () => {
    beforeEach(() => {
        cy.request('GET','/booking?checkin=2015-06-21').as('allBookingsByCheckin')
    }); 

    it('Validar status code - 200', () => {
        cy.get('@allBookingsByCheckin').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
});

describe('Listar IDs de reservas utilizando o filtro checkout - @acceptance', () => {
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: '/booking?checkout=2016-12-10',
            failOnStatusCode: false
        }).as('allBookingsByCheckout')
    }); 

    it('Validar status code - 200', () => {
        cy.get('@allBookingsByCheckout').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
});

describe('Listar IDs de reservas utilizando o filtro checkout and checkout - @acceptance', () => {
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: '/booking?checkin=2016-12-10&checkout=2019-09-10',
            failOnStatusCode: false
        }).as('allBookingsByCheckoutAndCheckout')
    }); 

    it('Validar status code - 200', () => {
        cy.get('@allBookingsByCheckoutAndCheckout').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
});

describe('Listar IDs de reservas utilizando o filtro name, checkin and checkout date - @acceptance', () => {
    beforeEach(() => {
        cy.request('GET','/booking?heckout=2016-12-10&checkin=2015-06-21&name=Eric').as('allBookingsByCheckoutAndCheckinAndName')
    }); 

    it('Validar status code - 200', () => {
        cy.get('@allBookingsByCheckoutAndCheckinAndName').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
});

describe('Visualizar erro de servidor 500 quando enviar filtro mal formatado - @e2e', () => {
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: '/booking?checkout=12H^',
            failOnStatusCode: false
        }).as('allBookingWithInvalidFilter')
    }); 

    it('Validar status code - 500', () => {
        cy.get('@allBookingWithInvalidFilter').should((response) => {
            expect(response.status).to.eq(500)
        })
    })
});