import {URI} from "./aliases/URI";
import {Attribution} from "./components/Attribution";
import {Coverage} from "./components/Coverage";
import {Identifier} from "./components/Identifier";
import {Note} from "./components/Note";
import {SourceCitation} from "./components/SourceCitation";
import {SourceReference} from "./components/SourceReference";
import {TextValue} from "./components/TextValue";
import {ResourceType} from "./enums/ResourceType";

/**
 * @$id "http://gedcomx.org/v1/SourceDescription"
 */
export interface SourceDescription {
    id?: string
    type?: ResourceType
    citations: Array<SourceCitation>
    mediaType?: string
    about?: URI
    mediator?: URI
    publisher?: URI
    sources?: Array<SourceReference>
    analysis?: URI
    componentOf?: SourceReference
    titles?: Array<TextValue>
    notes?: Array<Note>
    attribution?: Attribution
    rights?: Array<URI>
    coverage?: Array<Coverage>
    descriptions?: Array<TextValue>
    identifiers?: Array<Identifier>
    created?: Date
    modified?: Date
    repository?: URI
}