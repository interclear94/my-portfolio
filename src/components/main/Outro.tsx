const Outro = () => {
  return (
    <section className="relative bg-gray-950 w-full h-screen">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-max relative">
          <h2 className="w-max text-center text-5xl text-gray-100 font-extrabold tracking-wider leading-15 pb-5">
            끝까지 봐주셔서 <br /> 감사합니다
          </h2>
          <div className="w-20 h-1 absolute left-1/2 -translate-x-1/2 bg-highlight-color " />
        </div>
      </div>
    </section>
  );
};

export default Outro;
