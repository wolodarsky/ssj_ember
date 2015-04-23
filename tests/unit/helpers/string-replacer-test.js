import {
  stringReplacer
} from '../../../helpers/string-replacer';
import { module, test } from 'qunit';

module('StringReplacerHelper');

// Replace this with your real tests.
test('it works', function(assert) {
  var replaceObject = { string: 'test-[replace]', search: '[replace]', replace: 'passed' };
  var result = stringReplacer(null, replaceObject);
  assert.ok(result);
});
