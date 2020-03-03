import {NamePartType} from "../enums/NamePartType";
import {Qualifier} from "./Qualifier";

/**
 * @$id "http://gedcomx.org/v1/NamePart"
 */
export interface NamePart {
    type?: NamePartType
    value: string
    qualifier?: Qualifier
}