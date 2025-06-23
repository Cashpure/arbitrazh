const enterButton = document.querySelector('.button-enter')
const login = document.querySelector('.login')
const pass = document.querySelector('.pass')
const enter = document.querySelector('.header-login__texts-out')

enterButton.onclick = (e) => {
   e.preventDefault()
   if (!(login.value === "admin" && pass.value === "root")) {
      login.classList.add("form-input--wrong")
      pass.classList.add("form-input--wrong")
   } else window.location.href = "../main.html"
}

if (window.location.pathname.includes("index.html")) {
   enter.innerHTML = "Войти"
} else enter.innerHTML = "Выйти"
