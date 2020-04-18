describe('Criar uma nova reserva', () => {
    beforeEach(() => {
        cy.request({
            method: "POST",
            url: `/booking/`,
            headers: {
                accept: "application/json"
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
        }).as('createBooking')
    });

    it('Validar se o livro foi criado', () => {
        cy.get('@createBooking').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.bookingid).to.be.not.null
        })
    })
});

describe('Validar retorno 500 quando o payload da reserva estiver inválido', () => {
    beforeEach(() => {
        cy.request({
            method: "POST",
            failOnStatusCode: false,
            url: `/booking/`,
            headers: {
                accept: "application/json"
            },
            body: {
                "firstname": 345,
                "lastname": "alves da cruz",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).as('createBookingInvalidPayload')
    });

    it('Validar status code - 500 ', () => {
        cy.get('@createBookingInvalidPayload').should((response) => {
            expect(response.status).to.eq(500)
        })
    })
});

describe('Validar a criacao de mais de um livro em sequencia', () => {
    beforeEach(() => {
        cy.request({
            method: "POST",
            failOnStatusCode: false,
            url: `/booking/`,
            headers: {
                accept: "application/json"
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
        }).as('createBookingOne')

        cy.request({
            method: "POST",
            failOnStatusCode: false,
            url: `/booking/`,
            headers: {
                accept: "application/json"
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
        }).as('createBookingTwo')
    });

    it('Validar se o primeiro livro foi criado', () => {
        cy.get('@createBookingOne').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.bookingid).to.be.not.null
        })
    })
    it('Validar se o segundo livro foi criado', () => {
        cy.get('@createBookingTwo').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.bookingid).to.be.not.null
        })
    })
});

describe('Criar uma reserva enviando mais parametros no payload da reserva', () => {
    beforeEach(() => {
        cy.request({
            method: "POST",
            url: `/booking/`,
            headers: {
                accept: "application/json"
            },
            body: {
                "firstname": "Maximiliano",
                "apelido": "Max",
                "lastname": "alves da cruz",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).as('createBookingMoreFieldsPayload')
    });

    it('Validar status code - 200', () => {
        cy.get('@createBookingMoreFieldsPayload').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
});

describe('Validar retorno 418 quando o header Accept for invalido', () => {
    beforeEach(() => {
        cy.request({
            method: "POST",
            failOnStatusCode: false,
            url: `/booking/`,
            headers: {
                accept: "application/jaoaquim"
            },
            body: {
                "firstname": "Maximiliano",
                "apelido": "Max",
                "lastname": "alves da cruz",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).as('createBookingMoreFieldsPayload')
    });

    it('Validar status code - 418', () => {
        cy.get('@createBookingMoreFieldsPayload').should((response) => {
            expect(response.status).to.eq(418)
        })
    })
});