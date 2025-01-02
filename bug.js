```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```
This code will cause an error because the `Home` component is not exported correctly.  In Next.js 15, the default export of a page component should be a React component.

```javascript
// pages/index.js
import React from 'react';
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```