import {Date} from "./components/Date";
import {GroupRole} from "./components/GroupRole";
import {PlaceReference} from "./components/PlaceReference";
import {Subject} from "./components/Subject";
import {TextValue} from "./components/TextValue";

/**
 * @$id "http://gedcomx.org/v1/Group"
 */
export interface Group extends Subject {
    names: Array<TextValue>
    date?: Date
    place?: PlaceReference
    roles?: Array<GroupRole>
}