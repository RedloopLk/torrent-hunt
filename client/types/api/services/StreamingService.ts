/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StreamingService {
    /**
     * Stream a movie
     * Stream a movie directly from the server or from Google Drive.
     * @param id The unique identifier of the movie to stream.
     * @returns binary The movie stream.
     * @throws ApiError
     */
    public static streamMovie(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movies/stream/{id}',
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
