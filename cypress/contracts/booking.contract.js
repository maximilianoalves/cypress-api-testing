import Joi from '@hapi/joi';

const bookingSchema = Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    totalprice: Joi.number(),
    depositpaid: Joi.boolean(),
    bookingdates: Joi.object({
        checkin: Joi.string(),
        checkout: Joi.string()
    }),
    additionalneeds: Joi.string()
})

export default bookingSchema;