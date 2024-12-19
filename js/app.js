let hamburderBtn = document.querySelector(".header-img")
let headerResponsiveMenu = document.querySelector(".header-responsive-menu")
let headerResponsiveMenuTopClose = document.querySelector(".header-responsive-menu-top-close")

hamburderBtn.addEventListener('click' , function(){
    headerResponsiveMenu.classList.add("show") 
})


headerResponsiveMenuTopClose.addEventListener('click' , function(){
    headerResponsiveMenu.classList.remove("show") 
})



let btn  = document.querySelectorAll(".item-list-text")


btn.forEach(function  (item , index) {
    item.addEventListener("click" , function(){
        btn.forEach(function (item , index) {
            item.classList.remove('active')
        })
        item.classList.add('active')

    })
})



let bookmarkRowImg = document.querySelectorAll(".bookmark-row-img")
let questionItemText = document.querySelectorAll(".question-item-text")
let bookmarkRowText = document.querySelectorAll(".bookmark-row-text")

bookmarkRowImg.forEach(function(item , index){
    item.addEventListener('click' , function(){
        questionItemText[index].classList.toggle("open")
        item.classList.toggle("rotate")
        bookmarkRowText[index].classList.toggle("color")
    })

})

