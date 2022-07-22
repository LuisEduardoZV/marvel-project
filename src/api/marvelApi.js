import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { createHash, PUBLIC_KEY } from '../keys';

export const marvelSearchApi = createApi({
    reducerPath: "marvelSearchApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://gateway.marvel.com/v1/public'}),
    endpoints: (builder) => ({
        fetchSearchByOption: builder.query({
            query: (search, ts, option) => ({
                url: `/characters?name=${search}&ts=10&apikey=ac0be0716180ed84e59259a00cc989e3&hash=1eb35eb53bb1a68d0a7caf0a4a565028`,
                method: 'GET',
                headers: {
                }
            })
        }),
    }),
});

//no se puede mandar a llamar una funcion en la url


const getUrl = (search, ts, option) => {
    const base_url = `/${option}`;
    const parameters = `$ts=${ts}&apikey=${PUBLIC_KEY}&hash=${createHash(ts)}`;
    if(option === "events" || option === "characters")
        return `${base_url}?name=${search}${parameters}`;
    else if(option === "comics")
        return `${base_url}?title=${search}${parameters}`;
}

export const {useFetchSearchByOptionQuery} = marvelSearchApi;