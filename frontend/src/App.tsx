import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router";
import BookInfo from "./pages/BookInfo";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import SearchNav from "./components/SearchNav";
import Profile from "./auth/Profile";

function App() {
  const location = useLocation();

  const hideNavigation = location.pathname.startsWith("/auth");
  // const hideSearchNavigation = location.pathname.startsWith("/home");

  return (
    <div className="flex h-screen">
      {!hideNavigation && <Navigation />}
      <div className="flex-1 relative overflow-y-scroll">
        {!hideNavigation && <SearchNav />}

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home/explore" element={<Explore />} />
          <Route path="/home/saved" element={<Saved />} />
          <Route path="/home/books/:id" element={<BookInfo />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
