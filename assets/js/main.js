/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// let viewPostings = document.querySelector('#listings')

// console.log(viewPostings)
// viewPostings.addEventListener('click', ()=>{
// 	firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         window.location = 'post.html'
//     }
//     else {
//         alert('Please sign in to view this page')
//     
// });
// })
console.log(firebase.auth().currentUser)

let logOut = document.querySelector('#logOutButton')


logOut.addEventListener('click', (e) => {
	firebase.auth().signOut()
	document.querySelector('#logOutButton').style.visibility = 'hidden'


});




(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
			logOutUser()
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center'
	});

	// Nav.

	// Title Bar.
	$(
			'<div id="titleBar">' +
			'<a href="#navPanel" class="toggle"></a>' +
			'</div>'
		)
		.appendTo($body);

	// Panel.
	$(
			'<div id="navPanel">' +
			'<nav>' +
			$('#nav').navList() +
			'</nav>' +
			'</div>'
		)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

})(jQuery);




function logOutUser() {
	if (firebase.auth().currentUser != null) {
		document.querySelector('#logOutButton').style.visibility = 'visible'
	}
	else {
		document.querySelector('#logOutButton').style.visibility = 'hidden'
	}

}


setInterval(logOutUser, 300)