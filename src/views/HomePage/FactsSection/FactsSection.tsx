import { Container, Typography } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FactCard } from './components/FactCard';

const facts = [
    {
        title: 'Every Job Vacancy',
        subtitle: 'persists for a minimum of 12 weeks',
    },
    {
        title: 'Every Job Vacancy',
        subtitle: 'persists for a minimum of 12 weeks',
    },
    {
        title: 'Every Job Vacancy',
        subtitle: 'persists for a minimum of 12 weeks',
    },
];

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
                    {facts.map(({ title, subtitle }, index) => (
                        <SwiperSlide
                            style={{ width: 'unset' }}
                            key={`fact-${index + 1}`}
                        >
                            <FactCard
                                cardNumber={index + 1}
                                title={title}
                                subtitle={subtitle}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default FactsSection;
