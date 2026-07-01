import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import UserProfile from "./pages/UserProfile";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);

  const routes = {
    home: <Landing />,
    pricing: <Pricing />,
    recruiter: <RecruiterDashboard />,
    dashboard: <Dashboard />,
    profile: <Profile />,
    userProfile: <UserProfile />,
    auth: (
      <Auth
        onAuthSuccess={(user) => {
          setCurrentUser(user);
          setCurrentPage(user.recruiter ? "recruiter" : "dashboard");
        }}
      />
    ),
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const storedUser = localStorage.getItem("signarol-current-user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
        setCurrentPage(parsedUser.recruiter ? "recruiter" : "dashboard");
      }
    } catch {
      setCurrentPage("home");
    }
  }, []);

  const handleSignOut = () => {
    try {
      localStorage.removeItem("signarol-current-user");
    } catch {}
    setCurrentUser(null);
    setCurrentPage("home");
  };

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        currentUser={currentUser}
        onSignOut={handleSignOut}
      />
      {routes[currentPage] || <Landing />}
    </>
  );
}

export default App;
