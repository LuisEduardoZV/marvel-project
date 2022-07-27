import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { PUBLIC_KEY } from '../keys';

export const marvelSearchApi = createApi({
    reducerPath: "marvelSearchApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://gateway.marvel.com/v1/public'}),
    endpoints: (builder) => ({
        fetchSearchByOption: builder.query({
            query: ({name, hash, ts, option, searchType}) => ({
                url: `/${option}?${searchType}=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`,
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
        fetchGetDataWithOptionById: builder.query({
            query: ({id, hash, ts, option}) => ({
                url: `/${option}/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`,
                method: 'GET',
                headers: {
                }
            })
        }),
        fetchGetDetailByCategoryOptionAndId: builder.query({
            query: ({hash, ts, offset, limit, option, id, category}) => ({
                url: `/${category}/${id}/${option}?limit=${limit}&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}`,
                method: 'GET',
                headers: {
                }
            })
        }),
    }),
});


export const {useFetchSearchByOptionQuery, 
            useFetchGetAllCharactersQuery,
            useFetchGetAllComicsQuery,
            useFetchGetAllEventsQuery,
            useFetchGetDetailByCategoryOptionAndIdQuery,
            useFetchGetDataWithOptionByIdQuery} = marvelSearchApi;