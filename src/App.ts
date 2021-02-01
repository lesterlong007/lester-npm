/**
 * Created by Lester on 2020/12/19
 */

import 'src/App.css';
import  { copy } from "src/Content";

const name: string = 'Lester Long';

window.onload = function () {
  const ele = document.querySelector('.title');
  if (ele) {
    ele.addEventListener('click', function () {
      copy('我的名字')
    })
  }
};

const render = () => {
  return (
      '<div class="wrap">' +
            `<div class="title">Hello ${name} 夕宿君兮</div>` +
            '<div class="name">npm project</div>' +
      '</div>'
  )
};

export default render();
