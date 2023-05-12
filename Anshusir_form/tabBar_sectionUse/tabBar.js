// document.querySelectorAll('div.tab > header > button').forEach(function (btn) {
// 	btn.addEventListener('click', (e) => {
// 		console.log(e.target.parentNode);

// 		// if (btn.target.parentNode) {
// 		// 	document.querySelector(`div.tab > div.tab-content:nth-of-type(${1})`).classList.add('on');
// 		// } else {
// 		// 	document.querySelector(`div.tab > div.tab-content:nth-of-type(${i + 1})`).classList.remove('on');
// 		// }
// 	});
// });

// let a = document.querySelectorAll('div.tab > header > button');
// for (let i = 0; i < a.length; i++) {
// 	a[i].addEventListener('click', () => {
// 		document.querySelector(`div.tab > div.tab-content:nth-of-type(${i + 1})`).classList.add('on');
// 	});
// 	// document.querySelector(`div.tab > div.tab-content:nth-of-type(${i + 1})`).classList.remove('on');
// }

for(const node of document.querySelectorAll('div.tab > header > button')) {
	node.addEventListener('click', (e) => {
		let btn = e.currentTarget;
		let cntr = btn.parentElement.parentElement;
		// while(!cntr.matches('.tab')) {
		// 	cntr = cntr.parentElement;
		// }
		
		// let index = -1;
		// for(const btnpos of cntr.querySelectorAll('header > button')) {
		// 	index++;
		// 	if(btn.isSameNode(btnpos)) {
		// 		break;
		// 	}
		// }
		
		let index = 0;
		while(btn.previousElementSibling !== null) {
			btn = btn.previousElementSibling;
			index++;
		}
		for(const tab of cntr.querySelectorAll('div.tab-content')) {
			tab.classList.remove('on');
		}
		cntr.querySelector(`div.tab-content:nth-of-type(${index + 1})`)?.classList.add('on');
	});
}