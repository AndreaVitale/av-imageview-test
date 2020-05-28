// Arguments passed into this controller can be accessed via the `$.args` object directly or:

buildUserInterface();

function buildUserInterface() {
    $.Image.image = `https://picsum.photos/800/600?v=${Math.random()*100}`;
}
