export const pageCacheKey = (id: string) => `pagecache#${id}`;
export const usersKey = (userId: string) => `users#${userId}`;
export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`;
export const usernamesUniqueKey = () => `username:unique`;
export const userLikesKey = (userId: string) => `users:likes#${userId}`;
export const usernamesKey = () => 'usernames';

export const itemsKey = (itemId: string) => `items#${itemId}`;
export const itemsByViewsKey = () => `items:views`;
export const itemsByEndingAtKey = () => 'items:endingAt';
