import { useNavigate } from "react-router"

function Error() {
  const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg mb-8">The page you are looking for does not exist.</p>
    <button
      onClick={() => navigate(-1)}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      Go Back
    </button>
  </div>
  )
}

export default Error