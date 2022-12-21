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
import CreateCompany from "./pages/Company/CreateCompany";
import AdminLogin from "./pages/Admin/AdminLogin";
import CreateJob from "./pages/Company/CreateJob";
import EditCompany from "./components/company/EditCompany";
import JobEdit from "./pages/Jobs/JobEdit";
import JobDetail from "./pages/Jobs/JobDetail";
import MyApplications from "./pages/User/MyApplications";
import AppliedUsers from "./pages/Company/AppliedUsers";
import Questions from "./pages/User/Questions";
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
                <UserProfile />
              </ProtectUser>
            }
          ></Route>

          <Route
            path="/myapplication"
            element={
              <ProtectUser>
                <MyApplications />
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
            path="/createjob/:id"
            element={
              <ProtectCompany>
                <CreateJob />
              </ProtectCompany>
            }
          ></Route>

          <Route
            path="/:cid/:jid/appliedusers"
            element={
              <ProtectCompany>
                <AppliedUsers />
              </ProtectCompany>
            }
          ></Route>

          <Route
            path="/job/:id"
            element={
              <ProtectUser>
                <JobDetail />
              </ProtectUser>
            }
          ></Route>

          <Route
            path="/survey"
            element={
              <ProtectUser>
                <Questions />
              </ProtectUser>
            }
          ></Route>

          <Route
            path="/editjob/:id"
            element={
              <ProtectCompany>
                <JobEdit />
              </ProtectCompany>
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

          <Route path="/AdminLogin" element={<AdminLogin />}></Route>

          <Route
            path="/CreateCompany"
            element={
              <ProtectCompany>
                <CreateCompany />
              </ProtectCompany>
            }
          ></Route>

          <Route
            path="/EditCompany/:id"
            element={
              <ProtectCompany>
                <EditCompany />
              </ProtectCompany>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
