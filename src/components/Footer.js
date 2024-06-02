const Footer = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="/BgImg.svg"
          alt="background"
          className="w-full h-full object-cover sm:object-contain md:object-cover lg:object-cover xl:object-cover"
        />
      </div>
      <div className="z-10 relative">
        <div className="absolute my-3 -mx-10 sm:-mx-8">
          <img src="/LeftArrow.svg" alt="left" className="w-20" />
        </div>
        <div className="absolute right-0 my-3 -mx-10 sm:-mx-8">
          <img src="/RightArrow.svg" alt="right" className="w-20" />
        </div>
        <div className="text-center mx-20">
          <h2 className="text-white font-bold mb-4 -py-20">
            <p>Join our growing</p>
            <p>community of </p>
            <p>35,000+ alumni</p>
          </h2>
          <img src="/SocialMedia.svg" alt="facilities" />
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

export default Footer;

{
  /* <p>Join our growing</p>
<p>community of </p>
<p>35,000+ alumni</p> */
}
