function allBookings() {
    return cy.request({
        method: 'GET',
        url: '/booking',
        failOnStatusCode: false
    })
}

function allBookingWithQueryParams(queryParams) {
    return cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: `/booking?${queryParams}`
    })
}

function booking(id) {
    return cy.request('GET',`/booking/${id}`)
}

export {allBookings, allBookingWithQueryParams, booking};