import { ProjectDetails } from '@/components/ProjectDetails';
import { getProjectData, getAllProjectIds } from '@/lib/projects';

export function generateStaticParams() {
  return getAllProjectIds().map((id) => ({
    projectId: id,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = getProjectData(params.projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails project={project} />;
}