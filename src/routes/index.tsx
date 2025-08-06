import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-radial from-yellow-100 via-pink-100 to-pink-200 font-comic">
      <h1 className="text-5xl mb-4 text-purple-700 drop-shadow-[0_0_10px_white] animate-wiggle">
        Welcome to the Cosmic Vending Machine!
      </h1>
      <p className="text-xl mb-8 text-gray-800 text-center max-w-lg">
        Ready for a galactic snack? Step up and let the universe surprise you!
      </p>
      <a href="/vendingmachine" className="no-underline">
        <button
          className="px-8 py-4 text-3xl font-bold text-white bg-gradient-to-r from-pink-500 via-blue-600 to-teal-400 rounded-3xl shadow-[0_0_30px_#ff00cc,0_0_10px_#3333ff] cursor-pointer animate-bounce spinny transition-transform duration-200 hover:scale-125 hover:-rotate-6"
        >
          🚀 Enter the Cosmic Vending Machine 🚀
        </button>
      </a>
      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at 50% 30%, #ffecb3 0%, #ffe0e0 100%);
        }
        .font-comic {
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-20px) scale(1.1); }
          40% { transform: translateY(10px) scale(0.95); }
          60% { transform: translateY(-10px) scale(1.05); }
          80% { transform: translateY(5px) scale(0.98); }
        }
        .animate-bounce {
          animation: bounce 1.2s infinite;
        }
        @keyframes spinny {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .spinny {
          animation: spinny 3s linear infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg) scale(1.05); }
          25% { transform: rotate(2deg) scale(1.1); }
          50% { transform: rotate(-3deg) scale(1.08); }
          75% { transform: rotate(3deg) scale(1.12); }
        }
        .animate-wiggle {
          animation: wiggle 2s infinite;
        }
      `}</style>
    </div>
  );
}
