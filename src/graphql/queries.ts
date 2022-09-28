/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPointAppDataModel = /* GraphQL */ `
  query GetPointAppDataModel($employeeNo: String!, $sortKey: String!) {
    getPointAppDataModel(employeeNo: $employeeNo, sortKey: $sortKey) {
      employeeNo
      sortKey
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPointAppDataModels = /* GraphQL */ `
  query ListPointAppDataModels(
    $employeeNo: String
    $sortKey: ModelStringKeyConditionInput
    $filter: ModelPointAppDataModelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPointAppDataModels(
      employeeNo: $employeeNo
      sortKey: $sortKey
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        employeeNo
        sortKey
        name
        email
        # createdAt
        # updatedAt
        # _version
        # _deleted
        # _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPointAppDataModels = /* GraphQL */ `
  query SyncPointAppDataModels(
    $filter: ModelPointAppDataModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPointAppDataModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        employeeNo
        sortKey
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
