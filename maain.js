
  const navlinks = document.querySelector('.nav-links');
  const CloseMenu= document.querySelector('.CloseMenu');
  const OpenMenu = document.querySelector('.OpenMenu');

  OpenMenu.addEventListener('click' , show);
  CloseMenu.addEventListener('click' , close);


  function show() {
    navlinks.style.display = 'flex';
    navlinks.style.top = '0';
    
  }

  function close() {
    navlinks.style.top = '-100%';
    
  }

