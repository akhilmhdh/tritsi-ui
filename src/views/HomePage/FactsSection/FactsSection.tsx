import { Container, Typography } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FactCard } from './components/FactCard';

const facts = [
    {
        title: 'CAREERBUILDER\n2017',
        subtitle:
            '60% of the employers from the US have job openings that stay vacant for 12 weeks or longer.',
    },
    {
        title: 'DELOITTE',
        subtitle:
            'Skill-Gap will leave behind an estimate of 2.4 Million positions between 2018 and 2028.',
    },
    {
        title: 'MANPOWERGROUP',
        subtitle:
            '54% of companies worldwide report talent shortage, which is the highest ever and almost as double as what it was a decade ago.',
    },
    {
        title: 'WORLD ECONOMIC\nFORUM',
        subtitle:
            'More than half of all employees(54%) will require significant reskilling by 2022.',
    },
];

const FactsSection = (): JSX.Element => {
    return (
        <Container>
            <Typography variant="sectionTitle" className="mb-24">
                Why We Exist
            </Typography>
            <div className="pb-16 md:px-8">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={50}
                    centeredSlides
                    loop
                    loopedSlides={3}
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
