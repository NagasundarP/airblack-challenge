const GerCertified = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black">
      <div className="z-10 relative">
        <div className="absolute my-3 md:-mx-10 sm:-mx-20">
          <img src="/LeftArrow.svg" alt="left" className="md:w-20 sm:w-10" />
        </div>
        <div className="absolute right-0 my-3 md:-mx-10 sm:-mx-20">
          <img src="/RightArrow.svg" alt="right" className="md:w-20 sm:w-10" />
        </div>
        <div className="text-center">
          <h2 className="text-white font-bold mb-4 -py-20">
            <p>Get Certified From India’s</p>
            <p>Biggest Beauty Platform</p>
          </h2>
          <img src="/CertImg.svg" alt="Certificate Image" />
          <div className="py-4">
            <button className="w-full py-2 rounded-md text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600 transition duration-200">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerCertified;
