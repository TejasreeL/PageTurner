import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthLayout from '../components/auth/AuthLayout';
import { FiAlertCircle } from 'react-icons/fi';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    // Validate password length
    if (formData.password.length < 6) {
      return setError('Password must be at least 6 characters long');
    }

    setLoading(true);
    try {
      await register(formData.username, formData.email, formData.password);
      navigate('/'); // Redirect to home page after successful registration
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthLayout title="Create Account">
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-500 rounded-lg mt-4">
          <FiAlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-pageturner-dark">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-pageturner-beige rounded-md shadow-sm focus:outline-none focus:ring-pageturner-brown focus:border-pageturner-brown"
              placeholder="bookworm123"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-pageturner-dark">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-pageturner-beige rounded-md shadow-sm focus:outline-none focus:ring-pageturner-brown focus:border-pageturner-brown"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-pageturner-dark">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-pageturner-beige rounded-md shadow-sm focus:outline-none focus:ring-pageturner-brown focus:border-pageturner-brown"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-pageturner-dark">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-pageturner-beige rounded-md shadow-sm focus:outline-none focus:ring-pageturner-brown focus:border-pageturner-brown"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pageturner-brown hover:bg-pageturner-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pageturner-brown transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

        <p className="text-center text-sm text-pageturner-dark">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-pageturner-brown hover:text-pageturner-dark">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage; 