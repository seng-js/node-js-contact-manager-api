import {people} from "../interface";

export class People {

    id: number;
    avatar: string;
    name: string;
    city: string;
    company: string;
    createdDate: number;
    isContact: boolean;
    isFavorite: boolean;
    position: string;
    social_networks: social_networks;

    constructor(
        id: number,
        avatar: string,
        name: string,
        city: string,
        company: string,
        position: string,
        createdDate: number,
        isContact: boolean,
        isFavorite: boolean,
        social_networks: social_networks
    ) {
        this.id = id;
        this.avatar = avatar;
        this.name = name;
        this.city = city;
        this.company = company;
        this.createdDate =  createdDate;
        this.isContact = isContact;
        this.isFavorite = isFavorite;
        this.position = position;
        this.social_networks = social_networks;
    }

    static toJSON = (data:people) => {
        return {
            avatar: data.avatar,
            city: data.city,
            company: data.company,
            createdDate: data.createdDate,
            id:  data.id,
            isContact: data.isContact,
            isFavorite: data.isFavorite,
            name:  data.name,
            position: data.position,
            social_networks: {
                facebook: data.social_networks.facebook,
                instagram: data.social_networks.instagram,
                twitter: data.social_networks.twitter,
                youtube: data.social_networks.youtube
            }
        }
    }
}

module.exports = People;

interface social_networks {
    facebook: string,
    instagram: string,
    twitter: string,
    youtube: string
}
