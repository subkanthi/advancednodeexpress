# Node Sample Project with advanced features

A complete NodeJS project with ES6 features and express(Inversify) 

A sample project to explaining some advanced features of Node JS
- node-config (For storing configuration different environments) - https://github.com/lorenwest/node-config
- Logger (Fish tagging)
- Storing session in Redis

## Filter Router
Filter Router is used to filter all routes.
Possible use case to inspect headers or session.

`var filterRouter = require('./routes/filter')`
`app.use('/', filterRouter);`


