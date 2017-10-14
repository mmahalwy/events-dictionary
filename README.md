# events-dictionary
A list of browser events, their types, parameters and constructors. 

### Usage
```javascript
import { types, constructors } from 'events-dictionary';

types.drag === 'MouseEvent' // true
types.submit === 'Event' // true
constructors[types.resize]  === window.UIEvent // true
```
