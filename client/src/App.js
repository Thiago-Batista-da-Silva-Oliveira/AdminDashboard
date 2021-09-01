import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./index.css"
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/User/User'
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
    <Router>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Switch>
        <Route exact path="/">
            <Home />
       </Route>
       <Route path="/users">
            <UserList />
       </Route>
       <Route path="/user/:userId">
            <User />
       </Route>
       <Route path="/newUser">
            <NewUser />
       </Route>
       <Route path="/products">
            <Products />
       </Route>
      
       </Switch>
    </div>
    </Router>
    
    </>
  );
}

export default App;
