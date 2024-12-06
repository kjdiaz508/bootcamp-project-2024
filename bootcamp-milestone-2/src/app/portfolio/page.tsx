import connectDB from "@/database/db";
import PortfolioModel, { ProjectType } from "@/database/projectSchema";
import Project from "@/components/project";
import styles from "./page.module.css";

export default async function PortfolioPage() {
  const getProjects = async () => {
    await connectDB();
    try {
      const projects = await PortfolioModel.find().orFail();
      return projects;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const projects: ProjectType[] = await getProjects();
  return (
    <main>
      <h1 className="page-title">Portfolio</h1>
      <div className={styles.container}>
        {projects.map((project, idx) => (
          <Project // This is how we call the component
            key={idx}
            name={project.name}
            date={project.date}
            description={project.description}
            image={project.image}
            image_alt={project.image_alt}
          />
        ))}
      </div>
    </main>
  );
}
