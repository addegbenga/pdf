// import Head from "next/head";
// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   const containerRef = useRef(null);
//   useEffect(() => {
//     const container = containerRef.current;
//     let PSPDFKit: any;

//     (async function () {
//       PSPDFKit = await import("pspdfkit");

//       if (PSPDFKit) {
//         PSPDFKit.unload(container);
//       }

//       await PSPDFKit.load({
//         container,
//         document: "/document.pdf",
//         baseUrl: `${window.location.protocol}//${window.location.host}/`,
//       });
//     })();

//     return () => PSPDFKit && PSPDFKit.unload(container);
//   }, []);

//   return (
//     <div>
//       <Head>
//         <title>Policy Brief</title>
//         <meta name="description" content="Research" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div ref={containerRef} style={{ height: "100vh" }} />
//     </div>
//   );
// }

import React, { useState } from "react";
import Pdf from "@mikecousins/react-pdf";
import { PDFViewer } from "@react-pdf/renderer";

const MyPdfViewer = () => {
  const [page, setPage] = useState(1);

  return (
    <Pdf file="./document.pdf" page={page}>
      {({ pdfDocument, pdfPage, canvas }) => (
        <>
          {!pdfDocument && <span>Loading...</span>}
          {canvas}
          {Boolean(pdfDocument && pdfDocument.numPages) && (
            <nav>
              <ul className="pager">
                <li className="previous">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    Previous
                  </button>
                </li>
                <li className="next">
                  <button
                    disabled={page === pdfDocument.numPages}
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </Pdf>
  );
};

export default MyPdfViewer;
