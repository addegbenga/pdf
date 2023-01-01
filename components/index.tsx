import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit: any;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      await PSPDFKit.load({
        container,
        document: "/document.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <div>
      <Head>
        <title>Policy Brief</title>
        <meta name="description" content="Research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={containerRef} style={{ height: "100vh" }} />
    </div>
  );
}
