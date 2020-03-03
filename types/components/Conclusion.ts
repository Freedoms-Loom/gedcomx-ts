import {URI} from "../aliases/URI";
import {Confidence} from "../enums/Confidence";
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