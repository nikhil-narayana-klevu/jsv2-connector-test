import React, { useContext } from 'react';
import { AppContext } from './App';
import { KlevuContext } from './Parent';

export default function Hits() {
  const contextNo = React.useContext(AppContext);
  const klevu = useContext(KlevuContext);
  console.log('Hits=', klevu.search.quick?.getScope().template.getData());
  return <div>Hits</div>;
}
