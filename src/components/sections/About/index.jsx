import React from 'react';
import backgroundImage from "../../../assets/Images/background.webp";
import { Caption, Paragraph } from '../../ui/typography';
import TypingHeading from '../../TypingHeading';
import Image from '../../ui/image';

const About = () => {
    const headings = [
        'Developer',
        'Designer',
        'Problem solver',
        'Freelancer',
        'Coffeeholic',
        'Globetrotter',
    ];

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
                    src={backgroundImage}
                    alt="Lorem Ispum dolor"
                    className="h-full w-full max-h-screen bg-neutrals-800 object-cover object-center lg:col-start-1 lg:col-end-3"
                />
                <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:ps-10 xl:ps-20">
                    <Caption id="about-heading">About</Caption>
                    <TypingHeading
                        visible="client" 
                        headings={headings}
                    />
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas condimentum massa,
                        id finibus quam porta nec. Cras et egestas leo. Suspendisse consectetur libero sed faucibus tincidunt.
                        <span className="text-neutrals-100"> Ut cursus neque nec ligula ornare finibus</span>. My
                        Nulla tempus diam eu iaculis condimentum. Vestibulum ultrices neque quis tempor efficitur.
                        Mauris pellentesque risus vel sagittis rutrum
                    </Paragraph>
                </div>
            </div>
        </section >
    )
}

export default About;
