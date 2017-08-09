
import React from 'react';

export default (props) => {
  return (
    <div onClick={props.onClick}>
      { props.tile.shown || props.tile.correct ? props.tile.value : '?' }
    </div>
  );
};
