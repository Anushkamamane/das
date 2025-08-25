import { useNavigate } from 'react-router-dom';

export default function ChooseDonorType() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-700 to-gray-900 px-4">
      <h1 className="text-4xl font-bold mb-12 text-white text-center">Donor Login</h1>
      <p className="text-lg text-gray-300 mb-8 text-center">Are you an Organisation or an Individual?</p>
      <div className="flex flex-row gap-8 w-full max-w-md justify-center flex-wrap">
        {['organisation', 'individual'].map((type) => (
          <button
            key={type}
            onClick={() => navigate(`/login/donor/${type}`)}
            className="flex-1 min-w-[150px] py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg font-semibold text-lg capitalize"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
