import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Name from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
 function App() {
  return (
    <div className="App" >
      <ProfilePhoto/>
      <Name/>
       <Address/>
    </div>
  );
}

export default App;
