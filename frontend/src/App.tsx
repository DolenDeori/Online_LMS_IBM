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
import ReadBook from "./pages/ReadBook";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  const location = useLocation();
  const hideNavigation = location.pathname.startsWith("/auth");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("darkMode") || "false");
  });
  const [isNavFocused, setIsNavFocused] = useState<boolean>(false);

  // Making sure dark mode remain even after the page is reloaded
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Checking if there is any user is Authenticated
  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  // Dyanmic title updation in every page
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Home - Book Library",
      "/home/category": "Categories - Book Library",
      "/home/saved": "Saved Books - Book Library",
      "/auth/signin": "Sign In - Book Library",
      "/auth/signup": "Sign Up - Book Library",
      "/profile": "Profile - Book Library",
      "/admin/home": "Admin Dashboard - Book Library",
    };

    document.title = titles[location.pathname] || "Book Library";
  }, [location.pathname]);

  // Apply darkmode to the main body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("duration-200");
      document.body.classList.add("bg-gray-950");
      document.body.classList.remove("bg-white");
    } else {
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-gray-950");
    }
  }, [darkMode]);

  return (
    <div className="md:flex h-screen">
      <div
        className={`${
          isNavFocused ? "" : "hidden"
        } overlay h-full w-full bg-black top-0 left-0 absolute z-10 opacity-40`}
        onClick={() => setIsNavFocused(!isNavFocused)}
      ></div>
      {!hideNavigation && (
        <Navigation isAuth={isAuthenticated} darkMode={darkMode} />
      )}
      <div className="flex-1 relative overflow-y-scroll">
        {!hideNavigation && (
          <SearchNav
            isAuth={isAuthenticated}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            isNavFocused={isNavFocused}
            setIsNavFocused={setIsNavFocused}
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
            <Route path="/admin/home" element={<AdminHome />} />
            <Route
              path="/read/book/:id"
              element={<ReadBook darkMode={darkMode} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
