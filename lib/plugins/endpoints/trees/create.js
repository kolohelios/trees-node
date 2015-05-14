'use strict';

var Tree = require('../../../models/tree');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/trees',
    config: {
      description: 'Create a tree',
      handler: function(request, reply){
        var babyTree = new Tree();
        babyTree.ownerId = request.auth.credentials._id;
        babyTree.save(function(){
          return reply(babyTree);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'trees.create'
};
