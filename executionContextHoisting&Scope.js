//  EXECUTION CONTEXT HOISTING & SCOPE

const a = () => {
	console.log('ini a');

	const b = () => {
		console.log('ini b');

		const c = () => {
			console.log('ini c');
		}
		c();
	}
	b();
}
a();

// var name = 'Riandro Raul';
// var age = 24;

const sayHello = (name, age) => {
	console.log(`hello nama saya ${name}, saya ${age} Tahun`);
}
