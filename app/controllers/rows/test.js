// Arguments passed into this controller can be accessed via the `$.args` object directly or:

buildUserInterface();

function buildUserInterface() {
    Ti.API.info($.args.image);
}
