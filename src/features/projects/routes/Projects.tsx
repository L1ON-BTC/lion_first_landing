import { useEffect } from 'react';

import { isEmpty } from 'lodash/fp';
import { Link } from 'react-router-dom';

import { useProjectsStore } from '@/stores/projects';

export const Projects = () => {
  const actions = useProjectsStore((store) => store.actions);
  const projects = useProjectsStore((store) => store.projects);

  console.log(projects);

  useEffect(() => {
    const getProjects = () => {
      actions.getProjects({ page: 0, limit: 10 });
    };

    if (isEmpty(projects)) {
      getProjects();
    }
  }, [projects]);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.id}</Link>
        </div>
      ))}
    </div>
  );
};
