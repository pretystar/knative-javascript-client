/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.15.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.V1beta2DeploymentCondition();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1beta2DeploymentCondition', function() {
    it('should create an instance of V1beta2DeploymentCondition', function() {
      // uncomment below and update the code to test V1beta2DeploymentCondition
      //var instane = new KubernetesJsClient.V1beta2DeploymentCondition();
      //expect(instance).to.be.a(KubernetesJsClient.V1beta2DeploymentCondition);
    });

    it('should have the property lastTransitionTime (base name: "lastTransitionTime")', function() {
      // uncomment below and update the code to test the property lastTransitionTime
      //var instane = new KubernetesJsClient.V1beta2DeploymentCondition();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdateTime (base name: "lastUpdateTime")', function() {
      // uncomment below and update the code to test the property lastUpdateTime
      //var instane = new KubernetesJsClient.V1beta2DeploymentCondition();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new KubernetesJsClient.V1beta2DeploymentCondition();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new KubernetesJsClient.V1beta2DeploymentCondition();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KubernetesJsClient.V1beta2DeploymentCondition();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KubernetesJsClient.V1beta2DeploymentCondition();
      //expect(instance).to.be();
    });

  });

}));