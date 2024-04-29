
import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';

const Banner = () => {

    const Slider = (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
            cssModule={AwesomeSliderStyles}
        >
            <div data-src="https://plus.unsplash.com/premium_photo-1676393904171-738ff11eceaa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div data-src="https://images.unsplash.com/photo-1674979724833-64b09f4e4215?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div data-src="https://images.unsplash.com/photo-1704448041393-4334e666987d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div data-src="https://images.unsplash.com/photo-1674386997990-d301a0f4a388?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </AutoplaySlider>
    );


    return (
        <div>
            {Slider}
        </div>
    );
};

export default Banner;