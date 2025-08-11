import { ArrowLeft, ArrowRight, BookmarkPlus, ChevronDown, ChevronUp, CloudUpload, EllipsisVertical, Globe, Mail, MapPin, MonitorSmartphone, Share2, ShieldCheck, Star } from "lucide-react";
import React, { useState } from "react";
import RatingSummary from "./RatingSummary";
import { usePWAInstall } from './hooks/usePWAInstall';


const reviews = [
  {
    name: "Ava T.",
    date: "July 30, 2025",
    content:
      "Omegle is a fun way to meet random people. I ended up chatting with someone from Japan about anime for over an hour. Really cool experience!",
    exclusivity: true,
  },
  {
    name: "Daniel K.",
    date: "July 29, 2025",
    content:
      "Great platform if you just want to have spontaneous conversations. Though sometimes it disconnects randomly, it's still entertaining.",
    exclusivity: false,
  },
  {
    name: "Sasha M.",
    date: "July 28, 2025",
    content:
      "I used Omegle during a boring evening, and it turned into one of the most interesting nights I've had in months. Totally unpredictable and hilarious!",
    exclusivity: true,
  },
  {
    name: "Leo V.",
    date: "July 28, 2025",
    content:
      "I made a friend from another country thanks to Omegle! We now follow each other on Instagram and chat daily. It's not just random—it can be meaningful too.",
    exclusivity: false,
  },
  {
    name: "Priya R.",
    date: "July 27, 2025",
    content:
      "Sometimes creepy, sometimes awesome. You never know who you'll meet, but that's what makes Omegle fun. Use with caution, though!",
    exclusivity: false,
  },
  {
    name: "Elijah H.",
    date: "July 27, 2025",
    content:
      "I love the anonymity on Omegle. It gives you the freedom to be yourself—or someone else—without judgment.",
    exclusivity: true,
  },
  {
    name: "Nina L.",
    date: "July 26, 2025",
    content:
      "Omegle helped me improve my English by chatting with native speakers. It’s a great way to practice languages informally.",
    exclusivity: true,
  },
  {
    name: "Arjun B.",
    date: "July 26, 2025",
    content:
      "Some chats are weird, some are great. If you're open-minded and just looking for something spontaneous, Omegle is worth a try!",
    exclusivity: false,
  },
];



