import refs from './refs';

const { listContainer } = refs;
export default function createHeading(queryRef) {
  const elementExists = document.querySelector('.list__heading');
  // console.log(elementExists);
  if (elementExists == null) {
    const createHeading = document.createElement('h2');
    createHeading.classList.add('list__heading');
    createHeading.textContent = `Search results for "${queryRef}"`;
    listContainer.insertAdjacentElement('afterbegin', createHeading);
  } else {
    return;
  }
}
