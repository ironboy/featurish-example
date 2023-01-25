// useful hooks, comment these in, when needed:
// import { useStates } from './utilities/states.js';
// import { useEffect } from 'react';
import MainMenu from "./MainMenu";

import Footer from './Footer';

export default function StartComponent() {

  return <>
    <MainMenu />
    <h1>Hello world!</h1>
    <Footer />
  </>;
}