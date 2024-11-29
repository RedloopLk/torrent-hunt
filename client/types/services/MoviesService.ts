/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Movie } from '../models/Movie';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MoviesService {
    /**
     * Get popular movies
     * Retrieve a list of popular movies from an external API.
     * @param limit The number of results to return (default is 10).
     * @param page The page number for pagination.
     * @returns any A list of popular movies.
     * @throws ApiError
     */
    public static getPopularMovies(
        limit: number = 10,
        page: number = 1,
    ): CancelablePromise<{
        movies?: Array<Movie>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movies',
            query: {
                'limit': limit,
                'page': page,
            },
            errors: {
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Search for movies
     * Search for movies by title or other keywords using an external API.
     * @param query The search query string.
     * @param limit The number of results to return (default is 10).
     * @param page The page number for pagination.
     * @returns any Successful movie search results.
     * @throws ApiError
     */
    public static searchMovies(
        query: string,
        limit: number = 10,
        page: number = 1,
    ): CancelablePromise<{
        movies?: Array<{
            id?: string;
            title?: string;
            description?: string;
            release_date?: string;
            rating?: number;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movies/search',
            query: {
                'query': query,
                'limit': limit,
                'page': page,
            },
            errors: {
                400: `Invalid request parameters.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Get movie details
     * Retrieve detailed information about a specific movie.
     * @param id The unique identifier of the movie.
     * @returns Movie Movie details.
     * @throws ApiError
     */
    public static getMovie(
        id: string,
    ): CancelablePromise<Movie> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movies/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Movie not found.`,
                500: `Internal server error.`,
            },
        });
    }
}
