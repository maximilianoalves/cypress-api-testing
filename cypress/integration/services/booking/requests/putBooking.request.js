/// <reference types="cypress" />

const payload = require('../payloads/create-booking.json');

function updateBookingWithToken(id, token) {
    return cy.request({
        method: "PUT",
        failOnStatusCode: false,
        url: `/booking/${id}`,
        headers: {
            accept: "application/json",
            Cookie: `token=${token}`
        },
        body: payload
    })
}

function updateBookingWithBasic(id) {
    return cy.request({
        method: "PUT",
        failOnStatusCode: false,
        url: `/booking/${id}`,
        headers: {
            accept: "application/json",
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        body: payload
    })
}

export {updateBookingWithToken, updateBookingWithBasic}