function getSignUpFormData(){
  let userName = document.getElementById('userName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let konfirmasiPassword = document.getElementById('konfirmasiPassword').value;

  return {
    userName,
    email,
    password,
    konfirmasiPassword
  }
}

// Mengambil element html dengan id signUpForm dan menyimpannya kedalam variable
const signUpForm = document.getElementById('signUpForm');

// Lakukan semua perintah dibawah ketika signUpForm memiliki event submit
signUpForm.addEventListener('submit', function(e){
  // Supaya ketika form disubmit tidak refresh
  e.preventDefault()

  // Menyimpan data ke userInputData dari function getSignUpFormData
  const userInputData = getSignUpFormData()

  // Logika konfirmasi password apakah sama?
  if(userInputData.password === userInputData.konfirmasiPassword){
    // Mempersiapkan data untuk dipass ke MockupAPI
    const newUser = {
      userName: userInputData.userName,
      email: userInputData.email,
      password: userInputData.password
    }

    // Fetch data dengan metode POST untuk membuat user baru
    fetch("https://6525feea67cfb1e59ce7cd5b.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    .then((res) => {
      // Jika registrasi berhasil
      if (res.ok) {
        // Tampilkan alert registrasi berhasil
        alert('Registrasi anda berhasil')

        // Redirect ke login
        setTimeout(() => {
          window.location.replace("login.html");
        }, 1500)
      }
    })
  } else {
    alert('Password tidak sama!')
  }
})