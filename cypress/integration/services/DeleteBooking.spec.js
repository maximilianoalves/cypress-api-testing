/// <reference types="cypress" />

describe('Validar se a reserva foi excluida', () => {
    beforeEach(() => {
        cy.getBookingIdCreated()
        console.log("spec", Cypress.env('bookingIdCreated'))

        cy.request({
            method: "DELETE",
            url: "/booking/"+Cypress.env('bookingIdCreated'),
            failOnStatusCode: false,
            headers: {
                accept: "application/json",
                Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
            }
        }).as('deleteBooking')

    });

    it('Validar status code - 201', () => {
        cy.get('@deleteBooking').should((response) => {
            expect(response.status).to.eq(201)
        })
    })
})

describe('Tentar excluir uma reserva que não existe', () => {
    beforeEach(() => {
        cy.request({
            method: "DELETE",
            failOnStatusCode: false,
            url: "/booking/999",
            headers: {
                accept: "application/json",
                Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
            }
        }).as('deleteBookingNotExists')
    });

    it('Validar status code - 405', () => {
        cy.get('@deleteBookingNotExists').should((response) => {
            expect(response.status).to.eq(405)
        })
    });
});