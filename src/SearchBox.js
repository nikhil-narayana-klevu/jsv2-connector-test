import React, { useContext } from 'react';
import { KlevuContext } from './Parent';

export default function SearchBox({CustomSearchBox}, data, scope, cssClasses) {
  const klevu = useContext(KlevuContext);
  console.log('Searchbox in function=', klevu.search.extraSearchBox);
  if (CustomSearchBox) {
    return <CustomSearchBox klevu={klevu} />
  }
  return (
  <div>
    <form action="#">
      <input id="my-search" name="q" type="text" />
    </form>
  </div>
  );
}
