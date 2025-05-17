import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      
      if (success) {
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      toast.error('An error occurred during login');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          placeholder="Email"
          disabled={isLoading}
        />
      </div>
      
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          placeholder="Password"
          disabled={isLoading}
        />
      </div>
      
      <button 
        type="submit" 
        className="btn-primary w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;