var require = meteorInstall({"client":{"main.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/main.html                                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.watch(require("./template.main.js"), {                                                                    // 1
  "*": module.makeNsSetter()                                                                                     // 2
});                                                                                                              // 3
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.main.js                                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.body.addContent((function() {                                                                           // 2
  var view = this;                                                                                               // 3
  return [ HTML.NAV({                                                                                            // 4
    class: "teal"                                                                                                // 5
  }, "\n        ", HTML.DIV({                                                                                    // 6
    class: "container"                                                                                           // 7
  }, "\n            ", HTML.DIV({                                                                                // 8
    clas: "nav-wrapper"                                                                                          // 9
  }, "\n                ", HTML.Raw('<a href="#" class="brand-logo">iBuy</a>'), "\n                ", HTML.UL({  // 10
    id: "nav-mobile",                                                                                            // 11
    class: "right"                                                                                               // 12
  }, "\n                    ", Blaze.If(function() {                                                             // 13
    return Spacebars.call(view.lookup("currentUser"));                                                           // 14
  }, function() {                                                                                                // 15
    return [ "\n                        ", HTML.LI({                                                             // 16
      class: "nav-item"                                                                                          // 17
    }, "\n                            ", HTML.A({                                                                // 18
      class: "waves-effect waves-light btn modal-trigger",                                                       // 19
      href: "#addModal"                                                                                          // 20
    }, " Add Item"), "\n                        "), "\n                    " ];                                  // 21
  }), "\n                    ", HTML.LI({                                                                        // 22
    class: "nav-item"                                                                                            // 23
  }, "\n                        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), "\n    ", HTML.DIV({
    class: "container"                                                                                           // 25
  }, "\n        ", HTML.Raw("<h1>Items</h1>"), "\n        ", Blaze.If(function() {                               // 26
    return Spacebars.call(view.lookup("currentUser"));                                                           // 27
  }, function() {                                                                                                // 28
    return [ "\n            ", Spacebars.include(view.lookupTemplate("sort")), "\n            ", HTML.UL({       // 29
      class: "collection"                                                                                        // 30
    }, "\n                ", HTML.LI({                                                                           // 31
      class: "collection-item"                                                                                   // 32
    }, HTML.STRONG({                                                                                             // 33
      style: "margin-right: 40%"                                                                                 // 34
    }, "a"), HTML.STRONG({                                                                                       // 35
      style: "color: black; margin-right: 10%"                                                                   // 36
    }, "a"), "\n                "), "\n                ", Blaze.Each(function() {                                // 37
      return Spacebars.call(view.lookup("items"));                                                               // 38
    }, function() {                                                                                              // 39
      return [ "\n                    ", Spacebars.include(view.lookupTemplate("item")), "\n                " ];
    }), "\n            "), "\n        " ];                                                                       // 41
  }, function() {                                                                                                // 42
    return [ "\n            ", HTML.P("Please log in to manage your shopping list."), "\n        " ];            // 43
  }), "\n    "), "\n\n    ", Spacebars.include(view.lookupTemplate("add")), "\n\n    ", HTML.SCRIPT("\n        $(document).ready(function(){\n            $('.modal').modal();\n        });\n    ") ];
}));                                                                                                             // 45
Meteor.startup(Template.body.renderToDocument);                                                                  // 46
                                                                                                                 // 47
Template.__checkName("item");                                                                                    // 48
Template["item"] = new Template("Template.item", (function() {                                                   // 49
  var view = this;                                                                                               // 50
  return HTML.LI({                                                                                               // 51
    class: "collection-item "                                                                                    // 52
  }, "\n        ", Blaze.View("lookup:name", function() {                                                        // 53
    return Spacebars.mustache(view.lookup("name"));                                                              // 54
  }), "\n        ", Blaze.View("lookup:quantity", function() {                                                   // 55
    return Spacebars.mustache(view.lookup("quantity"));                                                          // 56
  }), "\n        ", Blaze.View("lookup:priority", function() {                                                   // 57
    return Spacebars.mustache(view.lookup("priority"));                                                          // 58
  }), HTML.Raw('\n        <a href="#" class="delete-item secondary-content"><i class="material-icons">done</i></a>\n    '));
}));                                                                                                             // 60
                                                                                                                 // 61
Template.__checkName("add");                                                                                     // 62
Template["add"] = new Template("Template.add", (function() {                                                     // 63
  var view = this;                                                                                               // 64
  return HTML.Raw('<!-- Modal Structure -->\n    <div id="addModal" class="modal">\n        <div class="modal-content">\n            <h3>Add Item</h3>\n            <form class="add-form">\n                <input type="text" name="text" placeholder="Item Name" style="width: 60%">\n                <input type="text" name="quantity" placeholder="QTY" style="width: 10%">\n                <input type="text" name="priority" placeholder="Priority" style="width: 20%">\n                <!-- TODO: Figure out a dropdown for quantity. -->\n                <!-- <select name="quantity" size="3" style="width: 20%">\n                    <option value="1" selected>1</option>\n                    <option value="2">2</option>\n                    <option value="3">3</option>\n                    <option value="4">4</option>\n                </select> -->\n                <input type="submit" value="Add" class="add modal-close waves-effect waves-green btn-flat">\n            </form>\n        </div>\n    </div>');
}));                                                                                                             // 66
                                                                                                                 // 67
Template.__checkName("sort");                                                                                    // 68
Template["sort"] = new Template("Template.sort", (function() {                                                   // 69
  var view = this;                                                                                               // 70
  return HTML.Raw('Sort By:\n    <button type="button" class="priority-sort">Priority</button>\n    <button type="button" class="name-sort">Name</button>');
}));                                                                                                             // 72
                                                                                                                 // 73
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/main.js                                                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var Template = void 0;                                                                                           // 1
module.watch(require("meteor/templating"), {                                                                     // 1
    Template: function (v) {                                                                                     // 1
        Template = v;                                                                                            // 1
    }                                                                                                            // 1
}, 0);                                                                                                           // 1
var items = void 0;                                                                                              // 1
module.watch(require("../lib/collections.js"), {                                                                 // 1
    items: function (v) {                                                                                        // 1
        items = v;                                                                                               // 1
    }                                                                                                            // 1
}, 1);                                                                                                           // 1
var Accounts = void 0;                                                                                           // 1
module.watch(require("meteor/accounts-base"), {                                                                  // 1
    Accounts: function (v) {                                                                                     // 1
        Accounts = v;                                                                                            // 1
    }                                                                                                            // 1
}, 2);                                                                                                           // 1
module.watch(require("./main.html"));                                                                            // 1
// Configures the accounts package.                                                                              // 5
Accounts.ui.config({                                                                                             // 6
    passwordSignupFields: "USERNAME_ONLY"                                                                        // 7
});                                                                                                              // 6
                                                                                                                 //
var _dep = new Deps.Dependency();                                                                                // 12
                                                                                                                 //
Template.body.helpers({                                                                                          // 14
    items: function () {                                                                                         // 15
        _dep.depend();                                                                                           // 16
                                                                                                                 //
        if (sortType == null || sortType == "priority") {                                                        // 17
            return items.find({}, {                                                                              // 18
                sort: {                                                                                          // 18
                    priority: -1                                                                                 // 18
                }                                                                                                // 18
            });                                                                                                  // 18
        } else if (sortType == "name") {                                                                         // 19
            return items.find({}, {                                                                              // 21
                sort: {                                                                                          // 21
                    name: 1                                                                                      // 21
                }                                                                                                // 21
            });                                                                                                  // 21
        }                                                                                                        // 22
    }                                                                                                            // 23
});                                                                                                              // 14
Template.sort.events({                                                                                           // 26
    'click .priority-sort': function () {                                                                        // 27
        Meteor.call('setSort', "priority");                                                                      // 28
                                                                                                                 //
        _dep.changed();                                                                                          // 29
    },                                                                                                           // 30
    'click .name-sort': function () {                                                                            // 31
        Meteor.call('setSort', "name");                                                                          // 32
                                                                                                                 //
        _dep.changed();                                                                                          // 33
    }                                                                                                            // 34
});                                                                                                              // 26
Template.add.events({                                                                                            // 37
    'submit .add-form': function () {                                                                            // 38
        event.preventDefault();                                                                                  // 39
        var target = event.target;                                                                               // 41
        var name = target.text.value;                                                                            // 42
        var quantity = target.quantity.value;                                                                    // 43
        var priority = target.priority.value; // items.insert({                                                  // 44
        //     name,                                                                                             // 47
        //     quantity,                                                                                         // 48
        //     price,                                                                                            // 49
        //     createdAt: new Date()                                                                             // 50
        // });                                                                                                   // 51
                                                                                                                 //
        Meteor.call('items.insert', name, quantity, priority);                                                   // 53
        target.text.value = '';                                                                                  // 55
        target.quantity.value = '';                                                                              // 56
        target.priority.value = '';                                                                              // 57
        $('#addModal').modal('close');                                                                           // 59
        return;                                                                                                  // 61
    }                                                                                                            // 62
});                                                                                                              // 37
Template.item.events({                                                                                           // 65
    'click .delete-item': function () {                                                                          // 66
        Meteor.call('items.remove', this);                                                                       // 67
        return;                                                                                                  // 68
    }                                                                                                            // 69
});                                                                                                              // 65
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// lib/collections.js                                                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.export({                                                                                                  // 1
    items: function () {                                                                                         // 1
        return items;                                                                                            // 1
    }                                                                                                            // 1
});                                                                                                              // 1
var Mongo = void 0;                                                                                              // 1
module.watch(require("meteor/mongo"), {                                                                          // 1
    Mongo: function (v) {                                                                                        // 1
        Mongo = v;                                                                                               // 1
    }                                                                                                            // 1
}, 0);                                                                                                           // 1
var Meteor = void 0;                                                                                             // 1
module.watch(require("meteor/meteor"), {                                                                         // 1
    Meteor: function (v) {                                                                                       // 1
        Meteor = v;                                                                                              // 1
    }                                                                                                            // 1
}, 1);                                                                                                           // 1
var check = void 0;                                                                                              // 1
module.watch(require("meteor/check"), {                                                                          // 1
    check: function (v) {                                                                                        // 1
        check = v;                                                                                               // 1
    }                                                                                                            // 1
}, 2);                                                                                                           // 1
var items = new Mongo.Collection("items");                                                                       // 5
sortType = "priority";                                                                                           // 7
Meteor.methods({                                                                                                 // 9
    'items.insert': function (name, quantity, priority) {                                                        // 10
        priority = parseInt(priority);                                                                           // 12
                                                                                                                 //
        if (!Meteor.userId()) {                                                                                  // 14
            throw new Meteor.Error("You are not authorized to do that.");                                        // 15
        }                                                                                                        // 16
                                                                                                                 //
        items.insert({                                                                                           // 18
            name: name,                                                                                          // 19
            quantity: quantity,                                                                                  // 20
            priority: priority                                                                                   // 21
        });                                                                                                      // 18
    },                                                                                                           // 23
    'items.remove': function (item) {                                                                            // 25
        check(item._id, String);                                                                                 // 26
        items.remove(item._id);                                                                                  // 28
    },                                                                                                           // 29
    'setSort': function (type) {                                                                                 // 31
        check(type, String);                                                                                     // 32
        sortType = type;                                                                                         // 33
    }                                                                                                            // 34
});                                                                                                              // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("./client/template.main.js");
require("./lib/collections.js");
require("./client/main.js");