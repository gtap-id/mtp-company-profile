const Hero = () => {
  return (
    <div className="flex text-primary gap-4 min-h-screen items-center">
      <div className="flex z-[1] flex-col gap-5 sm:basis-1/2 basis-3/4">
        <div>
          <h1 className="inline-block sm:text-4xl font-semibold sm:border-b-8 border-b-[5px] border-b-secondary py-2 mb-2">
            PT. Manunggal Teknik Persada
          </h1>
          {/* <h1 className="text-2xl sm:text-5xl font-semibold sm:mb-2">
            Company Profile
          </h1> */}
          <p className="text-xs sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            nisi, vestibulum quis mauris vulputate.
          </p>
        </div>
        <div>
          <a
            className="bg-secondary rounded-md px-4 py-2 font-semibold text-white sm:text-base text-sm"
            href=""
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="absolute left-0 w-full h-screen bg-gradient-to-bl from-black via-transparent opacity-75"></div>
      <div className="absolute left-0 w-full h-screen bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute left-0 w-full h-screen bg-gradient-to-t from-white via-transparent"></div>
    </div>
  );
};

export default Hero;
