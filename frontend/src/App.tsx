import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router";
import BookInfo from "./pages/BookInfo";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";

function App() {
  const location = useLocation();

  const hideNavigation = location.pathname.startsWith("/auth");

  return (
    <div className="flex h-screen">
      {!hideNavigation && <Navigation />}
      <div className="flex-1 relative overflow-y-scroll">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/books/:id" element={<BookInfo />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
