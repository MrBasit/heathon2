// main menu
const menuTrigger = document.querySelector('.hamburger__btn');
const menuList = document.querySelector('.navbar');

menuTrigger.addEventListener('click',()=>{
    menuList.classList.toggle('active');
});


// // Logo Width
try {
    document.addEventListener("scroll", () => {
        if (scrollY > 54) {
            document.querySelector(".header-logo").classList.add("active");

        }
        else {
            document.querySelector(".header-logo").classList.remove("active");
        }
    })

} catch (err) {
    console.log(err);
}

// Menu links
try {
    var listItem = document.querySelectorAll('.list__item__links');
    listItem.forEach(item => { item.addEventListener('click', changeMenu) });
    function deacMenu() {
        listItem.forEach(item => { item.classList.remove('active') })
    }
    function changeMenu(e) {
        deacMenu();
        this.classList.add('active');   
    }

} catch (err) {
    console.log(err);
}
// // Back To Top
try {
    var backToTopButton = document.querySelector('.scroll__top__top');
    document.addEventListener("scroll", () => {
        if (scrollY > 100) {
            backToTopButton.classList.add("active");
        }
        else {
            backToTopButton.classList.remove("active");
        }
    });
    // 
    backToTopButton.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });

} catch (err) {
    console.log(err);
}
// Home By Default Header
try {
    
    var faqLink = document.querySelectorAll('.faq__item__link');
    var faqLinkContent = document.querySelectorAll('.faq__faq__item');
    faqLink.forEach(item => { item.addEventListener('click', FaqListFunc) });
    function deacFaqContent() {
        faqLinkContent.forEach(item => { item.classList.remove('show') })
    }

    function FaqListFunc(e) {
        console.log(e.target);
        
        if (e.target.parentElement.classList.contains('show') || e.target.parentElement.parentElement.classList.contains('show')) {
            deacFaqContent();
        }else{
            deacFaqContent();
            this.parentElement.classList.add('show');
        }    
    }

} catch (err) {
    console.log(err);
}
// Popup Card
try {
    
    var popupCardTrigger = document.querySelectorAll('.available');
    var body = document.querySelector('body');
    var popupCardMain = document.querySelector('.popup__card__main');
    popupCardTrigger.forEach(item => { item.addEventListener('click', popupCardFunc) });
    function popupCardFunc() {
        body.classList.toggle('position-fixed')
        popupCardMain.classList.toggle('active');
    }

} catch (err) {
    console.log(err);
}
