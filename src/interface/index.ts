export interface people {
    avatar: string,
    name: string,
    position: string,
    city: string,
    company: string,
    createdDate: number,
    created_date: number
    id: bigint,
    is_contact: boolean,
    is_favorite: boolean,
    isContact: boolean,
    isFavorite: boolean,
    social_networks: social_networks
}

export interface social_networks {
    facebook: string,
    instagram: string,
    twitter: string,
    youtube: string
}
