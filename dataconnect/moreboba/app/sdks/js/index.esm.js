import { getDataConnect, queryRef, mutationRef, executeQuery, executeMutation } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'my-connector',
  service: 'dataconnect',
  location: 'us-central1'
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