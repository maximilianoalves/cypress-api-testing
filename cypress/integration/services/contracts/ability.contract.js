import Joi from '@hapi/joi';

const abilitySchema = Joi.object({
    count: Joi.number(),
    next: Joi.string(),
    previous: Joi.string().allow(null),
    results: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        url: Joi.string().required()
    }))
})

export default abilitySchema;