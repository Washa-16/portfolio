import StackCard from "../../components/card/stackCard/stackCard";
import { TECK_STACK } from "../../components/constants/data/userData";

const TeckStack = () => {
  const { dev_design, apps } = TECK_STACK;
  return (
    <section className="py-20">
      <div className="pb-12">
        <div className="pb-12 border-b border-gray-200 dark:border-neutral-800">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">Tech Stack</h1>
          <p className="text-gray-500 text-lg">
            The dev tools, apps, devices, and games I use and play.
          </p>
        </div>

        <div className="py-12">
          <h3 className="text-4xl text-gray-400 md:text-5xl font-bold pl-10">
            Dev & Design
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 p-10">
            {dev_design.map((dev) => (
              <StackCard key={dev.id} {...dev} />
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="text-4xl text-gray-400 md:text-5xl font-bold pl-10">
            Apps
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 p-10">
            {apps.map((dev) => (
              <StackCard key={dev.id} {...dev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeckStack;
