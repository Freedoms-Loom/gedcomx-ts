import {Timestamp} from "../helpers/Timestamp";
import {URI} from "../helpers/URI";

/**
 * @$id "http://gedcomx.org/v1/Attribution"
 */
export interface Attribution {
    contributor?: URI
    modified?: Timestamp
    changeMessage?: string
    creator?: URI
    created?: Timestamp
}