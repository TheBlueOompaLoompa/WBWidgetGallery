export function main(Wbtk) {
	var application = new Wbtk.Application('widget-gallery');
	var window = new Wbtk.Window(application, true);
	window.setWidth(200);
	window.setHeight(100);
	window.header.setTitle('Widget Gallery');

	var center = new Wbtk.Box('center');
	window.addChild(center);
	var label = new Wbtk.Label('Widget Gallery');
	center.addChild(label);

	window.present();
}