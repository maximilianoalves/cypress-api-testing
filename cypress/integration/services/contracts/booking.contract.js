import Joi from '@hapi/joi';

const bookingSchema = Joi.array().items(
    Joi.object({
        bookingid: Joi.number()
    })
)

export default bookingSchema;