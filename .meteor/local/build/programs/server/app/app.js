var require = meteorInstall({"lib":{"collections.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// lib/collections.js                                                     //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
module.export({
    items: () => items
});
let Mongo;
module.watch(require("meteor/mongo"), {
    Mongo(v) {
        Mongo = v;
    }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
    Meteor(v) {
        Meteor = v;
    }

}, 1);
let check;
module.watch(require("meteor/check"), {
    check(v) {
        check = v;
    }

}, 2);
const items = new Mongo.Collection("items");
sortType = "priority";
Meteor.methods({
    'items.insert'(name, quantity, priority) {
        priority = parseInt(priority);

        if (!Meteor.userId()) {
            throw new Meteor.Error("You are not authorized to do that.");
        }

        items.insert({
            name,
            quantity,
            priority
        });
    },

    'items.remove'(item) {
        check(item._id, String);
        items.remove(item._id);
    },

    'setSort'(type) {
        check(type, String);
        sortType = type;
    }

});
////////////////////////////////////////////////////////////////////////////

}},"server":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// server/main.js                                                         //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
Meteor.startup(() => {// code to run on server at startup
});
////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/collections.js");
require("./server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJpdGVtcyIsIk1vbmdvIiwid2F0Y2giLCJyZXF1aXJlIiwidiIsIk1ldGVvciIsImNoZWNrIiwiQ29sbGVjdGlvbiIsInNvcnRUeXBlIiwibWV0aG9kcyIsIm5hbWUiLCJxdWFudGl0eSIsInByaW9yaXR5IiwicGFyc2VJbnQiLCJ1c2VySWQiLCJFcnJvciIsImluc2VydCIsIml0ZW0iLCJfaWQiLCJTdHJpbmciLCJyZW1vdmUiLCJ0eXBlIiwic3RhcnR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBT0MsTUFBUCxDQUFjO0FBQUNDLFdBQU0sTUFBSUE7QUFBWCxDQUFkO0FBQWlDLElBQUlDLEtBQUo7QUFBVUgsT0FBT0ksS0FBUCxDQUFhQyxRQUFRLGNBQVIsQ0FBYixFQUFxQztBQUFDRixVQUFNRyxDQUFOLEVBQVE7QUFBQ0gsZ0JBQU1HLENBQU47QUFBUTs7QUFBbEIsQ0FBckMsRUFBeUQsQ0FBekQ7QUFBNEQsSUFBSUMsTUFBSjtBQUFXUCxPQUFPSSxLQUFQLENBQWFDLFFBQVEsZUFBUixDQUFiLEVBQXNDO0FBQUNFLFdBQU9ELENBQVAsRUFBUztBQUFDQyxpQkFBT0QsQ0FBUDtBQUFTOztBQUFwQixDQUF0QyxFQUE0RCxDQUE1RDtBQUErRCxJQUFJRSxLQUFKO0FBQVVSLE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSxjQUFSLENBQWIsRUFBcUM7QUFBQ0csVUFBTUYsQ0FBTixFQUFRO0FBQUNFLGdCQUFNRixDQUFOO0FBQVE7O0FBQWxCLENBQXJDLEVBQXlELENBQXpEO0FBSXBMLE1BQU1KLFFBQVEsSUFBSUMsTUFBTU0sVUFBVixDQUFxQixPQUFyQixDQUFkO0FBRVBDLFdBQVcsVUFBWDtBQUVBSCxPQUFPSSxPQUFQLENBQWU7QUFDWCxtQkFBZUMsSUFBZixFQUFxQkMsUUFBckIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBRXJDQSxtQkFBV0MsU0FBU0QsUUFBVCxDQUFYOztBQUVBLFlBQUksQ0FBQ1AsT0FBT1MsTUFBUCxFQUFMLEVBQXNCO0FBQ2xCLGtCQUFNLElBQUlULE9BQU9VLEtBQVgsQ0FBaUIsb0NBQWpCLENBQU47QUFDSDs7QUFFRGYsY0FBTWdCLE1BQU4sQ0FBYTtBQUNUTixnQkFEUztBQUVUQyxvQkFGUztBQUdUQztBQUhTLFNBQWI7QUFLSCxLQWRVOztBQWdCWCxtQkFBZUssSUFBZixFQUFxQjtBQUNqQlgsY0FBTVcsS0FBS0MsR0FBWCxFQUFnQkMsTUFBaEI7QUFFQW5CLGNBQU1vQixNQUFOLENBQWFILEtBQUtDLEdBQWxCO0FBQ0gsS0FwQlU7O0FBc0JYLGNBQVVHLElBQVYsRUFBZ0I7QUFDWmYsY0FBTWUsSUFBTixFQUFZRixNQUFaO0FBQ0FYLG1CQUFXYSxJQUFYO0FBQ0g7O0FBekJVLENBQWYsRTs7Ozs7Ozs7Ozs7QUNSQSxJQUFJaEIsTUFBSjtBQUFXUCxPQUFPSSxLQUFQLENBQWFDLFFBQVEsZUFBUixDQUFiLEVBQXNDO0FBQUNFLFNBQU9ELENBQVAsRUFBUztBQUFDQyxhQUFPRCxDQUFQO0FBQVM7O0FBQXBCLENBQXRDLEVBQTRELENBQTVEO0FBRVhDLE9BQU9pQixPQUFQLENBQWUsTUFBTSxDQUNuQjtBQUNELENBRkQsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5cbmV4cG9ydCBjb25zdCBpdGVtcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiaXRlbXNcIik7XG5cbnNvcnRUeXBlID0gXCJwcmlvcml0eVwiO1xuXG5NZXRlb3IubWV0aG9kcyh7XG4gICAgJ2l0ZW1zLmluc2VydCcobmFtZSwgcXVhbnRpdHksIHByaW9yaXR5KSB7XG5cbiAgICAgICAgcHJpb3JpdHkgPSBwYXJzZUludChwcmlvcml0eSk7XG5cbiAgICAgICAgaWYgKCFNZXRlb3IudXNlcklkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJZb3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGRvIHRoYXQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuaW5zZXJ0KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAnaXRlbXMucmVtb3ZlJyhpdGVtKSB7XG4gICAgICAgIGNoZWNrKGl0ZW0uX2lkLCBTdHJpbmcpO1xuXG4gICAgICAgIGl0ZW1zLnJlbW92ZShpdGVtLl9pZCk7XG4gICAgfSxcblxuICAgICdzZXRTb3J0Jyh0eXBlKSB7XG4gICAgICAgIGNoZWNrKHR5cGUsIFN0cmluZyk7XG4gICAgICAgIHNvcnRUeXBlID0gdHlwZTtcbiAgICB9XG59KVxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcbn0pO1xuIl19
