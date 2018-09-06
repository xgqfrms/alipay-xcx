require('./config$');

function success() {
require('../..//app');
require('../../pages/todos/todos');
require('../../pages/add-todo/add-todo');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
