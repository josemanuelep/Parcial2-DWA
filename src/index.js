import './scss/styles.scss'
import { createElement } from './js/utils'

//Ruta de las imagenes
const imgRutes = ['/src/letters/e.png', '/src/letters/i.png', '/src/letters/l.png', '/src/letters/o.png', '/src/letters/r.png', '/src/letters/t.png', '/src/letters/v.png', '/src/letters/w.png'];

const el = document.createElement('div')
const objAttr = { class: 'inn-container home' }

const children = [
  createElement('div', { class: 'main-nav' }, ['Lenguaje de señas']),
  createElement('section', { class: 'main_section' }, [
    `<img id="ppal-img" class"main-img" src="" alt="" height="100" width="100">`,
  ]),
  createElement('div', { class: 'flex-container' }, [
    `<div id="v_letter" class="flex-item">V</div>`,
    `<div id="t_letter" class="flex-item">T</div>`,
    `<div id="r_letter" class="flex-item">R</div>`,
    `<div id="e_letter" class="flex-item">E</div>`,
    `<div id="w_letter" class="flex-item">W</div>`,
    `<div id="o_letter" class="flex-item">O</div>`,
    `<div id="l_letter" class="flex-item">L</div>`,
    `<div id="i_letter" class="flex-item">I</div>`,
  ])
]

const app = createElement(el, objAttr, children)
console.log(app)
const root = document.getElementById('root')
root.appendChild(app)

//Mostrar imagenes

const btnv_letter = document.getElementById('v_letter');
const btnt_letter = document.getElementById('t_letter');
const btnr_letter = document.getElementById('r_letter');
const btne_letter = document.getElementById('e_letter');
const btnw_letter = document.getElementById('w_letter');
const btno_letter = document.getElementById('o_letter');
const btnl_letter = document.getElementById('l_letter');
const btni_letter = document.getElementById('i_letter');

btnv_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[0]);
})
btnt_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[1]);
})
btnr_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[2]);
})
btnv_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[3]);
})
btne_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[4]);
})
btnw_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[5]);
})
btno_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[6]);
})
btnl_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[7]);
})
btni_letter.addEventListener('click', e => {
  e.preventDefault()
  showImg(imgRutes[8]);
})












function showImg(rute) {

  document.getElementById('ppal-img').src = rute;

}
