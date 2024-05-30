import { getDataConnect, queryRef, mutationRef, executeQuery, executeMutation } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'my-connector',
  service: 'dataconnect',
  location: 'us-west1'
};

export function addItemRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'addItem', inputVars);
}
export function addItem(dcOrVars, vars) {
  return executeMutation(addItemRef(dcOrVars, vars));
}
export function deleteItemRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'deleteItem', inputVars);
}
export function deleteItem(dcOrVars, vars) {
  return executeMutation(deleteItemRef(dcOrVars, vars));
}
export function editItemRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'editItem', inputVars);
}
export function editItem(dcOrVars, vars) {
  return executeMutation(editItemRef(dcOrVars, vars));
}
export function addCartRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'addCart', inputVars);
}
export function addCart(dcOrVars, vars) {
  return executeMutation(addCartRef(dcOrVars, vars));
}
export function deleteCartRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'deleteCart', inputVars);
}
export function deleteCart(dcOrVars, vars) {
  return executeMutation(deleteCartRef(dcOrVars, vars));
}
export function getItemsRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'getItems', inputVars);
}
export function getItems(dcOrVars, vars) {
  return executeQuery(getItemsRef(dcOrVars, vars));
}
function validateArgs(dcOrVars, vars, validateVars) {
  let dcInstance;
  let realVars;
  // TODO; Check what happens if this is undefined.
  if(dcOrVars && 'dataConnectOptions' in dcOrVars) {
      dcInstance = dcOrVars;
      realVars = vars;
  } else {
      dcInstance = getDataConnect(connectorConfig);
      realVars = dcOrVars;
  }
  if(!dcInstance || (!realVars && validateVars)) {
      throw new Error('You didn\t pass in the vars!');
  }
  return { dc: dcInstance, vars: realVars };
}