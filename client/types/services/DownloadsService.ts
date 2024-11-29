/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Movie } from '../models/Movie';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DownloadsService {
    /**
     * Initiate a torrent download
     * Trigger the downloading of a movie using a torrent magnet link or uploaded `.torrent` file.
     * @param requestBody
     * @returns any Download task successfully queued.
     * @throws ApiError
     */
    public static downloadMovie(
        requestBody: {
            /**
             * The torrent magnet link.
             */
            magnet_link: string;
        },
    ): CancelablePromise<{
        /**
         * The ID of the queued task.
         */
        task_id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/movies/download',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Get downloaded movies
     * Retrieve a list of downloaded movies.
     * @param limit The number of results to return (default is 10).
     * @param page The page number for pagination.
     * @returns any A list of downloaded movies.
     * @throws ApiError
     */
    public static getDownloadedMovies(
        limit: number = 10,
        page: number = 1,
    ): CancelablePromise<{
        movies?: Array<Movie>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movies/downloads',
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
     * Delete downloaded movies
     * Delete downloaded movies from the server.
     * @returns void
     * @throws ApiError
     */
    public static deleteDownloadedMovies(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/movies/downloads',
            errors: {
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Get downloaded movie
     * Retrieve a specific downloaded movie.
     * @param id The unique identifier of the downloaded movie.
     * @returns Movie The downloaded movie.
     * @throws ApiError
     */
    public static getDownloadedMovie(
        id: string,
    ): CancelablePromise<Movie> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movies/downloads/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Movie not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Delete downloaded movie
     * Delete a specific downloaded movie from the server.
     * @param id The unique identifier of the downloaded movie.
     * @returns void
     * @throws ApiError
     */
    public static deleteDownloadedMovie(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/movies/downloads/{id}',
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
