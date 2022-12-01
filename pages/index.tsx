import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const DynamicHeader = dynamic(() => import("../components"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Policy Brief</title>
        <meta name="description" content="Research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicHeader />
    </div>
  );
}
