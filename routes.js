const routes = require('next-routes');

module.exports = routes()
.add('projects', '/projects/:id')
.add('projectEdit', '/projects/:id/edit')