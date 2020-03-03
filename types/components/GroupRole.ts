import {URI} from "../aliases/URI";
import {RoleType} from "../enums/RoleType";
import {Conclusion} from "./Conclusion";
import {Date} from "./Date";

/**
 * @$id "http://gedcomx.org/v1/GroupRole"
 */
export interface GroupRole extends Conclusion {
    person: URI
    type?: RoleType
    date?: Date
    details?: string
}