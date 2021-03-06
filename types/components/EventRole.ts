import {URI} from "../aliases/URI";
import {RoleType} from "../enums/RoleType";

/**
 * @$id "http://gedcomx.org/v1/EventRole"
 */
export interface EventRole {
    person: URI
    type?: RoleType
    details?: string
}