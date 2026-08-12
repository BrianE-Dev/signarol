import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import UserProfile from "./pages/UserProfile";
import Interviewer from "./components/Interviewer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);

  const renderPage = () => {
    // If user is a recruiter, render RecruiterDashboard without Navbar/Footer
    if (currentPage === "recruiter") {
      return <RecruiterDashboard onNavigate={setCurrentPage} />;
    }

    // For all other pages, show Navbar and Footer
    return (
      <>
        <Navbar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          currentUser={currentUser}
          onSignOut={handleSignOut}
        />
        {routes[currentPage] || (
          <Landing
            onStartInterview={() =>
              setCurrentPage(currentUser ? "interview" : "auth")
            }
          />
        )}
        <Footer />
      </>
    );
  };

  const routes = {
    home: (
      <Landing
        onStartInterview={() =>
          setCurrentPage(currentUser ? "interview" : "auth")
        }
      />
    ),
    pricing: <Pricing />,
    interview: <Interviewer />,
    recruiter: <RecruiterDashboard onNavigate={setCurrentPage} />,
    dashboard: <Dashboard onNavigate={setCurrentPage} />,
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
        if (parsedUser.recruiter) {
          setCurrentPage("recruiter");
        } else {
          setCurrentPage("dashboard");
        }
      }
    } catch (error) {
      console.error('Error loading user:', error);
      setCurrentPage("home");
    }
  }, []);

  const handleSignOut = () => {
    try {
      localStorage.removeItem("signarol-current-user");
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
    setCurrentUser(null);
    setCurrentPage("home");
  };

  return <>{renderPage()}</>;
}

export default App;