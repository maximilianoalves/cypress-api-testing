//Get
Cypress.Commands.add('allBookings', () => {
    cy.request({
        method: 'GET',
        url: '/booking',
        failOnStatusCode: false
    })
})

Cypress.Commands.add('allBookingWithQueryParams', (queryParams) => {
    cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: `/booking?${queryParams}`
    })
})

Cypress.Commands.add('booking', (id) => {
    cy.request('GET',`/booking/${id}`)
})

Cypress.Commands.add('ping', () => {
    cy.request('GET','/ping')
})

//Post
Cypress.Commands.add('createBooking', () => {
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
    })
})

Cypress.Commands.add('createBookingInvalidPayload', () => {
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
    })
})

Cypress.Commands.add('createBookingExtraFieldPayload', () => {
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
    })
})

Cypress.Commands.add('createBookingWithWrongHeader', () => {
    cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: '/booking/',
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
    })
})

Cypress.Commands.add("token", () => {
    cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: '/auth',
        headers: {
            accept: "application/json"
        },
        body: {
            "username" : "admin",
            "password" : "password123"
        }
    })
})

//Delete
Cypress.Commands.add('deleteBooking', (id, auth) => {
    cy.request({
        method: "DELETE",
        url: `/booking/${id}`,
        failOnStatusCode: false,
        headers: {
            accept: "application/json",
            Authorization: auth
        }
    })
})

//Put
Cypress.Commands.add('updateBookingWithToken', (id, token) => {
    cy.request({
        method: "PUT",
        failOnStatusCode: false,
        url: `/booking/${id}`,
        headers: {
            accept: "application/json",
            Cookie: `token=${token}`
        },
        body: {
            "firstname": "Ronaldo",
            "lastname": "fenomeno",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })
})

Cypress.Commands.add('updateBookingWithBasic', (id) => {
    cy.request({
        method: "PUT",
        failOnStatusCode: false,
        url: `/booking/${id}`,
        headers: {
            accept: "application/json",
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        body: {
            "firstname": "Ronaldo",
            "lastname": "fenomeno",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })
})