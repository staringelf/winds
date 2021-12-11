import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter step={5} max={20}/>
      </section>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
