import { Template } from 'meteor/templating';
import { items } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base';

// Configures the accounts package.
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

import './main.html';

var _dep = new Deps.Dependency();

Template.body.helpers({
    items() {
        _dep.depend();
        if (sortType == null || sortType == "priority") {
            return items.find({}, {sort: {priority: -1}});
        }
        else if (sortType == "name") {
            return items.find({}, {sort: {name: 1}});
        }
    }
});

Template.sort.events({
    'click .priority-sort': function() {
        Meteor.call('setSort', "priority");
        _dep.changed();
    },
    'click .name-sort': function() {
        Meteor.call('setSort', "name");
        _dep.changed();
    }
});

Template.add.events({
    'submit .add-form': function() {
        event.preventDefault();

        const target = event.target;
        const name = target.text.value;
        const quantity = target.quantity.value;
        const priority = target.priority.value;

        // items.insert({
        //     name,
        //     quantity,
        //     price,
        //     createdAt: new Date()
        // });

        Meteor.call('items.insert', name, quantity, priority);

        target.text.value = '';
        target.quantity.value = '';
        target.priority.value = '';

        $('#addModal').modal('close');

        return;
    }
});

Template.item.events({
    'click .delete-item': function() {
        Meteor.call('items.remove', this);
        return;
    }
});
