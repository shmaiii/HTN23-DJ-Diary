import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Header } from '../components/Header';

export const Journal = () => {
	const [journalContent, setJournalContent] = useState('');
	const navigate = useNavigate();

	const submitJournal = (event) => {
		event.preventDefault();
		console.log('Starting the request');

		const journal = {
			journal: journalContent,
		};

		var spotify;

		axios
			.post(`http://localhost:3001/api/createJournal`, journal)
			.then((response) => {
				console.log(response);
				spotify = {
					url: response.data.playlistUrl,
					mood: response.data.mood,
				};
				navigate('/playlist_complete', { state: spotify });
			});
	};
	return (
		<div className="w-screen h-screen overflow-auto p-6 bg-green-100">
			<Header />
			<div className="flex justify-center items-center">
				<div className="justify-center mx-20 mb-10 p-10 bg-white rounded-[10px] shadow border border-amber-500">
					<div className="text-black text-2xl font-normal font-['Raleway']">
						September 17, 2023
					</div>
					<div className="mt-8">
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
								color: '#FCA807',
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
					<div className="my-3 text-black text-base font-normal font-['Raleway']">
						Minimum 100 words.
					</div>

					<div className="p-4 h-[300px] bg-yellow-100 rounded-[10px] shadow">
						<div className="text-black text-base font-normal font-['Raleway']">
							<TextField
								id="multiline-flexible"
								multiline
								fullWidth
								maxRows={10}
								value={journalContent}
								onChange={(e) => setJournalContent(e.target.value)}
								placeholder="Start typing here"
								className="bg-yellow-100"
							/>
						</div>
					</div>
					<div className="flex justify-center m-5">
						<div className="flex justify-center">
							{' '}
							{/* Added this div */}
							<button
								className="px-10 py-2 transform hover:scale-110 hover:duration-150 ease-in-out text-black font-medium font-['Raleway'] bg-emerald-400 rounded-[5px]"
								variant="contained"
								onClick={submitJournal}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
