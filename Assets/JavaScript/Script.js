/*
	👑Solopreneur 🖥️Full-Stack Developer 💸Freelancer
	Author : Nitin Chakraborty.
	eMail : nitin.chakraborty13@gmail.com
*/

// About
const about = document.querySelector("#about");
// Contact
const contact = document.querySelector("#contact");
// About Content
const aboutContent = document.querySelector("#about-content");
// Contact Content
const contactContent = document.querySelector("#contact-content");

// About Box
about.addEventListener("click", () => {
	const aboutBox = new WinBox({
		// Window Title
		title: "About Me",
		width: "400px",
		height: "600px",
		top: 50,
		right: 50,
		bottom: 50,
		left: 50,
		mount: aboutContent,
		// On Focus
		onfocus: function () {
			this.setBackground("#00aa00");
		},
		// On Blur
		onblur: function () {
			this.setBackground("#777");
		},
	});
});

// Contact Box
contact.addEventListener("click", () => {
	const contactBox = new WinBox({
		// Window Title
		title: "Contact Me",
		width: "500px",
		height: "300px",
		top: 50,
		right: 50,
		bottom: 50,
		left: 50,
		mount: contactContent,
		// On Focus
		onfocus: function () {
			this.setBackground("#00aa00");
		},
		// On Blur
		onblur: function () {
			this.setBackground("#777");
		},
	});
});
