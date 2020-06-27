let payload = require('../payloads/create-booking.json');

function createBooking() {
    payload.firstname = "Ronaldo"

    return cy.request({
        method: "POST",
        url: `/booking/`,
        headers: {
            accept: "application/json"
        },
        body: payload
    })
}

function createBookingInvalidPayload() {
    payload.firstname = 345

    return cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: `/booking/`,
        headers: {
            accept: "application/json"
        },
        body: payload
    })
}

function createBookingExtraFieldPayload() {

    return cy.request({
        method: "POST",
        url: `/booking/`,
        headers: {
            accept: "application/json"
        },
        body: payload
    })
}

function createBookingWithWrongHeader() {
    let payload = require('../payloads/create-booking.json');
    console.log(payload)

    return cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: '/booking/',
        headers: {
            accept: "application/jaoaquim"
        },
        body: payload
    })
}

export {createBooking, createBookingInvalidPayload, createBookingExtraFieldPayload, createBookingWithWrongHeader }