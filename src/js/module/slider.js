

'use strict';

import {classie} from './classie';

  var slider= document.querySelector('.slider'),
      slides=[].slice.call(slider.querySelectorAll('.slide')),
      slidesTotal=slides.length-1,
      pagination= [].slice.call(slider.querySelectorAll('.slider__profile-item')),navRightCtrl=slider.querySelector('.btn--nav-next'),
      navLeftCtrl=slider.querySelector('.btn--nav-prev'),
      profileNumber=slider.querySelector('.slider__profile-number>span'),
      current=1;

      function init(){
        initEvent();
      }

      function initEvent(){
        //navigation
        pagination.forEach(item =>{
          item.addEventListener('click', function(e){
            navigate(pagination.indexOf(e.target));
          },false);
        });
        navLeftCtrl.addEventListener('click',function(){navigate('left');});
        navRightCtrl.addEventListener('click', function(){navigate('right');});

        document.addEventListener('keydown', function(e){
          if(e.keyCode == 37){
            navigate('left');
          }else if(e.keyCode == 39){
            navigate('right');
          }
        });
      }

      function navigate(direction){
        if(direction==='right'){
          current= current < slidesTotal? current + 1: 0;
        }else if(direction === 'left'){
          current= current > 0? current - 1: slidesTotal;
        }else{
          current=direction;
        }
        slides.forEach(slide => {
          classie.remove(slide,'slide--current');
        });
        pagination.forEach(item => {
          classie.remove(item,'slider__profile-item--current');
        });
        classie.add(slides[current],'slide--current');
        classie.add(pagination[current],'slider__profile-item--current');
        profileNumber.innerText=pagination[current].innerText;
      }

      export {init as slider};
