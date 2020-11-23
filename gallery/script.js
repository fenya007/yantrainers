const btns = document.querySelectorAll('li');
const section = document.querySelectorAll('.item');
btns.forEach(el => {
  el.addEventListener('click', ()=> {
    btns.forEach(el => {
      el.className = "";
    });
    el.className = "active";

    let value = el.textContent;
    section.forEach(show => {
      show.style.display = 'none';
        if (show.getAttribute("data-id") === value || value === 'all') {
        show.style.display = 'block';
      }
    });
  });
});