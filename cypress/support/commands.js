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
Cypress.Commands.add("getFistBookingId", () => {
    cy.request('GET','/booking').then((response) => {
        Cypress.env('firstBookingId', response.body[0].bookingid)
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
    }).then((response) => {
        Cypress.env('token', response.body.token)
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
    }).then((response) => {
        Cypress.env('bookingIdCreated', response.body.bookingid)
        console.log("commands", Cypress.env('bookingIdCreated'))
    }).as('max')
})