import {people} from "../interface";
import {validator} from "./index";
import {createSchema, deleteOneSchema, getOneSchema, updateSchema} from "./people.schema";

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

