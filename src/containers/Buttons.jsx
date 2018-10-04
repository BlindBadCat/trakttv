import React from 'react';
import Pagination from './Pagination';
import Search from './Search';
import Categories from './Categories';
import Sort from './Sort';


const Buttons = () => (
  <table>
    <tbody>
      <tr>
        <td><Search /></td>
        <td><Sort /></td>
        <td><Categories /></td>
      </tr>
      <tr><Pagination /></tr>
    </tbody>
  </table>


);


export default Buttons;
