# gedcomx-ts
GEDCOM X represented in Typescript with compilation to JSON Schema.

## What is this?
This is a rough implementation of the [GEDCOM X Conceptual Model](https://github.com/FamilySearch/gedcomx) in TypeScript.

## Why does this exist?
Freedom's Loom is attempting to create tools to help de-silo data surrounding the history of slavery. In order to be successful, we needed an ontology.

We picked GEDCOM X due to its extensible nature and because we want our work to support both genealogical / citizen historian efforts as well as academic efforts.

## How do I use it?

It's quite simple! You can either use the defined types in your project or you can use the JSON Schema file that is generated in `build/gedcomx_schema.json` by running `npm run build`.

## License
While the GEDCOM X Conceptual Model is licensed under [Creative Commons Attribution-ShareAlike license](http://creativecommons.org/licenses/by-sa/3.0) we chose to mirror their code-license selection on their repo of Apache License 2.0.
