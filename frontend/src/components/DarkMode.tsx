const DarkMode = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: any;
}) => {
  return (
    <div
      className={`${
        darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
      } flex justify-center items-center cursor-pointer h-12 w-12 rounded-xl mr-1 duration-200`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <i className="bi bi-moon-stars-fill text-xl text-white"></i>
      ) : (
        <i className="bi bi-brightness-high-fill text-xl"></i>
      )}
    </div>
  );
};

export default DarkMode;
