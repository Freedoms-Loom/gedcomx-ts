/**
 * @$id "http://gedcomx.org/v1/Note"
 */
import {Attribution} from "./Attribution";

export interface Note {
    lang?: string
    subject?: string
    text: string
    attribution?: Attribution
}