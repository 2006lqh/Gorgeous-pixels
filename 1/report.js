const dialog = document.querySelector('#lightbox');
const image = document.querySelector('#lightbox-image');
const title = document.querySelector('#lightbox-title');
document.querySelectorAll('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    image.src = button.dataset.lightbox;
    image.alt = button.dataset.title;
    title.textContent = button.dataset.title;
    dialog.showModal();
  });
});
document.querySelector('#close-lightbox').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
