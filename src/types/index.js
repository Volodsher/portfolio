import { string, oneOf, number } from 'prop-types';

export const allType = oneOf({
  id: number,
  name: string.isRequired,
  url: string.isRequired,
  imageUrl: string.isRequired,
  technologies: string.isRequired,
  urlCode: string.isRequired,
});
