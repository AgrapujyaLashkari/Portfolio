const prj1 = document.querySelector('#prj1');
prj1.addEventListener('click', () => {
    window.open('https://agrapujyalashkari.github.io/Mid-Semester-Project/', '_blank');
});

const prj2 = document.querySelector('#prj2');
prj2.addEventListener('click', () => {
    window.open('https://agrapujyalashkari.github.io/Significo-Clone/', '_blank');
});

const prj3 = document.querySelector('#prj3');
prj3.addEventListener('click', () => {
    window.open('https://agrapujyalashkari.github.io/internshipproject/', '_blank');
});

const prj4 = document.querySelector('#prj4');
prj4.addEventListener('click', () => {
    window.open('https://agrapujyalashkari.github.io/2048-Game/', '_blank');
});

$(document).ready(function () {
    $(window).scroll(function () {
        //  sticky navbar on scroll script  //
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        //  scroll-up button show/hide script  //
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    //  slide-up script  //

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        //  removing smooth scroll on slide-up button click  //
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        //  Smooth scroll on Menu Items click  //

        $("html").css("scrollBehavior", "smooth");
    });

    //  Toggle Navbar  //

    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    //  Typing Text Animation  //

    var typed = new Typed(".typing", {
        strings: [
            "Frontend Developer",
            "Python Developer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [
            "Frontend Developer",
            "Python Developer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //  Owl Carousel  //

    $(".carousel").owlCarousel({
        margin: 20,
        autoplayTimeOut: 2000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});