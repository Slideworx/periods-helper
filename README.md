# Periods helper

[![Dependencies status][dependencies]][dependencies-url]
[![Release status][release]][release-url]

JavaScript library for parsing and formatting periods.

## Install

```
npm install @mtab/periods-helper
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

### getType

```js
import {getType} from '@mtab/periods-helper';

getType('2020 Q1');
```

### types

```js
import {types} from '@mtab/periods-helper';
```

[dependencies]: https://img.shields.io/librariesio/github/Slideworx/periods-helper
[release]: https://img.shields.io/github/v/release/Slideworx/periods-helper

[dependencies-url]: https://github.com/Slideworx/periods-helper/network/dependencies
[release-url]: https://github.com/Slideworx/periods-helper/releases