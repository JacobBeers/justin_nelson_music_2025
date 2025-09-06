import React from "react";
import Lessons from "../components/Lessons";
import Head from "next/head";
import Banner2 from "@/components/Banner2";

export default function LessonsPage() {


    return (
       <>
       <Head>
        <title>Justin Nelson Music - Lessons</title>
        <meta name="Justin Nelson Music - Lessons" content="Justin Nelson Music - Lessons" />
        <link rel="icon" href="/img/JustinLogo.svg" />
      </Head>
        
        <Lessons/>
        </>
    )

}