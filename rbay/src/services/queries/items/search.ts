import { itemsIndexKey } from '$services/keys';
import { client } from '$services/redis';
import { deserialize } from './deserialize';

export const searchItems = async (term: string, size: number = 5) => {
	const cleaned = term
		.replaceAll(/[^a-zA-Z0-9 ]/g, '')
		.trim()
		.split(' ')
		.map((word) => (word ? `%${word}%` : ''))
		.join(' ');

	// Look at cleaned and make surre it is valid
	if (cleaned == '') {
		return [];
	}

	// 아이템 이름에 검색어 존재 시 5배의 가중치를 적용
	const query = `(@name:(${cleaned}) => { $weight: 5.0 }) | (@description:(${cleaned}))`;

	// Use the client to do an actual search
	const results = await client.ft.search(itemsIndexKey(), query, { LIMIT: { from: 0, size } });

	return results.documents.map(({ id, value }) => deserialize(id, value as any));
	// Deserialize and return the search results
};
