const Joi = require('joi');

export const createSchema = () => {
    return Joi.object({
        avatar: Joi.string().min(2).max(50).required(),
        city: Joi.string().min(2).max(50).required(),
        company: Joi.string().min(2).max(50).required(),
        createdDate: Joi.number(),
        isContact: Joi.boolean().required(),
        isFavorite: Joi.boolean().required(),
        name: Joi.string().min(2).max(50).required(),
        position: Joi.string().min(2).max(50).required(),
        social_networks: Joi.object(),
    });
}

export const updateSchema = () => {
    return Joi.object({
        id: Joi.number().required(),
        avatar: Joi.string().min(2).max(50).required(),
        city: Joi.string().min(2).max(50).required(),
        company: Joi.string().min(2).max(50).required(),
        createdDate: Joi.number(),
        isContact: Joi.boolean().required(),
        isFavorite: Joi.boolean().required(),
        name: Joi.string().min(2).max(50).required(),
        position: Joi.string().required(),
        social_networks: Joi.object(),
    });
}

export const getOneSchema = () => {
    return Joi.object({
        id: Joi.number().required()
    });
}

export const deleteOneSchema = () => {
    return Joi.object({
        id: Joi.number().required()
    });
}
