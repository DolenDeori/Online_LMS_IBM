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
      <div className="flex-1">
        <BookInfo bookId={bookInfo} />
      </div>
    </div>
  );
}

export default App;
