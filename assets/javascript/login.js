function getLoginFormData(){
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  return { email, password }
}


// Mengambil element html dengan id loginForm dan menyimpannya kedalam variable
const loginForm = document.getElementById('loginForm');

// Lakukan semua perintah dibawah ketika signUpForm memiliki event submit
loginForm.addEventListener('submit', function(e){
  // Supaya ketika form disubmit tidak refresh
  e.preventDefault()

  // Menyimpan data ke userInputData dari function getLoginFormData
  const userInputData = getLoginFormData()

  // Fetch data untuk mendapatkan semua data user
  fetch("https://6525feea67cfb1e59ce7cd5b.mockapi.io/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    if (res.ok) {
        return res.json();
    }
  })
  .then(users => {
    const isUserExist = users.find((user) => user.email == userInputData.email && user.password == userInputData.password)
    if(isUserExist){
      window.location.replace("daftar.html");
    } else {
      alert('Email atau Password salah!')
    }
  })
})