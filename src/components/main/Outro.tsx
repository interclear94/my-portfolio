const Outro = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* <div className="relative w-max h-max py-5">
          <h2 className="relative text-gray-100 text-6xl font-bold tracking-wider px-4 z-10">
            Contact
          </h2>
          <div className="absolute -right-2 bottom-0 bg-yellow-300 w-[65%] h-[0.7rem] z-0" />
        </div> */}
        <div className="w-full h-max relative">
          <h2 className="w-max text-center text-5xl text-gray-100 font-extrabold tracking-wider leading-15 pb-5">
            끝까지 봐주셔서 <br /> 감사합니다
          </h2>
          <div className="w-20 h-1 absolute left-1/2 -translate-x-1/2 bg-highlight-color " />
        </div>

        <ul className="flex flex-col justify-center gap-y-2.5 pt-5">
          {/* Github Icon */}
          <li>
            <span className="flex justify-center items-center gap-x-4 text-[#cdcdcd] group hover:text-highlight-color transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.2rem"
                height="2.2rem"
                viewBox="0 0 256 256"
                fill="none"
                aria-hidden="true"
                className="fill-[#cecece] group-hover:fill-highlight-color"
              >
                <g transform="translate(1.4066 1.4066) scale(2.81)">
                  <path d="M75.546 78.738H14.455C6.484 78.738 0 72.254 0 64.283V25.716c0-7.97 6.485-14.455 14.455-14.455h61.091C83.516 11.261 90 17.746 90 25.716v38.567c0 7.971-6.484 14.455-14.454 14.455ZM14.455 15.488c-5.64 0-10.228 4.588-10.228 10.228v38.567c0 5.64 4.588 10.229 10.228 10.229h61.091c5.64 0 10.228-4.589 10.228-10.229V25.716c0-5.64-4.588-10.228-10.228-10.228H14.455Z" />

                  <path d="M11.044 25.917C21.848 36.445 32.652 46.972 43.456 57.5c2.014 1.962 5.105-1.122 3.088-3.088C35.74 43.885 24.936 33.357 14.132 22.83c-2.014-1.963-5.105 1.122-3.088 3.087Z" />

                  <path d="M46.544 57.5c10.804-10.527 21.608-21.055 32.412-31.582 2.016-1.965-1.073-5.051-3.088-3.088C65.064 33.357 54.26 43.885 43.456 54.412c-2.016 1.965 1.073 5.051 3.088 3.088Z" />

                  <path d="M78.837 64.952c-7.189-6.818-14.379-13.635-21.568-20.453-2.039-1.933-5.132 1.149-3.088 3.088 7.189 6.818 14.379 13.635 21.568 20.453 2.039 1.933 5.132-1.15 3.088-3.088Z" />

                  <path d="M14.446 68.039c7.189-6.818 14.379-13.635 21.568-20.453 2.043-1.938-1.048-5.022-3.088-3.088-7.189 6.818-14.379 13.635-21.568 20.453-2.043 1.938 1.048 5.023 3.088 3.088Z" />
                </g>
              </svg>
              dhxhql3408@naver.com
            </span>
          </li>

          {/* // Github Icon */}
          <li className="">
            <a
              className="flex justify-center items-center gap-x-4 text-[#cdcdcd] group hover:text-highlight-color transition-colors duration-20"
              href="https://github.com/interclear94"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="2.5rem"
                height="2.5rem"
                className="fill-[#cecece] group-hover:fill-highlight-color"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
              https://github.com/interclear94
            </a>
          </li>

          {/* Blog 주소 */}
          <li className="">
            <a
              className="flex justify-center items-center gap-x-4 text-[#cdcdcd] group hover:text-highlight-color transition-colors duration-20"
              href="https://jakapark.tistory.com/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="2.5rem"
                height="2.5rem"
                className="fill-[#cecece] group-hover:fill-highlight-color"
              >
                <path d="M 9 4 C 6.239 4 4 6.239 4 9 L 4 41 C 4 43.761 6.239 46 9 46 L 41 46 C 43.761 46 46 43.761 46 41 L 46 9 C 46 6.239 43.761 4 41 4 L 9 4 z M 20 12 L 25 12 C 29.42 12 33.033 15.632547 33 20.060547 C 32.991 21.141547 33.919 22 35 22 L 36 22 C 37.105 22 38 22.895 38 24 L 38 30 C 38 34.4 34.4 38 30 38 L 20 38 C 15.6 38 12 34.4 12 30 L 12 25 L 12 20 C 12 15.6 15.6 12 20 12 z M 20 18 C 18.9 18 18 18.9 18 20 C 18 21.1 18.9 22 20 22 L 25 22 C 26.1 22 27 21.1 27 20 C 27 18.9 26.1 18 25 18 L 20 18 z M 20 28 C 18.9 28 18 28.9 18 30 C 18 31.1 18.9 32 20 32 L 30 32 C 31.1 32 32 31.1 32 30 C 32 28.9 31.1 28 30 28 L 20 28 z" />
              </svg>
              https://jakapark.tistory.com/
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Outro;
