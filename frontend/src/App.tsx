import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router";
import BookInfo from "./pages/BookInfo";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Category from "./pages/Category";
import Saved from "./pages/Saved";
import SearchNav from "./components/SearchNav";
import Profile from "./pages/Profile";
import ProtectedRoute from "./route/ProtectedRoute";
import AdminHome from "./admin/Home";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  const hideNavigation = location.pathname.startsWith("/auth");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
    <div className="flex h-screen">
      {!hideNavigation && <Navigation isAuth={isAuthenticated} />}
      <div className="flex-1 relative overflow-y-scroll">
        {!hideNavigation && <SearchNav isAuth={isAuthenticated} />}

        <Routes>
          <Route index element={<Home home_title="Our Book Collections" />} />
          <Route path="/home/category" element={<Category />} />
          <Route path="/home/saved" element={<Saved />} />
          <Route path="/home/books/:id" element={<BookInfo />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/home" element={<AdminHome />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
