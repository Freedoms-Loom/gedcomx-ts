import {FactQualifier} from "../enums/FactQualifier";
import {FactType} from "../enums/FactType";
import {Date} from "./Date";
import {PlaceReference} from "./PlaceReference";

/**
 * @$id "http://gedcomx.org/v1/Fact"
 */
export interface Fact {
    type: FactType
    date?: Date
    place?: PlaceReference
    value?: string
    qualifiers?: Array<FactQualifier>
}