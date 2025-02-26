import { useState } from "react";
import BookInfo from "./components/BookInfo";
import Navigation from "./components/Navigation";
import Home from "./pages/home/Home";

function App() {
  const [bookInfo, setBookInfo] = useState(0);
  return (
    <div className="flex h-svh">
      <div>
        <Navigation />
      </div>
      <div className="flex-2 relative">
        <Home setBookId={setBookInfo} />
      </div>
      <div
        className={`flex-1 ${
          bookInfo === 0 ? "hidden" : ""
        } absolute top-0 right-0 h-full shadow-2xl duration-200 lg:w-[400px] md:w-1/2 w-full`}
      >
        <BookInfo bookId={bookInfo} setBookId={setBookInfo} />
      </div>
    </div>
  );
}

export default App;
