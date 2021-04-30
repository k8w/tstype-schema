// Schemas
export * from "./schemas/AnyTypeSchema";
export * from "./schemas/ArrayTypeSchema";
export * from "./schemas/BooleanTypeSchema";
export * from "./schemas/BufferTypeSchema";
export * from "./schemas/DateTypeSchema";
export * from "./schemas/EnumTypeSchema";
export * from "./schemas/IndexedAccessTypeSchema";
export * from "./schemas/InterfaceTypeSchema";
export * from "./schemas/IntersectionTypeSchema";
export * from "./schemas/LiteralTypeSchema";
export * from "./schemas/NonNullableTypeSchema";
export * from "./schemas/NonPrimitiveTypeSchema";
export * from "./schemas/NumberTypeSchema";
export * from "./schemas/OmitTypeSchema";
export * from "./schemas/OverwriteTypeSchema";
export * from "./schemas/PartialTypeSchema";
export * from "./schemas/PickTypeSchema";
export * from "./schemas/ReferenceTypeSchema";
export * from "./schemas/StringTypeSchema";
export * from "./schemas/TupleTypeSchema";
export * from "./schemas/UnionTypeSchema";

// Others
export { InterfaceReference } from "./models/InterfaceReference";
export { SchemaType } from "./models/SchemaType";
export { TSBufferProto } from "./models/TSBufferProto";
export { TSBufferSchema } from "./models/TSBufferSchema";
export { TypeReference } from "./models/TypeReference";

export type Overwrite<T, U> = T extends unknown ? Pick<T, Exclude<keyof T, keyof U>> & U : never;