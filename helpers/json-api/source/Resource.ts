import {Relationships} from './Relationships'
import {Links} from './Links'


export interface IdentifiableResource
{
    /**
     * Unique Identifier of the resource
     * not required when the resource object originates at the client and represents
     * a new resource to be created on the server.
     */
    id: string | null

    /**
     * Namespaced type name to help identifier a resource across multiple sources.
     * In some cases, MAY contain a version code.
     */
    type: string
}


export type ResourceAttributes<T extends IdentifiableResource> = Omit<T, 'id' | 'type' | '_relationships' | '_links'>


/**
 * “Resource objects” appear in a JSON:API document to represent resources.
 */
export interface ResourceObject extends IdentifiableResource
{
    /**
     * Members of the attributes object (“attributes”) represent information about
     * the resource object in which its defines. Any related data that would fit
     * into relationships or links SHOULD NOT be supplied.
     *
     * An attribute MUST NOT use relationships or links property, as those members
     * are reserved by JSON:API specification for future use.
     */
    attributes: ResourceAttributes<IdentifiableResource>

    /**
     * Describes relationships between the resource and other JSON:API resources
     */
    relationships?: Relationships

    /**
     * Link for related resources
     */
    links?: Links
}