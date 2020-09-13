import React from 'react';
import './Button.css';

// export default props => <button className='button'>{props.label}</button>
export default props =>{
let classes = 'button ';
classes += props.operation ? 'operation' : '';
classes += props.double ? 'double' : '';
classes += props.triple ? 'triple' : '';

return (    
<button className={classes} onClick={e => props.click(props.label)}>
    {props.label}
</button>
    )
}