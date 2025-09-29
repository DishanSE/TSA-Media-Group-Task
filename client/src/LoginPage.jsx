import { useState } from 'react';
import { Eye, EyeOff, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    emailOrUsername: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Login failed ❌");
            } else {
                alert("✅ " + data.message);
                console.log("User:", data.user);
                navigate("/success");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    };


    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-md">
                {/* Logo and header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
                        <span className="text-white font-bold text-xl">TSA</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400">Sign in to your account to continue</p>
                </div>

                {/* Social login buttons */}
                <div className="space-y-3 mb-8">
                    <button
                        onClick={() => handleSocialLogin('Google')}
                        className="w-full flex items-center justify-center px-4 py-3 border border-gray-600 rounded-xl text-white bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                    >
                        <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    <button
                        onClick={() => handleSocialLogin('GitHub')}
                        className="w-full flex items-center justify-center px-4 py-3 border border-gray-600 rounded-xl text-white bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                    >
                        <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        Continue with GitHub
                    </button>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-slate-900 text-gray-400">or continue with email</span>
                    </div>
                </div>

                {/* Login form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-gray-700/50"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 pr-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-gray-700/50"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                            />
                            <span className="ml-2 text-sm text-gray-300">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                Signing in...
                            </div>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                {/* Sign up link */}
                <p className="mt-8 text-center text-gray-400">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                        Sign up now
                    </a>
                </p>

                {/* Footer */}
                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>&copy; 2025 AR Dishan. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Support</a>
                    </div>
                </div>
            </div>
        </div>
    );
}