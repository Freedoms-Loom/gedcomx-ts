import {Attribution} from "./Attribution";

/**
 * @$id "http://gedcomx.org/v1/Note"
 */
export interface Note {
    lang?: string
    subject?: string
    text: string
    attribution?: Attribution
}