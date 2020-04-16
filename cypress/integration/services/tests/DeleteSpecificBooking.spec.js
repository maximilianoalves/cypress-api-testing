/// <reference types="cypress" />

describe('Testes para exclusão de reservas especificas', () => {
    beforeEach(() => {
        cy.getFistBookingId();
        
        /**
        cy.request('GET','/booking').then((response) => {
            cy.request({
                method: "DELETE",
                url: `/booking/${response.body[0].bookingid}`,
                headers: {
                    accept: "application/json",
                    Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
                }
            }).as('deleteSpecificBooking')
        })
       */

       cy.request({
            method: "DELETE",
            url: `/booking/${Cypress.env('firstBookingId')}`,
            headers: {
                accept: "application/json",
                Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
            }
        }).as('deleteSpecificBooking')

    });

    it('Validar se a reserva foi excluida', () => {
        cy.get('@deleteSpecificBooking').should((response) => {
            expect(response.status).to.eq(201)
        })
    })
})