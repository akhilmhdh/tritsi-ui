import { Container, Typography } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FactCard } from './components/FactCard';

const FactsSection = (): JSX.Element => {
    return (
        <Container>
            <Typography variant="sectionTitle" className="mb-24">
                Findings
            </Typography>
            <div className="pb-16 md:px-8">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={50}
                    centeredSlides
                    breakpoints={{
                        720: {
                            slidesPerView: 'auto',
                            spaceBetween: 50,
                            centeredSlides: false,
                        },
                    }}
                >
                    <SwiperSlide style={{ width: 'unset' }}>
                        <FactCard />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: 'unset' }}>
                        <FactCard />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: 'unset' }}>
                        <FactCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    );
};

export default FactsSection;
