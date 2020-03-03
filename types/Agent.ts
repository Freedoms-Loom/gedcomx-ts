import {URI} from "./aliases/URI";
import {Address} from "./components/Address";
import {Identifier} from "./components/Identifier";
import {OnlineAccount} from "./components/OnlineAccount";
import {TextValue} from "./components/TextValue";

/**
 * @$id "http://gedcomx.org/v1/Agent"
 */
export interface Agent {
    id?: string
    identifiers?: Array<Identifier>
    names?: Array<TextValue>
    homepage?: URI
    openid?: URI
    accounts?: Array<OnlineAccount>
    emails?: Array<URI>
    phones?: Array<URI>
    addresses?: Array<Address>
    person?: URI
}