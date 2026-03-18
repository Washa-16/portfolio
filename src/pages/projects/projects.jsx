import WorkCard from "../../components/card/workCard/workCard";
import { SELECTED_WORK } from "../../components/constants/data/userData";

const Projects = () => {
  return (
    <section className='className="grid md:grid-cols-2 items-center py-20'>
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="space-y-10 mb-10">
        {SELECTED_WORK.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
