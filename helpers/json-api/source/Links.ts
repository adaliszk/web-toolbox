
export interface RelatedLink
{
    /**
     * URI-reference [RFC3986 Section 4.1] pointing to the link’s target
     */
    href: string

    /**
     * Link Relation type defined by [RFC8288 Section 2.1]
     */
    rel?: 'registered' | 'extension'

    /**
     * label for the destination of a link such that it can be used as a human-readable identifier
     */
    title?: string

    /**
     * Media type
     */
    type?: string

    /**
     * Indication of the language(s); it MUST be a valid language tag [RFC5646]
     */
    hreflang?: string | Array<string>

    /**
     * Non-standard meta-information
     */
    meta: {
        [key: string]: any
    }
}


export type Link = string | RelatedLink


export interface Links
{
    [key: string]: Link | RelatedLink
}