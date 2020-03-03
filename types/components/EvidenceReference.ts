import {URI} from "../aliases/URI";
import {Attribution} from "./Attribution";

/**
 * @$id "http://gedcomx.org/v1/EvidenceReference"
 */
export interface EvidenceReference {
    resource: URI
    attribution?: Attribution
}