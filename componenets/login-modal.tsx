'use client'

import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase/setup";

interface Props {
    isVisible: boolean,
}

const LoginModal: React.FC<Props> = ({
    isVisible
}) => {
    if (!isVisible) return null
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false); 
    const [error, setError] = useState(null);

    const handleAuthAction = async () => {
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            window.location.href = "/admin"
        } catch (e) {
            console.error(e)
        }
    };

    const googleLogin = async() => {
                try {
                    await signInWithPopup(auth, googleProvider)
                    window.location.href = "/admin"
                } catch(e) {
                    console.error(e)
                }
            }
    return (
        <div className="mx-auto mt-24 max-w-md p-4 border border-gray-300 rounded-lg">
            <h1 className="font-semibold text-2xl mb-4">{isSignUp ? "Sign Up" : "Log In"}</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <label htmlFor="email" className="font-medium">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-black mb-4" />
            <label htmlFor="password" className="font-medium">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-black mb-4" />
            <div className="flex items-center justify-between mb-4">
                <button onClick={handleAuthAction} className="bg-black text-white p-2 rounded-lg">
                    {isSignUp ? "Sign Up" : "Log In"}
                </button>
                <p className="text-sm">
                    {isSignUp
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    <span className="text-blue-500 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? "Log In" : "Sign Up"}
                    </span>
                </p>
            </div>
            <div className="text-center">
                <p className="text-sm">or</p>
                <div className="flex items-center border border-black p-2 rounded-lg cursor-pointer mt-4">
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-6 h-6 ml-2" alt="Google Logo" />
                    <span className="font-bold ml-4" onClick={googleLogin}>Continue with Google</span>
                </div>
            </div>
        </div>
    )
}

export default LoginModal