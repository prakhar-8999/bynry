import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Users, Map as MapIcon, Settings } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { ProfileCard } from './components/ProfileCard';
import { MapView } from './components/map/MapView';
import { AdminPanel } from './components/AdminPanel';
import useProfileStore  from './store/profileStore';

function App() {
  const { profiles, selectedProfile, searchQuery, setSelectedProfile, setSearchQuery } = useProfileStore();

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Profile Explorer</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                  <Users size={20} />
                  <span>Profiles</span>
                </Link>
                <Link to="/map" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                  <MapIcon size={20} />
                  <span>Map</span>
                </Link>
                <Link to="/admin" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                  <Settings size={20} />
                  <span>Admin</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={
              <>
                <div className="mb-6">
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProfiles.map(profile => (
                    <ProfileCard
                      key={profile.id}
                      profile={profile}
                      onShowSummary={setSelectedProfile}
                    />
                  ))}
                </div>
              </>
            } />
            <Route path="/map" element={<MapView profile={selectedProfile} />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;