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
    instance = new KubernetesJsClient.V1ContainerStatus();
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

  describe('V1ContainerStatus', function() {
    it('should create an instance of V1ContainerStatus', function() {
      // uncomment below and update the code to test V1ContainerStatus
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be.a(KubernetesJsClient.V1ContainerStatus);
    });

    it('should have the property containerID (base name: "containerID")', function() {
      // uncomment below and update the code to test the property containerID
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be();
    });

    it('should have the property imageID (base name: "imageID")', function() {
      // uncomment below and update the code to test the property imageID
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be();
    });

    it('should have the property lastState (base name: "lastState")', function() {
      // uncomment below and update the code to test the property lastState
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be();
    });

    it('should have the property ready (base name: "ready")', function() {
      // uncomment below and update the code to test the property ready
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be();
    });

    it('should have the property restartCount (base name: "restartCount")', function() {
      // uncomment below and update the code to test the property restartCount
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new KubernetesJsClient.V1ContainerStatus();
      //expect(instance).to.be();
    });

  });

}));