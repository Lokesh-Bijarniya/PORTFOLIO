import PropTypes from 'prop-types';

export default function ContactCard({ head, description, src, href }) {
  return (
    <div className="bg-slate-900 w-52 h-32 m-12 p-4 rounded-lg">
      <span className="relative bottom-12 ">
        <img src={src} alt="" className="h-16 w-16 rounded-full " />
        <h2 className="mt-4">{head}</h2>
        <a href={href}>
          <p className="mt-2 text-gray-400 hover:text-red-500">{description}</p>
        </a>
      </span>
    </div>
  );
}


ContactCard.propTypes = {
  src: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};
