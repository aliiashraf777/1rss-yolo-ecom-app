import PropTypes from 'prop-types'
import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button';

const HomeSlider = props => {

    const data = props.data;

    // const activeSlide = 0;
    const [activeSlide, setActiveSlide] = useState(0);

    const timeOut = props.timeout ? props.timeout : 3000;


    // const nextSlide = () => {
    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;

            setActiveSlide(index);
        }, [activeSlide, data],
    )

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;

        setActiveSlide(index);
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            }, timeOut);

            return () => {
                clearInterval(slideAuto);
            }
        }
    }, [nextSlide, timeOut, props])

    return (
        <div className="hero-slider">
            {
                data.map((item, idx) => (
                    <HeroSliderItem
                        key={idx}
                        item={item}
                        active={idx === activeSlide}
                    />
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider__control">
                        <div
                            className="hero-slider__control--item"
                            onClick={prevSlide}
                        >
                            <i className="bx bx-chevron-left"></i>
                        </div>

                        <div className="hero-slider__control--item">
                            <div className="index">
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div>

                        <div
                            className="hero-slider__control--item"
                            onClick={nextSlide}
                        >
                            <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

HomeSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const HeroSliderItem = props => (
    <div
        className={`hero-slider__item ${props.active ? 'active' : ''}`}
    >
        <div className="hero-slider__item__info">
            <div className={`hero-slider__item__info--title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider__item__info--description">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider__item__info--btn">
                <Link to={props.item.path}>
                    <Button
                        backgroundColor={props.item.color}
                        icon='bx bx-cart'
                        animate={true}
                    >
                        xem chi tiết
                    </Button>
                </Link>
            </div>
        </div>

        <div className="hero-slider__item__image">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} alt="" />
        </div>
    </div>
)

export default HomeSlider