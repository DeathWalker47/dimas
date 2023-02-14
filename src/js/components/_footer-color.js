const blogPage = document.querySelector('.blog-page')
if(blogPage) {
  window.addEventListener('scroll', function() {
    if(window.pageYOffset > 180) {
      document.querySelector('.header').classList.add('header-scroll');
    }else {
      document.querySelector('.header').classList.remove('header-scroll');
    }
  });
}


