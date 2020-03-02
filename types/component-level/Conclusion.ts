import {Confidence} from "../enums/Confidence";
import {URI} from "../helpers/URI";
import {Attribution} from "./Attribution";
import {Note} from "./Note";
import {SourceReference} from "./SourceReference";

/**
 * @$id "http://gedcomx.org/v1/Conclusion"
 */
export interface Conclusion {
    id?: string
    lang?: string
    sources?: Array<SourceReference>
    analysis?: URI
    notes?: Array<Note>
    confidence?: Confidence
    attribution?: Attribution
}