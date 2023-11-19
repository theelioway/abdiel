# Quickstart abdiel

- [abdiel Prerequisites](/theElioWay/abdiel/prerequisites.html)

## Nutshell

- Install
- Import or require
- Call

## Install

```shell
npm i @elioway/abdiel
```

## Import or require

```javascript
import { funcName } from "@elioway/abdiel"
const { funcName } = require("@elioway/abdiel")
```

## Call

```javascript
import { validateFormThingy } from "form-thingies"
import { valueIsDate, valueIsMeaningful } from "@elioway/abdiel"

let validationResults = validateFormThingy(user, [
  ["firstName", valueIsMeaningful],
  ["birthDate", valueIsDate],
])
```
