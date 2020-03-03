import {GenderType} from "../enums/GenderType";
import {Conclusion} from "./Conclusion";

/**
 * @$id "http://gedcomx.org/v1/Gender"
 */
export interface Gender extends Conclusion {
    type: GenderType
}