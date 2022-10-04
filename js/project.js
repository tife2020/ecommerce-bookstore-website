document.addEventListener('DOMContentLoaded', function () {

    // hamburger and categories  logic
    const containerNavbar = document.querySelector('#containerNavbar')
    const piemenu = document.querySelector('#piemenu')
    const categories = document.querySelector('#categories')
    const categoriespie = document.querySelector('#categoriespie')
    const hamburger = document.querySelector('#hamburger')
    const hamburgerclose = document.querySelector('#hamburgerclose')
    const categoriesclose = document.querySelector('#categoriesclose')

    // hamburger open and close
    function opencat() {
        if (containerNavbar.classList.contains('dison')) {
            containerNavbar.classList.add('disoff')
            containerNavbar.classList.remove('dison')
            categories.classList.add('disoff')
            piemenu.classList.remove('disoff')
            piemenu.classList.add('animate__animated')
            piemenu.classList.add('animate__fadeInRight')
            // piemenu.classList.add('animate__')
            piemenu.classList.remove('animate__fadeOutRight')


        }

    }

    function closecat() {
        if (containerNavbar.classList.contains('disoff')) {
            containerNavbar.classList.remove('disoff')
            containerNavbar.classList.add('dison')
            // piemenu.classList.add('disoff')
            categories.classList.add('disoff')
            piemenu.classList.add('animate__fadeOutRight')
            piemenu.classList.remove('animate__fadeInRight')
        }

    }

    // finished hamburger open and close


    // categories open and close

    function opencategories() {
        if (containerNavbar.classList.contains('dison')) {
            containerNavbar.classList.add('disoff')
            categories.classList.remove('disoff')
            categories.classList.add('animate__animated')
            categories.classList.add('animate__fadeInRight')
            // categories.classList.add('animate__')
            categories.classList.remove('animate__fadeOutRight')
        }
    }

    function closecategories() {

        if (containerNavbar.classList.contains('disoff')) {
            containerNavbar.classList.remove('disoff')
            // categories.classList.add('disoff')
            categories.classList.add('animate__fadeOutRight')
            categories.classList.remove('animate__fadeInRight')
            piemenu.classList.add('disoff')
        }
    }

    
    // finished categories open and close

    hamburger.onclick = opencat
    hamburgerclose.onclick = closecat
    categoriespie.onclick = opencategories
    categoriesclose.onclick = closecategories


    // finished hamburger and categories logic




    // signup  and signup logic
    const  submitbtn = document.querySelector('#submitbtn');

    function signup(e) {
        const emailsign = document.getElementById('email').value;
        const passwordsign = document.getElementById('password').value;

        if (passwordsign.length >= 8) {
            localStorage.setItem('email', emailsign);
            localStorage.setItem('password', passwordsign);
            e.preventDefault();
            location.href= '../pages/login.html';
        }
        else{
            alert('password must be 8 characters and above')
            e.preventDefault()
        }
    }
    submitbtn.onclick = signup;

    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('password'))

    // finished signup logic


    // otehr books logic, feature logic, 
    const hero3cont = document.getElementById('hero3cont')
    const otherbooks = document.getElementById('otherbooks')
    const featured = document.getElementById('featured')
    const hero3bookscont = document.getElementById('hero3bookscont')
    const hero3others = document.getElementById('hero3others')

    function othersclick(){
        if (featured.classList.contains('options1')){
            hero3cont.classList.remove('hero3')
            hero3cont.classList.add('hero3mod')
            featured.classList.remove('options1')
            otherbooks.classList.add('options1')
            hero3bookscont.classList.add('disoff')
            hero3bookscont.classList.remove('animate__fadeInRight')
            hero3others.classList.remove('disoff')
            hero3others.classList.add('hero3others')
            hero3others.classList.add('animate__fadeInLeft')
            hero3others.classList.remove('animate__slower')

        }
    }

    function featuredclick(){
        if (otherbooks.classList.contains('options1')){
            hero3cont.classList.add('hero3')
            hero3cont.classList.remove('hero3mod')
            featured.classList.add('options1')
            otherbooks.classList.remove('options1')
            hero3bookscont.classList.remove('disoff')
            hero3bookscont.classList.add('animate__fadeInRight')
            hero3bookscont.classList.remove('animate__slower')
            hero3others.classList.add('disoff')
            hero3others.classList.remove('hero3others')
            hero3others.classList.remove('animate__fadeInLeft')

        }
    }

    function featuredpieclick(){
        if (otherbooks.classList.contains('options1')){
            hero3cont.classList.add('hero3')
            hero3cont.classList.remove('hero3mod')
            featured.classList.add('options1')
            otherbooks.classList.remove('options1')
            hero3bookscont.classList.remove('disoff')
            hero3bookscont.classList.remove('animate__fadeInRight')
            hero3bookscont.classList.add('animate__fadeIn')
            hero3bookscont.classList.add('animate__slower')
            hero3others.classList.add('disoff')
            hero3others.classList.remove('hero3others')
            closecat();
        }
        else{
            closecat();
        }
    }

    function otherspieclick(){
        if (featured.classList.contains('options1')){
            hero3cont.classList.remove('hero3')
            hero3cont.classList.add('hero3mod')
            featured.classList.remove('options1')
            otherbooks.classList.add('options1')
            hero3bookscont.classList.add('disoff')
            hero3bookscont.classList.remove('animate__slower')
            hero3bookscont.classList.remove('animate__fadeIn')
            hero3others.classList.remove('disoff')
            hero3others.classList.add('hero3others')
            hero3others.classList.remove('animate__fadeInLeft')
            hero3others.classList.add('animate__fadeIn')
            hero3others.classList.add('animate__slower')
            closecat();
        }
        else{
            closecat();
        }
    }

    featured.onfocus = featuredclick
    otherbooks.onfocus = othersclick;
    pielinksother.onclick = otherspieclick;
    pielinksfeatured.onclick = featuredpieclick;

    // other books and feature logic




    // Deskop Logics

    // Desktop categories clicking Logics
    const catcatbtn = document.getElementById('catcatbtn')
    const hero4cat = document.getElementById('hero4cat')

    function catopen(){
        hero4cat.classList.remove('disoff')
        hero4cat.classList.add('animate__fadeIn')
        hero4cat.classList.add('animate__fast')
        hero4cat.classList.remove('animate__fadeOut')

    }
    function catclose(){
        hero4cat.classList.remove('animate__fadeIn')
        hero4cat.classList.add('animate__fadeOut')

    }
    catcatbtn.onmouseover = catopen
    hero4cat.onmouseleave = catclose

    // desktop sign up
    const  submitbtndesk = document.querySelector('#submitbtndesk');

    function signupdesk(e) {
        const emailsigndesk = document.getElementById('emaildesk').value;
        const passwordsigndesk = document.getElementById('passworddesk').value;

        if (passwordsigndesk.length >= 8) {
            localStorage.setItem('email', emailsigndesk);
            localStorage.setItem('password', passwordsigndesk);
            e.preventDefault();
            location.href= 'pages/login.html';
        }
        else{
            alert('password must be 8 characters and above')
            e.preventDefault()
        }
    }
    submitbtndesk.onclick = signupdesk;

    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('password'))

    // finished Desktop signup logic


    // desktop featured and otherbooks switch

    const featureddeskbtn = document.getElementById('featureddeskbtn')
    const othersdeskbtn = document.getElementById('othersdeskbtn')
    const featuredbookscontdesk = document.getElementById('featuredbookscontdesk')
    const otherbookscontdesk = document.getElementById('otherbookscontdesk')

    function featuredclickdesk(){
            featuredbookscontdesk.classList.remove('disoff')
            featuredbookscontdesk.classList.add('animate__fadeInRight')
            featureddeskbtn.classList.add('options1')

            otherbookscontdesk.classList.add('disoff')
            othersdeskbtn.classList.remove('options1')
    }
    function othersclickdesk(){
            otherbookscontdesk.classList.remove('disoff')
            otherbookscontdesk.classList.add('animate__fadeInLeft')
            othersdeskbtn.classList.add('options1')

            featuredbookscontdesk.classList.add('disoff')
            featureddeskbtn.classList.remove('options1')
    }

    featureddeskbtn.onfocus = featuredclickdesk
    othersdeskbtn.onfocus = othersclickdesk

});