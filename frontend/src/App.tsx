import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router";
import BookInfo from "./pages/BookInfo";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Category from "./pages/Category";
import Saved from "./pages/Saved";
import SearchNav from "./components/SearchNav";
import Profile from "./auth/Profile";
import ProtectedRoute from "./route/ProtectedRoute";

function App() {
  const location = useLocation();

  const hideNavigation = location.pathname.startsWith("/auth");

  return (
    <div className="flex h-screen">
      {!hideNavigation && <Navigation />}
      <div className="flex-1 relative overflow-y-scroll">
        {!hideNavigation && <SearchNav />}

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home/category" element={<Category />} />
          <Route path="/home/saved" element={<Saved />} />
          <Route path="/home/books/:id" element={<BookInfo />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/auth/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
