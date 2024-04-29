
const Banner = () => {

    return (
        <div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/kxhRbbJ/premium-photo-1676393904171-738ff11eceaa.jpg" className="w-full md:h-[250px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sCzxRYw/photo-1674979724833-64b09f4e4215.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bWNYBwp/photo-1704448041393-4334e666987d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8B6TM3D/photo-1674386997990-d301a0f4a388.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



            {/* <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
                cssModule={AwesomeSliderStyles}
            >
                <div data-src="" />
                <div data-src="" />
                <div data-src="" />
                <div data-src="" />
            </AutoplaySlider> */}
        </div>
    );
};

export default Banner;