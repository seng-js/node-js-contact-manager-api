import {people} from "../interface";

export const toJSON = (data:people) => {
    const {facebook, instagram, twitter, youtube} = JSON.parse(data.social_networks.toString());

    return {
        avatar: data.avatar,
        city: data.city,
        company: data.company,
        createdDate: parseInt(data.created_date.toString()),
        id: parseInt(data.id.toString()),
        isContact: data.is_contact,
        isFavorite: data.is_favorite,
        name: data.name,
        position: data.position,
        social_networks: {
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            youtube: youtube
        }
    }
}
