## Installation
`npm install loki-react-native-asyncstorage-adapter`
## How to use
```
import Loki from 'lokijs';
import LokiReactNativeAdapter from 'loki-react-native-asyncstorage-adapter'
let db = new Loki('loki.json', { adapter: new LokiReactNativeAdapter() })
```