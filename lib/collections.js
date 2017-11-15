import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const items = new Mongo.Collection("items");

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
})
