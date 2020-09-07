import { arrayOf, shape, string, number } from 'prop-types';

const allTypes = {
  projects: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    url: string.isRequired,
    imageUrl: string.isRequired,
    technologies: string.isRequired,
    urlCode: string.isRequired,
  })).isRequired,
};

export default allTypes;
