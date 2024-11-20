const Images = () => {
  return (
    <>
      <div className="img fixed w-[385px] h-[200px] overflow-hidden pointer-events-none rounded-xl origin-center -translate-x-[50%] -translate-y-[50%] scale-0 opacity-0 z-[999] ">
        <div className="img1 w-full h-[1000px] flex flex-col">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="./image1.png"
            alt="MangaHaven"
          />
          <img
            className="w-full h-[200px] object-cover object-center"
            src="./image2.png"
            alt="Insight AI"
          />
          <img
            className="w-full h-[200px] object-cover object-center"
            src="./image3.png"
            alt="Obsy Agency"
          />
          <img
            className="w-full h-[200px] object-cover object-center"
            src="./image4.png"
            alt="Portfolio"
          />
          <img
            className="w-full h-[200px] object-cover object-center"
            src="./image5.png"
            alt="Portfolio"
          />
        </div>
      </div>
    </>
  );
};

export default Images