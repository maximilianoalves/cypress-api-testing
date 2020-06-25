function createBooking() {
    return cy.request({
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
}

function createBookingInvalidPayload() {
    return cy.request({
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
}

function createBookingExtraFieldPayload() {
    return cy.request({
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
}

function createBookingWithWrongHeader() {
    return cy.request({
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
}

export {createBooking, createBookingInvalidPayload, createBookingExtraFieldPayload, createBookingWithWrongHeader }