export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { installApp, isInstallable } = usePWAInstall();


  return (
    <div className="bg-white text-black p-6 max-w-5xl mx-auto font-sans space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src="/Omegle_Icon.webp"
          alt="Omegle Icon"
          className="w-16 h-16 border shadow-xl rounded-xl"
        />
        <div>
          <h1 className="text-lg font-bold">Omegele</h1>
          <p className="text-sm text-gray-600">Omegle Official</p>
          <p className="text-xs text-gray-500">Contains no-ads · In-app purchases</p>
        </div>
      </div>

      {/* Ratings and Install */}
      <div className="flex justify-between items-center  py-1">
        <div className="text-center border-r pr-2">
          <p className="text-[12px] font-bold">4.9★</p>
          <p className="text-[10px] text-gray-500">3.2K reviews</p>
        </div>
        <div className="text-center border-r pr-2">
          <p className="text-[12px] font-bold">1M+</p>
          <p className="text-[10px] text-gray-500">Downloads</p>
        </div>
        <div className="text-center border-r pr-2 ">
          <div className="flex flex-col items-center">
            < ShieldCheck className="w-4 h-4" />
            <p className="text-[10px] font-semibold text-gray-500">Editor's Choice</p>
          </div>
        </div>
        <div className="text-center">
          <div className="border-2 inline-block border-black ">
            <p className="text-[10px] font-bold">18+</p>
          </div>
          <p className="text-[10px] text-gray-500">Rated for 18+</p>
        </div>

      </div>
      <div>
        <div className="flex items-center justify-center">
          {isInstallable && (
            <button
              type="button"
              onClick={installApp}
              className="bg-green-600 w-full text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Install
            </button>
          )}

        </div>

        <div className="flex items-center justify-center mt-2">
          <p className="text-[12px] font-semibold text-green-600 flex gap-2 items-center">
            <BookmarkPlus className="w-4 h-4" />
            Add To Wishlist
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-1">
        <MonitorSmartphone className="w-4 h-4 text-gray-500" />
        <span className="text-xs text-gray-500">
          This app is available for all your devices.
        </span>
      </div>


      {/* Screenshots */}
      <div className="flex gap-3 overflow-x-auto">
        <img
          src={`/img/1.png`}
          alt={`Screenshot 1`}
          className="rounded-lg shadow-md w-[100px] h-[204px] shadow-md border border-gray-200 "
        />
          <img
            src={`/img/2.png`}
            alt={`Screenshot 2`}
            className="rounded-lg shadow-md w-[100px] h-[204px] shadow-md border border-gray-200 "
            />
          <img
            src={`/img/3.png`}
            alt={`Screenshot 3`}
            className="rounded-lg shadow-md w-[100px] h-[204px] shadow-md border border-gray-200 "
          />
          <img
            src={`/img/4.png`}
            alt={`Screenshot 4`}
            className="rounded-lg shadow-md w-[100px] h-[204px] shadow-md border border-gray-200 "
          />
          <img
            src={`/img/5.jpg`}
            alt={`Screenshot 5`}
            className="rounded-lg shadow-md w-[100px] h-[204px] shadow-md border border-gray-200 "
          />          
      </div>

      {/* About Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-md font-semibold mb-2">About this App</h2>
          <ArrowRight className="w-4 h-4 " />
        </div>
        <p className="text-gray-700 text-[12px]">
          Open the world of happiness! Download our app, register at the casino, and deposit. Enjoy the fun of gaming and win! Fantastic bonuses await for the first 4 deposits.
        </p>
      </div>

      {/* updated on */}
      <div>
        <div className="mb-2">
          <p className="text-xs font-semibold mb-2">Updated on</p>
          <p className="text-[12px] text-gray-500">July 28, 2025</p>
        </div>
        <div className="flex mt-5">
          <p className="border text-gray-500  rounded-xl mx-1 px-2">Dating</p>
          <p className="border text-gray-500  rounded-xl mx-1 px-2">Video Call</p>
          <p className="border text-gray-500  rounded-xl mx-1 px-2">Chats</p>
        </div>
      </div>

      {/* data safety */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-md font-semibold mb-2">Data safety</h2>
          <ArrowRight className="w-4 h-4 " />
        </div>
        <p className="text-gray-700 text-[12px]">
          Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.
        </p>
        <div className=" mt-2  border rounded-lg p-2">
          <div className="flex gap-4  items-center p-2 ">
            <Share2 className="text-gray-500 w-5 h-5" />
            <div >
              <p className="text-xs text-gray-500 font-semibold">No data shared with third parties</p>
              <p className="text-[12px] text-gray-500"><u>Learn More</u> about how developers declare shearing  </p>
            </div>
          </div>
          <div className="flex gap-4  items-center p-2 ">
            <CloudUpload className="text-gray-500 w-5 h-5" />
            <div >
              <p className="text-xs text-gray-500 font-semibold">No data collected</p>
              <p className="text-[12px] text-gray-500"><u>Learn More</u> about how developers declare collection  </p>
            </div>
          </div>
          <div>
            <p className="text-green-600 text-sm font-semibold p-2  pl-4">See details</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-md font-semibold mb-2">Rating and reviews</h2>
          <ArrowRight className="w-4 h-4 " />
        </div>
        <div className="mt-5 mb-5">
          <div className="flex items-center w-full">
            <RatingSummary
              average={4.9}
              counts={[80, 15, 0, 2, 3]} // [5-star, 4-star, ..., 1-star]
            />
          </div>
          <p className="text-[12px] text-gray-500">3.2K reviews</p>
        </div>
        <div className="space-t-6 mt-4">
          {reviews.map((review, idx) => (
            <div key={idx} className=" pb-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <p className="w-6 h-6 flex items-center justify-center rounded-full bg-red-200 text-red-800 font-bold text-sm">{review.name[0]}</p>
                  <p className="font-medium text-sm text-gray-800">{review.name} </p>
                </div>
                <EllipsisVertical className="w-4 h-4 text-gray-500" />
              </div>
              <div className="mt-3 flex  items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-green-600 stroke-green-600"
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-xs">· {review.date}</span>
              </div>
              <p className="text-gray-700 text-[12px] mt-1">{review.content}</p>
              <p className="text-gray-500 text-[12px] mb-2 mt-2">24 people found this review helpful</p>
              <p className="text-[12px] text-gray-500 mt-1">Did you find this helpful? <button className="border rounded-lg px-2  ml-1">Yes</button>  <button className="border rounded-lg px-2  ml-1">No</button></p>
              {review.exclusivity && (
                <div className="mt-2 p-3 rounded-md bg-gray-100 border border-gray-200">
                  {/* Top row: label and date */}
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-800 font-medium">Omegle Official</p>
                    <span className="text-xs text-gray-500">· {review.date}</span>
                  </div>

                  {/* Feedback note */}
                  <p className="mt-1 text-xs text-gray-600">
                    Thank you for your feedback
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className="mt-2">
            <p className="text-green-600 text-sm font-semibold ">See details</p>
          </div>
          <div className="mt-2">
            <p className=" text-sm font-semibold  ">What's next</p>
          </div>

          <div className="mt-2 mb-5">
            <div className="w-full max-w-sm mx-auto">
              {/* Header */}
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p className="text-sm text-gray-800 font-medium">Developers Contact</p>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-gray-700" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-700" />
                )}
              </div>

              {/* Dropdown content */}
              {isOpen && (
                <div className="mt-2">
                  <div className="flex gap-4  items-center p-2 ">
                    <Globe className="text-gray-500 w-5 h-5" />
                    <div >
                      <p className="text-xs text-gray-700 font-semibold">Website</p>
                      <p className="text-[12px] text-gray-500">https://omeglesite.com/ </p>
                    </div>
                  </div>
                  <div className="flex gap-4  items-center p-2 ">
                    <Mail className="text-gray-500 w-5 h-5" />
                    <div >
                      <p className="text-xs text-gray-700 font-semibold">Email</p>
                      <p className="text-[12px] text-gray-500"> contact@omeglesite.com  </p>
                    </div>
                  </div>
                  <div className="flex gap-4  items-center p-2 ">
                    <MapPin className="text-gray-500 w-5 h-5" />
                    <div >
                      <p className="text-xs text-gray-500 font-semibold">Address</p>
                      <p className="text-[12px] text-gray-500">Buckingham Palace, London, UK  </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
