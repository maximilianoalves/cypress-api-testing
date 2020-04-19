describe('Alterar uma reserva somente utilizando o token - @acceptance', () => {
    let token = null
    let firstBookingId = null

    before(() => {
        cy.token().then((res) => {
            token = res.body.token
        })
        cy.getFirstBookingId().then((res) => {
            firstBookingId = res.body[0].bookingid
        })
    });

    beforeEach(() => {
        cy.request({
            method: "PUT",
            failOnStatusCode: false,
            url: '/booking/'+firstBookingId,
            headers: {
                accept: "application/json",
                Cookie: "token="+token
            },
            body: {
                "firstname": "Maximiliano",
                "lastname": "alves da cruz",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).as('updateBooking')
    });

    it('Validar status code - 200', () => {
        cy.get('@updateBooking').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
});

describe('Alterar uma reserva somente utilizando Basic do Authorization - @acceptance', () => {
    let firstBookingId = null

    before(() => {
        cy.getFirstBookingId().then((res) => {
            firstBookingId = res.body[0].bookingid
        })
    });

    beforeEach(() => {
        cy.request({
            method: "PUT",
            url: '/booking/'+firstBookingId,
            headers: {
                accept: "application/json",
                Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            body: {
                "firstname": "Maximiliano",
                "lastname": "alves da cruz",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).as('updateBooking')
    });

    it('Validar status code - 200', () => {
        cy.get('@updateBooking').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
});

describe('Tentar alterar uma reserva quando o token não for enviado - @e2e', () => {
    let firstBookingId = null

    before(() => {
        cy.getFirstBookingId().then((res) => {
            firstBookingId = res.body[0].bookingid
        })
    })

    beforeEach(() => {
        cy.request({
            method: "PUT",
            failOnStatusCode: false,
            url: '/booking/'+firstBookingId,
            headers: {
                accept: "application/json",
            },
            body: {
                "firstname": "Maximiliano",
                "lastname": "alves da cruz",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).as('updateBooking')
    });

    it('Validar status code - 403', () => {
        cy.get('@updateBooking').should((response) => {
            expect(response.status).to.eq(403)
        })
    })
});

describe('Tentar alterar uma reserva quando o token enviado for inválido - @e2e', () => {
    let firstBookingId = null

    before(() => {
        cy.getFirstBookingId().then((res) => {
            firstBookingId = res.body[0].bookingid
        })
    })

    beforeEach(() => {
        cy.request({
            method: "PUT",
            failOnStatusCode: false,
            url: '/booking/'+firstBookingId,
            headers: {
                accept: "application/json",
                Authorization: "Basic blablablablabla="
            },
            body: {
                "firstname": "Maximiliano",
                "lastname": "alves da cruz",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).as('updateBooking')
    });

    it('Validar status code - 403', () => {
        cy.get('@updateBooking').should((response) => {
            expect(response.status).to.eq(403)
        })
    })
});

describe('Tentar alterar uma reserva que não existe - @e2e', () => {
    let token = null

    before(() => {
        cy.token().then((res) => {
            token = res.body.token
        })
    });

    beforeEach(() => {
        cy.request({
            method: "PUT",
            failOnStatusCode: false,
            url: '/booking/999',
            headers: {
                accept: "application/json",
                Cookie: "token="+token
            },
            body: {
                "firstname": "Maximiliano",
                "lastname": "alves da cruz",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).as('updateBooking')
    });

    it('Validar status code - 405', () => {
        cy.get('@updateBooking').should((response) => {
            expect(response.status).to.eq(405)
        })
    })
});
