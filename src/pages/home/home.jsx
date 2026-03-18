import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  circlePotrait,
  white_circlePotrait,
} from "../../components/constants/images/ImageConstants";
import WorkCard from "../../components/card/workCard/workCard";
import InfoCard from "../../components/card/infoCard/infoCard";
import {
  KNOW_ME,
  SELECTED_WORK,
} from "../../components/constants/data/userData";
import resume from "../../assets/resume/language.pdf";
import { CONTACT_PATH } from "../../components/constants";

const Home = () => {
  const { darkMode } = useOutletContext();
  const navigate = useNavigate();
  console.log(darkMode, "darkmode");

  return (
    <>
      <section className="grid md:grid-cols-2 gap-10 items-center py-15">
        <div>
          <h1 className="text-5xl font-bold mb-6">I'm Eihab Khan</h1>

          <p className="text-gray-600 mb-6">
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. A front-end engineer helping
            startups turn their visions into a digital reality. I specialize in
            designing and building modern mobile and web-based apps.
          </p>

          <div className="flex gap-4">
            <button
              className="bg-[#181818] text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-[#2a2a2a]
                          hover:-translate-y-1 hover:shadow-lg
                          transition-all duration-300"
              onClick={() => window.open(resume, "_blank")}
            >
              See my resume
            </button>

            <button
              className="bg-gray-200 dark:bg-[#181818] px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-[#2a2a2a]
                          hover:-translate-y-1 hover:shadow-lg
                          transition-all duration-300"
              onClick={() => navigate(CONTACT_PATH)}
            >
              Get in touch
            </button>
          </div>
        </div>

        <div className="flex justify-center py-20">
          <img src={darkMode ? white_circlePotrait : circlePotrait} alt="" />
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
        <div className="space-y-10 mb-10">
          {SELECTED_WORK.map((item) => (
            <WorkCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12">Get to know me</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {KNOW_ME.map((item) => (
            <InfoCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="py-20 border-t border-gray-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Let's work together</h2>

          <p className="text-gray-600 dark:text-gray-400">
            Want to discuss an opportunity to create something great?
          </p>
        </div>

        <button
          className="bg-black text-white px-6 py-3 rounded-lg dark:bg-white dark:text-black hover:bg-gray-500 dark:hover:bg-gray-400
                      hover:-translate-y-1 hover:shadow-lg
                      transition-all duration-300"
          onClick={() => navigate(CONTACT_PATH)}
        >
          Get in touch
        </button>
      </section>
    </>
  );
};

export default Home;
