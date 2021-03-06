import {URI} from "../aliases/URI";
import {IdentifierType} from "../enums/IdentifierType";

/**
 * @$id "http://gedcomx.org/v1/Identifier"
 */
export interface Identifier {
    value: URI
    type?: IdentifierType
}
