import {URI} from "./aliases/URI";
import {Date} from "./components/Date";
import {Subject} from "./components/Subject";
import {TextValue} from "./components/TextValue";
import {PlaceType} from "./enums/PlaceType";

/**
 * @$id "http://gedcomx.org/v1/PlaceDescription"
 */
export interface PlaceDescription extends Subject {
    names: Array<TextValue>
    type?: PlaceType
    place?: URI
    jurisdiction?: URI
    latitude?: number
    longitude?: number
    temporalDescription?: Date
    spatialDescription?: URI
}