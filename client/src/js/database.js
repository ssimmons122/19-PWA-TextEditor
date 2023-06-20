import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add text to indexDB
export const putDb = async (content) => {
      const jateDB = await openDB('jate', 1);
      const tx = jateDB.transaction('jate', 'readwrite');
      const store = tx.objectStore('jate');
      const request = store.put({ id: 1, value: content });
      const result = await request;
      console.log("Success! Data saved to database", result);
};
// Get data from indexdb
export const getDb = async () => {
    	const jateDb = await openDB('jate', 1);
	    const tx = jateDb.transaction('jate', 'readonly');
	    const store = tx.objectStore('jate');
	    const request = store.getAll();
	    const result = await request;
	    console.log('result', result);
      return result?.content;
};


initdb();
