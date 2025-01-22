import CountUp from 'react-countup';

function Countup() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-teal-500 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Over <CountUp end={500} duration={3} />+ Companies Served Globally
        </h1>
        <p className="text-lg md:text-xl">
          Delivering exceptional solutions for over a decade, trusted by industry leaders.
        </p>
      </div>
    </div>
  );
}

export default Countup;
