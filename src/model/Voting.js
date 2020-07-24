/*
 * Woden
 * Specification for Woden REST API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Woden) {
      root.Woden = {};
    }
    root.Woden.Voting = factory(root.Woden.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Voting model module.
   * @module model/Voting
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Voting</code>.
   * @alias module:model/Voting
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Voting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Voting} obj Optional instance to populate.
   * @return {module:model/Voting} The populated <code>Voting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('dueDate'))
        obj.dueDate = ApiClient.convertToType(data['dueDate'], 'String');
      if (data.hasOwnProperty('variants'))
        obj.variants = ApiClient.convertToType(data['variants'], ['String']);
      if (data.hasOwnProperty('excludedUsers'))
        obj.excludedUsers = ApiClient.convertToType(data['excludedUsers'], ['String']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} hash
   */
  exports.prototype.hash = undefined;

  /**
   * @member {String} dueDate
   */
  exports.prototype.dueDate = undefined;

  /**
   * @member {Array.<String>} variants
   */
  exports.prototype.variants = undefined;

  /**
   * @member {Array.<String>} excludedUsers
   */
  exports.prototype.excludedUsers = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  return exports;

}));
