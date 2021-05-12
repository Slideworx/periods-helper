# Periods helper


JavaScript library for parsing and formatting periods.

## Install

```
npm install mtab-periods-helper
```

## Usage

### dictionary

```js
import {dictionary} from '@mtab/periods-helper';
```

### getNotation

```js
import {getNotation} from '@mtab/periods-helper';

getNotation(new Date(), 'Q');
```

### getPeriod

```js
import {getPeriod} from '@mtab/periods-helper';

getPeriod('Q_2020_1');
```

### getPeriods

```js
import {getPeriods} from '@mtab/periods-helper';

getPeriods('Q_2020_1', 10);
```

Period range CAN be negative.

### getType

```js
import {getType} from '@mtab/periods-helper';

getType('2020 Q1');
```

### getDate
```js
import {types} from '@mtab/periods-helper';
import {getDate} from '@mtab/periods-helper';

getDate('2019 H1 YTD', types.HYTD);
```

### types

```js
import {types} from '@mtab/periods-helper';
```

More example you can find in test files.
