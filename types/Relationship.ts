import {URI} from "./aliases/URI";
import {Fact} from "./components/Fact";
import {Subject} from "./components/Subject";
import {RelationshipType} from "./enums/RelationshipType";

/**
 * @$id "http://gedcomx.org/v1/Relationship"
 */
export interface Relationship extends Subject {
    type?: RelationshipType
    person1: URI
    person2: URI
    facts?: Array<Fact>
}