import CourseTitle from "./CourseTitle";

const Forms = () => {
  return (
    <div className="bg-black min-h-screen">
      <CourseTitle />
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center w-full py-8">
          <form className=" rounded-lg bg-white w-full max-w-md mx-4 md:mx-auto">
            <div className="text-white bg-pink-500 rounded-t-lg text-center px-4 py-2">
              <h6 className="text-lg font-semibold">
                FILL THE FORM BELOW TO ENQUIRE
              </h6>
            </div>
            <div className="px-4 py-4 md:px-6">
              <div className="py-2">
                <label className="block mb-1 font-medium text-gray-700">
                  *Enter your name
                </label>
                <input className="border border-gray-300 rounded-sm py-2 px-3 w-full" />
              </div>
              <div className="py-2">
                <label className="block mb-1 font-medium text-gray-700">
                  *Enter your Whatsapp number
                </label>
                <input className="border border-gray-300 rounded-sm py-2 px-3 w-full" />
              </div>
              <div className="py-2">
                <label className="block mb-1 font-medium text-gray-700">
                  *Select your profession
                </label>
                <select className="w-full border border-gray-300 rounded-sm py-2 px-3">
                  <option>Makeup artist</option>
                  <option>Photographer</option>
                  <option>Private</option>
                </select>
              </div>
              <div className="py-2">
                <label className="block mb-1 font-medium text-gray-700">
                  *Select your goal
                </label>
                <select className="w-full border border-gray-300 rounded-sm py-2 px-3">
                  <option>Professional</option>
                  <option>Intermediate</option>
                  <option>Beginner</option>
                </select>
              </div>
              <div className="py-2">
                <label className="block mb-1 font-medium text-gray-700">
                  *Select your city
                </label>
                <select className="w-full border border-gray-300 rounded-sm py-2 px-3">
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Mumbai</option>
                </select>
              </div>
              <div className="py-4">
                <button className="w-full py-2 rounded-md text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600 transition duration-200">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
