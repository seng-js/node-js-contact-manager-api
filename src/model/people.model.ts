import {people} from "../interface";
import {createSchema, deleteOneSchema, getOneSchema, updateSchema} from "./people.schema";

const validator = (schema: any, payload:people):Array<string> => {
    const {error} = schema.validate(payload, {abortEarly: false});
    let messages:Array<string> = [];
    if (undefined !== error) {
        error.details.map((detail: any) => {
            messages.push(detail.message);
        });
    }

    return messages;
}

export const validateCreate = (payload: people):Array<string> => {
    return validator(createSchema(), payload);
}

export const validateUpdate = (payload: people):Array<string> => {
    return validator(updateSchema(), payload);
}

export const validateDeleteOne = (payload: any):Array<string> => {
    return validator(deleteOneSchema(), payload);
}

export const validateGetOne = (payload: any):Array<string> => {
    return validator(getOneSchema(), payload);
}

