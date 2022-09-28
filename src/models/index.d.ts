import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PointAppDataModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PointAppDataModel {
  readonly id: string;
  readonly employeeNo: string;
  readonly sortKey: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PointAppDataModel, PointAppDataModelMetaData>);
  static copyOf(source: PointAppDataModel, mutator: (draft: MutableModel<PointAppDataModel, PointAppDataModelMetaData>) => MutableModel<PointAppDataModel, PointAppDataModelMetaData> | void): PointAppDataModel;
}