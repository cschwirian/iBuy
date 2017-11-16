var require = meteorInstall({"client":{"main.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.html                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.main.js"), {                                                                          // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return [ HTML.NAV({                                                                                                  // 4
    class: "teal"                                                                                                      // 5
  }, "\n        ", HTML.DIV({                                                                                          // 6
    class: "container"                                                                                                 // 7
  }, "\n            ", HTML.DIV({                                                                                      // 8
    clas: "nav-wrapper"                                                                                                // 9
  }, "\n                ", HTML.Raw('<a href="#" class="brand-logo center">iBuy</a>'), "\n                ", HTML.UL({
    id: "nav-mobile",                                                                                                  // 11
    class: "right"                                                                                                     // 12
  }, "\n                    ", Blaze.If(function() {                                                                   // 13
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 14
  }, function() {                                                                                                      // 15
    return [ "\n                        ", HTML.LI({                                                                   // 16
      class: "nav-item"                                                                                                // 17
    }, "\n                            ", HTML.A({                                                                      // 18
      class: "waves-effect waves-light btn modal-trigger",                                                             // 19
      href: "#addModal",                                                                                               // 20
      style: "padding: 0px 14px 0px 14px"                                                                              // 21
    }, "Add Item"), "\n                        "), "\n                    " ];                                         // 22
  }), "\n                "), "\n                ", HTML.UL({                                                           // 23
    class: "left"                                                                                                      // 24
  }, "\n                    ", HTML.LI({                                                                               // 25
    class: "nav-item"                                                                                                  // 26
  }, "\n                        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), "\n    ", HTML.DIV({
    class: "container"                                                                                                 // 28
  }, "\n        ", HTML.Raw("<h1>Items</h1>"), "\n        ", Blaze.If(function() {                                     // 29
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 30
  }, function() {                                                                                                      // 31
    return [ "\n            ", Spacebars.include(view.lookupTemplate("sort")), "\n            ", HTML.UL({             // 32
      class: "collection"                                                                                              // 33
    }, "\n                ", HTML.LI({                                                                                 // 34
      class: "collection-item"                                                                                         // 35
    }, "\n                    ", HTML.TABLE("\n                        ", HTML.TR("\n                            ", HTML.TD({
      style: "padding: 0px; width: 40%"                                                                                // 37
    }, "Name"), "\n                            ", HTML.TD({                                                            // 38
      style: "padding: 0px; width: 20%"                                                                                // 39
    }, "Qty"), "\n                            ", HTML.TD({                                                             // 40
      style: "padding: 0px; width: 20%"                                                                                // 41
    }, "Priority"), "\n                            ", HTML.TD({                                                        // 42
      style: "padding: 0px; width: 20%"                                                                                // 43
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("items"));                                                                     // 45
    }, function() {                                                                                                    // 46
      return [ "\n                    ", Spacebars.include(view.lookupTemplate("item")), "\n                " ];       // 47
    }), "\n            "), "\n        " ];                                                                             // 48
  }, function() {                                                                                                      // 49
    return [ "\n            ", HTML.P("Please log in to manage your shopping list."), "\n        " ];                  // 50
  }), "\n    "), "\n\n    ", Spacebars.include(view.lookupTemplate("add")), "\n\n    ", HTML.SCRIPT("\n        $(document).ready(function(){\n            $('.modal').modal();\n        });\n    ") ];
}));                                                                                                                   // 52
Meteor.startup(Template.body.renderToDocument);                                                                        // 53
                                                                                                                       // 54
Template.__checkName("item");                                                                                          // 55
Template["item"] = new Template("Template.item", (function() {                                                         // 56
  var view = this;                                                                                                     // 57
  return HTML.LI({                                                                                                     // 58
    class: "collection-item "                                                                                          // 59
  }, "\n        ", HTML.TABLE("\n            ", HTML.TR("\n                ", HTML.TD({                                // 60
    style: "padding: 0px; padding-top: 0px; padding-bottom: 0px; width: 40%"                                           // 61
  }, Blaze.View("lookup:name", function() {                                                                            // 62
    return Spacebars.mustache(view.lookup("name"));                                                                    // 63
  })), "\n                ", HTML.TD({                                                                                 // 64
    style: "padding: 0px; width: 20%"                                                                                  // 65
  }, Blaze.View("lookup:quantity", function() {                                                                        // 66
    return Spacebars.mustache(view.lookup("quantity"));                                                                // 67
  })), "\n                ", HTML.TD({                                                                                 // 68
    style: "padding: 0px; width: 20%"                                                                                  // 69
  }, Blaze.View("lookup:priority", function() {                                                                        // 70
    return Spacebars.mustache(view.lookup("priority"));                                                                // 71
  })), "\n                ", HTML.TD({                                                                                 // 72
    style: "padding: 0px; width: 20%"                                                                                  // 73
  }, HTML.A({                                                                                                          // 74
    href: "#",                                                                                                         // 75
    class: "delete-item secondary-content"                                                                             // 76
  }, HTML.I({                                                                                                          // 77
    class: "material-icons"                                                                                            // 78
  }, "done"))), "\n            "), "\n        "), "\n    ");                                                           // 79
}));                                                                                                                   // 80
                                                                                                                       // 81
Template.__checkName("add");                                                                                           // 82
Template["add"] = new Template("Template.add", (function() {                                                           // 83
  var view = this;                                                                                                     // 84
  return HTML.Raw('<!-- Modal Structure -->\n    <div id="addModal" class="modal">\n        <div class="modal-content">\n            <h3>Add Item</h3>\n            <form class="add-form">\n                <input type="text" name="text" placeholder="Item Name" style="width: 60%">\n                <input type="text" name="quantity" placeholder="QTY" style="width: 10%">\n                <input type="text" name="priority" placeholder="Priority" style="width: 20%">\n                <!-- TODO: Figure out a dropdown for quantity. -->\n                <!-- <select name="quantity" size="3" style="width: 20%">\n                    <option value="1" selected>1</option>\n                    <option value="2">2</option>\n                    <option value="3">3</option>\n                    <option value="4">4</option>\n                </select> -->\n                <input type="submit" value="Add" class="add modal-close waves-effect waves-green btn-flat">\n            </form>\n        </div>\n    </div>');
}));                                                                                                                   // 86
                                                                                                                       // 87
Template.__checkName("sort");                                                                                          // 88
Template["sort"] = new Template("Template.sort", (function() {                                                         // 89
  var view = this;                                                                                                     // 90
  return HTML.Raw('Sort By:\n    <input type="button" class="priority-sort waves-effect waves-green btn" value="Priority" style="margin: 0px 10px 0px 10px; padding: 0px 14px 0px 14px">\n    <input type="button" class="name-sort waves-effect waves-green btn" value="Name" style="margin: 0px 10px 0px 10px; padding: 0px 14px 0px 14px">');
}));                                                                                                                   // 92
                                                                                                                       // 93
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
    Template: function (v) {                                                                                           // 1
        Template = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var items = void 0;                                                                                                    // 1
module.watch(require("../lib/collections.js"), {                                                                       // 1
    items: function (v) {                                                                                              // 1
        items = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var Accounts = void 0;                                                                                                 // 1
module.watch(require("meteor/accounts-base"), {                                                                        // 1
    Accounts: function (v) {                                                                                           // 1
        Accounts = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
module.watch(require("./main.html"));                                                                                  // 1
// Configures the accounts package.                                                                                    // 5
Accounts.ui.config({                                                                                                   // 6
    passwordSignupFields: "USERNAME_ONLY"                                                                              // 7
});                                                                                                                    // 6
                                                                                                                       //
var _dep = new Deps.Dependency();                                                                                      // 12
                                                                                                                       //
Template.body.helpers({                                                                                                // 14
    items: function () {                                                                                               // 15
        _dep.depend();                                                                                                 // 16
                                                                                                                       //
        if (sortType == null || sortType == "priority") {                                                              // 17
            return items.find({}, {                                                                                    // 18
                sort: {                                                                                                // 18
                    priority: -1                                                                                       // 18
                }                                                                                                      // 18
            });                                                                                                        // 18
        } else if (sortType == "name") {                                                                               // 19
            return items.find({}, {                                                                                    // 21
                sort: {                                                                                                // 21
                    name: 1                                                                                            // 21
                }                                                                                                      // 21
            });                                                                                                        // 21
        }                                                                                                              // 22
    }                                                                                                                  // 23
});                                                                                                                    // 14
Template.sort.events({                                                                                                 // 26
    'click .priority-sort': function () {                                                                              // 27
        Meteor.call('setSort', "priority");                                                                            // 28
                                                                                                                       //
        _dep.changed();                                                                                                // 29
    },                                                                                                                 // 30
    'click .name-sort': function () {                                                                                  // 31
        Meteor.call('setSort', "name");                                                                                // 32
                                                                                                                       //
        _dep.changed();                                                                                                // 33
    }                                                                                                                  // 34
});                                                                                                                    // 26
Template.add.events({                                                                                                  // 37
    'submit .add-form': function () {                                                                                  // 38
        event.preventDefault();                                                                                        // 39
        var target = event.target;                                                                                     // 41
        var name = target.text.value;                                                                                  // 42
        var quantity = target.quantity.value;                                                                          // 43
        var priority = target.priority.value;                                                                          // 44
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();                                             // 46
        Meteor.call('items.insert', name, quantity, priority);                                                         // 48
        target.text.value = '';                                                                                        // 50
        target.quantity.value = '';                                                                                    // 51
        target.priority.value = '';                                                                                    // 52
        $('#addModal').modal('close');                                                                                 // 54
        return;                                                                                                        // 56
    }                                                                                                                  // 57
});                                                                                                                    // 37
Template.item.events({                                                                                                 // 60
    'click .delete-item': function () {                                                                                // 61
        Meteor.call('items.remove', this);                                                                             // 62
        return;                                                                                                        // 63
    }                                                                                                                  // 64
});                                                                                                                    // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/collections.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
    items: function () {                                                                                               // 1
        return items;                                                                                                  // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
    Mongo: function (v) {                                                                                              // 1
        Mongo = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var check = void 0;                                                                                                    // 1
module.watch(require("meteor/check"), {                                                                                // 1
    check: function (v) {                                                                                              // 1
        check = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
var items = new Mongo.Collection("items");                                                                             // 5
sortType = "priority";                                                                                                 // 7
Meteor.methods({                                                                                                       // 9
    'items.insert': function (name, quantity, priority) {                                                              // 10
        priority = parseInt(priority);                                                                                 // 12
                                                                                                                       //
        if (!Meteor.userId()) {                                                                                        // 14
            throw new Meteor.Error("You are not authorized to do that.");                                              // 15
        }                                                                                                              // 16
                                                                                                                       //
        items.insert({                                                                                                 // 18
            name: name,                                                                                                // 19
            quantity: quantity,                                                                                        // 20
            priority: priority                                                                                         // 21
        });                                                                                                            // 18
    },                                                                                                                 // 23
    'items.remove': function (item) {                                                                                  // 25
        check(item._id, String);                                                                                       // 26
        items.remove(item._id);                                                                                        // 28
    },                                                                                                                 // 29
    'setSort': function (type) {                                                                                       // 31
        check(type, String);                                                                                           // 32
        sortType = type;                                                                                               // 33
    }                                                                                                                  // 34
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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