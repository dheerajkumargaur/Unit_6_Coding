import { ASC, DESC , GET_ALL } from "./ActionType";


export const getall = (paylaod) =>(
    {type:GET_ALL , paylaod}
)

export const asc = (paylaod) =>(
    {type:ASC , paylaod}
)

export const desc = (paylaod) =>(
    {type:DESC , paylaod}
)