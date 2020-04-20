// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("getFirstBookingId", () => {
    cy.request({method: 'GET',
        url: '/booking',
        failOnStatusCode: false,
        headers: {
            accept: "application/json"
        }
    })
})

Cypress.Commands.add("getBookingIdCreated", () => {
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
    }).then((res) => {
        Cypress.env("bookingIdCreated", res.body.bookingid)
    })
})