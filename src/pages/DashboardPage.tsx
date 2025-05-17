import { useState } from 'react';
import { LogOut, Search, ChevronDown } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [budget, setBudget] = useState('100');
  const [views, setViews] = useState('10,000');
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoUrl.trim()) {
      toast.error('Please enter a video URL');
      return;
    }
    
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    if (!youtubeRegex.test(videoUrl)) {
      toast.error('Please enter a valid YouTube URL');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const videoId = videoUrl.split('v=')[1]?.split('&')[0];
      if (!videoId) throw new Error('Invalid video URL');
      
      // Fetch video details from YouTube API (simulated)
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics,contentDetails&key=AIzaSyCFRiSa9vTqdKUCUmu3opWafj2wJzoTXuo`);
      const data = await response.json();
      
      setSelectedVideo({
        id: videoId,
        title: data?.items?.[0]?.snippet?.title || 'YouTube Video',
        author: data?.items?.[0]?.snippet?.channelTitle || 'YouTube Channel',
        views: data?.items?.[0]?.statistics?.viewCount ? `${parseInt(data.items[0].statistics.viewCount).toLocaleString()} views` : '0 views',
        duration: '00:00',
        thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
      });
      
    } catch (error) {
      toast.error('Failed to fetch video details');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleStartCampaign = () => {
    toast.success('Campaign started successfully!');
    setStep(1);
    setSelectedVideo(null);
    setVideoUrl('');
    setBudget('100');
    setViews('10,000');
  };
  
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <header className="bg-black text-white">
        <div className="container mx-auto py-3 px-4 flex justify-between items-center">
          <h1 className="text-xl font-medium">PromoteMe</h1>
          <div className="relative">
            <button 
              className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition-colors"
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              My Account <ChevronDown className="w-4 h-4" />
            </button>
            
            {showAccountMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 text-gray-800">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Promote Video
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Change Password
                </button>
                <button 
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex-1 flex items-center">
              <div className={`w-8 h-8 rounded-full ${step >= 1 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center font-medium`}>
                1
              </div>
              <div className="ml-3">
                <span className={step >= 1 ? 'text-gray-900' : 'text-gray-600'}>Video</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className="h-full bg-pink-600" style={{ width: step > 1 ? '100%' : '0%' }} />
              </div>
            </div>
            
            <div className="flex-1 flex items-center">
              <div className={`w-8 h-8 rounded-full ${step >= 2 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center font-medium`}>
                2
              </div>
              <div className="ml-3">
                <span className={step >= 2 ? 'text-gray-900' : 'text-gray-600'}>Targeting</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className="h-full bg-pink-600" style={{ width: step > 2 ? '100%' : '0%' }} />
              </div>
            </div>
            
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full ${step >= 3 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center font-medium`}>
                3
              </div>
              <div className="ml-3">
                <span className={step >= 3 ? 'text-gray-900' : 'text-gray-600'}>Budget</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {step === 1 && (
              <>
                <h2 className="text-xl font-medium text-gray-900 mb-6">Select your YouTube video</h2>
                
                <form onSubmit={handleSearch} className="mb-8">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <Search className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                      <input
                        type="text"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        className="w-full pl-16 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900"
                        placeholder="https://www.youtube.com/watch?v=..."
                        disabled={isLoading}
                      />
                    </div>
                    <button 
                      type="submit"
                      className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg font-medium hover:bg-[#43A047] transition-colors disabled:opacity-50"
                      disabled={isLoading}
                    >
                      Search
                    </button>
                  </div>
                </form>
                
                {selectedVideo && (
                  <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={selectedVideo.thumbnail}
                        alt={selectedVideo.title}
                        className="w-48 rounded"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
                        {selectedVideo.duration}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{selectedVideo.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">by {selectedVideo.author}</p>
                      <p className="text-sm text-gray-500 mt-1">{selectedVideo.views}</p>
                      <button 
                        className="mt-4 px-6 py-2 bg-[#4CAF50] text-white rounded font-medium hover:bg-[#43A047] transition-colors"
                        onClick={handleNext}
                      >
                        SELECT
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-medium text-gray-900 mb-6">Choose your target audience</h2>
                <div className="mb-8">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Optimized targeting is set for you</h3>
                    <p className="text-gray-600 mb-4">Our technology will automatically optimize your campaign for the best results.</p>
                    <button 
                      className="text-pink-600 hover:text-pink-700 font-medium"
                      onClick={() => toast.error('Manual targeting coming soon!')}
                    >
                      Or add targeting manually
                    </button>
                  </div>
                  {selectedVideo && (
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900 mb-3">Selected Video</h4>
                      <div className="flex items-center gap-4">
                        <img 
                          src={selectedVideo.thumbnail}
                          alt={selectedVideo.title}
                          className="w-32 rounded"
                        />
                        <div>
                          <h5 className="font-medium text-gray-900">{selectedVideo.title}</h5>
                          <p className="text-sm text-gray-600">{selectedVideo.author}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  className="px-6 py-2 bg-[#4CAF50] text-white rounded font-medium hover:bg-[#43A047] transition-colors"
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-xl font-medium text-gray-900 mb-6">Choose your budget</h2>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-gray-700 mb-2">Budget</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Estimated Views</label>
                    <input
                      type="text"
                      value={views}
                      onChange={(e) => setViews(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900"
                      disabled
                    />
                  </div>
                  {selectedVideo && (
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900 mb-3">Selected Video</h4>
                      <div className="flex items-center gap-4">
                        <img 
                          src={selectedVideo.thumbnail}
                          alt={selectedVideo.title}
                          className="w-32 rounded"
                        />
                        <div>
                          <h5 className="font-medium text-gray-900">{selectedVideo.title}</h5>
                          <p className="text-sm text-gray-600">{selectedVideo.author}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  className="px-6 py-2 bg-[#4CAF50] text-white rounded font-medium hover:bg-[#43A047] transition-colors"
                  onClick={handleStartCampaign}
                >
                  Start Campaign
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;