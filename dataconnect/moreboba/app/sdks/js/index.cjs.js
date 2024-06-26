const { getDataConnect, queryRef, mutationRef, executeQuery, executeMutation } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'my-connector',
  service: 'dataconnect',
  location: 'us-west1'
};
exports.connectorConfig = connectorConfig;

function addItemRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'addItem', inputVars);
}
exports.addItemRef = addItemRef;
exports.addItem = function addItem(dcOrVars, vars) {
  return executeMutation(addItemRef(dcOrVars, vars));
};

function deleteItemRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'deleteItem', inputVars);
}
exports.deleteItemRef = deleteItemRef;
exports.deleteItem = function deleteItem(dcOrVars, vars) {
  return executeMutation(deleteItemRef(dcOrVars, vars));
};

function editItemRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'editItem', inputVars);
}
exports.editItemRef = editItemRef;
exports.editItem = function editItem(dcOrVars, vars) {
  return executeMutation(editItemRef(dcOrVars, vars));
};

function addCartRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'addCart', inputVars);
}
exports.addCartRef = addCartRef;
exports.addCart = function addCart(dcOrVars, vars) {
  return executeMutation(addCartRef(dcOrVars, vars));
};

function deleteCartRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'deleteCart', inputVars);
}
exports.deleteCartRef = deleteCartRef;
exports.deleteCart = function deleteCart(dcOrVars, vars) {
  return executeMutation(deleteCartRef(dcOrVars, vars));
};

function getItemsRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'getItems', inputVars);
}
exports.getItemsRef = getItemsRef;
exports.getItems = function getItems(dcOrVars, vars) {
  return executeQuery(getItemsRef(dcOrVars, vars));
};

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