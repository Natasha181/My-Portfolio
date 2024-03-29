// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mobilenumber = document.getElementById("mobile");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if we want to use animation that repeat on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });



    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animattion footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


}

function sendEmail() {
    const bodyMessage= 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile Number: ${mobilenumber.value}<br> Message: ${message.value}';

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "natashamathur181@gmail.com",
        Password : "2AAA0FD9390CCB366AE39EA0E3B27676C9D8",
        To : 'natashamathur181@gmail.com',
        From : "natashamathur181@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }

      });
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for(const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.add("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            
         });
    }

}

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    checkInputs();

   // sendEmail();
});


