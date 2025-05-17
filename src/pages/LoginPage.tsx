import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || (!isLogin && !name)) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (password.length < 6) {
      toast.error('Password should be at least 6 characters');
      return;
    }
    
    setIsLoading(true);
    
    try {
      if (isLogin) {
        const success = await login(email, password);
        if (success) {
          toast.success('Welcome back!');
          navigate('/dashboard');
        } else {
          toast.error('Invalid credentials');
        }
      } else {
        const success = await register(email, password, name);
        if (success) {
          toast.success('Account created successfully!');
          navigate('/dashboard');
        } else {
          toast.error('Email already in use');
        }
      }
    } catch (error) {
      toast.error('An error occurred');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="section-title">
            PROMOTE YOUR VIDEO TO MILLIONS
          </h1>
          <p className="section-subtitle">
            Get more YouTube views on your videos. Sign up now and get seen.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                disabled={isLoading}
              />
            )}
            
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              disabled={isLoading}
            />
            
            <input
              type="password"
              placeholder={isLogin ? "Enter Password" : "Create Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              disabled={isLoading}
            />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                type="submit" 
                className="btn-primary flex-1"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'START CAMPAIGN'}
              </button>
              
              <button 
                type="button" 
                className="btn-facebook flex-1"
                onClick={() => toast.error('Facebook login is not available yet')}
                disabled={isLoading}
              >
                <Facebook className="w-5 h-5 mr-2" />
                Sign in with FB
              </button>
            </div>

            <button
              type="button"
              className="text-white/70 hover:text-white transition-colors text-sm w-full"
              onClick={() => setIsLogin(!isLogin)}
              disabled={isLoading}
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>
          </form>
        </div>
      </div>

      <section className="how-it-works">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">HOW IT WORKS</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="step-card">
              <div className="step-number">1.</div>
              <h3 className="step-title">START YOUR CAMPAIGN</h3>
              <p className="step-description">
                Sign up and search for your video. Choose budget and target audience. Done!
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2.</div>
              <h3 className="step-title">GET SEEN</h3>
              <p className="step-description">
                Distribute your YouTube video through our trusted publisher network of blogs, websites, apps and social networks.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3.</div>
              <h3 className="step-title">GAIN POPULARITY</h3>
              <p className="step-description">
                Right people discover your video. Gain popularity and monitor real time results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">ADVERTISERS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Promote YouTube</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">PROMOLTA</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Testimonials</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Terms & Privacy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Refund Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">PUBLISHERS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Join Our Network</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">BLOG</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Promotion Tips</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-white/70 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/70">Copyright © Promolta 2025</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LoginPage;