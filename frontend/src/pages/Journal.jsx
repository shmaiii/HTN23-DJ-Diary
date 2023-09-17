import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Journal = () => {
	return (
		<div className="w-screen h-screen relative bg-green-100">
			<div className="flex-1 w-[1209px] h-[778px] left-[115px] top-[123px] absolute bg-white rounded-[10px] shadow border border-amber-500" />
			<div className="w-[696px] h-[46px] left-[180px] top-[230px] absolute">
				<span
					style={{
						color: 'black',
						fontSize: '40px',
						fontWeight: 'bold',
						fontFamily: 'Raleway',
					}}
				>
					How are{' '}
				</span>
				<span
					style={{
						color: 'amber',
						fontSize: '40px',
						fontWeight: 'bold',
						fontFamily: 'Raleway',
					}}
				>
					you
				</span>
				<span
					style={{
						color: 'black',
						fontSize: '40px',
						fontWeight: 'bold',
						fontFamily: 'Raleway',
					}}
				>
					{' '}
					feeling?
				</span>
			</div>
			<div className="w-[696px] h-[46px] left-[180px] top-[167px] absolute text-black text-2xl font-normal font-['Raleway']">
				September 16, 2023
			</div>
			<div className="w-[1048px] h-[385px] left-[195px] top-[354px] absolute bg-yellow-100 rounded-[10px] shadow" />
			<div className="w-[696px] h-[46px] left-[223px] top-[388px] absolute text-black text-base font-normal font-['Raleway']">
				Start typing here...
			</div>
			<div className="w-[696px] h-[46px] left-[180px] top-[293px] absolute text-black text-base font-normal font-['Raleway']">
				Minimum 100 words.
			</div>
			<div className="px-[7px] py-1 left-[1219px] top-[183px] absolute bg-black rounded-[5px] justify-start items-end gap-1 inline-flex">
				<div className="w-10 text-center text-white text-sm font-medium font-['Inter'] leading-[21px]">
					Save
				</div>
			</div>
			<div className="w-[33.75px] h-[27px] left-[1264px] top-[140px] absolute">
				<div className="w-[33.75px] h-[27px] left-0 top-0 absolute bg-red-600 rounded-[5px]" />
				<div className="w-[20.32px] h-[22.18px] left-[6.75px] top-[3.38px] absolute">
					<div className="w-[6.51px] h-[23.62px] left-[4.95px] top-0 absolute origin-top-left rotate-[139.41deg] bg-white rounded-[0.50px]" />
					<div className="w-[6.51px] h-[23.62px] left-[15.37px] top-0 absolute origin-top-left rotate-[40.59deg] bg-white rounded-[0.50px]" />
				</div>
			</div>
			<div className="w-[76px] h-[31px] left-[1301px] top-[39px] absolute">
				<div className="w-[76px] h-[31px] left-0 top-0 absolute bg-white rounded-[5px] border border-black" />
				<div className="w-[66px] left-[5px] top-[5px] absolute text-center text-black text-sm font-medium font-['Inter'] leading-[21px]">
					Logout
				</div>
			</div>
			<div className="w-[358px] h-[47px] left-[12px] top-[23px] absolute">
				<div className="w-[289px] h-[19px] left-[69px] top-[7px] absolute text-amber-500 text-3xl font-bold font-['Raleway']">
					DJ Diary
				</div>
				<img
					className="w-[55px] h-[47px] left-0 top-0 absolute"
					src="https://via.placeholder.com/55x47"
				/>
			</div>
		</div>
	);
};
