import * as basicLightbox from 'basiclightbox';

export default function handleModal(e) {
  console.log(e.target.nodeName);

  if (e.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.original}" width="800" height="600">
`);

    instance.show();
  } else {
    return;
  }
}
