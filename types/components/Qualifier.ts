export enum SourceReferenceQualifier {
    CharacterRegion = "http://gedcomx.org/CharacterRegion",
    RectangleRegion = "http://gedcomx.org/RectangleRegion",
    TimeRegion = "http://gedcomx.org/TimeRegion"
}

export enum NamePartQualifier {
    TITLE = "http://gedcomx.org/Title",
    PRIMARY = "http://gedcomx.org/Primary",
    SECONDARY = "http://gedcomx.org/Secondary",
    MIDDLE = "http://gedcomx.org/Middle",
    FAMILIAR = "http://gedcomx.org/Familiar",
    RELIGIOUS = "http://gedcomx.org/Religious",
    FAMILY = "http://gedcomx.org/Family",
    MAIDEN = "http://gedcomx.org/Maiden",
    PATRONYMIC = "http://gedcomx.org/Patronymic",
    MATRONYMIC = "http://gedcomx.org/Matronymic",
    GEOGRAPHIC = "http://gedcomx.org/Geographic",
    OCCUPATIONAL = "http://gedcomx.org/Occupational",
    CHARACTERISTIC = "http://gedcomx.org/Characteristic",
    POSTNOM = "http://gedcomx.org/Postnom",
    PARTICLE = "http://gedcomx.org/Particle"
}

/**
 * @$id "http://gedcomx.org/v1/Qualifier"
 */
export type Qualifier = SourceReferenceQualifier | NamePartQualifier | {
    value?: string
};