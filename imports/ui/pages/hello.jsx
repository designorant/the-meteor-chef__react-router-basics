import React from 'react';

export const Hello = ({ params, location }) => (
  <h3>Howdy, {params.name}! You like {location.query.food}.</h3>
);

Hello.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};
