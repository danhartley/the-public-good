// db constants

const DB = 'emissionsDB';
const STORE = 'emissions';

const openDatabase = async () => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const request = indexedDB.open(DB, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        // Use the request url as the record key
        db.createObjectStore(STORE, { keyPath: 'url' });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  })
};

const saveNetworkTraffic = async (requestResponse) => {
  const db = await openDatabase();
  const tx = db.transaction(STORE, 'readwrite');
  const emissions = tx.objectStore(STORE);

  // Query the db for an entry with the key of the new record we want to add
  const request = emissions.get(requestResponse.url);

  request.onsuccess = (event) => {
    // There is no entry for this key, so we create a new record
    if (!event.target.result) {
      emissions.add(requestResponse);
    }
  };
  request.onerror = (e) => {
    // There was an error checking for an existing record
    console.log(e);
  };

  await new Promise((resolve, reject) => {
    tx.oncomplete = resolve;
    tx.onerror = tx.onabort = reject;
  });
  db.close();
};

const fetchHandler = (event) => {
  event.respondWith(
    (async () => {
      try {
        // Request details
        const requestClone = event.request.clone();
        const requestBody = await requestClone.text();
        const requestSize = new TextEncoder().encode(requestBody).length;

        // Response details
        const networkResponse = await fetch(event.request);
        const clonedResponse = networkResponse.clone();

        const responseBody = await clonedResponse.text();
        const responseSize = new TextEncoder().encode(responseBody).length;
        const compressedResponseSize =
          networkResponse.headers.get('Content-Length');
        const contentType = networkResponse.headers.get('Content-Type');

        // Save request and response details to browser db
        const requestResponse = {
          url: event.request.url,
          requestBytes: requestSize,
          contentType: contentType || undefined,
          responseBytes: Number(compressedResponseSize || responseSize),
        };

        // Save the request and response to the browser db
        saveNetworkTraffic(requestResponse);

        return networkResponse
      } catch (e) {
        console.log(e);
      }
    })()
  );
};

try {
  // eslint-disable-next-line no-undef
  self.addEventListener('fetch', fetchHandler);
} catch (e) {
  console.log(
    'The Node.js development environment does not support (browser) service workers.'
  );
  console.log(e);
}
//# sourceMappingURL=sw.js.map
