/**
 * @$id "http://gedcomx.org/v1/OnlineAccount"
 */
import {URI} from "../helpers/URI";

export interface OnlineAccount {
    serviceHomepage: URI
    accountName: string
}