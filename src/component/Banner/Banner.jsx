

const Banner = () => {
    return (
        <div className="h-full">
            <div className="carousel w-full h-[70vh] bg-gradient-to-r from-violet-500 to-fuchsia-500">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg" className="w-full p-4 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://static-01.daraz.com.bd/p/1ec88cbfff48b223f1dbb92ce20df4ec.jpg" className="w-full p-4 rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://static-01.daraz.com.bd/p/986dd21bae23af5b4186e0029dce42a7.jpg" className="w-full p-4 rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://static-01.daraz.com.bd/p/285dfcce48daca08bbff06e6fb340200.jpg" className="w-full p-4 rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;