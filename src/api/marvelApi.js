import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { PUBLIC_KEY } from '../keys';

export const marvelSearchApi = createApi({
    reducerPath: "marvelSearchApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://gateway.marvel.com/v1/public'}),
    endpoints: (builder) => ({
        fetchSearchByCharacter: builder.query({
            query: (search) => ({
                url: `/characters?name=${search}&ts=10&apikey=${PUBLIC_KEY}&hash=1eb35eb53bb1a68d0a7caf0a4a565028`,
                method: 'GET',
                headers: {
                }
            })
        }),
        fetchSearchByComic: builder.query({
            query: (search) => ({
                url: `/comics?title=${search}&ts=10&apikey=${PUBLIC_KEY}&hash=1eb35eb53bb1a68d0a7caf0a4a565028`,
                method: 'GET',
                headers: {
                }
            })
        }),
        fetchSearchByEvent: builder.query({
            query: (search) => ({
                url: `/events?name=${search}&ts=10&apikey=${PUBLIC_KEY}&hash=1eb35eb53bb1a68d0a7caf0a4a565028`,
                method: 'GET',
                headers: {
                }
            })
        }),
    }),
});


export const {useFetchSearchByCharacterQuery, useFetchSearchByComicQuery, useFetchSearchByEventQuery} = marvelSearchApi;