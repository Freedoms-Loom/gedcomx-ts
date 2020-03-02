/**
 * @$id "http://gedcomx.org/v1/Gender"
 */
import {GenderType} from "../enums/GenderType";
import {Conclusion} from "./Conclusion";

export interface Gender extends Conclusion {
    type: GenderType
}