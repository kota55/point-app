// React
import { useState,useEffect,createContext,ReactNode } from "react";
// Amplify
import { Auth,API } from 'aws-amplify';
import { withAuthenticator }  from '@aws-amplify/ui-react';
// GraphQL
import { graphqlOperation } from '@aws-amplify/api-graphql'
import { GraphQLResult } from '@aws-amplify/api';
import { listPointAppDataModels } from "../../graphql/queries";
import {CreatePointAppDataModelInput, ListPointAppDataModelsQuery, ListPointAppDataModelsQueryVariables} from "../../API";
// types
import { UserInfoType } from "../types/UserInfoType";

// ユーザ情報を提供
export const AuthContext = createContext({});

// TODO 問題点として、子コンポーネントではユーザ情報が設定されていない状態でも呼び出すことが可能なので修正が必要
const AuthProvider = (props: {children: ReactNode}) => {
  const [userInfo,setUserInfo] = useState<UserInfoType>({name: "", email: ""});

  useEffect(() => {
    (async() => {
      // Cognito認証情報取得
      const cognitoUserInfo = await Auth.currentAuthenticatedUser();

      // ユーザ情報取得
      const param: ListPointAppDataModelsQueryVariables = {employeeNo: cognitoUserInfo.attributes.profile};
      const result  = await API.graphql(
          graphqlOperation(listPointAppDataModels,param)
        ) as GraphQLResult<ListPointAppDataModelsQuery>;

      // ユーザ情報をstateに格納
      if(result?.data?.listPointAppDataModels?.items){
        const userDataArray = result?.data?.listPointAppDataModels?.items as CreatePointAppDataModelInput[];
        let userInfoObj = {name: "", email: ""};
        userDataArray.forEach(userData => {
          if(userData.sortKey === "name" && userData.name){
            userInfoObj.name = userData.name;
          }else if(userData.sortKey === "email" && userData.email){
            userInfoObj.email = userData.email;
          }
        });
        setUserInfo(userInfoObj);
      }
    })();
  },[]);

  return (
    <AuthContext.Provider value={userInfo}>
      {props.children}
    </AuthContext.Provider>
  );
};

// 認証処理を提供
export default withAuthenticator(AuthProvider);
