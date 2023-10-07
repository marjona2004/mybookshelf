/* 
~~~~~~~~~~~~~~~~~~~  ELEMENTS ~~~~~~~~~~~~~~~~~~~
*/
const welcomeComponent = document.querySelector(".welcome");
const pagesComponent = document.querySelector(".pages");
const loginComponent = document.querySelector(".login");
const registerComponent = document.querySelector(".register");
const otpComponent = document.querySelector(".otp");
const verifedComponent = document.querySelector(".verifed");
const mainComponent = document.querySelector("main");
const homeComponent = document.querySelector(".home");
const righHomeSideComponent = document.querySelector("#righHomeSide");
const arrivalsBooksComponent = document.querySelector("#books");
const recommendComponent = document.querySelector("#recommend");
const recentBooksComponent = document.querySelector("#recentBooks");
const timeAndDayComponent = document.querySelector(".timeAndDay");
const homeBottomContent = document.querySelector(".box");
const searchBooksComponent = document.querySelector(".searchBooks");
const searchMenu = document.querySelector(".searchMenu");
const myShelfComponent = document.querySelector(".myShelf");
const cardsComponent = document.querySelector(".cards");
// ~~~~~~~~~~~~~~~   Buttons ~~~~~~~~~~~~~~~~~~~
const registerLink = document.querySelector("#regLink");
const registerBtn = document.querySelector("#regBtn");
const verifyBtn = document.querySelector("#verifyBtn");
const verifedBtn = document.querySelector("#verifedBtn");
const loginBtn = document.querySelector("#loginBtn");
const otpBackBtn = document.querySelector("#otpBackBtn");
const searchMenuBtn = document.querySelector(".searchMenu");

// ~~~~~~~~~~~~~~~   INPUTS  ~~~~~~~~~~~~~~~~~~~
const inputsDiv = document.querySelector(".inputs");
const regNumberInput = document.querySelector("#regNumber");
const regEmailInput = document.querySelector("#regEmail");
const regPasswordInput = document.querySelector("#regPassword");
const regConfirmInput = document.querySelector("#regConfirm");
const logEmailInput = document.querySelector("#logEmail");
const logPasswordInput = document.querySelector("#logPassword");
const otpInputs = document.querySelectorAll(".inputs > input");
const menusBtn = document.querySelector(".main_menu");

// ~~~~~~~~~~~~~~~   Loader  ~~~~~~~~~~~~~~~~~~~
const loaderComponent = document.querySelector(".lds-ring");

// ~~~~~~~~~~~~~~~   RandomNumber for Verification  ~~~~~~~~~~~~~~~~~~~
let randomNumber;
let books;
/* 
~~~~~~~~~~~~~~~~~~~  FUNCTIONS ~~~~~~~~~~~~~~~~~~~
*/
const renderBooksForNewArrivals = (books) => {
  books.forEach((book, index) => {
    book.id = index;
    const html = `
    <div id="bookBox">
      <img src="${book.simple_thumb}" alt="${book.title}" />
      <p>${book.kind}</p>
      <b>${book.author}</b>
      <b>4.5/5</b>
    </div>`;
    book.recommend = false;
    book.recent = false;
    if (index % 13 == 0) {
      book.recommend = true;
      recommendComponent.insertAdjacentHTML("afterbegin", html);
    }
    if (index % 17 == 0) {
      book.recent = true;
      recentBooksComponent.insertAdjacentHTML("afterbegin", html);
    }
    if (index >= 10) return;
    const html2 = `<img src="${book.simple_thumb}" alt="${book.title}" />`;
    arrivalsBooksComponent.insertAdjacentHTML("afterbegin", html2);
  });
};
const renderSearchBooksUI = () => {
  books.forEach((book, index) => {
    book.ebook = true;
    book.hard = false;
    if (index % 11 === 0) {
      book.genre = "Engineering";
      book.ebook = false;
    }
    if (index % 12 === 0) {
      book.genre = "Medical";
      book.hard = true;
    }
    if (index % 13 === 0) book.genre = "Arts & Science";
    if (index % 14 === 0) book.genre = "Architecture";
    if (index % 15 === 0) book.genre = "Law";
    index % 434 === 0
      ? (book.inshelf = "borrowed")
      : (book.inshelf = "inshelf");
    const html = `<div class="searchBook">
    <div class="title_img">
      <img src="${book.simple_thumb}" alt="${book.title}" />
      <div>
        <h3>${book.epoch}</h3>
        <h4>${book.author}</h4>
        <p>${book.kind}</p>
      </div>
    </div>
    <div class="rating_category">
      <span>4.5/5</span>
      <div>
        <h3>${book.genre}</h3>
        <h4>UX Design</h4>
      </div>
    </div>
    <div class="availability_status">
      <ul class="availab">
        <li>
          <img src="${
            book.hard ? "./images/Vector.png" : "./svg/Subtract.svg"
          }" alt="" />
          <span>Hard Copy</span>
        </li>
        <li>
          <img src="${
            book.ebook ? "./images/Vector.png" : "./svg/Subtract.svg"
          }"" alt="" />
          <span>E - Book</span>
        </li>
        <li>
          <img src="./images/Vector.png" alt="" />
          <span>Audio book</span>
        </li>
      </ul>
      <div>
        <button>${book.inshelf}</button>
        <div>
          <img src="./images/map-pin.png" alt="location" />
          <span>CS A-15</span>
        </div>
      </div>
    </div>
    <div class="like_preview">
      <svg width="24" height="25" viewBox="0 0 24 25"  fill="${
        book.liked ? "red" : "none"
      }" xmlns="http://www.w3.org/2000/svg" id="${book.id}">
        <g id="heroicons-solid/heart">
        <path id="Union (Stroke)" d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z" stroke="#B6B6B6" stroke-linejoin="round"/>
        </g>
      </svg>
      <button>Preview</button>
    </div>
    </div>`;
    searchBooksComponent.insertAdjacentHTML("afterbegin", html);
  });
  const likeBtn = document.querySelectorAll(".like_preview > svg");
  clickForLike(likeBtn);
};

