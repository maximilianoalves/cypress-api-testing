function deleteBooking(id, auth) {
    return cy.request({
        method: "DELETE",
        url: `/booking/${id}`,
        failOnStatusCode: false,
        headers: {
            accept: "application/json",
            Authorization: auth
        }
    })
}

export { deleteBooking }