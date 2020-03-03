import {URI} from "../aliases/URI";
import {Attribution} from "./Attribution";
import {Qualifier} from "./Qualifier";

/**
 * @$id "http://gedcomx.org/v1/SourceReference"
 */
export interface SourceReference {
    description: URI
    descriptionId?: string
    attribution?: Attribution
    qualifiers?: Array<Qualifier>
}