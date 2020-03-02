import {NameType} from "../enums/NameType";
import {Conclusion} from "./Conclusion";
import {NameForm} from "./NameForm";

/**
 * @$id "http://gedcomx.org/v1/Name"
 */
export interface Name extends Conclusion {
    type?: NameType
    nameForms: Array<NameForm>
    date?: Date
}