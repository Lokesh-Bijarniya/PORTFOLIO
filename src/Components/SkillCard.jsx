import PropTypes from 'prop-types';

export default function SkillCard({ name, src }) {
  return (
    <div className="h-40 w-40 m-auto bg-orange-200 rounded-lg">
      <div className="border-2 rounded-full w-28 bg-black m-auto">
        <img src={src} alt="html" className="w-32 p-2" />
      </div>
      <h1 className="text-center text-3xl font-extralight">{name}</h1>
    </div>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

