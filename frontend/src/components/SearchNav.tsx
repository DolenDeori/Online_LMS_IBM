import { NavLink, useNavigate } from "react-router";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";
import axios from "axios";

interface Book {
  _id: string;
  name: string;
  author: string;
  category: string;
}

const SearchNav = ({
  isAuth,
  darkMode,
  setDarkMode,
  isNavFocused,
  setIsNavFocused,
}: {
  isAuth: boolean;
  darkMode: boolean;
  setDarkMode: any;
  isNavFocused: boolean;
  setIsNavFocused: any;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Book[]>([]);
  const [showNavLink, setShowNavLink] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 0) {
      handleSearch();
    } else {
      setSearchResult([]);
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5500/api/v1/books/search?query=${searchQuery}`
      );
      console.log("Search results:", res.data);
      setSearchResult(res.data);
    } catch (error) {
      console.log("Error searching books:", error);
    }
  };

  const handleSearchResultClick = (bookId: string) => {
    setIsNavFocused(false);
    setSearchQuery("");
    navigate(`/home/books/${bookId}`);
  };

  return (
    <div
      className={`${
        isNavFocused ? "z-1000" : ""
      } p-4 px-4 md:px-8 z-10 flex justify-center items-center gap-2 fixed md:sticky top-0 left-0 w-full duration-200 ${
        darkMode ? "bg-gray-900" : "bg-white "
      } font-funnel`}
    >
      <div
        className={`${
          darkMode
            ? "bg-gray-600 border-gray-500"
            : "bg-gray-200 border-gray-300"
        } flex justify-between items-center rounded-xl p-1 px-4 flex-2 border-2 gap-1 relative`}
      >
        <i className="bi bi-search text-md text-gray-500"></i>
        <input
          type="text"
          className={`${
            darkMode ? "bg-gray-600 text-white" : "bg-gray-200 "
          } w-full outline-none p-2 text-sm`}
          placeholder="Search by Book Name, Author, Host or Category ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setIsNavFocused(true)}
        />
        <button
          className={`${isNavFocused ? "" : "hidden"}`}
          onClick={() => setIsNavFocused(!isNavFocused)}
        >
          <i
            className={`${
              darkMode ? "text-gray-300" : "text-gray-500"
            } bi bi-x text-2xl cursor-pointer`}
          ></i>
        </button>
      </div>

      {/* --------------- Show search results -------------------- */}
      <div
        className={`${isNavFocused ? "" : "hidden"} ${
          darkMode ? "bg-gray-900 text-white" : "bg-white"
        } min-h-[20vh] left-0 rounded-b-xl top-[100%] w-full absolute -z-2 overflow-hidden`}
      >
        {searchQuery.length > 0 ? (
          searchResult.length > 0 ? (
            <div className="pt-2">
              {searchResult.map((book) => (
                <div
                  key={book._id}
                  className={`${
                    darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
                  } cursor-pointer  p-2 py-4 px-8`}
                  onClick={() => handleSearchResultClick(book._id)}
                >
                  <i className="bi bi-search mr-4 text-gray-400"></i>
                  <strong>{book.name}</strong> - {book.author}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p>No result found</p>
            </div>
          )
        ) : (
          <div className="text-center">
            <p>Type Something to search..</p>
          </div>
        )}
      </div>

      {/* ------------- Ligh Mode and Dark Mode button -------------- */}
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      {isAuth ? (
        ""
      ) : (
        <div className="flex justify-center items-center gap-1">
          <NavLink
            to="/auth/signup"
            className={`${
              darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
            } h-12 w-12 pr-1 rounded-xl flex justify-center items-center duration-200 relative`}
            onMouseEnter={() => setShowNavLink("auth")}
            onMouseLeave={() => setShowNavLink(null)}
          >
            <i
              className={`${
                darkMode ? "text-white" : "text-black"
              } bi bi-box-arrow-in-right text-xl`}
            ></i>
            {showNavLink === "auth" && (
              <span
                className={`${
                  darkMode ? "bg-gray-200 text-black" : "bg-gray-900 text-white"
                } absolute right-14 whitespace-nowrap  font-funnel font-normal text-sm px-2 py-1 rounded-xl z-1`}
              >
                Login / Sign Up
              </span>
            )}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SearchNav;
