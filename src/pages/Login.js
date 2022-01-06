import React, { useState } from 'react';
import LoginService from "../services/login";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [incorrect, setIncorrect] = useState(false);

    const handleSubmit = async () => {
      if (!username || !password) {
          console.log('missing fields');
      }  else {
         const response = await LoginService.login({
             username,
             password
         });

         if (response.data.success) {
             setIncorrect(false);
             setLoginSuccess(true);
         } else {
             setIncorrect(true);
         }
      }
    };

    return (
        <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96">
                {loginSuccess ? (
                    <p>
                        Congratulations on completing Cicada2022! You won't be selected as an elite hacker to work for a secret agency, but you'll get the gratification of earning nothing. Yes, that was it. The journey. That's all you get. Pain. Death.
                    </p>
                ) : (
                    <>
                        <p>
                            Congratulations on reaching the final chapter of Cicada2022! We have one more set of problems,
                            but you must wait until tomorrow’s presentation to complete the CTF… or not! Find a tool that
                            can help you finish!
                        </p>
                        <br/>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                        {incorrect ? (
                            <>
                                <br/>
                                <p className="text-red-500">
                                    Incorrect Username or Password
                                </p>
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Login;