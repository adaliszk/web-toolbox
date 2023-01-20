import {Link} from './Links'


export interface ErrorLinks
{
    /**
     * Further details about this particular occurrence of the problem.
     * SHOULD return a human-readable description of the error.
     */
    about?: Link

    /**
     * Identifies the type of error that this particular error is an instance of.
     * SHOULD return a human-readable explanation of the general error.
     */
    type?: Link
}


export interface ErrorSource
{
    /**
     * JSON Pointer [RFC6901] to the associated entity in the request document
     */
    pointer?: string

    /**
     * Indication of which URI query parameter caused the error
     */
    parameter?: string
}


/**
 * Error objects provide additional information about problems encountered while performing
 * an operation. Error objects MUST be returned as an array keyed by errors in the top level
 * of a JSON:API document.
 */
export interface Error
{
    /**
     * Unique identifier for this particular occurrence of the problem.
     */
    id?: string

    /**
     * Link that leads to further details about this particular occurrence of the problem
     */
    links?: ErrorLinks

    /**
     * HTTP status code applicable to this problem, expressed as a string value
     */
    status: number

    /**
     * Application-specific error code, expressed as a string value
     */
    code: string

    /**
     * Short, human-readable summary of the problem that SHOULD NOT change from occurrence
     * to occurrence of the problem, except for purposes of localization
     */
    title?: string

    /**
     * Human-readable explanation specific to this occurrence of the problem. Like title,
     * this field’s value can be localized.
     */
    detail?: string

    /**
     * containing references to the source of the error
     */
    source?: ErrorSource

    /**
     * Non-standard meta-information about the error
     */
    meta?: {
        [key: string]: any
    }
}