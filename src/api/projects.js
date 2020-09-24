import art from '../images/art.png';
import todos from '../images/todos.png';
import miami from '../images/miami.png';
import dia from '../images/dia.png';

export const projects = [
  {
    id: 0,
    name: 'Art project',
    url: 'http://chaykovska.com.ua',
    imageUrl: art,
    technologies: 'Drupal 8, CSS',
    urlCode: '',
  },
  {
    id: 1,
    name: 'Todo app',
    url: 'https://volodsher.github.io/react_todo-app/',
    imageUrl: todos,
    technologies: 'React.js, JS, CSS, JSX',
    urlCode: 'https://github.com/Volodsher/react_todo-app/tree/dvlpr-todoApp',
  },
  {
    id: 2,
    name: 'Layout Miami',
    url: 'https://volodsher.github.io/layout_miami/',
    imageUrl: miami,
    technologies: 'React.js, JS, CSS, JSX',
    urlCode: 'https://github.com/Volodsher/layout_miami/tree/dvlpr-miami-v',
  },
  {
    id: 3,
    name: 'Layout Dia',
    url: 'https://volodsher.github.io/layout_dia/',
    imageUrl: dia,
    technologies: 'React.js, JS, CSS, JSX',
    urlCode: 'https://github.com/Volodsher/layout_dia/tree/dvlpr-dia',
  },
];

export default projects;
