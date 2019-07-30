/**
 * Working with IndexedDB
 */
let db = null;

const connect = (dbName, dbVersion, callback) => {
  if (db) return callback(null, db);
  let request = window.indexedDB.open(dbName, dbVersion);

  request.onerror = (error) => {
    console.error('Cannot open IndexedDB: ', dbName, dbVersion, error);
    callback(error);
  };

  request.onsuccess = (event) => {
    db = request.result;
    callback(null, db);
  };

  request.onupgradeneeded = (event) => {
    console.warn('Database has been updated: ', dbName);
    db = event.target.result;
  };
};


