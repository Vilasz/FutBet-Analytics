export default function HeroSection() {
    return (
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in">
            Futbet Analytics
          </h1>
          <p className="mt-6 text-xl text-gray-300 animate-fade-in delay-100">
            Transforme dados em insights poderosos para suas apostas esportivas.
          </p>
          <button className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300 animate-fade-in delay-200">
            Comece Agora
          </button>
        </div>
      </div>
    );
  }