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
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState<boolean>(false);

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
      {!hideNavigation && (
        <Navigation isAuth={isAuthenticated} darkMode={darkMode} />
      )}
      <div className="flex-1 relative overflow-y-scroll">
        {!hideNavigation && (
          <SearchNav
            isAuth={isAuthenticated}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        )}

        <ScrollToTop />
        <Routes>
          <Route
            index
            element={
              <Home home_title="Our Book Collections" darkMode={darkMode} />
            }
          />
          <Route
            path="/home/category"
            element={<Category darkMode={darkMode} />}
          />
          <Route path="/home/saved" element={<Saved darkMode={darkMode} />} />
          <Route
            path="/home/books/:id"
            element={<BookInfo darkMode={darkMode} />}
          />
          <Route path="/auth/signin" element={<SignIn darkMode={darkMode} />} />
          <Route path="/auth/signup" element={<SignUp darkMode={darkMode} />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile darkMode={darkMode} />} />
            <Route
              path="/admin/home"
              element={<AdminHome darkMode={darkMode} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
