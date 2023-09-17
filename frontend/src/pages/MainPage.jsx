import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import Taylor from '../Taylor.svg';
import Conan from '../Conan.svg';
import dj_text from '../DJ_Text.svg';
import { Button } from '@mui/material';

export const MainPage = () => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate('/journal');
	};

	return (
		<div className="overflow-auto w-screen h-screen relative p-6 bg-green-100">
			<Header />
			<div className="flex px-20 pt-10 text-black text-[40px] font-semibold font-['Raleway']">
				Hi Mai!
			</div>
			<div className="flex pl-20 text-2xl py-6">
				<p>
					Begin{' '}
					<span style={{ color: '#FCA807', fontWeight: 'bold' }}>writing</span>{' '}
					a new journal and receive your customized{' '}
					<span style={{ color: '#FCA807', fontWeight: 'bold' }}>playlist</span>{' '}
					tailored to you.
				</p>
			</div>
			<div>
				<div className="flex justify-between">
					<button
						className="px-11 py-2 transform hover:scale-110 hover:duration-150 ease-in-out ml-20 text-black text-xl font-medium font-['Raleway'] bg-emerald-400 rounded-[5px] border px-3 border-emerald-400 py-1"
						onClick={() => navigate('/journal')}
					>
						Start
					</button>
				</div>
				<img
					className="w-60 h-60 right-12 top-60 absolute"
					src={dj_text}
					alt="DJ encouraging your to journal"
				/>
			</div>

			<div className="pl-20 pt-14 pb-6 text-black text-2xl font-semibold font-['Raleway']">
				Previous DJ Mood creations:
			</div>

			<div className="flex flex-initial justify-between mx-20 my-2 h-44 px-5 py-2 bg-white rounded-2xl shadow border border-amber-500 relative">
				<div>
					<p className="text-black text-5xl font-bold font-['Inter']">
						17{' '}
						<span
							style={{
								fontWeight: '400',
								fontFamily: 'Montserrat',
								fontSize: 16,
							}}
						>
							September 2023
						</span>
					</p>

					<dir>
						<div className="flex">
							<div className="h-5 px-2 my-8 mx-2 bg-green-200 rounded-md items-center gap-1.5 inline-flex">
								<div className="text-teal-900 text-xs font-medium font-['Inter'] leading-none">
									Happy
								</div>
							</div>
							<div className="h-5 mx-2 px-2 my-8 bg-purple-200 rounded-md items-center gap-1.5 inline-flex">
								<div className="text-indigo-900 text-xs font-medium font-['Inter'] leading-none">
									Taylor Swift
								</div>
							</div>
							<div className="h-5 px-2 my-8 mx-2 bg-sky-200 rounded-md items-center gap-1.5 inline-flex">
								<div className="text-slate-700 text-xs font-medium font-['Inter'] leading-none">
									Pop
								</div>
							</div>
						</div>
					</dir>
				</div>
				<div>
					<img className="rounded-[10px] x-[500] y-[120]" src={Taylor} />
					<button
						className="transform hover:scale-110 hover:duration-150 ease-in-out absolute bottom-2 right-5 py-1 px-3 bg-black rounded-[5px] text-center text-white text-sm font-bold font-['Raleway'] leading-[21px]"
						onClick={() => navigate('/mainPage')}
					>
						Read journal
					</button>
				</div>
			</div>

			<div className="flex flex-initial justify-between mx-20 my-2 h-44 px-5 py-2 bg-white rounded-2xl shadow border border-amber-500 relative">
				<div>
					<p className="text-black text-5xl font-bold font-['Inter']">
						16{' '}
						<span
							style={{
								fontWeight: '400',
								fontFamily: 'Montserrat',
								fontSize: 17,
							}}
						>
							September 2023
						</span>
					</p>

					<dir>
						<div className="flex">
							<div className="h-5 px-2 my-8 mx-2 bg-green-200 rounded-md items-center gap-1.5 inline-flex">
								<div className="text-teal-900 text-xs font-medium font-['Inter'] leading-none">
									Sad
								</div>
							</div>
							<div className="h-5 mx-2 px-2 my-8 bg-purple-200 rounded-md items-center gap-1.5 inline-flex">
								<div className="text-indigo-900 text-xs font-medium font-['Inter'] leading-none">
									Conan Gray
								</div>
							</div>
							<div className="h-5 px-2 my-8 mx-2 bg-sky-200 rounded-md items-center gap-1.5 inline-flex">
								<div className="text-slate-700 text-xs font-medium font-['Inter'] leading-none">
									Indie
								</div>
							</div>
						</div>
					</dir>
				</div>
				<div>
					<img className="rounded-[10px] x-[500] y-[120]" src={Conan} />
					<button
						className="transform hover:scale-110 hover:duration-150 ease-in-out absolute bottom-2 right-5 py-1 px-3 bg-black rounded-[5px] text-center text-white text-sm font-bold font-['Raleway'] leading-[21px]"
						onClick={() => navigate('/mainPage')}
					>
						Read journal
					</button>
				</div>
			</div>

			<button
				className="transform hover:scale-110 hover:duration-150 ease-in-out float-right my-3 mr-20 py-1 px-3 bg-black rounded-[5px] text-center text-white text-sm font-bold font-['Raleway'] leading-[21px]"
				onClick={() => navigate('/mainPage')}
			>
				More
			</button>
		</div>
	);
};
