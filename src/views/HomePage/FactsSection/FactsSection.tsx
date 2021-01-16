import { Container } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';

const cardLinearGradience = [
    'linear-gradient(180deg, #3D1C51 29.18%, rgba(103, 45, 139, 0.91) 100%)',

    'linear-gradient(180deg, #DF532A 34.91%, rgba(218, 91, 54, 0.74) 100%)',

    'linear-gradient(180deg, #062540 12.07%, rgba(26, 66, 100, 0.83) 100%);',
];

const FactsSection = (): JSX.Element => {
    const FactCard = (
        <>
            <div
                className="w-full max-w-md shadow-card rounded-xl p-8"
                style={{
                    maxHeight: '400px',
                    height: '100%',

                    background: cardLinearGradience[0],
                }}
            >
                Slide1
            </div>
            <style jsx>
                {`
                    .shadow-card {
                        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                            0 3px 6px rgba(0, 0, 0, 0.23);
                        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    }
                    .shadow-card:hover {
                        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                            0 10px 10px rgba(0, 0, 0, 0.22);
                    }
                `}
            </style>
        </>
    );

    return (
        <Container>
            <div className="h-screen py-16 px-8">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={100}
                    className="w-full h-full"
                >
                    <SwiperSlide>{FactCard}</SwiperSlide>
                    <SwiperSlide>{FactCard}</SwiperSlide>
                    <SwiperSlide>{FactCard}</SwiperSlide>
                </Swiper>
            </div>
        </Container>
    );
};

export default FactsSection;
