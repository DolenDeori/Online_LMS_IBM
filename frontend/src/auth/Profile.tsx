import { books } from "@/constants";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-svh">
      <div className="h-svh w-full flex-2 font-funnel">
        <div className="flex flex-col items-center pb-8">
          <div className="border-6 border-blue-800 h-16 w-16 flex justify-center items-center mt-8 rounded-full bg-blue-300">
            <h1 className="font-bold">D</h1>
          </div>
          <h1 className="font-semibold mt-2 text-xl">Dolen Deori</h1>
          <p>dulendeori@gmail.com</p>
        </div>

        <div className="mt-8 px-8">
          <div>
            <p>Current Holding: 5 / 20 Books</p>
          </div>
          <div className="mt-3 width-full overflow-x-scroll">
            <table className="table-auto border-collapse border w-full">
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
                {books.slice(0, 5).map((book) => (
                  <tr key={book.id}>
                    <td className="border p-2">{book.id}</td>
                    <td className="border p-2">{book.title}</td>
                    <td className="border p-2">{book.author}</td>
                    <td className="border p-2">12 March 2025</td>
                    <td className="border p-2">
                      <a href="#" className="underline text-blue-800">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            className="p-2 bg-blue-800 mt-5 rounded-full px-4 text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Explore More Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
