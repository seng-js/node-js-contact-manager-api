import {QueryResult} from "pg";

import {pool} from "../database";
import {people} from "../interface";

export const getList = async (): Promise<any> => {
    try {
        const response: QueryResult = await pool.query("SELECT * from people");
        return response.rows;
    } catch (err) {
        console.log(err);
    }
};

export const getOneById = async (id: number): Promise<any> => {
    console.log(id);
    const response: QueryResult = await pool.query(
        "SELECT * FROM people WHERE id = $1",
        [id]
    );
    return response.rows;
};

export const create = async (data:people): Promise<any> => {
    const { avatar, name, position, city, company, createdDate, id, isContact, isFavorite, social_networks } = data;
    const response = await pool.query(
        "INSERT INTO users (avatar, name, position, city, company, createdDate, id, isContact, isFavorite, social_networks) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
        [avatar, name, position, city, company, createdDate, id, isContact, isFavorite, social_networks]
    );
    return {
        message: "People added successfully",
        data: {
            avatar,
            name,
            position,
            city,
            company,
            createdDate,
            id,
            isContact,
            isFavorite,
            social_networks
        },
    };
};

export const update = async (data:people, id: number): Promise<any> => {
    const { avatar, name, position, city, company, createdDate, isContact, isFavorite, social_networks } = data;

    const response = await pool.query(
        "UPDATE people SET avatar = $1, name = $2, position = $3, city = $4, company = $5, createdDate = $6, isContact = $7, isFavorite = $8, social_networks = $9 WHERE id = $10",
        [avatar, name, position, city, company, createdDate, isContact, isFavorite, social_networks, id]
    );

    return response.rowCount;
};

export const deleteOne = async (id: number): Promise<any> => {
    const response = await pool.query("DELETE FROM people where id = $1", [id]);

    return response.rowCount;
};
