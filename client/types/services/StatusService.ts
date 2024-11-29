/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatusService {
    /**
     * Check download status
     * Retrieve the current status of a download or task.
     * @param id The unique identifier of the download task.
     * @returns any The current status of the task.
     * @throws ApiError
     */
    public static checkStatus(
        id: string,
    ): CancelablePromise<{
        task_id?: string;
        status?: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled';
        details?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Task not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Cancel download task
     * Cancel a download task.
     * @param id The unique identifier of the download task.
     * @returns void
     * @throws ApiError
     */
    public static cancelTask(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/status/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Task not found.`,
                500: `Internal server error.`,
            },
        });
    }
}
