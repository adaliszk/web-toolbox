import {IdentifiableResource} from './Resource'
import {Links} from './Links'


export interface Relationship
{
    links?: Links
    data?: null | [] | IdentifiableResource | IdentifiableResource[]
    meta?: {
        [key: string]: any
    }
}


export interface Relationships
{
    [key: string]: Relationship
}