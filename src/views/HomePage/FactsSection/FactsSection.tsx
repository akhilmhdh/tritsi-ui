import { Container, Typography } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FactCard } from './components/FactCard';

const facts = [
    {
        title: 'CAREERBUILDER\n2017',
        subtitle:
            '60% of the employers from the US have job openings that stay vacant for 12 weeks or longer.',
        link:
            'http://press.careerbuilder.com/2017-04-13-The-Skills-Gap-is-Costing-Companies-Nearly-1-Million-Annually-According-to-New-CareerBuilder-Survey',
    },
    {
        title: 'DELOITTE',
        subtitle:
            'Skill-Gap will leave behind an estimate of 2.4 Million positions between 2018 and 2028.',
        link:
            'https://documents.deloitte.com/insights/2018DeloitteSkillsGapFoWManufacturing',
    },
    {
        title: 'MANPOWERGROUP',
        subtitle:
            '54% of companies worldwide report talent shortage, which is the highest ever and almost as double as what it was a decade ago.',
        link:
            'https://go.manpowergroup.com/hubfs/MPG_WhatWorkersWant_2020.pdf?hsLang=en',
    },
    {
        title: 'WORLD ECONOMIC\nFORUM',
        subtitle:
            'More than half of all employees(54%) will require significant reskilling by 2022.',
        link: 'https://www.weforum.org/reports/the-future-of-jobs-report-2018',
    },
];

const FactsSection = (): JSX.Element => {
    return (
        <Container>
            <Typography variant="sectionTitle" className="mb-16 md:mb-24">
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
                    {facts.map(({ title, subtitle, link }, index) => (
                        <SwiperSlide
                            style={{ width: 'unset' }}
                            key={`fact-${index + 1}`}
                        >
                            <FactCard
                                cardNumber={index + 1}
                                title={title}
                                subtitle={subtitle}
                                link={link}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default FactsSection;
