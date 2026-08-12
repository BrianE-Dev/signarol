import { 
  Search, 
  Filter, 
  MapPin, 
  Mail, 
  Star,
  TrendingUp,
  Users,
  Calendar,
  Eye,
  X,
  Save,
  Plus,
  Download,
  Share2,
  Heart,
  ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';

const RecruiterMetrics = ({ belowMatches = null, rightRail = null }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    // Get current user from localStorage
    try {
      const storedUser = localStorage.getItem('signarol-current-user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
      }
    } catch (error) {
      console.error('Error loading user:', error);
    }
    
    // Set initial last updated time
    setLastUpdated(new Date());
  }, []);

  const userName = currentUser?.name || currentUser?.email?.split('@')[0] || 'Guest';
  const formattedDate = lastUpdated.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  // Mock data for stats
  const stats = [
    { 
      label: 'Active Searches', 
      value: '12', 
      subtext: '3 new this week',
      icon: Search,
      color: 'text-amber-400'
    },
    { 
      label: 'Reviewed This Week', 
      value: '247', 
      subtext: '+18% from last week',
      icon: Eye,
      color: 'text-amber-400'
    },
    { 
      label: 'Pipeline Candidates', 
      value: '89', 
      subtext: 'Across all stages',
      icon: Users,
      color: 'text-amber-400'
    },
    { 
      label: 'Interviews Scheduled', 
      value: '23', 
      subtext: 'This week',
      icon: Calendar,
      color: 'text-amber-400'
    },
  ];

  // Skill areas
  const skillAreas = ['Frontend', 'Backend', 'Full Stack'];
  const readinessScores = ['75%', '95%'];
  const experienceLevels = ['Mid-level', 'Senior'];
  
  // Active filters
  const activeFilters = ['Frontend', 'Senior'];

  const topMatches = [
    {
      name: 'Alex Chen',
      handle: '@alexchen_dev',
      rank: 'Top 8%',
      score: 92,
      avatar: 'from-cyan-400 via-slate-500 to-orange-300',
      skills: ['React 95%', 'TypeScript 88%', 'Node.js 84%'],
      details: ['247 challenges completed', '94% success rate', 'Active 2 days ago'],
    },
    {
      name: 'Maria Rodriguez',
      handle: '@maria_codes',
      rank: 'Top 15%',
      score: 89,
      avatar: 'from-fuchsia-500 via-blue-600 to-cyan-400',
      skills: ['Python 94%', 'Django 87%', 'PostgreSQL 82%'],
      details: ['189 challenges completed', '91% success rate', 'Active today'],
    },
    {
      name: 'David Kim',
      handle: '@dkim_engineer',
      rank: 'Top 5%',
      score: 95,
      avatar: 'from-sky-400 via-teal-500 to-orange-400',
      skills: ['Go 96%', 'Kubernetes 91%', 'System Design 94%'],
      details: ['312 challenges completed', '97% success rate', 'Active 1 hour ago'],
    },
    {
      name: 'Sarah Johnson',
      handle: '@sarah_frontend',
      rank: 'Top 12%',
      score: 87,
      avatar: 'from-purple-600 via-indigo-500 to-cyan-300',
      skills: ['Vue.js 92%', 'CSS 89%', 'JavaScript 91%'],
      details: ['198 challenges completed', '89% success rate', 'Active 3 hours ago'],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, {userName}!</h1>
          <p className="mt-1 text-slate-400">Your talent discovery dashboard</p>
        </div>
        <div className="text-right text-sm text-slate-500">
          Last updated: {formattedDate}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-[#141414] p-5 transition hover:border-slate-700"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.subtext}</p>
              </div>
              <div className={`rounded-lg bg-slate-800/50 p-2.5 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-400">
          <Plus className="h-4 w-4" />
          New Search
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800">
          <Download className="h-4 w-4" />
          Export Report
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800">
          <Mail className="h-4 w-4" />
          Bulk Contact
        </button>
      </div>

      {/* Advanced Candidate Search Section */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-white">Advanced Candidate Search</h2>
        
        <div className="grid grid-cols-1 gap-6 rounded-xl border border-slate-800 bg-[#141414] p-6 lg:grid-cols-4">
          {/* Skill Areas */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">Skill Areas</h3>
            <div className="space-y-2">
              {skillAreas.map((skill) => (
                <label key={skill} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    defaultChecked={skill === 'Frontend'}
                  />
                  <span className="text-sm text-slate-300">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Readiness Score */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">Readiness Score</h3>
            <div className="flex flex-col gap-2">
             <div className="flex justify-between">
                 <span className="text-xs text-slate-400">75%</span>
               <span className="text-xs text-slate-300 mt-1">95%</span>
             </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all"
                  style={{ width: '75%' }}
                />
              </div>
             
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">Experience Level</h3>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <label key={level} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    defaultChecked={level === 'Senior'}
                  />
                  <span className="text-sm text-slate-300">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">Location</h3>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="San Francisco, CA"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                defaultValue="San Francisco, CA"
              />
            </div>
          </div>

          {/* Active Filters - Inside the search box, spanning all columns */}
          <div className="col-span-1 lg:col-span-4 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400">Active Filters:</span>
                {activeFilters.map((filter) => (
                  <span
                    key={filter}
                    className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400"
                  >
                    {filter}
                    <button className="hover:text-amber-300">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                ))}
                <button className="text-sm text-slate-400 hover:text-white transition-colors">
                  Clear All
                </button>
              </div>

              {/* Results Footer */}
              <div className="flex items-center gap-4">
                <p className="text-sm text-slate-400">
                  <span className="font-semibold text-white">2,847</span> candidates found
                </p>
                <button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-400">
                  <Save className="h-4 w-4" />
                  Save Search
                </button>
              </div>
            </div>
          </div>
        </div>

       
      </div>

     {/* Top Matches and Market Insights */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[65fr_35fr]">
        <section>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-white">Top Matches</h2>
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#141414] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-700 hover:text-white">
              Sort by:
              <span className="text-white">Readiness Score</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {topMatches.map((candidate) => (
              <article
                key={candidate.name}
                className="rounded-lg border border-slate-800 bg-[#141414] p-5 transition hover:border-slate-700"
              >
                {/* Row 1: Avatar, Name, Handle, and Badge */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 shrink-0 rounded-full bg-gradient-to-br ${candidate.avatar} p-0.5`}>
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                        {candidate.name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{candidate.name}</h3>
                      <p className="text-xs text-slate-500">{candidate.handle}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                    {candidate.rank}
                  </span>
                </div>

                {/* Row 2: Readiness Score */}
                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Readiness Score</span>
                    <span className="font-semibold text-white">{candidate.score}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-900">
                    <div
                      className="h-full rounded-full bg-amber-500"
                      style={{ width: `${candidate.score}%` }}
                    />
                  </div>
                </div>

                {/* Row 3: Skills */}
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                  {candidate.skills.map((skill, index) => (
                    <span key={skill} className="text-xs text-slate-300">
                      {skill}
                      {index < candidate.skills.length - 1 && (
                        <span className="ml-3 text-xs text-slate-700">|</span>
                      )}
                    </span>
                  ))}
                </div>

               {/* Row 4: Stats */}
<div className="mt-3 flex flex-wrap items-center text-xs text-slate-500">
  {candidate.details.map((detail, index) => (
    <span key={detail} className="text-xs">
      {detail}
      {index < candidate.details.length - 1 && (
        <span className="ml-3 text-xs text-slate-700"></span>
      )}
    </span>
  ))}
</div>  
                {/* Row 5: View Profile + Heart + Plus */}
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex-1 rounded-lg border border-slate-800 bg-[#f59e0b] px-4 py-2.5 text-sm font-medium text-[#000000] transition hover:border-slate-700 hover:bg-slate-900/50">
                    View Profile
                  </button>
                  <button className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-transparent text-slate-400 transition hover:border-slate-700 hover:text-white">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-transparent text-slate-400 transition hover:border-slate-700 hover:text-white">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>          <div className="mt-5 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800">
              Load More Results
              <Download className="h-3.5 w-3.5" />
            </button>
          </div>

          {belowMatches}
        </section>

        {rightRail}
      </div>
    </div>
  );
};

export default RecruiterMetrics;
