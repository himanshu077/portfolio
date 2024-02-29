import React, { useContext } from 'react';
import { Caption, Paragraph } from '../../ui/typography';
import TypingHeading from '../../TypingHeading';
import Image from '../../ui/image';
import { PortfolioContext } from '../../../context/protfolioContext';

const About = () => {
    const portfolioData = useContext(PortfolioContext);
    // Consider adding error handling or a loading state
    const aboutData = portfolioData && portfolioData.website;

    return (
        <section
            id="about"
            aria-labelledby='about-heading'
            className="relative z-10 w-full bg-neutrals-900"
        >
            <div
                className="flex min-h-screen w-full items-center max-lg:flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,min(91.666667%/2,40rem))_minmax(0,min(91.666667%/2,40rem))_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,min(80%/2,40rem))_minmax(0,min(80%/2,40rem))_minmax(0,1fr)]"
            >
                <Image
                    src={aboutData ? aboutData.landing_page.about.image : ''}
                    alt="about image"
                    className="h-full w-full max-h-screen bg-neutrals-800 object-cover object-center lg:col-start-1 lg:col-end-3"
                />
                <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:ps-10 xl:ps-20">
                    <Caption id="about-heading">About</Caption>
                    <TypingHeading
                        visible="client"
                        headings={aboutData ? aboutData.landing_page.about.heading : []}
                    />
                    <Paragraph>
                        {aboutData ? aboutData.landing_page.about.description : ""}
                    </Paragraph>
                </div>
            </div>
        </section >
    )
}

export default About;
