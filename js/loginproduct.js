document.addEventListener('DOMContentLoaded', function(){
    // hamburger and categories  logic
    const containerNavbar = document.querySelector('#containerNavbar')
    const piemenu = document.querySelector('#piemenu')
    const categories = document.querySelector('#categories')
    const categoriespie = document.querySelector('#categoriespie')
    const hamburger = document.querySelector('#hamburger')
    const hamburgerclose = document.querySelector('#hamburgerclose')
    const categoriesclose = document.querySelector('#categoriesclose')

    // hamburger open and close
//     function opencat() {
//       if (containerNavbar.classList.contains('dison')) {
//           containerNavbar.classList.add('disoff')
//           containerNavbar.classList.remove('dison')
//           categories.classList.add('disoff')
//           piemenu.classList.remove('disoff')
//           piemenu.classList.add('animate__animated')
//           piemenu.classList.add('animate__fadeInRight')
//           // piemenu.classList.add('animate__')
//           piemenu.classList.remove('animate__fadeOutRight')


//       }

//   }

//   function closecat() {
//       if (containerNavbar.classList.contains('disoff')) {
//           containerNavbar.classList.remove('disoff')
//           containerNavbar.classList.add('dison')
//           // piemenu.classList.add('disoff')
//           categories.classList.add('disoff')
//           piemenu.classList.add('animate__fadeOutRight')
//           piemenu.classList.remove('animate__fadeInRight')
//       }

//   }

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

    // hamburger.onclick = opencat
    // hamburgerclose.onclick = closecat
    categoriespie.onclick = opencategories
    categoriesclose.onclick = closecategories


    // finished hamburger and categories logic


    var cardcont = document.getElementById('productcont')

    function clickeffects(){


        if(cardcont.classList.contains('animate__animated')){
            cardcont.classList.remove('animate__fadeIn')
            cardcont.classList.remove('animate__slow')
            cardcont.classList.add('animate__fadeInLeft')
        }

    }

    function clickeffects2(){
        if(cardcont.classList.contains('animate__animated')){
            cardcont.classList.remove('animate__fadeInLeft')
            cardcont.classList.add('animate__fadeIn')
            cardcont.classList.add('animate__slow')
        }
    }

    function decider(){
        if(cardcont.classList.contains('animate__fadeInLeft')){
            clickeffects2()
        }
        else{
            clickeffects()
        }
    }

    getoffer.onclick = decider;



  //   finance    innovation  lifestyle
  const financebtn = document.getElementById('financebtn')
  const innovationbtn = document.getElementById('innovationbtn')
  const lifestylebtn = document.getElementById('lifestylebtn')
  const cardcontfinance = document.getElementById('cardcontfinance')
  const cardcontinnovation = document.getElementById('cardcontinnovation')
  const cardcontlifestyle = document.getElementById('cardcontlifestyle')
  const financecatbtn = document.getElementById('financecatbtn')
  const innovationcatbtn = document.getElementById('innovationcatbtn')
  const lifestylecatbtn = document.getElementById('lifestylecatbtn')

  // finance    innovation  lifestyle cat function
  function linksclosecat(){
      categories.classList.add('disoff')
      containerNavbar.classList.remove('disoff')
      decider()

  }
  financecatbtn.onclick = linksclosecat
  innovationcatbtn.onclick = linksclosecat
  lifestylecatbtn.onclick = linksclosecat


  // finance    innovation  lifestyle Products function

  function financeproductswitch(){

      if (cardcontfinance.classList.contains('disoff')){
          cardcontfinance.classList.remove('disoff')
          cardcontfinance.classList.add('animate__fadeIn')
          cardcontfinance.classList.add('animate__slow')
          financebtn.classList.add('options1')

          cardcontinnovation.classList.add('disoff')
          innovationbtn.classList.remove('options1')

          cardcontlifestyle.classList.add('disoff')
          lifestylebtn.classList.remove('options1')
      }
  }

  function innovationproductswitch(){

      if (cardcontinnovation.classList.contains('disoff')){
          cardcontinnovation.classList.remove('disoff')
          cardcontinnovation.classList.add('animate__fadeIn')
          cardcontinnovation.classList.add('animate__slow')
          innovationbtn.classList.add('options1')

          financebtn.classList.remove('options1')
          cardcontfinance.classList.add('disoff')

          cardcontlifestyle.classList.add('disoff')
          lifestylebtn.classList.remove('options1')

      }
  }

  function lifestyleproductswitch(){

      if (cardcontlifestyle.classList.contains('disoff')){
          cardcontlifestyle.classList.remove('disoff')
          cardcontlifestyle.classList.add('animate__fadeIn')
          cardcontlifestyle.classList.add('animate__slow')
          lifestylebtn.classList.add('options1')

          cardcontinnovation.classList.add('disoff')
          innovationbtn.classList.remove('options1')

          financebtn.classList.remove('options1')
          cardcontfinance.classList.add('disoff')


      }
  }

  financebtn.onfocus = financeproductswitch
  innovationbtn.onfocus = innovationproductswitch
  lifestylebtn.onfocus = lifestyleproductswitch



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