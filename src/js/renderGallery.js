import handleModal from './handleModal';
import manageLoadButton from './manageLoadButton';
import gallery from '../templates/gallery.hbs';
import imgcard from '../templates/imgcard.hbs';
import refs from './refs';
const { listContainer } = refs;

export default function renderGallery(dataRef) {
  const { hits, total } = dataRef;
  // console.log(hits);
  const listMarkup = gallery();
  listContainer.insertAdjacentHTML('beforeend', listMarkup);
  const galleryAccess = document.querySelector('.gallery');
  const newCards = hits.map(imgcard).join('');
  galleryAccess.insertAdjacentHTML('beforeend', newCards);

  manageLoadButton(total, hits);

  const elementForId = hits[0].id;
  // console.log(elementForId);
  const findId = document.getElementById(`${elementForId}`);
  // console.log(findId);
  findId.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  // window.scrollTo({
  //   top: document.documentElement.offsetHeight,
  //   behavior: 'smooth',
  //   block: 'start',
  // });

  galleryAccess.addEventListener('click', handleModal);
}
