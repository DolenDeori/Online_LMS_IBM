import { images } from "@/constants";

const Category = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      className={`${darkMode ? "bg-gray-950" : "bg-white"} py-16 duration-200`}
    >
      <div className="text-center font-funnel w-[70%] m-auto">
        <h1
          className={`${
            darkMode ? "text-white" : "text-black"
          } text-2xl font-semibold`}
        >
          Explore Books Categories
        </h1>
        <div className="grid grid-cols-4 mt-8 gap-4 duration-200">
          <div className="bg-black h-[250px] rounded-xl col-span-2 hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img src={images.audio_book} alt="" className="opacity-70" />
            <p className="absolute text-white font-bold text-xl">E Books</p>
          </div>
          <div className="bg-black h-[250px] rounded-xl hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img
              src={images.fictional_book}
              alt=""
              className="opacity-70 h-full object-cover"
            />
            <p className="absolute text-white font-bold text-xl">
              Fictional Books
            </p>
          </div>
          <div className="bg-black h-[250px] rounded-xl hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img
              src={images.non_fictional_book}
              alt=""
              className="opacity-70 h-full object-cover"
            />
            <p className="absolute text-white font-bold text-xl">
              Non Fictional Books
            </p>
          </div>
          <div className="bg-black h-[250px] rounded-xl hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img
              src={images.fictional_book}
              alt=""
              className="opacity-70 h-full object-cover"
            />
            <p className="absolute text-white font-bold text-xl">
              Slef Motivation
            </p>
          </div>
          <div className="bg-black h-[250px] rounded-xl col-span-2 hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img
              src={images.action_books}
              alt=""
              className="opacity-70 object-cover"
            />
            <p className="absolute text-white font-bold text-xl">
              Action and Adventure
            </p>
          </div>
          <div className="bg-black h-[250px] rounded-xl hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img
              src={images.romance}
              alt=""
              className="opacity-70 h-full object-cover"
            />
            <p className="absolute text-white font-bold text-xl">Romance</p>
          </div>
          <div className="bg-black h-[250px] rounded-xl hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img
              src={images.thiller_books}
              alt=""
              className="opacity-50 object-cover h-full"
            />
            <p className="absolute text-white font-bold text-xl">
              Thriller and suspense
            </p>
          </div>
          <div className="bg-black h-[250px] rounded-xl hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img
              src={images.mystry_books}
              alt=""
              className="opacity-70 object-cover h-full"
            />
            <p className="absolute text-white font-bold text-xl">
              Detective and mystery
            </p>
          </div>
          <div className="bg-black h-[250px] rounded-xl col-span-2 hover:scale-95 duration-300 flex justify-center items-center cursor-pointer overflow-hidden">
            <img
              src={images.art_photography}
              alt=""
              className="opacity-70 object-cover"
            />
            <p className="absolute text-white font-bold text-xl">
              Art and photography
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
