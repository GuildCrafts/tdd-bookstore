
const errorResponse = response => error => {
  if( error.name === 'CastError' ) {
    response.status( 404 ).json({})
  } else if( error.name === 'ValidationError' ) {
    response.status( 400 ).json({})
  } else {
    response.status( 500 ).json({})
  }
}

module.exports = errorResponse
