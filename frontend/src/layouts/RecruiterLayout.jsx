import RecruiterHeader from "../components/common/RecruiterHeader";
import RecruiterSidebar from "../components/common/RecruiterSidebar";

const RecruiterLayout = ({ activeNav = 'dashboard', onNavChange, children }) => {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100">
      <RecruiterHeader />
      <RecruiterSidebar activeNav={activeNav} onNavChange={onNavChange} />
      <main className="ml-0 mt-16 p-4 sm:p-6 lg:ml-72 lg:p-8">
        {children}
      </main>
    </div>
  );
};

export default RecruiterLayout;