const getLocalStorage = async () => {
  books = JSON.parse(localStorage.getItem("books"));
  renderBooksForNewArrivals(books);
  righHomeSideComponent.classList.remove("hide");
};
const getBooks = async () => {
  loaderComponent.classList.remove("hide");
  const response = await fetch(
    `https://wolnelektury.pl/api/daisy/?format=json`
  );
  books = await response.json();
  localStorage.setItem("books", JSON.stringify(books));
  books = JSON.parse(localStorage.getItem("books"));
  renderBooksForNewArrivals(books);
  loaderComponent.classList.add("hide");
  righHomeSideComponent.classList.remove("hide");
};

const getTimeLocalization = () => {
  const time = new Date();
  const month = time.toLocaleString("en-US", { month: "short" });
  return {
    date: time.getDate(),
    month,
    hour: time.getHours() + ":" + time.getMinutes(),
    year: time.getFullYear(),
  };
};

const renderTimeUI = () => {
  const time = getTimeLocalization();
  timeAndDayComponent.innerHTML = "";
  const html = `
        <div class="time">
         <img src="./svg/Time.svg" alt="" />
         <p>${time.hour}</p>
        </div>
        <div class="day">
         <img src="./svg/day.svg" alt="" />
         <p>${time.date}-${time.month}-${time.year}</p>
        </div>`;
  timeAndDayComponent.insertAdjacentHTML("afterbegin", html);
};
const renderSearchByFilter = (genre) => {
  if (genre === "Browser") {
    renderSearchBooksUI();
    return;
  }
  searchBooksComponent.innerHTML = "";
  books.forEach((book) => {
    if (book.genre != genre) return;
    const html = `<div class="searchBook">
    <div class="title_img">
      <img src="${book.simple_thumb}" alt="${book.title}" />
      <div>
        <h3>${book.epoch}</h3>
        <h4>${book.author}</h4>
        <p>${book.kind}</p>
      </div>
    </div>
    <div class="rating_category">
      <span>4.5/5</span>
      <div>
        <h3>${book.genre}</h3>
        <h4>UX Design</h4>
      </div>
    </div>
    <div class="availability_status">
      <ul class="availab">
        <li>
          <img src="${
            book.hard ? "./images/Vector.png" : "./svg/Subtract.svg"
          }" alt="" />
          <span>Hard Copy</span>
        </li>
        <li>
          <img src="${
            book.ebook ? "./images/Vector.png" : "./svg/Subtract.svg"
          }"" alt="" />
          <span>E - Book</span>
        </li>
        <li>
          <img src="./images/Vector.png" alt="" />
          <span>Audio book</span>
        </li>
      </ul>
      <div>
        <button>${book.inshelf}</button>
        <div>
          <img src="./images/map-pin.png" alt="location" />
          <span>CS A-15</span>
        </div>
      </div>
    </div>
    <div class="like_preview">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="${
        book.liked ? "red" : "none"
      }" xmlns="http://www.w3.org/2000/svg" id="${book.id}">
        <g id="heroicons-solid/heart">
        <path id="Union (Stroke)" d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z" stroke="#B6B6B6" stroke-linejoin="round"/>
        </g>
      </svg>
      <button>Preview</button>
    </div>
    </div>`;
    searchBooksComponent.insertAdjacentHTML("afterbegin", html);
  });
  const likeBtn = document.querySelectorAll(".like_preview > svg");
  clickForLike(likeBtn);
};
const renderMyShelfUI = (books) => {
  books.forEach((book, index) => {
    index % 434 === 0
      ? (book.inshelf = "borrowed")
      : (book.inshelf = "inshelf");
    if (book.inshelf == "borrowed") {
      const html = `<div class="card">
      <div class="left-card">
      <img src="${book.simple_thumb}" alt="">
      <p class="book-name">${book.epoch}</p>
      <p>${book.author}</p>
      <p>4.5/5</p>
      </div>
      <div class="right-card">
      <span>Borrowed on </span>
      <span>11 Mar 2023 09:00 AM</span>
      <span>Submission Due</span>
      <span>14 Mar 2023</span>
      <button class="btn borrowed">Borrowed</button>
      <button class="btn border">Return</button>
    </div>
  </div>`;
      cardsComponent.insertAdjacentHTML("afterbegin", html);
    }
  });
};
setInterval(() => renderTimeUI(), 1000);
// IIFE
(function () {
  setTimeout(() => {
    welcomeComponent.classList.add("hide");
    if (localStorage.getItem("user")) {
      getLocalStorage();
      renderTimeUI();
      mainComponent.classList.remove("hide");
      homeComponent.classList.remove("hide");
    } else {
      pagesComponent.classList.remove("hide");
      loginComponent.classList.remove("hide");
    }
  }, 1000);
})();

