import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import books_1 from "../assets/books/67bf1dd5b29d54d1be379aec.pdf";
import { useState } from "react";

const ReadBook = ({ darkMode }: { darkMode: boolean }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 3.0)); // Max Zoom 3.0
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5)); // Min Zoom 0.5
  const resetZoom = () => setScale(1.0);

  return (
    <section>
      <div className="p-4 font-funnel h-[80vh] overflow-y-scroll scrollbar-hidden relative">
        <Document
          file={books_1}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Page
            pageNumber={pageNumber}
            className="flex justify-center items-center"
            scale={scale}
            canvasBackground={`${
              darkMode ? "bg-gray-950" : "bg-white"
            } duration-200`}
          />
        </Document>
        <div
          className={`sticky w-fit left-0 bottom-0 flex flex-col-reverse z-10 justify-center items-center gap-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <button onClick={zoomOut} className="cursor-pointer">
            <i className="bi bi-zoom-out"></i>
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button onClick={zoomIn} className="cursor-pointer">
            <i className="bi bi-zoom-in"></i>
          </button>
          <button onClick={resetZoom} className="cursor-pointer">
            <i className="bi bi-arrow-clockwise"></i>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center sticky bottom-0 p-4 gap-2">
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200"
          } cursor-pointer h-12 w-12 flex justify-center items-center rounded-full`}
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>

        <span
          className={`${
            darkMode ? "text-white bg-gray-800" : "text-black bg-gray-200"
          } p-2 px-4 rounded-full`}
        >
          Page {pageNumber} / {numPages}
        </span>

        <button
          disabled={pageNumber >= (numPages || 1)}
          onClick={() => setPageNumber(pageNumber + 1)}
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200"
          }  cursor-pointer h-12 w-12 flex justify-center items-center bg-gray-50 rounded-full`}
        >
          <i className="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </section>
  );
};
export default ReadBook;
