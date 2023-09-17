import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

export const MainPage = () => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate('/journal');
	};

	return (
		<div className="w-screen h-screen p-4 bg-green-100">
			<Header />
			<div className="w-[806px] h-[175px] left-[121px] top-[670px] absolute bg-white rounded-[20px] shadow border border-green-500" />
			<div className="w-[806px] h-[175px] left-[121px] top-[670px] absolute bg-white rounded-[20px] shadow border border-green-500" />
			<div className="w-[806px] h-[175px] left-[121px] top-[670px] absolute bg-white rounded-[20px] shadow border border-amber-500" />
			<div className="w-[121px] h-[31px] left-[781px] top-[806px] absolute">
				<div className="w-[121px] h-[31px] left-0 top-0 absolute bg-black rounded-[5px]" />
				<div className="w-[110px] left-[6px] top-[5px] absolute text-center text-white text-sm font-bold font-['Raleway'] leading-[21px]">
					Read journal
				</div>
			</div>
			<div className="h-5 px-2 left-[150px] top-[764px] absolute bg-green-200 rounded-md justify-start items-center gap-1.5 inline-flex">
				<div className="text-teal-900 text-xs font-medium font-['Inter'] leading-none">
					Sad
				</div>
			</div>
			<div className="h-5 px-2 left-[217px] top-[764px] absolute bg-purple-200 rounded-md justify-start items-center gap-1.5 inline-flex">
				<div className="text-indigo-900 text-xs font-medium font-['Inter'] leading-none">
					Conan Gray
				</div>
			</div>
			<div className="h-5 px-2 left-[324px] top-[764px] absolute bg-sky-200 rounded-md justify-start items-center gap-1.5 inline-flex">
				<div className="text-slate-700 text-xs font-medium font-['Inter'] leading-none">
					Pop
				</div>
			</div>
			<div className="h-5 px-2 left-[324px] top-[764px] absolute bg-sky-200 rounded-md justify-start items-center gap-1.5 inline-flex">
				<div className="text-slate-700 text-xs font-medium font-['Inter'] leading-none">
					Indie
				</div>
			</div>
			<div className="w-[696px] h-[46px] left-[124px] top-[120px] absolute text-black text-[40px] font-semibold font-['Raleway']">
				Hi Mai!
			</div>
			<div className="w-[221px] h-[126px] left-[851px] top-[287px] absolute">
				<div className="w-52 h-[46px] left-[13px] top-[13px] absolute text-black text-xl font-normal font-['Raleway']">
					I’m DJ, your personalized
					<br />
					AI music assistant.
				</div>
			</div>
			<div className="w-[696px] h-[46px] left-[124px] top-[385px] absolute text-black text-2xl font-semibold font-['Raleway']">
				Previous DJ Mood creations:{' '}
			</div>
			<div className="w-[1038px] h-[46px] left-[124px] top-[194px] absolute">
				<span className="text-black text-2xl font-normal font-['Montserrat']">
					Begin
				</span>
				<span className="text-emerald-400 text-2xl font-bold font-['Montserrat']">
					{' '}
				</span>
				<span className="text-amber-500 text-2xl font-bold font-['Montserrat']">
					writing
				</span>
				<span className="text-emerald-400 text-2xl font-bold font-['Montserrat']">
					{' '}
				</span>
				<span className="text-black text-2xl font-normal font-['Montserrat']">
					a new journal and receive your customized{' '}
				</span>
				<span className="text-amber-500 text-2xl font-bold font-['Montserrat']">
					playlist
				</span>
				<span className="text-black text-2xl font-bold font-['Montserrat']">
					{' '}
				</span>
				<span className="text-black text-2xl font-normal font-['Montserrat']">
					tailored to you.
				</span>
			</div>
			<div className="w-[204px] h-[46px] left-[204px] top-[695px] absolute text-black text-base font-normal font-['Montserrat']">
				September 2023
			</div>
			<div className="w-[204px] h-[46px] left-[204px] top-[695px] absolute text-black text-base font-normal font-['Montserrat']">
				September 2023
			</div>
			<div className="w-[67px] h-8 left-[141px] top-[679px] absolute text-black text-5xl font-bold font-['Inter']">
				01
			</div>
			<div className="w-[76px] h-[31px] left-[851px] top-[889px] absolute">
				<div className="w-[76px] h-[31px] left-0 top-0 absolute bg-black rounded-[5px]" />
				<div className="w-[66px] left-[5px] top-[5px] absolute text-center text-white text-sm font-bold font-['Raleway'] leading-[21px]">
					More{' '}
				</div>
			</div>
			<img
				className="w-[500px] h-[120px] left-[402px] top-[680px] absolute rounded-[10px]"
				src="https://via.placeholder.com/500x120"
			/>
			<img
				className="w-[275px] h-[235px] left-[1026px] top-[413px] absolute"
				src="https://via.placeholder.com/275x235"
			/>
			<img
				className="w-24 h-24 left-[672px] top-[464px] absolute"
				src="https://via.placeholder.com/96x96"
			/>
		</div>
	);
};
