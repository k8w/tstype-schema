<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [tsbuffer-schema](./tsbuffer-schema.md) &gt; [UnionTypeSchema](./tsbuffer-schema.uniontypeschema.md)

## UnionTypeSchema interface

TypeScript Union Types, like `A | B`

<b>Signature:</b>

```typescript
export interface UnionTypeSchema 
```

## Example


```ts
type X1 = A | B;
type X2 = A | null | undefined;
type Gender = 'Male' | 'Female';

```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [members](./tsbuffer-schema.uniontypeschema.members.md) | { id: number; type: [TSBufferSchema](./tsbuffer-schema.tsbufferschema.md)<!-- -->; }\[\] |  |
|  [type](./tsbuffer-schema.uniontypeschema.type.md) | 'Union' |  |
