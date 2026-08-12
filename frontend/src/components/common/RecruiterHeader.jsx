import { useState } from 'react';
import { 
  Search, 
  Bell, 
  Menu, 
  X,
  Briefcase,
  Users,
  FileText,
  Settings,
  LogOut,
  ChevronDown,
  Plus,
  Bookmark,
  MapPin,
} from 'lucide-react';

const RecruiterHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSavedSearchesOpen, setIsSavedSearchesOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const [currentUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('signarol-current-user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing stored user:', error);
      return null;
    }
  });

  const savedSearches = [
    { id: 1, name: 'Senior React Developers', location: 'Remote', count: 24 },
    { id: 2, name: 'UI/UX Designers', location: 'New York', count: 18 },
    { id: 3, name: 'Backend Engineers', location: 'San Francisco', count: 32 },
    { id: 4, name: 'DevOps Specialists', location: 'Austin', count: 12 },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const displayName = currentUser?.name || currentUser?.email || 'Recruiter';
  const avatarLabel = displayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase() || 'R';

  const handleSignOut = () => {
    try {
      localStorage.removeItem('signarol-current-user');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
    setIsProfileMenuOpen(false);
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0a0a0a] px-4 sm:px-8 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-amber-500" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
            Signarol
          </h1>
        </div>

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
          <div className="flex items-center w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 hover:border-slate-600 transition">
            <Search size={18} className="text-slate-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search candidates by skills, location, exp"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-slate-100 text-sm placeholder-slate-500"
            />
          </div>
        </form>

        {/* Saved Searches */}
        <div className="relative">
          <button
            onClick={() => setIsSavedSearchesOpen(!isSavedSearchesOpen)}
            className="flex items-center gap-2 p-2  text-slate-100 hover:bg-slate-700 transition text-sm"
          >
            <Bookmark size={16} className="text-amber-500" />
            <span>Saved Searches</span>
            <ChevronDown size={14} className="text-slate-400" style={{
              transform: isSavedSearchesOpen ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 0.2s ease'
            }} />
          </button>

          {isSavedSearchesOpen && (
            <div className="absolute top-full right-0 mt-2 min-w-80 max-w-96 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 p-3">
              <div className="flex justify-between items-center pb-2 border-b border-slate-700 mb-2">
                <span className="text-slate-100 font-semibold text-sm">
                  Saved Searches
                </span>
                <button className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-slate-950 rounded text-xs font-medium hover:bg-amber-400 transition">
                  <Plus size={12} />
                  New
                </button>
              </div>
              
              <div className="max-h-72 overflow-y-auto space-y-1">
                {savedSearches.map((search) => (
                  <div
                    key={search.id}
                    className="p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-slate-100 font-medium text-sm">
                          {search.name}
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin size={10} />
                            {search.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={10} />
                            {search.count} candidates
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button className="px-2 py-1 bg-amber-500 text-slate-950 rounded text-xs font-medium hover:bg-amber-400 transition">
                          View
                        </button>
                        <button className="px-2 py-1 bg-slate-700 text-slate-400 rounded text-xs border border-slate-600 hover:bg-slate-600 transition">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="relative flex items-center justify-center w-10 h-10 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 transition">
            <Bell size={18} className="text-slate-100" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-slate-950 text-xs font-bold rounded-full flex items-center justify-center -mr-1 -mt-1">
              3
            </span>
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-slate-800"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center flex-shrink-0">
                {avatarLabel}
              </div>
              <ChevronDown size={14} className="text-slate-400 flex-shrink-0" />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 min-w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 py-2">
                <div className="flex items-center gap-3 border-b border-slate-700 px-3 py-3 mb-1">
                  <div className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {avatarLabel}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-slate-100 font-medium text-sm">
                      {displayName}
                    </div>
                    <div className="text-slate-400 text-xs">
                      Recruiter
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-slate-700 transition text-sm"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-slate-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <form onSubmit={handleSearch} className="md:hidden mt-4">
        <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg px-3 py-2">
          <Search size={18} className="text-slate-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search candidates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-slate-100 text-sm placeholder-slate-500"
          />
          <button type="submit" className="px-3 py-1 bg-amber-500 text-slate-950 font-semibold rounded text-sm hover:bg-amber-400 transition flex-shrink-0">
            Search
          </button>
        </div>
      </form>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 shadow-lg mt-2">
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 px-3 py-3 text-slate-100 hover:bg-slate-800 rounded-lg transition">
              <Briefcase size={18} />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-3 text-slate-100 hover:bg-slate-800 rounded-lg transition">
              <Users size={18} />
              Candidates
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-3 text-slate-100 hover:bg-slate-800 rounded-lg transition">
              <FileText size={18} />
              Jobs
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-3 text-slate-100 hover:bg-slate-800 rounded-lg transition">
              <Settings size={18} />
              Settings
            </a>
            <button onClick={handleSignOut} className="flex items-center gap-3 px-3 py-3 text-red-400 hover:bg-slate-800 rounded-lg transition border-t border-slate-800 mt-2">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default RecruiterHeader;
