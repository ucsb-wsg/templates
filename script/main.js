// We use an anonymous, self-executing function to prevent our JavaScript from polluting the global
// namespace
(function() {

	var navListToggleClass = ' closed';
	
	var navListHeader = document.getElementById('navigation-header');
	var navList = document.getElementById('navigation-list');

	function toggleNav(event) {

		// Prevent the browser from executing the default behavior for the calling event
		// (e.g. navigating to a page when a link is clicked)
		if(event) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		}
	
		var navListClasses = navList.className;
		navList.className = new RegExp(navListToggleClass).test(navListClasses)
			? navListClasses.replace(navListToggleClass, '')
			: navListClasses + navListToggleClass;
	}

	// Attach the toggleNav function to the navigation list header using a variety of
	// methods to support legacy browsers
	if (navListHeader.addEventListener) {
		navListHeader.addEventListener('click', toggleNav, false);
	} else if (navListHeader.attachEvent) {
		navListHeader.attachEvent('onclick', toggleNav);
	} else {
		navListHeader['onclick'] = toggleNav;
	}
	
	// Fire toggleNav once to trigger the menu to close when the page loads (allowing us to gracefully degrade and
	// display the full menu if JavaScript is not available)
	toggleNav();
	
})();