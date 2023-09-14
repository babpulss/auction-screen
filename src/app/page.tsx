"use client";
import LeftBidder from "@/components/bidder/LeftBidder";
import Avatar from "../components/profile/Avatar";
import { useState } from "react";
import RightBidder from "@/components/bidder/RightBidder";
import BiddingFailure from "@/components/bidder/BiddingFailure";

const position = ["TOP", "JGL", "MID", "BOT", "SPT"];

export default function Home() {
  return (
    <main className="grid grid-cols-[1fr_0.6fr_1fr] px-10 pt-2 h-screen ">
      <section className="border grid ">
        <LeftBidder />
        <LeftBidder />
        <LeftBidder />
        <LeftBidder />
        <LeftBidder />
        <LeftBidder />
      </section>
      <section className=" border-2 px-5">
        <div className="flex justify-around my-5 border-2">
          <p>enchant</p>
          <p>LEGION</p>
          <p>LOGO</p>
        </div>
        <div className="flex justify-center items-center border-2 h-30 text-8xl">
          자낳대
        </div>
        <div className="flex flex-col border-2 h-3/6 my-5 font-medium p-5 font-mono">
          <pre>서버에 로그인중입니다.</pre>
          <pre>
            서버에 정상적으로 <span className="text-green-600">로그인</span>
            했습니다.
          </pre>
        </div>
        <div className="flex justify-center items-center bg-orange-600 rounded-md h-10">
          <p className="font-medium text-xl">TIME COUNT</p>
          <p className="text-black mx-4 ">|</p>
          <p className="text-black font-bold text-xl">15.00</p>
        </div>
        <div className="border-2 mt-5 h-1/5">
          <video src=""></video>
        </div>
      </section>
      <section className="box-border border-2  ">
        {position.map((e) => (
          <RightBidder position={e} key={e} />
        ))}
        <BiddingFailure />
        <div className="border-2 m-1 mt-3 h-24">
          BANNER
        </div>
      </section>
    </main>
  );
}
