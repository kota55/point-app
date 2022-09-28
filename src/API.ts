/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePointAppDataModelInput = {
  employeeNo: string,
  sortKey: string,
  name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type ModelPointAppDataModelConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelPointAppDataModelConditionInput | null > | null,
  or?: Array< ModelPointAppDataModelConditionInput | null > | null,
  not?: ModelPointAppDataModelConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type PointAppDataModel = {
  __typename: "PointAppDataModel",
  employeeNo: string,
  sortKey: string,
  name?: string | null,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePointAppDataModelInput = {
  employeeNo: string,
  sortKey: string,
  name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeletePointAppDataModelInput = {
  employeeNo: string,
  sortKey: string,
  _version?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPointAppDataModelFilterInput = {
  employeeNo?: ModelStringInput | null,
  sortKey?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelPointAppDataModelFilterInput | null > | null,
  or?: Array< ModelPointAppDataModelFilterInput | null > | null,
  not?: ModelPointAppDataModelFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPointAppDataModelConnection = {
  __typename: "ModelPointAppDataModelConnection",
  items:  Array<PointAppDataModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreatePointAppDataModelMutationVariables = {
  input: CreatePointAppDataModelInput,
  condition?: ModelPointAppDataModelConditionInput | null,
};

export type CreatePointAppDataModelMutation = {
  createPointAppDataModel?:  {
    __typename: "PointAppDataModel",
    employeeNo: string,
    sortKey: string,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePointAppDataModelMutationVariables = {
  input: UpdatePointAppDataModelInput,
  condition?: ModelPointAppDataModelConditionInput | null,
};

export type UpdatePointAppDataModelMutation = {
  updatePointAppDataModel?:  {
    __typename: "PointAppDataModel",
    employeeNo: string,
    sortKey: string,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePointAppDataModelMutationVariables = {
  input: DeletePointAppDataModelInput,
  condition?: ModelPointAppDataModelConditionInput | null,
};

export type DeletePointAppDataModelMutation = {
  deletePointAppDataModel?:  {
    __typename: "PointAppDataModel",
    employeeNo: string,
    sortKey: string,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetPointAppDataModelQueryVariables = {
  employeeNo: string,
  sortKey: string,
};

export type GetPointAppDataModelQuery = {
  getPointAppDataModel?:  {
    __typename: "PointAppDataModel",
    employeeNo: string,
    sortKey: string,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPointAppDataModelsQueryVariables = {
  employeeNo?: string | null,
  sortKey?: ModelStringKeyConditionInput | null,
  filter?: ModelPointAppDataModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPointAppDataModelsQuery = {
  listPointAppDataModels?:  {
    __typename: "ModelPointAppDataModelConnection",
    items:  Array< {
      __typename: "PointAppDataModel",
      employeeNo: string,
      sortKey: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPointAppDataModelsQueryVariables = {
  filter?: ModelPointAppDataModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPointAppDataModelsQuery = {
  syncPointAppDataModels?:  {
    __typename: "ModelPointAppDataModelConnection",
    items:  Array< {
      __typename: "PointAppDataModel",
      employeeNo: string,
      sortKey: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePointAppDataModelSubscription = {
  onCreatePointAppDataModel?:  {
    __typename: "PointAppDataModel",
    employeeNo: string,
    sortKey: string,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePointAppDataModelSubscription = {
  onUpdatePointAppDataModel?:  {
    __typename: "PointAppDataModel",
    employeeNo: string,
    sortKey: string,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePointAppDataModelSubscription = {
  onDeletePointAppDataModel?:  {
    __typename: "PointAppDataModel",
    employeeNo: string,
    sortKey: string,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
