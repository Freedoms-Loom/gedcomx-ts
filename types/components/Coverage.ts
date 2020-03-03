import {Date} from "./Date";
import {PlaceReference} from "./PlaceReference";

/**
 * @$id "http://gedcomx.org/v1/Coverage"
 */
export interface Coverage {
    spatial?: PlaceReference
    temporal?: Date
}