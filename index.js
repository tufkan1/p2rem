#!/usr/bin/env node

const pxValue = process.argv[2];

if (!pxValue) {
    console.log('Usage: p2rem <px-value>');
    process.exit(1);
}

const remValue = parseFloat(pxValue) / 16;

console.log(`${remValue}rem`);
