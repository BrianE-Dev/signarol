import { useState } from "react";
import RecruiterLayout from "../layouts/RecruiterLayout";
import RecruiterMetrics from "../components/common/RecruiterMetrics";
import RecruitersMarketInsight from "../components/common/RecruitersMarketInsight";
import RecruiterTopPerformers from "../components/common/RecruiterTopPerformers";

function RecruiterDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  const renderContent = () => {
    switch (activeNav) {
      case "dashboard":
        return (
          <RecruiterMetrics
            belowMatches={<RecruiterTopPerformers />}
            rightRail={<RecruitersMarketInsight />}
          />
        );
      case "candidates":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-100">Candidates Search</h2>
            <p className="text-slate-400 mt-2">Coming soon...</p>
          </div>
        );
      case "pipeline":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-100">Hiring Pipeline</h2>
            <p className="text-slate-400 mt-2">Coming soon...</p>
          </div>
        );
      case "analytics":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-100">Analytics</h2>
            <p className="text-slate-400 mt-2">Coming soon...</p>
          </div>
        );
      case "saved":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-100">Saved Candidates</h2>
            <p className="text-slate-400 mt-2">Coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-100">Team Settings</h2>
            <p className="text-slate-400 mt-2">Coming soon...</p>
          </div>
        );
      default:
        return (
          <RecruiterMetrics
            belowMatches={<RecruiterTopPerformers />}
            rightRail={<RecruitersMarketInsight />}
          />
        );
    }
  };

  return (
    <RecruiterLayout activeNav={activeNav} onNavChange={setActiveNav}>
      {renderContent()}
    </RecruiterLayout>
  );
}

export default RecruiterDashboard;
