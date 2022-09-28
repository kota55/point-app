import { useContext } from 'react';
import  { AuthContext } from './providers/AuthProvider';
import { Auth } from 'aws-amplify';
import { UserInfoType } from "./types/UserInfoType";
function App() {
  const userInfo = useContext(AuthContext) as UserInfoType;
  console.log(userInfo);
  return (
    <div className="App">
      <p>point-app</p>
      <p>{userInfo.name}</p>
      <p>{userInfo.email}</p>
      <button onClick={() => Auth.signOut()}> signout</button>
    </div>
  );
}

export default App;
