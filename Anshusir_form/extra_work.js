document.querySelectorAll('div.tab > header > button').forEach(function (btn) {
	btn.addEventListener('click', (e) => {
		console.log(e.target.parentNode);

		// if (btn.target.parentNode) {
		// 	document.querySelector(`div.tab > div.tab-content:nth-of-type(${1})`).classList.add('on');
		// } else {
		// 	document.querySelector(`div.tab > div.tab-content:nth-of-type(${i + 1})`).classList.remove('on');
		// }
	});
});

let a = document.querySelectorAll('div.tab > header > button');
for (let i = 0; i < a.length; i++) {
	a[i].addEventListener('click', () => {
		document.querySelector(`div.tab > div.tab-content:nth-of-type(${i + 1})`).classList.add('on');
	});
	// document.querySelector(`div.tab > div.tab-content:nth-of-type(${i + 1})`).classList.remove('on');
}


// second modual for select index of button or div

while(!cntr.matches('.tab')) {
	cntr = cntr.parentElement;
}

let index = -1;
for(const btnpos of cntr.querySelectorAll('header > button')) {
	index++;
	if(btn.isSameNode(btnpos)) {
		break;
	}
}