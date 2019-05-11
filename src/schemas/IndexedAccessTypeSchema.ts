import { BaseSchema } from '../BaseSchema';
import { InterfaceReference } from '../InterfaceReference';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';

/**
 * Reference like XXX['XX']['XX']
 * 注意 A['b' | 'c']不是IndexedAccessType，它们应该作为一个 UnionType被识别
 * 应该等价于 A['b'] | A['c']
 */
export interface IndexedAccessTypeSchema extends BaseSchema {
    type: 'IndexedAccess';
    objectType: InterfaceTypeSchema | InterfaceReference;
    index: string;
}