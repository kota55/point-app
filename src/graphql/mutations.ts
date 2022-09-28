/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPointAppDataModel = /* GraphQL */ `
  mutation CreatePointAppDataModel(
    $input: CreatePointAppDataModelInput!
    $condition: ModelPointAppDataModelConditionInput
  ) {
    createPointAppDataModel(input: $input, condition: $condition) {
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
export const updatePointAppDataModel = /* GraphQL */ `
  mutation UpdatePointAppDataModel(
    $input: UpdatePointAppDataModelInput!
    $condition: ModelPointAppDataModelConditionInput
  ) {
    updatePointAppDataModel(input: $input, condition: $condition) {
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
export const deletePointAppDataModel = /* GraphQL */ `
  mutation DeletePointAppDataModel(
    $input: DeletePointAppDataModelInput!
    $condition: ModelPointAppDataModelConditionInput
  ) {
    deletePointAppDataModel(input: $input, condition: $condition) {
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
