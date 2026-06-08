import { useState } from "react";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import UserProfile from "./pages/UserProfile";

const routes = {
  home: <Landing />,
  pricing: <Pricing />,
  recruiter: <RecruiterDashboard />,
  profile: <Profile />,
  userProfile: <UserProfile />,
  auth: <Auth />,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {routes[currentPage] || <Landing />}
    </>
  );
}

export default App;
