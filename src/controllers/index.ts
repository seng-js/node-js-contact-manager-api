import {Response} from "express";

export const response400 = (message: Array<string>, res: Response) => {
    if (message.length > 0) {
        return res.status(400).json(message);
    }
}

export const response500 = (err:any, res: Response) => {
    console.log(err);
    return res.status(500).json("Internal server error");
}
