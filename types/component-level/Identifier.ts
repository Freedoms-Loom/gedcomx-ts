import {IdentifierType} from "../enums/IdentifierType";
import {URI} from "../helpers/URI";

/**
 * @$id "http://gedcomx.org/v1/Identifier"
 */
export interface Identifier {
    value: URI
    type?: IdentifierType
}
