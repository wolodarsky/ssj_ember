import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address_1: DS.attr('string'),
  address_2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipcode: DS.attr('string'),
  phone: DS.attr('string'),
  url: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
});
