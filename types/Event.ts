import {Date} from "./components/Date";
import {EventRole} from "./components/EventRole";
import {PlaceReference} from "./components/PlaceReference";
import {Subject} from "./components/Subject";
import {EventType} from "./enums/EventType";

/**
 * @$id "http://gedcomx.org/v1/Event"
 */
export interface Event extends Subject {
    type?: EventType
    date?: Date
    place?: PlaceReference
    roles?: Array<EventRole>
}