const clearInputs = (whichInput = "otp") => {
  if (whichInput === "login") {
    logEmailInput.value = "";
    logPasswordInput.value = "";
  } else if (whichInput === "register") {
    regNumberInput.value = "";
    regEmailInput.value = "";
    regPasswordInput.value = "";
    regConfirmInput.value = "";
  } else {
    otpInputs.forEach((input) => {
      input.value = "";
    });
  }
};

const createUser = () => {
  let newUser = {};
  newUser.regNumber = regNumberInput.value;
  newUser.email = regEmailInput.value;
  newUser.password = regPasswordInput.value;
  localStorage.setItem("user", JSON.stringify(newUser));
};

const valdateRegInputs = () => {
  if (
    regNumberInput.value.trim() != "" &&
    regEmailInput.value.trim() != "" &&
    regPasswordInput.value.trim() != "" &&
    regConfirmInput.value.trim() != "" &&
    regPasswordInput.value.trim() === regConfirmInput.value.trim()
  ) {
    return true;
  }
  return false;
};
registerLink.addEventListener("click", () => {
  clearInputs("login");
  loginComponent.classList.add("hide");
  registerComponent.classList.remove("hide");
});

function generateRandomNumber() {
  const length = 5;
  const characters = "0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
registerBtn.addEventListener("click", () => {
  if (valdateRegInputs()) {
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
    registerComponent.classList.add("hide");
    otpComponent.classList.remove("hide");
  }
});

verifyBtn.addEventListener("click", () => {
  let newArr = "";
  otpInputs.forEach((input) => (newArr += input.value));
  if (+randomNumber !== +newArr) return;
  createUser();
  clearInputs();
  clearInputs("register");
  otpComponent.classList.add("hide");
  verifedComponent.classList.remove("hide");
});

verifedBtn.addEventListener("click", () => {
  verifedComponent.classList.add("hide");
  loginComponent.classList.remove("hide");
});

loginBtn.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (
    logEmailInput.value === user.email &&
    logPasswordInput.value === user.password
  ) {
    getBooks();
    renderTimeUI();
    loginComponent.classList.add("hide");
    pagesComponent.classList.add("hide");
    mainComponent.classList.remove("hide");
    homeComponent.classList.remove("hide");
  }
});

otpBackBtn.addEventListener("click", () => {
  clearInputs();
  otpComponent.classList.add("hide");
  registerComponent.classList.remove("hide");
});

otpInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    input.nextElementSibling?.focus();
  });
});

menusBtn.addEventListener("click", (event) => {
  const menu = event.target.textContent.trim();
  if (!menu) return;
  if (menu === "Home") {
  } else if (menu === "Search") {
    renderSearchBooksUI();
    searchMenuBtn.classList.remove("hide");
    homeBottomContent.classList.add("hide");
  } else if (menu === "My Shelf") {
    renderMyShelfUI(books);
    homeBottomContent.classList.add("hide");
    searchBooksComponent.classList.add("hide");
    myShelfComponent.classList.remove("hide");
  } else {
  }
});
menusBtn.addEventListener("click", (event) => {
  const menu = event.target.textContent.trim();
  if (!menu) return;
  if (menu === "Home") {
    homeBottomContent.classList.remove("hide");
    searchBooksComponent.classList.add("hide");
    myShelfComponent.classList.add("hide");
  } else if (menu === "Search") {
    renderSearchBooksUI(books);
    searchBooksComponent.classList.remove("hide");
    homeBottomContent.classList.add("hide");
    myShelfComponent.classList.add("hide");
  } else if (menu === "My Shelf") {
    renderMyShelfUI(books);
    homeBottomContent.classList.add("hide");
    searchBooksComponent.classList.add("hide");
    myShelfComponent.classList.remove("hide");
  } else {
  }
});

searchMenuBtn.addEventListener("change", (event) => {
  const value = event.target.value;
  renderSearchByFilter(value);
});

const clickForLike = (likeBtn) => {
  likeBtn.forEach((svg) => {
    svg.addEventListener("click", () => {
      const likeBook = books.find((book) => book.id == svg.id);
      if (likeBook.liked) {
        likeBook.liked = null;
        svg.style.fill = "none";
      } else {
        likeBook.liked = true;
        svg.style.fill = "red";
      }
      localStorage.setItem("books", JSON.stringify(books));
      books = JSON.parse(localStorage.getItem("books"));
    });
  });
};
