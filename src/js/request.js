import apiService from './apiService';
import renderGallery from './renderGallery';

export default function request() {
  apiService.fetchImages().then(data => {
    renderGallery(data);
  });
}
