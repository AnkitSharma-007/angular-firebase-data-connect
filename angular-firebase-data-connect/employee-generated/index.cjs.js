const { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default-connector',
  service: 'ng-data-connect',
  location: 'asia-south1'
};
exports.connectorConfig = connectorConfig;

function createEmployeeRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'createEmployee', inputVars);
}
exports.createEmployeeRef = createEmployeeRef;
exports.createEmployee = function createEmployee(dcOrVars, vars) {
  return executeMutation(createEmployeeRef(dcOrVars, vars));
};

function updateEmployeeRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'updateEmployee', inputVars);
}
exports.updateEmployeeRef = updateEmployeeRef;
exports.updateEmployee = function updateEmployee(dcOrVars, vars) {
  return executeMutation(updateEmployeeRef(dcOrVars, vars));
};

function deleteEmployeeRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'deleteEmployee', inputVars);
}
exports.deleteEmployeeRef = deleteEmployeeRef;
exports.deleteEmployee = function deleteEmployee(dcOrVars, vars) {
  return executeMutation(deleteEmployeeRef(dcOrVars, vars));
};

function listCitiesRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'ListCities');
}
exports.listCitiesRef = listCitiesRef;
exports.listCities = function listCities(dc) {
  return executeQuery(listCitiesRef(dc));
};

function listEmployeesRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'ListEmployees');
}
exports.listEmployeesRef = listEmployeesRef;
exports.listEmployees = function listEmployees(dc) {
  return executeQuery(listEmployeesRef(dc));
};

function listEmployeeByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'ListEmployeeByID', inputVars);
}
exports.listEmployeeByIdRef = listEmployeeByIdRef;
exports.listEmployeeById = function listEmployeeById(dcOrVars, vars) {
  return executeQuery(listEmployeeByIdRef(dcOrVars, vars));
};

