import { useEffect } from 'react';

import { isEmpty } from 'lodash/fp';
import { useParams } from 'react-router-dom';

import { Head } from '@/components/Head';
import { useProjectsStore } from '@/stores/projects';

export const Project = () => {
  const { projectId } = useParams();
  console.log(projectId);
  const actions = useProjectsStore((store) => store.actions);
  const project = useProjectsStore((store) => store.project);

  console.log(project);

  useEffect(() => {
    const getProject = () => {
      actions.getProject({ projectId });
    };

    if (isEmpty(project)) {
      getProject();
    }
  }, [project]);

  return (
    <>
      <Head title="Project" />
      project
    </>
  );
};
