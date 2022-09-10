import { Request, Response } from "express";

import {create, deleteOne, getList, getOneById, update,} from "../services/people.service";

export const getPeople = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const data = await getList();
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Internal server error");
  }
};

export const getPeopleById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.params.id);
  const id = parseInt(req.params.id);
  const data = await getOneById(id);
  return res.json(data);
};

export const createPeople = async (req: Request, res: Response) => {
    const response = await create(req.body);
    res.json({
        message: response.message,
        body: response.body,
    });
};

export const updatePeople = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await update(req.body, id);
  res.json("People updated Successfully");
};

export const deletePeople = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await deleteOne(id);
  res.json(`People ${id} deleted Successfully`);
};
