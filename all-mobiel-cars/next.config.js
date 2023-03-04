const path = require('path')
module.exports = {
  images: {
    domains: ['localhost']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    CMS_PORT: '1337',
  },
}