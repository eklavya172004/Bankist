        'use strict';
            const header = document.querySelector('.header');
            const modal = document.querySelector('.modal');
            const overlay = document.querySelector('.overlay');
            const btnCloseModal = document.querySelector('.btn--close-modal');
            const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
            const btnScrollTo = document.querySelector('.btn--scroll-to');
            const section1 = document.querySelector('#section--1');
            const nav = document.querySelector('.nav');
            const section = document.querySelectorAll('.section');
            const tabs = document.querySelectorAll('.operations__tab');
            const tabsContainer = document.querySelector('.operations__tab-container');
            const tabsContent = document.querySelectorAll('.operations__content');
            const logo= document.querySelector('.nav__logo');
            const message = document.createElement('div');
            message.classList.add('message');
            const dots = document.querySelector('.dots')
            const slide = document.querySelectorAll('.slide');
            const btnLeft = document.querySelector('.slider__btn--left');
            const btnRight = document.querySelector('.slider__btn--right');
            let currentSlide = 0;
            const maxSlide = slide.length;


            message.innerHTML = 'We are dedicated to providing you the best services we can to ensure your ease of work on our site! <button class="btn btn--close-cookie">Got it!</button>';

            // header.append(message);

            message.style.background = '#fff'
            message.style.width = '100%'
            message.style.padding = '5'

           
            // console.log(logo.alt);
            // console.log(logo.className);
            // console.log(logo.src)

            logo.setAttribute('company','bankist');

           btnScrollTo.addEventListener('click',function(e){
              const s1coords = section1.getBoundingClientRect();

              // console.log(s1coords);

              // console.log(e.target.getBoundingClientRect());

              // console.log(`Current scroll(X/Y)`,window.pageXOffset,pageYOffset);


              // console.log('height/width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);


              
          //  Scrolling
            // window.scrollTo(s1coords.left + window.pageXOffset,s1coords.top + window.pageYOffset)

            section1.scrollIntoView({behavior:'smooth'});
           }) ;

          //  Bubbling amd Capturing

      //     const randomInt = (min,max) =>
      //       Math.floor(Math.random() * (max - min + 1) + min );
          
          
      //     const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`


      //     document.querySelector('.nav__link').addEventListener('click',function(e){
      //         this.style.backgroundColor = randomColor();
      //         console.log('LINK',e.target,e.currentTarget);
              
      //     })

          
      //     document.querySelector('.nav__links').addEventListener('click',function(e){
      //       this.style.backgroundColor = randomColor();
      //       console.log('LINK',e.target,e.currentTarget);
      //   })

        
      //   nav.addEventListener('click',function(e){
      //     this.style.backgroundColor = randomColor();
      //     console.log('LINK',e.target,e.currentTarget);
      // })

        // document.querySelectorAll('.nav__link').forEach(function(e){
        //   e.addEventListener('click',function(el){
        //     el.preventDefault();
        //     const id = this.getAttribute('href');
        //     document.querySelector(id).scrollIntoView({behavior:'smooth'});
        //   })
        // })   TAKES A LOT OF TIME IF MORE FILES ARE THERE OR NAV LINKS
          
        document.querySelector('.nav__links').addEventListener('click',function(e){
          e.preventDefault();

          if(e.target.classList.contains('nav__link')){
            const id = e.target.getAttribute('href');
                document.querySelector(id).scrollIntoView({behavior:'smooth'});
          }
        })

            // Modal window
            const openModal = function (e) {
              e.preventDefault();
              modal.classList.remove('hidden');
              overlay.classList.remove('hidden');
            };

            const closeModal = function () {
              modal.classList.add('hidden');
              overlay.classList.add('hidden');
            };

            btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
            btnCloseModal.addEventListener('click', closeModal);
            overlay.addEventListener('click', closeModal);

            document.addEventListener('keydown', function (e) {
              if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
              }
            });

            const h1= document.querySelector('h1');

            // Going Downwards 
            // console.log(h1.querySelectorAll('.highlight'));
            // console.log(h1.childNodes);
            // console.log(h1.children);
            
            // h1.firstElementChild.style.color = 'white';
            // h1.lastElementChild.style.color = 'black';
            
            // console.log(h1.parentNode);
            // console.log(h1.parentElement);
            // h1.closest('.header').style.background = 'var(--gradient-secondary)'
            // console.log(h1.previousSibling);
            // console.log(h1.nextSibling);

            // Tabbed Component

            tabsContainer.addEventListener('click',function(e){
                  // if(e.target.classList.contains('operations__tab')){
                  //       console.log(e.target);
                  // }
                  const clicked = e.target.closest('.operations__tab');
                  // console.log(clicked);

                  if(!clicked) return;

                  // Removing tab active 
                  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
                  tabsContent.forEach(tab => tab.classList.remove('operations__content--active'))
                  
                      // Making tab active 
                  clicked.classList.add('operations__tab--active')
                    // Active Content Area
                    // console.log(clicked.dataset.tab);
                  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
                })

              //   const handleover = function(e){

              //     if(e.target.classList.contains('nav__link')){
              //       const link = e.target;
              //       // console.log(link);
              //       const sibling = link.closest('.nav').querySelectorAll('.nav__link')
              //       // console.log(sibling);
              //       const logo = link.closest('.nav').querySelector('img')
                    
              //       sibling.forEach(el => {
              //         if(el !== link ) el.style.opacity = this;
              //       });
              //       logo.style.opacity = this;
              //   }
              // }
              //   nav.addEventListener('mouseover',handleover.bind(0.5));

              //   nav.addEventListener('mouseout',handleover.bind(1));
            
              //   const initial = section1.getBoundingClientRect();
              //   // console.log(initial);

              //   window.addEventListener('scroll',function(){
              //         if(this.scrollY > initial.top)
              //           nav.classList.add('sticky');
              //           else nav.classList.remove('sticky')        
              //   })

          //INTERSECTION Observer API 

          // const options = {
          //   root:null,
          //   threshold:0,
          //   rootMargin:'-200px '
          // };

          // const observer = new IntersectionObserver(function(entries,observer){
          //       entries.forEach(entry => {

          //       if(!entry.isIntersecting){
          //         return;
          //       }       

          //         console.log(entry.target);
          //         entry.target.classList.toggle('inverse')
          //         observer.unobserve(entry.target)
          //       }
                
          //       )
          // },options);

          // section.forEach(sec => observer.observe(sec) )

          // observer
      //     const navHeight = nav.getBoundingClientRect().height;
          

      //     const stickyNav = function(entries){
      //       const [entry] = entries;
      //       // console.log(entry);

      //       if(!entry.isIntersecting) { nav.classList.add('sticky')}
      //       else nav.classList.remove('sticky');

      //     }

      // const headrObserver = new IntersectionObserver(stickyNav,{
      //   root:null,
      //   threshold:0,
      //   rootMargin:`-${navHeight}px`
      // })   

      // headrObserver.observe(header);

      const navHeight = nav.getBoundingClientRect().height;
      // console.log(navHeight);

      const stickyNav = function(entries){
        const [entry] = entries;
        // console.log(entry);

        if(!entry.isIntersecting) nav.classList.add('sticky')
        else nav.classList.remove('sticky')
      }  

    const headObserver = new IntersectionObserver(stickyNav,{
      root:null,
      threshold:0,
      rootMargin:`-${navHeight}px`
    })

    headObserver.observe(header)



    // Reveal Section
    const reveal = function(entries,observer){
          const [entry] = entries;
          // console.log(entry.target);

          if(!entry.isIntersecting) return
          entry.target.classList.remove('section--hidden');
          
          observer.unobserve(entry.target)
          
    }

    const sectionObserver = new IntersectionObserver(reveal , {
      root:null,
      threshold:0.15
    })

    section.forEach( sec =>{
      sectionObserver.observe(sec);
      sec.classList.add('section--hidden')      
    }) 

    const imageTarget = document.querySelectorAll('img[data-src]');

    const loadimg = function(entries,observer){
        const [entry] = entries;      
        console.log(entry);

        if(!entry.isIntersecting) return
        
        entry.target.src = entry.target.dataset.src;

        entry.target.addEventListener('load',function(){
            entry.target.classList.remove('lazy-img');
        })

        observer.unobserve(entry.target);
    }

    const ImageObserver = new IntersectionObserver(loadimg, {
      root:null,
      threshold:0,
      rootMargin:'200px'
    });

    imageTarget.forEach(img => ImageObserver.observe(img));

    //  Slider

    const SLider = function(){
    const nextSlide = function(index){
    slide.forEach((s,i) => s.style.transform = `translateX(${100 * (i-index)}%)` )
    }

    
    // 0% ,100% ,200%
    const move = function(){
      if(currentSlide===maxSlide-1){
        currentSlide = 0
      }
      else{
        currentSlide++;
      }        
        nextSlide(currentSlide);
        activeDots(currentSlide);
    }

    const back = function(){
      if(currentSlide===0){
        currentSlide = maxSlide-1
      }
      else{
        currentSlide--
      }
      nextSlide(currentSlide);
      activeDots(currentSlide);
    }

    const createDots = function(){
        slide.forEach(function(_,i){
          dots.innerAdjacentHTML =
            'beforehand',
            `<button class="dots__dot" data-slide="${i}"></button>`
          
        })
    }

    const activeDots = function(slide){
      document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))

      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
    }
    const initiaLise = function(){
      nextSlide(0);
      activeDots(0);
      createDots();
    }
    initiaLise()

    dots.addEventListener('click',function(e){
      if(e.target.classList.contains('dots__dot')){
        const {slide} = e.target.dataset;
      
        nextSlide(slide);
        activeDots(slide)
      }
    })

    btnRight.addEventListener('click',move);
    btnLeft.addEventListener('click',back);
  }
  SLider();