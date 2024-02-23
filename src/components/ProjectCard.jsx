import React from 'react'
import Image from './ui/image'
import { formatDate } from '../lib/utils'

const ProjectCard = () => {
    return (
        <a
            href={`/project/${project.slug.current}`}
            aria-label={`Show ${project.name} project details`}
            data-astro-prefetch
            className="relative flex-1 flex-grow rounded-lg border border-neutrals-200/20 bg-radial-highlight p-4 transition-[transform,filter] duration-300 focus-visible:-translate-y-2 focus-visible:scale-[1.01] focus-visible:drop-shadow-lg md:p-8 md:hover:-translate-y-2 md:hover:scale-[1.01] md:hover:drop-shadow-lg"
        >
            <Image
                alt={project.poster.alt}
                className="aspect-video w-full rounded-md object-cover object-center"
                style={{
                    backgroundColor: project.poster.asset.metadata.palette.dominant.background,
                }}
                {...generateImageSizeProps({ image: project.poster })}
            />
            <article className="mt-4 flex flex-col items-center gap-y-2 text-center">
                <time
                    dateTime={project.date}
                    className="text-xs uppercase text-neutrals-200"
                >
                    {formatDate(project.date)}
                </time>
                <h3 className="text-2xl font-bold md:text-3xl">{project.name}</h3>
                {project.tags && <p className="mb-2 text-xs text-neutrals-300">{project.tags.join(', ')}</p>}
                <p className="max-w-prose text-pretty text-base/relaxed text-neutrals-200">
                    {project.description}
                </p>
            </article>
        </a>
    )
}

export default ProjectCard
