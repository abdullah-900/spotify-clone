import React from 'react'
import './LoginCard.scss'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import {BsSpotify} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from './firebase/firebaseConfig'
const LoginPanel = () => {
  
  function generateRandomString(length:number) :string {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  async function generateCodeChallenge(codeVerifier: string | undefined) {
    if (typeof codeVerifier !== 'string') {
      throw new Error('Invalid codeVerifier');
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    function base64encode(arrayBuffer: ArrayBuffer) {
      const uint8Array = new Uint8Array(arrayBuffer);
      const charCodeArray = Array.from(uint8Array);
      return btoa(String.fromCharCode(...charCodeArray))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }
    return base64encode(digest);
  }
  
  async function handleLogin() {
    try {
      const clientId = '8ec0606561a44b8caa93b498245f4508';
      const redirectUri = 'https://spotify-clone-6lj4rgnxw-abdullah-900.vercel.app/';
      
      let codeVerifier = generateRandomString(128);
      
      generateCodeChallenge(codeVerifier).then(codeChallenge => {
        let state = generateRandomString(16);
        let scope = 'user-read-private user-read-email';
      
        localStorage.setItem('code_verifier', codeVerifier);
      
        let args = new URLSearchParams({
          response_type: 'code',
          client_id: clientId,
          scope: scope,
          redirect_uri: redirectUri,
          state: state,
          code_challenge_method: 'S256',
          code_challenge: codeChallenge
        });
      
        window.location.href = 'https://accounts.spotify.com/authorize?' + args;
        const urlParams = new URLSearchParams(window.location.search);
        alert(urlParams)
      });
      
                  
    }catch {
    alert('somthing wrong')
    }
  }
  return (
    <div className='card'>
      <img
          src="/logo.svg"
          width="160"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      <h2>Log in to Spotify</h2>
<div className='d-flex flex-column gap-4'>
<div onClick={handleLogin} className='button' role='button'>
 Login
  </div>
</div>
    </div>
  )
}

export default LoginPanel