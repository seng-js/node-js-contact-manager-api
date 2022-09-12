import {people} from "../interface";

export const validator = (schema: any, payload:people):Array<string> => {
    const {error} = schema.validate(payload, {abortEarly: false});
    let messages:Array<string> = [];
    if (undefined !== error) {
        error.details.map((detail: any) => {
            messages.push(detail.message);
        });
    }

    return messages;
}
