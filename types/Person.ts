import {Fact} from "./components/Fact";
import {Gender} from "./components/Gender";
import {Name} from "./components/Name";
import {Subject} from "./components/Subject";

/**
 * @$id "http://gedcomx.org/v1/Person"
 */
export interface Person extends Subject {
    private?: boolean
    gender?: Gender
    names?: Array<Name>
    facts?: Array<Fact>
}