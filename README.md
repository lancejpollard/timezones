# Timezone

## Installation

node.js:

```bash
npm install timezones
```

browser:

```bash
component install viatropos/timezones
```

## Example

```js
var timezone = require('timezones');

var a = new Date('2013-12-02 PST');
var b = timezone('cst', a);
assert(a < b);
assert(b.getHours() == a.getHours() + 2);
```

## Notes

For a more robust timezone library (which are also much larger codebases), try:

- https://github.com/mde/timezone-js
- https://github.com/moment/moment

## Licence

MIT