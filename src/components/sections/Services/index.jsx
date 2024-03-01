import React, { useContext } from "react";
import Section from "../../ui/section";
import Container from "../../ui/container";
import { Caption, Heading, Paragraph } from "../../ui/typography";
import ServiceGrid from "../../ServiceGrid";
import { PortfolioContext } from "../../../context/protfolioContext";

const Services = () => {
    const projectData = useContext(PortfolioContext);
  return (
    <Section
      id="services"
      aria-labelledby="services-heading"
      hasBorderTop
      hasGlowEffect
    >
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
          <Caption id="services-heading">Services</Caption>
          <Heading>
            Lorem Ispum Dolor, <br className="lg:hidden" />
            condimentum massa
          </Heading>
          <Paragraph>
            Secure your seat, egestas condimentum massa, id finibus quam porta
            nec.{" "}
            <span className="text-neutrals-100">
              egestas condimentum massa, id finibus quam porta nec.{" "}
            </span>
          </Paragraph>
        </div>
        <ServiceGrid visible="client" services={projectData?.services} />
      </Container>
    </Section>
  );
};

export default Services;
