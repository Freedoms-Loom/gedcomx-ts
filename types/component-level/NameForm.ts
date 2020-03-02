import {NamePart} from "./NamePart";

/**
 * @$id "http://gedcomx.org/v1/NameForm"
 */
export interface NameForm {
    lang?: string
    fullText?: string
    parts?: Array<NamePart>
}