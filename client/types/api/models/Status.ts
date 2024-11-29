/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Status = {
    /**
     * The unique identifier of the task.
     */
    task_id?: string;
    /**
     * The current status of the task.
     */
    status?: Status.status;
    /**
     * Additional details about the task status.
     */
    details?: string;
};
export namespace Status {
    /**
     * The current status of the task.
     */
    export enum status {
        PENDING = 'pending',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        FAILED = 'failed',
        CANCELLED = 'cancelled',
    }
}

