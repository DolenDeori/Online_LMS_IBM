import Navigation from "@/components/Navigation";

const Profile = () => {
  return (
    <>
      <Navigation />
      <div className="h-svh w-full">
        <div className="flex flex-col items-center">
          <div className="border-6 border-gray-400 h-16 w-16 flex justify-center items-center mt-8 rounded-full bg-gray-300">
            <h1 className="font-bold">P</h1>
          </div>
          <h1 className="font-semibold mt-2 text-xl">Dolen Deori</h1>
          <p>dulendeori@gmail.com</p>
          <h1 className="text-sm">et21bdadh</h1>
        </div>
        <div className="mt-8 px-8">
          <div>
            <p>Current Holding: 5 / 20 Books</p>
          </div>
          <table className="table-auto border-collapse border ">
            <thead>
              <tr>
                <th className="border p-2">Book Id</th>
                <th className="border p-2">Book Name</th>
                <th className="border p-2">Book Author</th>
                <th className="border p-2">Book Due</th>
                <th className="border p-2">View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">ABC</td>
                <td className="border p-2">Dolen Deori</td>
                <td className="border p-2">12 March 2025</td>
                <td className="border p-2">
                  <a href="#" className="underline text-blue-800">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">ABC</td>
                <td className="border p-2">Dolen Deori</td>
                <td className="border p-2">12 March 2025</td>
                <td className="border p-2">
                  <a href="#" className="underline text-blue-800">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">ABC</td>
                <td className="border p-2">Dolen Deori</td>
                <td className="border p-2">12 March 2025</td>
                <td className="border p-2">
                  <a href="#" className="underline text-blue-800">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">ABC</td>
                <td className="border p-2">Dolen Deori</td>
                <td className="border p-2">12 March 2025</td>
                <td className="border p-2">
                  <a href="#" className="underline text-blue-800">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">ABC</td>
                <td className="border p-2">Dolen Deori</td>
                <td className="border p-2">12 March 2025</td>
                <td className="border p-2">
                  <a href="#" className="underline text-blue-800">
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="p-2 bg-blue-500 mt-5 rounded px-4 text-white cursor-pointer">
            Explore More Books
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
