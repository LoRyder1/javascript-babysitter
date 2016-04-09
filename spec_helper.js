var fs = module.require("fs");
var vm = module.require("vm");

module.exports = {
  include: function(path) {
    var code = fs.readFileSync(path, 'utf-8');
    vm.runInThisContext(code, path);
  }
};

