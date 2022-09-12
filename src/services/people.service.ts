import {QueryResult} from "pg";

import {pool} from "../database";
import {people} from "../interface";
import {toJSON} from "../utils";

export const getList = async (): Promise<any> => {
    const query: string = "SELECT avatar, name, position, city, company, created_date, id, is_contact AS isContact, is_favorite, social_networks from people";
    const response: QueryResult = await pool.query(query);

    return response.rows;
};

export const getOneById = async (id: number): Promise<any> => {
    const query: string = "SELECT avatar, name, position, city, company, created_date, id, is_contact, is_favorite, social_networks FROM people WHERE id = $1";
    const response: QueryResult = await pool.query(
        query,
        [id]
    );

    return toJSON(response.rows[0]);
};


export const create = async (data:people): Promise<any> => {
    const { avatar, name, position, city, company, createdDate, id, isContact, isFavorite, social_networks } = data;
    try {
        const query: string = "INSERT INTO people (avatar, name, position, city, company, created_date, id, is_contact, is_favorite, social_networks) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
        const response = await pool.query(
            query,
            [
                avatar,
                name,
                position,
                city,
                company,
                createdDate,
                Date.now(),
                isContact,
                isFavorite,
                social_networks
            ]
        );
    } catch (e) {
        console.log('catch:')
        console.log(e);
    }
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

export const update = async (data:people, id: number): Promise<QueryResult> => {
    const { avatar, name, position, city, company, createdDate, isContact, isFavorite, social_networks } = data;

    const response = await pool.query(
        "UPDATE people SET avatar = $1, name = $2, position = $3, city = $4, company = $5, created_date = $6, is_contact = $7, is_favorite = $8, social_networks = $9 WHERE id = $10",
        [avatar, name, position, city, company, createdDate, isContact, isFavorite, social_networks, id]
    );

    return response;
};

export const deleteOne = async (id: number): Promise<any> => {
    const response = await pool.query("DELETE FROM people where id = $1", [id]);

    return response.rowCount;
};
