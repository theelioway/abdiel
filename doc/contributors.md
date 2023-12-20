# abdiel Contributors

- [theElioWay Contributors](../../contributors.html)
- [abdiel Prerequisites](./prerequisites.html)

## Nutshell

```shell
cd ~/Dev/theElioWay
git submodule add https://gitlab.com/theElioWay/abdiel.git
cd ~/Dev/theElioWay/abdiel
npm i
npm run test
npm run prettier
```

## What we expect from Contributors

Improve or add functions. 

It's important that your functions should be universal and focused on small, oft repeated requirements. This library will be used instead of **lodash**, **date-fns**, etc, to keep this **the elioWay** library as dependant-less as possible.

This library is primarily intended to demonstrate **the elioWay**'s design pattern implemented in the most accessable way. Even beginners should be able to understand every function and module; and how it fits in the wider solution. Keep it simple and vanilla.

We expect people to implement more robust implementations of this design pattern using battle hardened libraries like **lodash**.

Follow the patterns of functions we have already written.

Write a good unit test for your function. 