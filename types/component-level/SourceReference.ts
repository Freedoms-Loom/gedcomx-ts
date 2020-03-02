/**
 * @$id "http://gedcomx.org/v1/SourceReference"
 */
import {URI} from "../helpers/URI";
import {Attribution} from "./Attribution";
import {SourceReferenceQualifier} from "./Qualifier";

export interface SourceReference {
    description: URI
    descriptionId?: string
    attribution?: Attribution
    qualifiers?: Array<SourceReferenceQualifier>
}