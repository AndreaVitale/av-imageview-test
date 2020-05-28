$.index.open();

setup();

function setup() {
	const source = [
		//
	];

	for (let i = 0; i < 40; i++) {
		source.push(`https://picsum.photos/800/600?v=${Math.random()*100 + i}`);
	}

	// It doesn't work
	setTimeout(() => {
		populateTableWithData(source);
	}, 5000);

	// It works 
	populateTableWithData(source);
}

function populateTableWithData(source) {
	Ti.API.info('Reloading table data.');

	const items = [];

	for (let i = 0; i < source.length; i++) {
		items.push(Alloy.createController('/rows/test', {
			image: source[i]
		}).getView());
	}

	$.getView().children[0].data = items;
}