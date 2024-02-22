import React from 'react'
import Container from '../../ui/container'
import Button from '../../ui/button'
import Image from '../../ui/image'
import Icons from '../../ui/icons'

const ProjectDetails = () => {
  return (
    <div>
    <section
    aria-labelledby="project-details-heading"
    class="relative flex min-h-screen w-full bg-neutrals-900 py-[14vh] after:absolute after:inset-0 after:h-full after:w-full after:bg-gradient-to-t after:from-neutrals-900 after:to-neutrals-900/60"
  >
    <Image
      alt={project.poster.alt}
      loading="eager"
      decoding="sync"
      class="absolute inset-0 h-full w-full object-cover object-center"
      style={{
        backgroundColor: project.poster.asset.metadata.palette.dominant.background,
      }}
      src={project.src}
    />
    <Container>
      <div class="relative z-10 flex h-full flex-col justify-end">
        <a
          href="/#work"
          data-astro-prefetch
          class="group absolute start-0 top-0 flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:opacity-80"
        >
          <Icons.ArrowLongLeft
            aria-hidden
            className="me-2 size-6 transition-transform duration-300 group-hover:-translate-x-1 group-focus-visible:-translate-x-1 lg:h-7 lg:w-7"
          /> Back to projects
        </a>
        <time
          datetime={project.date}
          class="mb-4 text-xs uppercase text-neutrals-50/90 lg:text-sm"
        >
          {formatDate(project.date)}
        </time>
        <h1
          id="project-details-heading"
          class="mb-4 text-balance text-4xl font-bold lg:text-6xl"
        >
          {project.name}
        </h1>
        <p
          class="mb-8 max-w-prose text-pretty text-sm/relaxed text-neutrals-50/90 md:text-base/relaxed"
        >
          {project.description}
        </p>
        {
          project.tags && (
            <p class="text-xs text-neutrals-50/90 lg:text-sm">{project.tags.join(', ')}</p>
          )
        }
        <hr class="mb-8 mt-4 h-px border-0 bg-gradient-to-r from-neutrals-50/40 to-transparent" />
        <div class="flex gap-x-4">
          {
            project.projecturl && (
              <Button
                as="a"
                href={project.projecturl}
                rel="noreferrer"
                target="_blank"
                size="small"
              >
                <Icons.Eye
                  aria-hidden
                  className="size-5 me-2"
                />{' '}
                View Project
              </Button>
            )
          }
          {
            project.githuburl && (
              <Button
                as="a"
                href={project.githuburl}
                rel="noreferrer"
                target="_blank"
                size="small"
                isGhost
              >
                <Icons.GitHub
                  aria-hidden
                  className="size-5 me-2"
                />{' '}
                View Source Code
              </Button>
            )
          }
        </div>
      </div>
      {
        project.images.length > 0 && (
          <a
            href="#project-gallery"
            title="See project breakdown"
            aria-label="See project breakdown"
            class="absolute inset-x-0 bottom-[3vh] z-10 mx-auto w-fit animate-bounce"
          >
            <Icons.ArrowDownCircle className="size-9" />
          </a>
        )
      }
    </Container>
  </section>
  {
    project.images.length > 0 && (
      <section
        id="project-gallery"
        aria-label="Project Gallery"
        class="bg-neutrals-900"
      >
        <div class="mx-auto max-w-7xl">
          {project.images.map((image) => (
            <Image
              alt={image.alt}
              class="w-full"
              style={{
                backgroundColor: image.asset.metadata.palette.dominant.background,
              }}
              src={image.src}
            />
          ))}
        </div>
      </section>
    )
  }
</div>  
  )
}

export default ProjectDetails
