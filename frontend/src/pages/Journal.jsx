import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import redx from '../redx.svg';

const handleSubmit = (e) => {
  e.preventDefault();
};

export const Journal = () => {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-green-100">
      <div className="flex-1 w-[1209px] h-[778px] left-[115px] top-[123px] absolute bg-white rounded-[10px] shadow border border-amber-500" />
      <div className="w-[696px] h-[46px] left-[180px] top-[230px] absolute">
        <span style={{ color: 'black', fontSize: '40px', fontWeight: 'bold', fontFamily: 'Raleway' }}>
          How are{' '}
        </span>
        <span style={{ color: 'amber', fontSize: '40px', fontWeight: 'bold', fontFamily: 'Raleway' }}>you</span>
        <span style={{ color: 'black', fontSize: '40px', fontWeight: 'bold', fontFamily: 'Raleway' }}> feeling?</span>
      </div>
      <div className="w-[696px] h-[46px] left-[180px] top-[167px] absolute text-black text-2xl font-normal font-['Raleway']">
        September 16, 2023
      </div>

      
      <form onSubmit={handleSubmit} >
            <input 
                className="w-[1048px] h-[385px] left-[195px] top-[354px] absolute bg-yellow-100 rounded-[10px] shadow] absolute text-black text-base font-normal font-['Raleway']"
                type="text" 
                placeholder="Start typing here..." 
                id="journal" 
                name="journal" 
                
            />
          <button type="submit">Submit</button>
      </form>
    
     
      <div className="w-[696px] h-[46px] left-[180px] top-[293px] absolute text-black text-base font-normal font-['Raleway']">
        Minimum 100 words.
      </div>
      <div className="px-[7px] py-1 left-[1219px] top-[183px] absolute bg-black rounded-[5px] justify-start items-end gap-1 inline-flex">
        <button className="w-10 text-center text-white text-sm font-medium font-['Raleway'] leading-[21px]">Save</button>
      </div>
      <div className="w-[33.75px] h-[27px] left-[1264px] top-[140px] absolute">
      <button className="w-[33.75px] h-[27px] left-0 top-0 absolute">
        <redx ClassName=""/>
      </button>
        
      </div>
      <div className="w-[76px] h-[31px] left-[1301px] top-[39px] absolute">
        <div className="w-[76px] h-[31px] left-0 top-0 absolute bg-white rounded-[5px] border border-black" />
        <button className="w-[66px] left-[5px] top-[5px] absolute text-center text-black text-sm font-medium font-['Raleway'] leading-[21px]">
          Logout
        </ button>
      </div>
      <div className="w-[358px] h-[47px] left-[12px] top-[23px] absolute">
        <div className="w-[289px] h-[19px] left-[69px] top-[7px] absolute text-amber-500 text-3xl font-bold font-['Raleway']">
          DJ Diary
        </div>
        <img className="w-[55px] h-[47px] left-0 top-0 absolute" src={logo} alt='DJ Diary Logo' />
      </div>
    </div>
  );
};
