import Link from 'next/link';
import React from 'react';
import Meta from '../components/Meta';
import { projects } from '../projectsData';

const portfolio = () => {
    return (
        <div>
            <Meta 
                title={"Portfolio, les tours derniers projets réalisés"}
                description={"Retrouvez tous mes projets"}
            />
            <h2>Porftolio</h2>
            <ul>
                {
                    projects.map((project) => (
                        <li key={project.id}>
                            <Link href="projects/[id]" as={"projects/" + project.id}>
                                {project.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default portfolio;