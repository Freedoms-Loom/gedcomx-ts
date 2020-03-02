import {NamePartType} from "../enums/NamePartType";
import {NamePartQualifier} from "./Qualifier";

/**
 * @$id "http://gedcomx.org/v1/NamePart"
 */
export interface NamePart {
    type?: NamePartType
    value: string
    qualifier?: NamePartQualifier
}