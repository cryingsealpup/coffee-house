import './sass/app.sass'

window.onresize = () => { // to skip all checked chekboxes (burger, load more)
  document.querySelectorAll('input[type="checkbox"]:checked').forEach((el) => {

    el.checked = false
  })
  if (!window.matchMedia("(max-width: 768px)").matches && document.querySelector('.load-more')) document.querySelector('.load-more').style.display = 'none'
}

document.querySelectorAll('.header-menu li a').forEach(el => el.addEventListener('click', e => {
  if (document.querySelector('.is-burger').style.display != 'none') {
    document.querySelector('.is-burger').checked = false
  }
}))

/* sources:
  https://stackoverflow.com/questions/28576636/mouse-click-and-drag-instead-of-horizontal-scroll-bar-to-view-full-content-of-c
  https://dev.to/fredericrous/minimal-carousel-with-scroll-snap-mobile-mouse-friendly-1dl
  https://www.zhangxinxu.com/study/201904/scroll-snap-end-event-detect-demo.php
  https://www.slingacademy.com/article/javascript-how-to-programmatically-scroll-inside-a-div/
*/
const slider = document.querySelector('.slides')
if (slider) {
  const slideWidth = slider.childNodes[0].offsetWidth,
    leftBtn = document.querySelector('.button-left'),
    rightBtn = document.querySelector('.button-right'),
    pagination = document.querySelectorAll('.controls-btn'),
    defaultScroll = slider.scrollLeft,
    stopDragging = (e) => {
      isDown = false
      slider.classList.remove('active')
    },
    scroll = (offset, flag = true) => slider.scrollTo({
      left: flag ? slider.scrollLeft - offset : offset,
      behavior: 'smooth'
    })
  let isDown = false,
    startX, scrollLeft, scrollEnd = false

  // MAIN SCROLL LOGIC
  // sets currrent pagination item 
  slider.addEventListener('scroll', function () {
    [...slider.children].forEach(function (slide, i) {
      if (Math.abs(slide.getBoundingClientRect().left - slider.getBoundingClientRect().left) < 10) {
        pagination.forEach((el) => el.classList.remove('active'))
        pagination[i].classList.add('active')
      }
    })
  })



  // Makes buttons clickable
  leftBtn.addEventListener('click', e => {
    scroll(slideWidth)
  })

  rightBtn.addEventListener('click', e => {
    scroll(-slideWidth)
  })


  // Reacts to slide manual dragging
  slider.addEventListener('mousedown', e => {
    isDown = true
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  })

  slider.scrollIntoView({
    behavior: 'smooth'
  })

  slider.addEventListener('mouseleave', stopDragging)
  slider.addEventListener('mouseup', stopDragging)
  slider.addEventListener('mousemove', e => {
    //  to make it work, ensure that scroll-behavior: smooth is not applied to your slider container
    if (!isDown) return
    e.preventDefault()

    const x = e.pageX - slider.offsetLeft
    const SCROLL_SPEED = 2 // this variable regulates easiness of slide dragging
    const walk = (x - startX) * SCROLL_SPEED
    console.log(x, startX, walk, scrollLeft, slideWidth)
    if (scrollLeft == 0 && walk > 0) {
      slider.scrollLeft = slideWidth * 2
    } else if (scrollLeft == slideWidth * 2 && walk < 0) {
      slider.scrollLeft = 0
    } else if (scrollLeft >= 0 && scrollLeft < slideWidth * 3 && walk) {
      slider.scrollLeft = scrollLeft - walk
    }

  })
}

// Work with menu tabs switching
const products = document.querySelectorAll('.tab'), productsWrapper = document.querySelectorAll('.menu-tabs__wrap .button-menu')
if (products) {
  const controls = document.querySelectorAll('.menu-tabs__controls .button-menu')
  controls.forEach((btn, ind) => btn.addEventListener('click', e => {
     products.forEach((el) => el.classList.add('hidden'))
     products[ind].classList.remove('hidden')
     if (ind == 1 && window.matchMedia("(max-width: 768px)").matches) document.querySelector('.load-more').style.display = 'none'
     else if (window.matchMedia("(max-width: 768px)").matches) {
      document.querySelector('.load-more').style.display = 'flex'
      document.querySelector('.load-more').checked = false
     }
     controls.forEach(el => {console.log(el);el.classList.remove('active')})
     btn.classList.add('active')
  }))
}

// Create modals
