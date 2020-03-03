import {Attribution} from "./components/Attribution";
import {Conclusion} from "./components/Conclusion";
import {DocumentType} from "./enums/DocumentType";

/**
 * @$id "http://gedcomx.org/v1/Document"
 */
export interface Document extends Conclusion {
    type?: DocumentType
    extracted?: boolean
    textType?: string
    text: string
    attribution?: Attribution
}