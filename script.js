const link = document.querySelectorAll("#mainmenu ul li a");

link.forEach(link=>{
  link.addEventListener('click', (event)=>{
    link.forEach(link=>{
      link.parentElement.classList.remove('active');
    });
    this.parentElement.classList.add('active');
  });
});