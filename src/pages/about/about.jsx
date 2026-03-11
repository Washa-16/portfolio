import { useNavigate } from "react-router-dom";
import { ABOUT_PAGE_DATA } from "../../components/constants/data/userData";
import { useOutletContext } from "react-router-dom";
import {
  circlePotrait,
  white_circlePotrait,
} from "../../components/constants/images/ImageConstants";
const About = () => {
  const navigate = useNavigate();
  const { hero, sections, footerText, contact } = ABOUT_PAGE_DATA;
  const { darkMode } = useOutletContext();

  return (
    <section className="py-20">
      <div className="pb-12 border-b border-gray-200 dark:border-neutral-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">{hero.title}</h1>
        <p className="text-gray-400 text-lg">{hero.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 py-12">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-xs text-gray-400 font-semibold mb-3">
                {section.heading}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-8">
                {section.content}
              </p>
            </div>
          ))}
          <div className="pt-6">
            <p className="text-gray-700 dark:text-gray-300 leading-8 mb-8">
              {footerText.description}
            </p>

            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {footerText.closing}
            </p>

            <img
              src={footerText.signature}
              alt=""
              className="w-[180px] object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-10 md:items-center gap-8 space-y-10">
          <div className="w-[220px] h-[260px] md:w-[260px] md:h-[300px]">
            <img
              src={darkMode ? white_circlePotrait : circlePotrait}
              alt="about shape"
              className="w-full h-full object-contain"
            />
          </div>

          <button
            onClick={() => navigate(contact.buttonPath)}
            className="px-6 py-3 rounded-xl bg-[#181818] text-white border-[#383737]"
          >
            {contact.buttonText} →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
