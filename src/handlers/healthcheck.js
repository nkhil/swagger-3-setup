'use strict'

function ping(_, res) {
  res.status(200).json({ message: 'OK' });
}

module.exports = { 
  ping,
}
