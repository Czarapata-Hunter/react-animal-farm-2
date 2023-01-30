import React from 'react';
import './Main.css';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          top={animal.top}
          left={animal.left}
          says={animal.says}
        />
      ))}
    </main>
  );
}
