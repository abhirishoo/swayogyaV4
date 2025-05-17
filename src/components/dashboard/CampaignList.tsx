import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Clock } from 'lucide-react';

type Campaign = {
  id: string;
  videoUrl: string;
  campaignType: string;
  status: 'Active' | 'Completed';
  createdAt: string;
  views: number;
};

type CampaignListProps = {
  campaigns: Campaign[];
};

const CampaignList = ({ campaigns }: CampaignListProps) => {
  if (campaigns.length === 0) {
    return (
      <div className="glass-card rounded-xl p-8 text-center">
        <p className="text-white/70">No campaigns yet. Create your first campaign above!</p>
      </div>
    );
  }
  
  // Extract YouTube video ID from URL
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-4">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={campaign.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="glass-card rounded-xl p-4 md:p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Thumbnail */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="relative rounded-lg overflow-hidden w-full md:w-36 h-20 bg-dark-800">
                {getVideoId(campaign.videoUrl) ? (
                  <img 
                    src={`https://img.youtube.com/vi/${getVideoId(campaign.videoUrl)}/mqdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Youtube className="w-8 h-8 text-secondary-400" />
                  </div>
                )}
              </div>
            </div>
            
            {/* Campaign info */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="font-semibold text-md mb-1 truncate pr-4">
                    {getVideoId(campaign.videoUrl) 
                      ? `YouTube Campaign`
                      : `Campaign ${campaign.id.slice(-4)}`}
                  </h4>
                  <div className="flex items-center text-sm text-white/60 mb-2">
                    <span className="mr-4">{campaign.campaignType}</span>
                    <span>{formatDate(campaign.createdAt)}</span>
                  </div>
                </div>
                
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="mr-4 flex items-center">
                    {campaign.status === 'Active' ? (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-accent-400 mr-1" />
                        <span className="text-accent-400 text-sm">Active</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-green-500 text-sm">Completed</span>
                      </div>
                    )}
                  </div>
                  
                  <a
                    href={campaign.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white/70" />
                  </a>
                </div>
              </div>
              
              <div className="mt-2 pt-2 border-t border-white/10 flex items-center">
                <div className="text-sm">
                  <span className="text-white/60">Views: </span>
                  <span className="font-semibold">{campaign.views}</span>
                </div>
                
                <div className="ml-6 flex-grow">
                  <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(campaign.views / 10, 100)}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full gradient-bg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CampaignList;