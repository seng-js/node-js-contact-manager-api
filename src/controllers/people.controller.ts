import { Request, Response } from "express";

import {create, deleteOne, getList, getOneById, update} from "../services/people.service";
import {validateCreate, validateDeleteOne, validateGetOne, validateUpdate} from "../model/people.model";
import {response400, response500} from "./index";

export const getPeople = async ( req: Request, res: Response ) => {
    try {
        const data = await getList();
        return res.status(200).json(data);
    } catch (err) {
        response500(err, res);
    }
};

export const getPeopleById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const responseValidate = validateGetOne(req.params);
    response400(responseValidate, res);

    try {
        const data = await getOneById(id);
        return res.status(200).json(data);
    } catch (err) {
        response500(err, res);
    }
};

export const createPeople = async (req: Request, res: Response) => {
    console.log(req.body);
    const responseValidate = validateCreate(req.body);
    response400(responseValidate, res);

    try {
        const response = await create(req.body);

        return res.status(201).json({
            message: response.message,
            body: response.body,
        });
    } catch (err) {
        response500(err, res);
    }
};

export const updatePeople = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const responseValidate = validateUpdate(req.body);
    response400(responseValidate, res);

    try {
        const response = await update(req.body, id);
        return res.status(200).json("People updated successfully");
    } catch (err) {
        response500(err, res);
    }
};

export const deletePeople = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const responseValidate = validateDeleteOne(req.params);
    response400(responseValidate, res);

    try {
        await deleteOne(id);

        return res.status(200).json(`People ${id} deleted successfully`);
    } catch (err) {
        response500(err, res);
    }
};
