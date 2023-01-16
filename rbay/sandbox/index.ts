import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car1', {
		color: 'red',
		year: 1950
	});
	await client.hSet('car2', {
		color: 'red',
		year: 1951
	});
	await client.hSet('car3', {
		color: 'red',
		year: 1952
	});
	await client.hSet('car4', {
		color: 'red',
		year: 1953
	});

	const commands = [1, 2, 3, 4].map((id) => {
		return client.hGetAll('car' + id);
	});

	const results = await Promise.all(commands);

	console.log(results);

	const car = await client.hGetAll('car');

	if (Object.keys(car).length === 0) {
		console.log('Car not found, respond with 404');
		return;
	}
	console.log(await car);
};

run();
