import {Conclusion} from "./Conclusion";
import {EvidenceReference} from "./EvidenceReference";
import {Identifier} from "./Identifier";
import {SourceReference} from "./SourceReference";

/**
 * @$id "http://gedcomx.org/v1/Subject"
 */
export interface Subject extends Conclusion {
    extracted?: boolean
    evidence?: Array<EvidenceReference>
    media?: Array<SourceReference>
    identifiers?: Array<Identifier>
}