/**
 * Created by Lester on 2020/12/19
 */

import 'src/App.css';

const name: string = 'Lester Long';

const render = () => {
  return (
      '<div class="wrap">' +
            `<div class="title">Hello ${name} 夕宿君兮</div>` +
            '<div class="name">npm project</div>' +
      '</div>'
  )
};

export default render();
