const Images = () => {
  return (
    <>
      <div className="img fixed hidden lg:block w-[385px] h-[200px] overflow-hidden pointer-events-none rounded-xl origin-center -translate-x-[50%] -translate-y-[50%] scale-0 opacity-0 z-50 ">
        <div className="img1 w-full h-[1000px] flex flex-col">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="./image6.png"
            alt="CodeGen"
          />
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
            alt="PrimeWallet"
          />
        </div>
      </div>
    </>
  );
};

export default Images;
