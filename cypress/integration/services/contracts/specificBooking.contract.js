import Joi from '@hapi/joi';

const specificBookingSchema = Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    totalprice: Joi.number(),
    depositpaid: Joi.boolean(),
    bookingdates: Joi.object({
        checkin: Joi.string(),
        checkout: Joi.string()
    })
})

export default specificBookingSchema;