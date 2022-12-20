import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/User/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CompanyDashboard from "./pages/Company/CompanyDashboard";
import ProtectUser from "./guard/ProtectUser";
import ProtectAdmin from "./guard/ProtectAdmin";
import ProtectCompany from "./guard/ProtectCompany";
import UserProfile from "./pages/User/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/Dashboard"
            element={
              <ProtectUser>
                <Dashboard />
              </ProtectUser>
            }
          ></Route>

          <Route
            path="/user/:id"
            element={
              <ProtectUser>
                <UserProfile/>
              </ProtectUser>
            }
          ></Route> 



          <Route
            path="/AdminDashboard"
            element={
              <ProtectAdmin>
                <AdminDashboard />
              </ProtectAdmin>
            }
          ></Route>





          <Route
            path="/CompanyDashboard"
            element={
              <ProtectCompany>
                <CompanyDashboard />
              </ProtectCompany>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
