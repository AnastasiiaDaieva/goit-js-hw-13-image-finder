import createHeading from './createHeading';
import handleModal from './handleModal';
import manageLoadButton from './manageLoadButton';
import gallery from '../templates/gallery.hbs';
import imgcard from '../templates/imgcard.hbs';
import refs from './refs';
const { btnLoad, btnForm, searchContainer, listContainer } = refs;

export default function renderGallery(dataRef, queryRef) {
  console.log(dataRef);

  const { hits, total } = dataRef;
  createHeading(queryRef);
  console.log(hits);
  const listMarkup = gallery();
  listContainer.insertAdjacentHTML('beforeend', listMarkup);
  const galleryAccess = document.querySelector('.gallery');
  hits.map(item => {
    const newCard = imgcard(item);
    galleryAccess.insertAdjacentHTML('beforeend', newCard);
  });
  manageLoadButton(total, hits);
  const elementForId = hits[0].id;
  console.log(elementForId);
  const findId = document.getElementById(`${elementForId}`);
  console.log(findId);
  findId.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  galleryAccess.addEventListener('click', handleModal);
}
