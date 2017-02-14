import { AsyncStorage } from 'react-native';
const TAG = "[LokieactNativeAsyncStorageAdapter]";
class LokieactNativeAsyncStorageAdapter {
    constructor(options={}) {
        this.options = options;
        if(!this.options.keyName){
            this.options.keyName='lokijs'
        }
    }
    saveDatabase(dbname, dbstring, callback) {
        //console.log(TAG, "saving database");
        AsyncStorage.setItem(
            this.options.keyName,
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

    loadDatabase(dbname, callback) {
        //console.log(TAG, "loading database");
        AsyncStorage.getItem(
            this.options.keyName,
            (error, result) => {
                if (error) {
                    console.error(TAG, "loadDatabase", error);
                } else {
                    if (result.length === 0) {
                        //console.warn(TAG, "couldn't find database");
                        callback(null);
                    }
                    else {
                        callback(contents);
                    }
                }
            }
        );
    }

    deleteDatabase(dbname, callback) {
        AsyncStorage.removeItem(
            this.options.keyName,
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