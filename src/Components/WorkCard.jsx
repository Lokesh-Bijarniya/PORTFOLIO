import VisibilityIcon from "@mui/icons-material/Visibility";
import Tilt from "react-parallax-tilt";
import PropTypes from 'prop-types';

export default function WorkCard({ src, head, description, tech, gitLink }) {
  const colors = [
    "text-sky-500",
    "text-green-500",
    "text-rose-500",
    "text-yellow-500",
    "text-blue-500",
  ];

  return (
    <Tilt>
      <div className="bg-indigo-950 max-w-sm rounded-3xl overflow-hidden">
        <div className="relative">
          <img src={src} alt="" className="rounded-t-3xl lg:h-56 w-full" />

          <span className="absolute top-2 right-2">
            <button className="px-2 bg-yellow-500 rounded-md">
              <a href={gitLink} target="_blank" className="hover:text-pink-500">
                <VisibilityIcon />
              </a>
            </button>
          </span>
        </div>

        <div className="p-4">
          <h1 className="text-2xl">{head}</h1>
          <p className="text-violet-300 font-extralight">{description}</p>
          <h3 className="my-4 flex flex-wrap">
            {tech.map((item, index) => (
              <span
                key={index}
                className={`mr-2 ${colors[index % colors.length]}`}
              >
                {item}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </Tilt>
  );
}


WorkCard.propTypes = {
  src: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  gitLink: PropTypes.string.isRequired,
};
