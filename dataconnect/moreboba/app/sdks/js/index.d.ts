import { ConnectorConfig, DataConnect, getDataConnect, QueryRef, MutationRef, QueryPromise, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export interface AddCartResponse {
  cart_insert: Cart_Key;
}

export interface AddCartVariables {
  item?: Item_Key | null;
}

export interface AddItemResponse {
  item_insert: Item_Key;
}

export interface AddItemVariables {
  name?: string | null;
  image?: string | null;
  price?: string | null;
  sectionName?: string | null;
}

export interface Admin_Key {
  uid: string;
  __typename?: 'Admin_Key';
}

export interface Cart_Key {
  id: UUIDString;
  __typename?: 'Cart_Key';
}

export interface DeleteCartResponse {
  cart_delete?: Cart_Key | null;
}

export interface DeleteCartVariables {
  name?: Cart_Key | null;
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

export interface GetItemsResponse {
  items:  ({
    
  name: string;
  image: string;
  price: string;
  } & Item_Key)[];
  
}

export interface GetItemsVariables {
  sectName?: string | null;
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


/* Allow users to create refs without passing in DataConnect */
export function addCartRef(vars?: AddCartVariables): MutationRef<AddCartResponse, AddCartVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addCartRef(dc: DataConnect, vars?: AddCartVariables): MutationRef<AddCartResponse,AddCartVariables>;

export function addCart(vars?: AddCartVariables): MutationPromise<AddCartResponse, AddCartVariables>;
export function addCart(dc: DataConnect, vars?: AddCartVariables): MutationPromise<AddCartResponse,AddCartVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteCartRef(vars?: DeleteCartVariables): MutationRef<DeleteCartResponse, DeleteCartVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteCartRef(dc: DataConnect, vars?: DeleteCartVariables): MutationRef<DeleteCartResponse,DeleteCartVariables>;

export function deleteCart(vars?: DeleteCartVariables): MutationPromise<DeleteCartResponse, DeleteCartVariables>;
export function deleteCart(dc: DataConnect, vars?: DeleteCartVariables): MutationPromise<DeleteCartResponse,DeleteCartVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getItemsRef(vars?: GetItemsVariables): QueryRef<GetItemsResponse, GetItemsVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getItemsRef(dc: DataConnect, vars?: GetItemsVariables): QueryRef<GetItemsResponse,GetItemsVariables>;

export function getItems(vars?: GetItemsVariables): QueryPromise<GetItemsResponse, GetItemsVariables>;
export function getItems(dc: DataConnect, vars?: GetItemsVariables): QueryPromise<GetItemsResponse,GetItemsVariables>;


