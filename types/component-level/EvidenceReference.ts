/**
 * @$id "http://gedcomx.org/v1/EvidenceReference"
 */
import {URI} from "../helpers/URI";
import {Attribution} from "./Attribution";

export interface EvidenceReference {
    resource: URI
    attribution?: Attribution
}