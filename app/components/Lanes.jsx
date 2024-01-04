import React from 'react';
import Lane from './Lane';

export default ({lanes}) => (
    <div className="lanes">{lanes.map(lane =>      //aca tuve que poner lanes && en el libro no estaba - ahora probe borrandolo y sigue funcionando//
        <Lane className="lane" key={lane.id} lane={lane} />
    )}</div>
)