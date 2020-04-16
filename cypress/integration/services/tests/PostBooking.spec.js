describe('Criar reservas', () => {
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
            console.log(response.body)
            expect(response.status).to.eq(200)
        })
    })
});