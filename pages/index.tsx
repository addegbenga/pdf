import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false,
});

export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Head>
        <title>Policy Brief</title>
        <meta name="description" content="Research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PDFViewer />
    </div>
  );
}
