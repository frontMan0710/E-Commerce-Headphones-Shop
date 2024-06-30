import Swiper from "swiper/bundle"
import "swiper/css/bundle"

const maxBullets = 3

new Swiper(".swiper", {
    direction: "horizontal",

    slidesPerView: "auto",

    preloadImages: false,
    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            var totalBullets = this.slides.length
            var start = Math.max(this.activeIndex - Math.floor(maxBullets / 2), 0)
            var end = Math.min(start + maxBullets, totalBullets)

            if (index >= start && index < end) {
                return '<span class="' + className + '"></span>'
            }
            return '<span class="' + className + '" style="display: none;"></span>'
        }
    },
    on: {
        slideChange: function () {
            this.pagination.render()
            this.pagination.update()
        }
    },
    breakpoints: {
        320: {
            spaceBetween: 16,
        },
        1120: {
            spaceBetween: 24,
        },
    },
})
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navOffer")
    const close = document.querySelector(".closeNav")
    const $header = document.querySelector("header")
    const main = document.querySelector("main")

    main.style.paddingTop = `${$header.clientHeight}px`

    close.onclick = function () {
        nav.remove()
        main.style.paddingTop = `${$header.clientHeight}px`
    }

    const burgerIcon = document.querySelector("#burgerIcon")
    const menuContent = document.querySelector("#menuContent")
    const closeButton = document.querySelector(".closeBurger")

    burgerIcon.onclick = function() {
        this.classList.toggle("active")
        if (window.innerWidth < 907) {
            menuContent.classList.toggle("active")
        }
        if (window.innerWidth < 768) {
            document.body.classList.toggle("lock")
        }
    }
    if (window.innerWidth < 907 && window.innerWidth >= 680) {
        menuContent.style.top = `${$header.clientHeight}px`
    }
    closeButton.onclick = function () {
        menuContent.classList.remove("active")
        burgerIcon.classList.remove("active")
        document.body.classList.remove("lock")
    }

    const logoImg = document.querySelector(".logoImg")
    if (window.innerWidth >= 907) {
        logoImg.setAttribute("src", "img/logo.svg")
    } else {
        logoImg.setAttribute("src", "img/logoMobile.svg")
    }
    if (window.innerWidth < 907) {
        document.querySelector("ul.policy li").remove()
    } else {
        document.querySelector(".footerLinks p").remove()
    }
})