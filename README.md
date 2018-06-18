# advancednodeexpress

A sample project to explaining some advanced features of Node JS

## Filter Router
Filter Router is used to filter all routes.
Possible use case to inspect headers or session.

`var filterRouter = require('./routes/filter');
..
app.use('/', filterRouter);`
