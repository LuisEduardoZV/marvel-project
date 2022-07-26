import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { PUBLIC_KEY } from '../keys';

export const marvelSearchApi = createApi({
    reducerPath: "marvelSearchApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://gateway.marvel.com/v1/public'}),
    endpoints: (builder) => ({
        fetchSearchByCharacter: builder.query({
            query: ({name, hash, ts}) => ({
                url: `/characters?name=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`,
                method: 'GET',
                headers: {
                }
            })
        }),
        fetchSearchByComic: builder.query({
            query: ({name, hash, ts}) => ({
                url: `/comics?title=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`,
                method: 'GET',
                headers: {
                }
            })
        }),
        fetchSearchByEvent: builder.query({
            query: ({name, hash, ts}) => ({
                url: `/events?name=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`,
                method: 'GET',
                headers: {
                }
            })
        }),
        fetchGetAllCharacters: builder.query({
            query: ({hash, ts, offset, limit}) => ({
                url: `/characters?orderBy=name&limit=${limit}&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}`,
                method: 'GET',
                headers: {
                }
            })
        }),
        fetchGetAllComics: builder.query({
            query: ({hash, ts, offset, limit}) => ({
                url: `/comics?orderBy=title&limit=${limit}&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}`,
                method: 'GET',
                headers: {
                }
            })
        }),
        fetchGetAllEvents: builder.query({
            query: ({hash, ts, offset, limit}) => ({
                url: `/events?orderBy=name&limit=${limit}&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}`,
                method: 'GET',
                headers: {
                }
            })
        }),
    }),
});


export const {useFetchSearchByCharacterQuery, 
            useFetchSearchByComicQuery, 
            useFetchSearchByEventQuery, 
            useFetchGetAllCharactersQuery,
            useFetchGetAllComicsQuery,
            useFetchGetAllEventsQuery} = marvelSearchApi;