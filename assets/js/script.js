
const search = document.querySelectorAll(".search-container");

const modal = document.querySelector('#modal');
const magaMenu = document.querySelector("#maga-menu-tablet");
const offcanvatBot = document.querySelector("#offcanvat-bot")

const navbarSingle = document.querySelector('.button-navbar .single')

const toggleClass = (selector, className, action) => {
  const element = document.querySelector(selector);
  if (action === 'add') {
    element.classList.add(className);
  } else if (action === 'remove') {
    element.classList.remove(className);
  } else if (action === 'toggle') {
    element.toggleClass(className);
  }
}

const openSubMenuMega = () => {
  document.querySelectorAll('.menu-mobile .menu-content').forEach(div => {
    const btn = div.querySelector(".flex")
    btn.addEventListener('click', () => {

      div.classList.toggle('show');
      document.querySelectorAll('.menu-mobile .menu-content').forEach(otherDiv => {
        if (otherDiv !== div) {
          otherDiv.classList.remove('show');
        }
      });
    });
    
  });
}




const oppenMagamenuTablet = () => {
  toggleClass("#maga-menu-tablet", 'translate-x-full', 'remove');
  toggleClass("#mega-menu-navbar-btn", 'active', 'add');
}

const closeMagamenuTablet = () => {
  toggleClass("#maga-menu-tablet", 'translate-x-full', 'add');
  toggleClass("#mega-menu-navbar-btn", 'active', 'remove');

}
const closeMegaMenu = () => {

  const buttonNavbar = document.querySelectorAll(".button-navbar .item ")
  document.addEventListener('click', (event) => {
    const isClickInsideMenu1 = magaMenu.contains(event.target);
    const isClickInsideMenu2 = buttonNavbar[1].contains(event.target);
    if (isClickInsideMenu1 | isClickInsideMenu2) {
      magaMenu.classList.remove('translate-x-full');
    } else {
      magaMenu.classList.add('translate-x-full');
      toggleClass("#mega-menu-navbar-btn", 'active', 'remove');
    }
  });
};




const oppenOffcanvatBotHeader = () => {
  toggleClass("#offcanvat-bot", 'translate-y-full', 'remove');
}

const closeOffcanvatBotHeader = () => {
  toggleClass("#offcanvat-bot", 'translate-y-full', 'toggle');
}
const closeOffcanvatBot = () => {
  const btn = document.querySelector(".category-btn ")
  document.addEventListener('click', (event) => {
    const isClickInsideMenu1 = offcanvatBot.contains(event.target);
    const isClickInsideMenu2 = btn.contains(event.target);
    if (isClickInsideMenu1 | isClickInsideMenu2) {
      offcanvatBot.classList.remove('translate-y-full');
    } else {
      offcanvatBot.classList.add('translate-y-full');
    }
  });
};



const oppenOffcanvasHeader = () => {
  toggleClass("#offcanvas", 'translate-y-full', 'remove');
}


const closeOffcancasHeader = () => {
  toggleClass("#offcanvas", 'translate-y-full', 'add');
}






const modalFunction = () => {

  const openModal = document.querySelector('#openModal');
  const closeModal = document.querySelector('#closeModal');

  const modalContent = document.querySelector('#modalContent');

  openModal.addEventListener('click', () => {
    modal.classList.remove('opacity-0', 'pointer-events-none');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
  });

  modal.addEventListener('click', (e) => {
    if (e.target !== modalContent && !modalContent.contains(e.target)) {
      modal.classList.add('opacity-0', 'pointer-events-none');
    }
  });
}


const setStyleActiveTimeSearchBox = () => {


  search.forEach((e) => {
    const input = e.querySelector(".input-search");
    const icon = search[0].querySelector("svg path");
    const resultsBox = e.querySelector('.results');

    console.log(e.querySelector('.results'))
    const resultsValue = document.querySelector(".show-vleue")
    const logo = document.querySelector('#logo');
    input.addEventListener('input', () => {

      let value = input.value;
      let length = value.length;
      if (length > 0) {
        resultsBox.classList.replace("hidden", "block")
        icon.setAttribute("style", "stroke:#253858;")
        input.setAttribute("style", "color:#253858;")
        if (logo) {
          toggleClass("#logo", 'hidden', 'add');
          resultsValue.innerHTML = value;
        }
      } else {
        resultsBox.classList.replace("block", "hidden")
        icon.setAttribute("style", "stroke:#BFBFBF;")
        input.setAttribute("style", "color:#BFBFBF;")
        if (logo) {
          toggleClass("#logo", 'hidden', 'remove');
          resultsValue.innerHTML = "جستجو در";
        }


      }

    })

  })
}



