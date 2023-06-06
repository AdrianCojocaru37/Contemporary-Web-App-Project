import React from 'react';
import featureimage from'../images/Frame 19.png';

function Features() {
  return (
    <div id ='features'>
        <div className='features-model'>
            <img src={featureimage} alt ='feature-image'/>
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>Check Advanced <span> Functions</span> Of The Application </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, porro perferendis pariatur, quia consequatur obcaecati ex sequi, rerum asperiores eaque corporis consequuntur suscipit saepe ipsa. Velit, rem? Quasi ratione temporibus excepturi distinctio porro ducimus adipisci molestias, ea est labore ex.</p>
            <button>View More feature</button>
        </div>
    </div>
  )
}

export default Features;