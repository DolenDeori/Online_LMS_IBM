const SearchNav = () => {
  return (
    <div className="bg-blue-600 p-4 w-full z-10">
      <div>
        <h1 className="text-md text-white mb-2">Search your fave book</h1>
      </div>
      <div className="bg-white flex justify-between items-center rounded-xl p-1 px-2 border-2">
        <i className="bi bi-search text-xl"></i>
        <input
          type="text"
          className="bg-white w-full outline-none p-2 text-sm"
          placeholder="Title, Author, Host or Topic ..."
        />
      </div>
    </div>
  );
};

export default SearchNav;
