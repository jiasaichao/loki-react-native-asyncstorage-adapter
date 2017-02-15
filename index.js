import { AsyncStorage } from 'react-native';
const TAG = "[LokieactNativeAsyncStorageAdapter]";
class LokieactNativeAsyncStorageAdapter {
    constructor(options = {}) {
        this.options = options;
    }
    loadDatabase(dbname, callback) {
        //console.log(TAG, "loading database");
        AsyncStorage.getItem(
            dbname,
            (error, result) => {
                if (error) {
                    console.error(TAG, "loadDatabase", error);
                } else {
                    if (result == null) {
                        //console.warn(TAG, "couldn't find database");
                        callback(null);
                    }
                    else {
                        callback(result);
                    }
                }
            }
        );
    }
    saveDatabase(dbname, dbstring, callback) {
        //console.log(TAG, "saving database");
        AsyncStorage.setItem(
            dbname,
            dbstring,
            (error) => {
                if (error) {
                    console.error(TAG, "saveDatabase", error);
                } else {
                    callback();
                }
            }
        );
    }

    deleteDatabase(dbname, callback) {
        AsyncStorage.removeItem(
            dbname,
            (error) => {
                if (!error) {
                    callback();
                }
                else {
                    console.error(TAG, "deleteDatabase", error);
                }
            }
        )
    }
}


export default LokieactNativeAsyncStorageAdapter;