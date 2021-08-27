import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import logo from './logo.svg';
import './App.css'


function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <FullName/>
    <Address/>
    </div>
  );
}

export default App;
