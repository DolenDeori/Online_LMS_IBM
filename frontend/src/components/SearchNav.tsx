import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchNav = () => {
  return (
    <div className="bg-blue-500 p-4">
      <div>
        <h1 className="text-md text-white mb-2">Search your fave book</h1>
      </div>
      <div className="bg-white flex justify-between items-center rounded p-1 px-2">
        <MagnifyingGlassIcon className="h-6 w-6" />
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
