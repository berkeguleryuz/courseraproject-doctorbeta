import FindDoctorSearchIC from "./components/FindDoctorSearchIC";

function App() {
  return (
    <div className="bg-white flex flex-col">
      <div className="bg-indigo-500 self-stretch flex w-full flex-col pb-2 px-5 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1457px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-black text-2xl self-center max-w-[307px] grow shrink-0 basis-auto my-auto">
            Medical Appoinment Booking Apps
          </div>
          <FindDoctorSearchIC />
          <div className="text-black text-center text-5xl self-center my-auto max-md:text-4xl">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
      <div className="bg-indigo-500 self-center flex w-[689px] max-w-full flex-col ml-20 mt-20 mb-24 pt-9 pb-6 px-5 rounded-[137px]">
        <div className="self-center flex w-[573px] max-w-full flex-col -ml-3">
          <div className="w-[546px] max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                <div className="text-white text-4xl w-[121px] mt-24 max-md:mt-12">
                  E-Mail
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:mt-12">
                  <div className="text-white text-4xl max-w-[264px] ml-5 max-md:ml-2.5">
                    Sign Up
                  </div>
                  <div className="border bg-white flex w-[380px] h-[82px] flex-col mt-7 rounded-xl border-solid border-black" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-4xl self-center w-[178px] my-auto">
              Password
            </div>
            <div className="border bg-white self-stretch flex w-[380px] h-[82px] flex-col grow shrink-0 basis-auto rounded-xl border-solid border-black" />
          </div>
          <div className="flex w-[568px] max-w-full items-start justify-between gap-5 mt-12 max-md:flex-wrap">
            <div className="text-white text-4xl self-center w-[166px] my-auto">
              Confirm
              <br />
              Password
            </div>
            <div className="border bg-white self-stretch flex w-[380px] h-[82px] flex-col grow shrink-0 basis-auto rounded-xl border-solid border-black" />
          </div>
        </div>
        <div className="self-center flex w-[380px] max-w-full flex-col ml-8 mt-9">
          <div className="border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-blend-hard-light bg-teal-400 self-stretch flex w-full flex-col pt-7 pb-5 px-5 rounded-xl border-solid border-black border-opacity-0">
            <div className="text-white text-4xl self-center">Sign-Up</div>
          </div>
          <div className="text-white text-4xl italic font-medium self-center mt-11">
            You are registered!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
