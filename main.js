const smallNav = document.querySelector('.sidenav ul')
const smallNavToggleBtn = document.querySelector('.small-nav-toggle')
const closeIcon = document.querySelector('.close-icon')


function showSmallNav(){
    smallNav.classList.add('show')
}
function hideSmallNav(){
    smallNav.classList.add('hide')
}

smallNavToggleBtn.addEventListener('click',()=>{
    showSmallNav()
})

closeIcon.addEventListener('click',()=>{
    smallNav.classList.remove('show')
    hideSmallNav()
})


function handleScreenSizeChange() {
    // Get the current screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // Check if the screen width is greater than or equal to 768px
    if (screenWidth >= 768) {
        if(smallNav.classList.contains('show')){
            smallNav.classList.remove('show')
            hideSmallNav()
        }
      // Perform your desired action here
      console.log('Screen width is 768px or larger');
    }
  }
  
  // Add the event listener for the 'resize' event
  window.addEventListener('resize', handleScreenSizeChange);
