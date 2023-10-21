// Interface for local storage listener with a callback function and a key
export interface ILsListener {
  callback: (key: null | string, value: any) => void; // Callback function to be invoked when a change occurs
  key: null | string; // The key to listen for changes, null for listening to all keys
}

// Class for managing local storage with namespace and listeners support
export class LocalStorageManager {
  private listeners: ILsListener[] = []; // Array to hold all the listeners
  private namespace: string = ''; // Namespace for the keys in local storage

  // Constructor to initialize the namespace and check if local storage is supported
  constructor(namespace = '') {
    // Check if local storage is supported
    if (this.isLocalStorageSupported()) {
      this.namespace = namespace; // Set the namespace if supported
    } else {
      // Log an error if local storage is not supported or disabled
      console.error(
        '[LocalStorageManager] localStorage is not supported or disabled.',
      );
    }
  }

  // Private method to get the namespaced key
  private _getKey(key: string): string {
    // Return the namespaced key if namespace is set, otherwise return the original key
    return this.namespace ? `${this.namespace}:${key}` : key;
  }

  // Private method to notify all applicable listeners about a change
  private _notify(key: null | string, value: any): void {
    // Loop through all listeners that are either global or specific to the changed key
    for (const listener of this.listeners.filter(
      (listener) => !listener.key || listener.key === key,
    ))
      listener.callback(key, value); // Invoke the callback with the key and new value
  }

  // Private method to check if local storage is supported
  private isLocalStorageSupported(): boolean {
    try {
      const key = '__test__'; // Temporary key for testing local storage support
      localStorage.setItem(key, key); // Try setting an item
      localStorage.removeItem(key); // Remove the item after testing
      return true; // Return true if no errors were thrown
    } catch {
      return false; // Return false if any errors were thrown
    }
  }

  // Private method to check if the local storage quota is exceeded
  private isQuotaExceeded(error: any): boolean {
    if (!error) return false; // Return false if there is no error

    // Check the error code and name to determine if the quota is exceeded
    const errorCode = error.code || error.number;
    return (
      errorCode === 22 ||
      errorCode === -2_147_024_882 ||
      (errorCode === 1014 && error.name === 'NS_ERROR_DOM_QUOTA_REACHED')
    );
  }

  // Private method to subscribe a listener and return an unsubscribe function
  private subscribeInternal(
    key: null | string,
    callback: (key: null | string, value: any) => void,
  ): () => void {
    const listener = { callback, key }; // Create a new listener object
    this.listeners.push(listener); // Add the listener to the array
    // Return an unsubscribe function that removes the listener from the array
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  // Public method to clear all items from local storage and notify listeners
  public clear(): void {
    if (!this.isLocalStorageSupported()) return; // Return if local storage is not supported

    localStorage.clear(); // Clear all items from local storage
    this._notify(null, null); // Notify listeners with null value
  }

  // Public method to get an item from local storage by key
  public get(key: string): any {
    if (!this.isLocalStorageSupported()) return null; // Return null if local storage is not supported

    try {
      const data = localStorage.getItem(this._getKey(key)); // Get the item from local storage
      return JSON.parse(data!); // Parse and return the JSON data
    } catch (error) {
      // Log an error if there is an issue reading data from local storage
      console.error(
        '[LocalStorageManager] Error reading data from localStorage:',
        error,
      );
      return null; // Return null in case of an error
    }
  }

  // Public method to remove an item from local storage by key and notify listeners
  public remove(key: string): void {
    if (!this.isLocalStorageSupported()) return; // Return if local storage is not supported

    localStorage.removeItem(this._getKey(key)); // Remove the item from local storage
    this._notify(key, null); // Notify listeners with null value
  }

  // Public method to set an item in local storage by key and value, and notify listeners
  public set(key: string, value: any): void {
    if (!this.isLocalStorageSupported()) return; // Return if local storage is not supported

    try {
      const item = JSON.stringify(value); // Convert the value to a JSON string
      localStorage.setItem(this._getKey(key), item); // Set the item in local storage
      this._notify(key, value); // Notify listeners with the new value
    } catch (error) {
      // Determine the error message based on whether the quota is exceeded
      const errorMessage = this.isQuotaExceeded(error)
        ? '[LocalStorageManager] localStorage quota exceeded.'
        : '[LocalStorageManager] Error writing data to localStorage:';

      console.error(errorMessage, error); // Log the error message and error object
    }
  }

  // Public method to subscribe a global listener and return an unsubscribe function
  public subscribe(
    callback: (key: null | string, value: any) => void,
  ): () => void {
    return this.subscribeInternal(null, callback); // Subscribe a global listener
  }

  // Public method to subscribe a key-specific listener and return an unsubscribe function
  public subscribeKey(
    key: string,
    callback: (key: null | string, value: any) => void,
  ): () => void {
    if (typeof key !== 'string' || key.length === 0) {
      // Log an error if the provided key is invalid
      console.error(
        '[LocalStorageManager] Invalid key provided for subscription.',
      );
      return () => {}; // Return a no-op function
    }

    return this.subscribeInternal(key, callback); // Subscribe a key-specific listener
  }
}