const buySingle = () => {
  const showVlaue = document.querySelector('#number-buy');
  value = 1;
  document.querySelector('#buy-btn').addEventListener('click', () => {
    document.querySelector('#buy-step-1').classList.replace("block", "hidden");
    document.querySelector('#buy-step-2').classList.replace("hidden", "flex");

  })
  document.querySelector('#delete-btn').addEventListener('click', () => {
    document.querySelector('#buy-step-1').classList.replace("hidden", "block");
    document.querySelector('#buy-step-2').classList.replace("flex", "hidden");
  })
  document.querySelector('#plus-btn').addEventListener('click', () => {
    document.querySelector('#delete-btn').classList.replace("block", "hidden");
    document.querySelector('#munes-bnt').classList.replace("hidden", "block");
    value++
    showVlaue.innerHTML = value;
  })
  document.querySelector('#munes-bnt').addEventListener('click', () => {
    value--
    showVlaue.innerHTML = value;
    if (value < 2) {
      document.querySelector('#delete-btn').classList.replace("hidden", "block");
      document.querySelector('#munes-bnt').classList.replace("block", "hidden");
    }
  })
  showVlaue.innerHTML = value;


}



const addclassActive = () => {
  const menu = document.querySelectorAll('.product-header #maga-menu-tablet nav li');
  const Onemenu = document.querySelector('.product-header #maga-menu-tablet nav li');
  Onemenu.classList.add('active')
  menu.forEach((e) => {
    let mega = e.querySelector('.menu-mobile')

    e.addEventListener('click', (event) => {
      if (!event.target.closest('.menu-mobile')) {
        if (e.classList.contains('active')) {
          remove();
          return;
        }
      }
      remove();
      e.classList.toggle('active')

    });
  })

  function remove() {
    menu.forEach((e) => {
      e.classList.remove('active')
    })
  }
}


// const showItemDesktop = () => {
//   const menuDesktop = document.querySelector(".product-header .desktop");

//   menuDesktop.querySelectorAll(".menu").forEach((item) => {


//     // handle show items level 2
//     item.querySelectorAll('.menu-content').forEach((e) => {

//       removeClass('.menu-content');

//       e.addEventListener("click", () => {
//         removeClass('.menu-content');
//         e.classList.add('active');
//         //handl show items level 3
//         if (e.classList.contains('active') && e.querySelector(".sub-menu-content")) {

//           e.querySelectorAll(".box").forEach((box) => {
//             box.addEventListener('click', () => {
//               removeClass('.box');
//               box.classList.add('active')
//             })
//           })
//         }

//       });
//     });
//     item.querySelector('.menu-content').classList.add('active');

//     function removeClass(selector) {
//       item.querySelectorAll(selector).forEach((e) => {
//         e.classList.remove('active');
//       });
//     }
//   });
// };


const removeClass = (item, selector) => {
  item.querySelectorAll(selector).forEach((e) => {
    e.classList.remove('active');
  });
};

const handleBoxClick = (box) => {
  box.addEventListener('mouseover', () => {
    // حذف کلاس 'active' از تمام 'box'‌ها
    removeClass(box.parentNode, '.box');
    // اضافه کردن کلاس 'active' به 'box' مورد نظر
    box.classList.add('active');
  });
};

const handleMenuContentClick = (item, e) => {
  e.addEventListener("mouseover", () => {

    removeClass(item, '.menu-content');

    e.classList.add('active');
    if (e.classList.contains('active') && e.querySelector(".sub-menu-content")) {
      e.querySelectorAll(".box").forEach(handleBoxClick);
    }
  });

  // e.addEventListener("mouseout", () => {
  //   e.classList.remove('active');
  // });
};

const showItemDesktop = () => {
  const menuDesktop = document.querySelector(".product-header .desktop");

  menuDesktop.querySelectorAll(".menu").forEach((item) => {
    item.querySelectorAll('.menu-content').forEach((e) => {
      handleMenuContentClick(item, e);
    });
    item.querySelector('.menu-content').classList.add('active');
    item.querySelector('.box').classList.add('active');
  });
};


if (modal) {
  modalFunction()
}

if (navbarSingle) {
  buySingle()
}

if (magaMenu) {
  closeMegaMenu()
  openSubMenuMega()
  addclassActive()
  showItemDesktop()
}
if (search) {
  setStyleActiveTimeSearchBox()
}
if (offcanvatBot) {
  closeOffcanvatBot()
}







