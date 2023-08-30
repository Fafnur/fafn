import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { CouchBase } from '@triniwiz/nativescript-couchbase';
import { Observable } from 'rxjs';

import { LOCAL_DB_CONFIG, LocalDBConfig, LocalDBRecord, LocalDBService } from '@fafn/core';

@Injectable()
export class NativescriptLocalDBService<
  K extends keyof S = never,
  S extends Record<string, string> = Record<string, string>,
> extends LocalDBService<K, S> {
  constructor(@Inject(DOCUMENT) document: Document, @Optional() @Inject(LOCAL_DB_CONFIG) config: Partial<LocalDBConfig> | null) {
    super(document, config);
  }

  override getAll<T = LocalDBRecord>(storeName: K): Observable<T[]> {
    return new Observable((observer) => {
      try {
        const database = new CouchBase(storeName.toString());
        const records = database.query({ select: [] });
        observer.next(records ?? []);
        observer.complete();
        database.close();
      } catch (error) {
        console.log(error);
        observer.complete();
      }
    });
  }

  override get<T = LocalDBRecord>(storeName: K, key: string): Observable<T | null> {
    return new Observable((observer) => {
      try {
        const database = new CouchBase(storeName.toString());
        const record = database.getDocument(key);
        observer.next(record ?? null);
        observer.complete();
        database.close();
      } catch (error) {
        console.log(error);
        observer.complete();
      }
    });
  }

  override put<T extends LocalDBRecord = LocalDBRecord>(storeName: K, record: T): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const database = new CouchBase(storeName.toString());
        database.createDocument(record, record.id.toString());
        resolve();
        database.close();
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  override putAll<T extends LocalDBRecord = LocalDBRecord>(storeName: K, records: T[]): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const database = new CouchBase(storeName.toString());
        database.inBatch(() => {
          for (const record of records) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            database.createDocument(record, (record as any).uuid);
          }
          resolve();
          database.close();
        });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  override remove(storeName: K, key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const database = new CouchBase(storeName.toString());
        database.deleteDocument(key);
        resolve();
        database.close();
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  override clear(storeName: K): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const database = new CouchBase(storeName.toString());
        database.destroyDatabase();
        database.close();
        resolve();
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
}
