import { useNavigate } from "react-router-dom";
import { useFetchPosts } from "../hooks/useFetchTodos";

const GetPosts: React.FC = () => {
  const { data: posts, isLoading, isError } = useFetchPosts();

  const navigate = useNavigate();

  return (
    <div className="w-full mt-2 items-center bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Todo List</h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 ml-2 rounded mb-4"
        onClick={() => navigate("/add-todo")}
      >
        New Posts
      </button>
      <hr className="mb-2" />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error fetching todos</h1>
      ) : (
        <ul>
          {posts?.map((post) => {
            return (
              <li
                className={`mb-2 text-xl ${post.title ? "line-through" : ""}`}
                key={post.id}
              >
                {post.title}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 ml-2 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GetPosts;
