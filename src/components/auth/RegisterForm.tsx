import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (password.length < 6) {
      toast.error('Password should be at least 6 characters');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await register(email, password, name);
      
      if (success) {
        toast.success('Account created successfully!');
        navigate('/dashboard');
      } else {
        toast.error('Email already in use');
      }
    } catch (error) {
      toast.error('An error occurred during registration');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          placeholder="Name"
          disabled={isLoading}
        />
      </div>
      
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
        {isLoading ? 'Processing...' : 'Create Account'}
      </button>
    </form>
  );
};

export default RegisterForm;