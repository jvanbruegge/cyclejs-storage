import { Stream } from 'xstream';
import { StreamAdapter } from '@cycle/base';
export interface SpecificKeyValuePair {
    key: string;
    value: any;
}
export interface KeyValuePair extends SpecificKeyValuePair {
    target: 'session' | 'local';
}
export interface SpecificStorageSource {
    getItem: (key: string) => Stream<any>;
}
export interface StorageSource {
    local: SpecificStorageSource;
    session: SpecificStorageSource;
}
export declare type specificStorageDriverType = (write$: Stream<SpecificKeyValuePair>, runSA?: StreamAdapter) => SpecificStorageSource;
export declare type storageDriverType = (write$: Stream<KeyValuePair>, runSA?: StreamAdapter) => StorageSource;
export declare function makeLocalStorageDriver(): specificStorageDriverType;
export declare function makeSessionStorageDriver(): specificStorageDriverType;
export declare function makeStorageDriver(): storageDriverType;
