import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProjectPage from "@/components/Home/ProjectPage";
import { PROJECTS_DATA } from "@/data/projectsData";

function ProjectDetailPage() {
  const { slug } = useParams();
  const projectData = PROJECTS_DATA[slug];

  if (!projectData) {
    return <Navigate to="/portfolio" replace />;
  }

  return <ProjectPage {...projectData} />;
}

export default ProjectDetailPage;
