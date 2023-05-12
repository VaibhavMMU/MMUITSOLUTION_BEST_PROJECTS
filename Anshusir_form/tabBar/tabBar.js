for(const node of document.querySelectorAll('div.tab > header > button')) {
	node.addEventListener('click', (e) => {
		let btn = e.currentTarget;
		let cntr = btn.parentElement.parentElement;
		let index = 0;

		// reverse process for find index of button
		while(btn.previousElementSibling !== null) {
			btn = btn.previousElementSibling;
			index++;
		}

		// this is for when we click on any tab it will remove class on for all.
		for(const tab of cntr.querySelectorAll('div.tab-content')) {
			tab.classList.remove('on');
		}

		for(const btnActive of document.querySelectorAll('div.tab > header > button')){
			btnActive.classList.remove('active');
		}
		// this is set which index of tab class on and display it.
		cntr.querySelector(`div.tab-content:nth-of-type(${index + 1})`)?.classList.add('on');
		node.classList.add('active');
	});
}



// This is for home container 

for(const homeNode of document.querySelectorAll('div.section-content > button')){
	homeNode.addEventListener('click',(e) =>{
		let btnHomeNode = e.currentTarget;
		for(const section of document.querySelectorAll('div.section-content > section')){
			section.removeAttribute('class');
		}
		btnHomeNode.nextElementSibling.classList.add('on');
	});
}

// this is for form tag 

document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();

	// FIND REQUIRED FIELD OBJECTS
	const reqFieldsetsObj = Object.fromEntries([
		...document.querySelectorAll('form > fieldset[required]')
	].map(node => [
		node.getAttribute('name'),
		node
	]));

	// MISSING KEYS FIND
	const missingKeys = Object.keys(reqFieldsetsObj).filter(item => ![
		... new Set([
			...(new FormData(e.target)).entries()
		].map(item => item[0]))
	].includes(item));
	if (missingKeys.length > 0) {
		const element = reqFieldsetsObj[missingKeys[0]].firstElementChild;
		element.setCustomValidity("Please select at least one");
		element.reportValidity();
		setTimeout(() => {
			element.setCustomValidity('');
		}, 2000);
		return;
	}
});