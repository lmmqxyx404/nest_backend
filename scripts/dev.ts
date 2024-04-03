#!/usr/bin/env zx

// await $`ls`;

import { Option, some, none } from 'fp-ts/Option';

function for_fun(): Option<number> {
  // let p = () as number;
  const p = Math.floor(Math.random() * 100);
  // console.log(parseInt(p));

  const a = some(3);
  const b = none;
  return p % 2 ? a : b;
}

const res = for_fun();
console.log(res);
if (res._tag === 'None') {
  console.log('res is none');
} else {
  console.log('res is some');
}
