document.addEventListener('DOMContentLoaded', function (){



    // hamburger and categories  logic
    const containerNavbar = document.querySelector('#containerNavbar')
    const piemenu = document.querySelector('#piemenu')
    const categories = document.querySelector('#categories')
    const categoriespie = document.querySelector('#categoriespie')
    const hamburger = document.querySelector('#hamburger')
    const hamburgerclose = document.querySelector('#hamburgerclose')
    const categoriesclose = document.querySelector('#categoriesclose')
    const body = document.getElementById('body')


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
    // pielinksfeatured.onclick = closecat
    categoriespie.onclick = opencategories
    categoriesclose.onclick = closecategories


    // finished hamburger and categories logic


    const submitbtn = document.querySelector('#submitbtn');

    function signup(e) {
        const emailsign = document.getElementById('email').value;
        const passwordsign = document.getElementById('password').value;
    
        if (passwordsign.length >= 8) {
            localStorage.setItem('email', emailsign);
            localStorage.setItem('password', passwordsign);
            e.preventDefault();
            location.href= '../pages/login.html';
        }
        else {
            alert('password must be 8 characters and above')
            e.preventDefault()
        }
    }
    submitbtn.onclick = signup;
    
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('password'))


    // const signupbtn = document.getElementById('signupbtn')
    const signupbtn2 = document.getElementById('signupbtn2')

    function signupclosecat() {
            piemenu.classList.add('disoff')
            containerNavbar.classList.add('dison')
            containerNavbar.classList.remove('disoff')
            body.classList.add('animate__fadeIn')
    }

    // signupbtn.onclick = signupclosecat;
    signupbtn2.onclick = signupclosecat;


        // desktop logic

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

});
