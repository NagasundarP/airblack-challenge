const CourseTitle = () => {
  return (
    <div>
      <div className="px-4">
        <h1 className="font-bold text-5xl text-white py-4">
          Professional Online Makeup Course
        </h1>
        <div className="py-4 flex space-x-4">
          <div className="flex bg-slate-600 py-2 w-52 justify-around rounded-md">
            <img src="/CertLogo.svg" alt="certificate" />
            <p className="text-white">Certification Programme</p>
          </div>
          <div className="text-yellow-400 py-2">⭐️ Rated 4.85/5</div>
        </div>
        <div className="text-white py-2 m">
          <div className="flex">
            <img src="/tick.svg" alt="tick" />
            <p>India’s No.1 Online Makeup Course</p>
          </div>
          <div className="flex">
            <img src="/tick.svg" alt="tick" />
            <p>Learn by LIVE Do-it-Together Classes</p>
          </div>
          <div className="flex">
            <img src="/tick.svg" alt="tick" />
            <p>Unlimited Practise Session to master skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
