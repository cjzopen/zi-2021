var swiper = new Swiper('#circle-progress-area', {
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  // slidesPerView: 'auto',
  spaceBetween: 12,
  allowTouchMove:false,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});

// closest polyfill
// if (!Element.prototype.matches) {
//   Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
// }
// if (!Element.prototype.closest) {
//   Element.prototype.closest = function(s) {
//     var el = this;
//     do {
//       if (Element.prototype.matches.call(el, s)) return el;
//       el = el.parentElement || el.parentNode;
//     } while (el !== null && el.nodeType === 1);
//     return null;
//   };
// }

// side menu
$(document).on('click','.menu-type-toggle',function(){
  var $this = $(this);
  $this.toggleClass('menu-type-toggle-open');
  $this.next('.menu-type-group').slideToggle()

})

// slim select
var selectElement = document.querySelectorAll('.select');
for(var i=0; i < selectElement.length; i++){
  selectElement[i].classList.add('slim-' + i);
  new SlimSelect({
    select: '.slim-' + i,
    placeholder:'請選擇'
  });
}

// toggle物件自己的class
// var toggleClass = document.querySelectorAll('[data-toggle-class]');
// if (toggleClass) {
//   for (var i = 0; i < toggleClass.length; i += 1) {
//     var elem = toggleClass[i];
//     elem.addEventListener('click', function(){
//       var className = elem.getAttribute('data-toggle-class');
//       this.classList.toggle(className);
//     });
//   }
// }
$(document).on('click','[data-toggle-class]',function(){
  var className = $(this).attr('data-toggle-class');
  $(this).toggleClass(className);
})

// input[file]
var inputFile = document.querySelectorAll('.input-file');
if (inputFile) {
  for (var i = 0; i < inputFile.length; i += 1) {
    var elem = inputFile[i];
    elem.addEventListener('change', function(){
      var fileName = this.querySelector('input[type=file]').files[0].name;
      this.querySelector('.input-file-name').innerText = fileName;
    });
  }
}
// $('input[type=file].d-none').on('change',function(){
//   console.log($(this))
//   var fileName = $(this).val();
//   $(this).next('.input-file-name').text(fileName);
// })

// 服務申請(ISMS表單)的下拉表單
$('.tr-more-button').find('img').addClass('rotate-180');
$('.tr-more-content').addClass('d-none');
$(document).on('click','.tr-more-button',function(e){
  e.preventDefault();
  var $this = $(this);
  $this.find('img').toggleClass('rotate-180');
  $this.closest('tr').toggleClass('border-left-blue');
  $this.closest('tr').next('.tr-more-content').toggleClass('d-none');
});



// pagination  這裡的目標是用 table#search-result，和對應的 #pagination1，看情況增加或修改
var perPage = 10;
var searchTableTr = $('#search-result tbody').find('tr');
searchTableTr.hide();
searchTableTr.slice(0, perPage).show();

var pagination1 = new tui.Pagination(document.getElementById('pagination1'), {
  totalItems: searchTableTr.length,
  itemsPerPage: perPage,
  visiblePages: 5,
  centerAlign: true
});
pagination1.on('afterMove', function(evt) {
  var currentPage = evt.page;
  searchTableTr.hide();
  searchTableTr.slice((currentPage-1)*10, perPage*currentPage).show();
});
