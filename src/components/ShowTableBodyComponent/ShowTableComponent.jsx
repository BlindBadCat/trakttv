import React from 'react';
import Poster from '../Poster/Poster';


const ShowTableComponent = ({ shows }) => (
  <tbody>
    {shows.map((show, i) => (
      <tr key={i}>
        <td>
          <Poster url={show.posterUrl} />
        </td>
        <td style={{ fontSize: '40px' }}>{show.title}</td>
        <td style={{ fontWeight: 'bold', fontSize: '32px' }}>{show.rating.toFixed(1)}</td>
        <td style={{ fontWeight: 'bold', fontSize: '32px' }}>{show.year}</td>
        <td style={{ fontWeight: 'bold', fontSize: '32px' }}>{show.aired_episodes}</td>
        <td>
          {show.trailer ? <a href={show.trailer} rel="noopener noreferer" target="_blank">Watch</a> : <p>No vid</p>}
        </td>
      </tr>
    ))}
  </tbody>

);

export default ShowTableComponent;
