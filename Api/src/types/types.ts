/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/movies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get popular movies
         * @description Retrieve a list of popular movies from an external API.
         */
        get: operations["getPopularMovies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/movies/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search for movies
         * @description Search for movies by title or other keywords using an external API.
         */
        get: operations["searchMovies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/movies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get movie details
         * @description Retrieve detailed information about a specific movie.
         */
        get: operations["getMovie"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/movies/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Initiate a torrent download
         * @description Trigger the downloading of a movie using a torrent magnet link or uploaded `.torrent` file.
         */
        post: operations["downloadMovie"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/movies/downloads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get downloaded movies
         * @description Retrieve a list of downloaded movies.
         */
        get: operations["getDownloadedMovies"];
        put?: never;
        post?: never;
        /**
         * Delete downloaded movies
         * @description Delete downloaded movies from the server.
         */
        delete: operations["deleteDownloadedMovies"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/movies/downloads/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get downloaded movie
         * @description Retrieve a specific downloaded movie.
         */
        get: operations["getDownloadedMovie"];
        put?: never;
        post?: never;
        /**
         * Delete downloaded movie
         * @description Delete a specific downloaded movie from the server.
         */
        delete: operations["deleteDownloadedMovie"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/movies/stream/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Stream a movie
         * @description Stream a movie directly from the server or from Google Drive.
         */
        get: operations["streamMovie"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/status/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check download status
         * @description Retrieve the current status of a download or task.
         */
        get: operations["checkStatus"];
        put?: never;
        /**
         * Cancel download task
         * @description Cancel a download task.
         */
        post: operations["cancelTask"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Movie: {
            /** @description The unique identifier of the movie. */
            id?: string;
            /** @description The URL of the movie's thumbnail image. */
            thumbnail?: string;
            /** @description The title of the movie. */
            title?: string;
            /** @description A brief description of the movie. */
            description?: string;
            /**
             * Format: date
             * @description The release date of the movie.
             */
            release_date?: string;
            /**
             * Format: float
             * @description The rating of the movie.
             */
            rating?: number;
            /** @description The genre of the movie. */
            genre?: string;
            /** @description The director of the movie. */
            director?: string;
            /** @description The list of cast members. */
            cast?: string[];
            /** @description The duration of the movie. */
            duration?: string;
            /** @description The language of the movie. */
            language?: string;
        };
        Status: {
            /** @description The unique identifier of the task. */
            task_id?: string;
            /**
             * @description The current status of the task.
             * @enum {string}
             */
            status?: "pending" | "in_progress" | "completed" | "failed" | "cancelled";
            /** @description Additional details about the task status. */
            details?: string;
        };
        Error: {
            /** Format: int32 */
            code?: number;
            message?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getPopularMovies: {
        parameters: {
            query?: {
                /** @description The number of results to return (default is 10). */
                limit?: number;
                /** @description The page number for pagination. */
                page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of popular movies. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        movies?: components["schemas"]["Movie"][];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    searchMovies: {
        parameters: {
            query: {
                /** @description The search query string. */
                query: string;
                /** @description The number of results to return (default is 10). */
                limit?: number;
                /** @description The page number for pagination. */
                page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful movie search results. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        movies?: {
                            id?: string;
                            title?: string;
                            description?: string;
                            release_date?: string;
                            rating?: number;
                        }[];
                    };
                };
            };
            /** @description Invalid request parameters. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getMovie: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the movie. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Movie details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Movie"];
                };
            };
            /** @description Movie not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    downloadMovie: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "magnet_link": "magnet:?xt=urn:btih:<hash>"
                 *     } */
                "application/json": {
                    /** @description The torrent magnet link. */
                    magnet_link: string;
                };
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description Upload a `.torrent` file.
                     */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description Download task successfully queued. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The ID of the queued task. */
                        task_id?: string;
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getDownloadedMovies: {
        parameters: {
            query?: {
                /** @description The number of results to return (default is 10). */
                limit?: number;
                /** @description The page number for pagination. */
                page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of downloaded movies. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        movies?: components["schemas"]["Movie"][];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteDownloadedMovies: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Movies deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getDownloadedMovie: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the downloaded movie. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The downloaded movie. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Movie"];
                };
            };
            /** @description Movie not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteDownloadedMovie: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the downloaded movie. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Movie deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Movie not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    streamMovie: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the movie to stream. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The movie stream. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            /** @description Movie not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    checkStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the download task. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The current status of the task. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        task_id?: string;
                        /** @enum {string} */
                        status?: "pending" | "in_progress" | "completed" | "failed" | "cancelled";
                        details?: string;
                    };
                };
            };
            /** @description Task not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    cancelTask: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the download task. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Task cancelled successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Task not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}