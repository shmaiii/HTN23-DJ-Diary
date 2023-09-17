import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LaunchPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the '/login' route when the button is clicked
    navigate('/userProfile');
  };

  return (
    <div class="h-screen bg-green-100">
  <div class="h-1/2 left-1/4 top-1/4 absolute text-amber-500 text-8xl font-bold font-['Raleway']">DJ Diary</div>
  <div class="w-[696px] h-[46px] left-1/3 top-1/2 absolute text-black text-2xl font-normal font-['Montserrat']">Journal Your Day, Let AI Play Your Way.</div>
  <img class="w-[271px] h-[231px] left-[937px] top-[313px] absolute" src="https://via.placeholder.com/271x231" />
  <div class="w-[696px] h-[46px] left-1/4 top-1/2 absolute text-black text-2xl font-normal font-['Montserrat']">
  <button onClick={handleLoginClick} class="left-[205px] top-[334px] bg-emerald-400 hover:drop-shadow-lg text-black py-2 px-4 rounded">Login with Spotify</button>
  </div>
  
  <div class="w-[245px] h-[29px] left-[607px] top-[906px] absolute text-center text-black text-2xl font-normal font-['Montserrat']">See how it works</div>
  <div class="w-1/8 h-[218px] left-[348px] top-[1014px] absolute bg-white rounded-[10px]"></div>
  <div class="w-[800px] h-[218px] left-[348px] top-[1014px] absolute bg-white rounded-[10px]"></div>
  <div class="w-[800px] h-[218px] left-[348px] top-[1358px] absolute bg-white rounded-[10px]"></div>
  <div class="w-[800px] h-[218px] left-[348px] top-[1702px] absolute bg-white rounded-[10px]"></div>
  <div class="w-[696px] h-[46px] left-[488px] top-[1077px] absolute text-amber-500 text-[40px] font-bold font-['Raleway']">Write a journal entry</div>
  <div class="w-[696px] h-[46px] left-[488px] top-[1421px] absolute text-amber-500 text-[40px] font-bold font-['Raleway']">Customized playlist</div>
  <div class="w-[696px] h-[46px] left-[488px] top-[1765px] absolute text-amber-500 text-[40px] font-bold font-['Raleway']">Save and review!</div>
  <div class="w-[533px] h-[29px] left-[490px] top-[1129px] absolute text-amber-500 text-2xl font-normal font-['Montserrat']">Tell DJ Diary about your day or whatever’s on your mind!</div>
  <div class="w-[533px] h-[29px] left-[490px] top-[1473px] absolute text-amber-500 text-2xl font-normal font-['Montserrat']">DJ Diary provides you with a playlist catered<br/>to your mood.</div>
  <div class="w-[533px] h-[29px] left-[490px] top-[1817px] absolute text-amber-500 text-xl font-normal font-['Montserrat']">The playlist is automatically saved to your<br/>Spotify library and you can rate your enjoyment of it!</div>
  <div class="w-[65px] h-[65px] left-[410px] top-[1082px] absolute">
  </div>
  <div class="w-[65px] h-[65px] left-[402px] top-[1775px] absolute">
  </div>
  <div class="w-[65px] h-[65px] left-[402px] top-[1427px] absolute">
  </div>
  <div class="w-[60px] h-[56.47px] left-[830px] top-[1752px] absolute">
  </div>
  <div class="w-[52.13px] h-[52px] left-[886px] top-[1415px] absolute">
  </div>
  <div class="w-[45.97px] h-[46.99px] left-[892px] top-[1077px] absolute">
  </div>
</div>

    
    // <div class="relative h-32 w-32 ...">
    //   <div class="w-[1440px] h-[1024px] relative bg-green-100"></div>
      
    //    <div class="absolute inset-x-50 top-16 h-16 ...">
    //    <button onClick={handleLoginClick}>Login with Spotify</button>
        
    //      </div>
    //      <h1>Launch Page</h1>
        
    //  </div>
  );
};