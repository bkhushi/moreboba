import { ConnectorConfig, DataConnect, getDataConnect, QueryRef, MutationRef, QueryPromise, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export interface AddItemResponse {
  item_insert: Item_Key;
}

export interface AddItemVariables {
  name?: string | null;
  image?: string | null;
  price?: string | null;
  section?: Section_Key | null;
}

export interface Admin_Key {
  uid: string;
  __typename?: 'Admin_Key';
}

export interface Cart_Key {
  id: UUIDString;
  __typename?: 'Cart_Key';
}

export interface DeleteItemResponse {
  item_delete?: Item_Key | null;
}

export interface DeleteItemVariables {
  name?: UUIDString | null;
}

export interface EditItemResponse {
  item_update?: Item_Key | null;
}

export interface EditItemVariables {
  name?: string | null;
  image?: string | null;
  price?: string | null;
}

export interface Item_Key {
  name: string;
  __typename?: 'Item_Key';
}

export interface Section_Key {
  name: string;
  __typename?: 'Section_Key';
}



/* Allow users to create refs without passing in DataConnect */
export function addItemRef(vars?: AddItemVariables): MutationRef<AddItemResponse, AddItemVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addItemRef(dc: DataConnect, vars?: AddItemVariables): MutationRef<AddItemResponse,AddItemVariables>;

export function addItem(vars?: AddItemVariables): MutationPromise<AddItemResponse, AddItemVariables>;
export function addItem(dc: DataConnect, vars?: AddItemVariables): MutationPromise<AddItemResponse,AddItemVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteItemRef(vars?: DeleteItemVariables): MutationRef<DeleteItemResponse, DeleteItemVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteItemRef(dc: DataConnect, vars?: DeleteItemVariables): MutationRef<DeleteItemResponse,DeleteItemVariables>;

export function deleteItem(vars?: DeleteItemVariables): MutationPromise<DeleteItemResponse, DeleteItemVariables>;
export function deleteItem(dc: DataConnect, vars?: DeleteItemVariables): MutationPromise<DeleteItemResponse,DeleteItemVariables>;


/* Allow users to create refs without passing in DataConnect */
export function editItemRef(vars?: EditItemVariables): MutationRef<EditItemResponse, EditItemVariables>;
/* Allow users to pass in custom DataConnect instances */
export function editItemRef(dc: DataConnect, vars?: EditItemVariables): MutationRef<EditItemResponse,EditItemVariables>;

export function editItem(vars?: EditItemVariables): MutationPromise<EditItemResponse, EditItemVariables>;
export function editItem(dc: DataConnect, vars?: EditItemVariables): MutationPromise<EditItemResponse,EditItemVariables>;


