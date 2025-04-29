
var typed = new Typed(".text", {
    strings: ["Machine Learning","Programming" , "Artificial Intelligence" , "Web Development","Mobile Application Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Here you can send the form data to a server using AJAX or fetch
    // Example using fetch:
    fetch("submit.php", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      alert("Form submitted successfully!");
      // Optionally, you can redirect the user to a thank you page
      // window.location.href = "thankyou.html";
    })
    .catch(error => {
      console.error("There was a problem with the form submission:", error);
      alert("There was a problem with the form submission. Please try again later.");
    });
  });
  function toggleMenu() {
    const navbar = document.getElementById('myLinks');
    navbar.classList.toggle('active');
}

  