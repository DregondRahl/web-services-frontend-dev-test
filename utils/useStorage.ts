import { UserLocalStorage } from "../types";

const useStorage = (key: string): UserLocalStorage => {
  
  // Check if browser or SSR
  const isBrowser: boolean = ((): boolean => typeof window !== "undefined")();

  // Get record
  const record = isBrowser && window.localStorage[key] ? JSON.parse(window.localStorage[key]) : "";

  // Set new/update Record
  const setRecord = (value: string): boolean => {
    if (!isBrowser) {
      return false;
    }
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  };

  // Remove record
  const removeRecord = (): void => {
    window.localStorage.removeItem(key);
  };

  return [record, setRecord, removeRecord];
};

export default useStorage;
