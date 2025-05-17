import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

type CampaignCreatorProps = {
  onAddCampaign: (videoUrl: string, campaignType: string) => void;
};

const CampaignCreator = ({ onAddCampaign }: CampaignCreatorProps) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [campaignType, setCampaignType] = useState('Views');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoUrl.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onAddCampaign(videoUrl, campaignType);
      setVideoUrl('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <motion.div 
      className="glass-card rounded-2xl p-6 md:p-8"
      whileHover={{ boxShadow: '0 8px 32px rgba(31, 38, 135, 0.4)' }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="video-url" className="text-white/80 text-sm mb-1 block">
            YouTube Video Link
          </label>
          <input
            id="video-url"
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="input-field"
            placeholder="https://youtube.com/watch?v=..."
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="campaign-type" className="text-white/80 text-sm mb-1 block">
            Campaign Type
          </label>
          <select
            id="campaign-type"
            value={campaignType}
            onChange={(e) => setCampaignType(e.target.value)}
            className="input-field"
            disabled={isSubmitting}
          >
            <option value="Views">Views</option>
            <option value="Engagement">Engagement</option>
            <option value="Subscribers">Subscribers</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="btn-primary w-full flex items-center justify-center"
          disabled={isSubmitting || !videoUrl.trim()}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Setting up campaign...
            </span>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              🚀 Start Campaign
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default CampaignCreator;