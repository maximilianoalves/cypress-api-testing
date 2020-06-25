function updateBookingWithToken(id, token) {
    return cy.request({
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
}

export {updateBookingWithToken, updateBookingWithBasic}