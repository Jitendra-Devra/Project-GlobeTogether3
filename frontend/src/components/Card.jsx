import PropTypes from 'prop-types';


const Card = ({ image, title, description }) => {
  return (
    <div>
      <div className="flex-none w-64 h-[350px] border border-gray-300 rounded-lg p-4 shadow-md text-center bg-white">
        <img className='w-full h-40 object-cover rounded-lg' src={image} alt={title} />
        <h3 className="text-lg mt-3">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card