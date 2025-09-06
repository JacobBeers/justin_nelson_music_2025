import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

function Footer2() {
	return (
		<>
			<div className="bg-[#7b7d78] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-white font-bold text-3xl pb-6">
							Justin Nelson Music
						</p>
						<div className="flex gap-6 pb-5">
							<Link href="https://www.instagram.com/justinnelsonmusic/" target='_blank'><FaInstagram className="text-2xl cursor-pointer text-yellow-600 hover:text-yellow-700" /></Link>
							<Link href="https://www.facebook.com/justinnelsonmusic1" target='_blank'><FaFacebook className="text-2xl cursor-pointer text-blue-600 hover:text-blue-700" /></Link>
							<Link href="https://www.linkedin.com/in/justin-nelson-73652664/" target='_blank'><FaLinkedin className="text-2xl cursor-pointer text-blue-600 hover:text-blue-700" /></Link>
							<Link href="https://www.youtube.com/@justinnelsonmusic6848" target='_blank'><FaYoutube className="text-2xl cursor-pointer text-red-600 hover:text-red-700" /></Link>
						</div>
					</ul>
				</div>
				{/* <div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Stocks
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Futures & Options
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Mutual Funds
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Fixed deposits
						</li>
					</ul>
				</div> */}
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Services</p>
						
                        <Link href="/bio"><li className="text-gray-300 text-md pb-2 font-semibold hover:text-[#f5daf2] cursor-pointer">
							About
						</li></Link>
						<Link href="/lessons"><li className="text-gray-300 text-md pb-2 font-semibold hover:text-[#f5daf2] cursor-pointer">
                            Lessons
						</li></Link>
						<Link href="/contact"><li className="text-gray-300 text-md pb-2 font-semibold hover:text-[#f5daf2] cursor-pointer">
							Contact
						</li></Link>
						{/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li> */}
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Media and Events</p>
						<Link href="/gallery" scroll= {true}><li className="text-gray-300 text-md pb-2 font-semibold hover:text-[#f5daf2] cursor-pointer">
							Gallery
						</li></Link>
						<Link href="https://www.thebash.com/jazz-piano/justin-nelson-music" target='_blank'><li className="text-gray-300 text-md pb-2 font-semibold hover:text-[#f5daf2] cursor-pointer">
							Events
						</li></Link>
						<Link href="https://www.google.com/search?q=justin+nelson+music&oq=justin+nelson+music&aqs=chrome..69i57j35i39j0i512l2j0i22i30j69i60l3.4188j1j7&sourceid=chrome&ie=UTF-8#lrd=0x87df35df7f24d2c7:0xa70f99950641c6d8,1,,," target="_blank"><li className="text-gray-300 text-md pb-2 font-semibold hover:text-[#f5daf2] cursor-pointer">
							Customer Reviews
						</li></Link>
						
					
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-[#7b7d78]">
				<h1 className=" text-white font-semibold">
					© 2025-2026 All Rights Reserved | Justin Nelson Music
					{/* <span className="hover:text-blue-600 font-semibold cursor-pointer">
						streamline{" "}
					</span> */}
				</h1>
			</div>
		</>
	);
}

export default Footer2;