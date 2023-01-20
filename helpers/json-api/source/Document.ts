import { IdentifiableResource, ResourceObject } from './Resource'
import { Error } from './Error'
import { Links } from './Links'

export interface ContainsMetadata
{
    /** @type {object} contains non-standard meta-information. */
    meta?: {
        [key: string]: any
    }
}

export interface JsonApi extends ContainsMetadata
{
    /** @type {string} indicator of the highest JSON:API version supported */
    version: string

    /** @type {string[]} array of URIs for all applied extensions */
    ext: string[]

    /** @type {string[]} array of URIs for all applied profiles */
    profile: string[]
}

/**
 * Shared properties that MAY be defined
 */
export interface DocumentStructure extends ContainsMetadata
{
    /** @type {object} describing the server’s implementation. */
    jsonapi?: string

    /** @type {object} contains non-standard meta-information. */
    links?: Links

    /** @type {object} contains non-standard meta-information. */
    included?: ResourceObject[]
}


export interface ResourceItem<Resource extends IdentifiableResource> extends DocumentStructure
{
    data: Resource
}


export interface NotFoundResourceItem extends DocumentStructure
{
    data: null
}


export interface ResourceList<Resource extends IdentifiableResource> extends DocumentStructure
{
    data: Resource[]
}


export interface NotFoundResourceList extends DocumentStructure
{
    data: never[]
}


export interface ResourceError extends DocumentStructure
{
    errors: Error[]
}


/**
 * Combine the various Top-Level document types
 */
export type Document<T extends IdentifiableResource> =
    ResourceItem<T>
    | NotFoundResourceItem
    | ResourceList<T>
    | NotFoundResourceList
    | ResourceError