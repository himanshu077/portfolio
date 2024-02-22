import React from "react"
import Container from "../../ui/container"
import Button from "../../ui/button"
import GridBackground from "../../GridBackground"


const Hero = () => {
    return (

        <section
            aria-labelledby="hero-heading"
            className="sticky inset-0 flex h-screen w-full flex-col justify-center py-28"
        >
            <GridBackground visible="true" />
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h1
                        id="hero-heading"
                        className="text-balance text-center text-4xl/tight font-bold text-neutrals-50 sm:text-5xl/tight md:text-7xl lg:text-8xl/tight"
                    >
                        Web Development and Design Studio from the Future
                    </h1>
                    <div className="mt-12 flex items-stretch gap-x-6 gap-y-3 max-sm:flex-col sm:items-center">
                        <Button
                            as="a"
                            href="/#work"
                            background="primary"
                            size="large"
                        >
                            Dig into my universe
                        </Button>
                        <Button
                            as="a"
                            href="/#services"
                            background="primary"
                            size="large"
                            isGhost
                        >
                            See services
                        </Button>
                    </div>
                </div>
            </Container>
        </section>

    )
}
export default Hero