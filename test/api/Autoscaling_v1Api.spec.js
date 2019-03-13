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
    instance = new KubernetesJsClient.Autoscaling_v1Api();
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

  describe('Autoscaling_v1Api', function() {
    describe('createNamespacedHorizontalPodAutoscaler', function() {
      it('should call createNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test createNamespacedHorizontalPodAutoscaler
        //instance.createNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedHorizontalPodAutoscaler', function() {
      it('should call deleteCollectionNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedHorizontalPodAutoscaler
        //instance.deleteCollectionNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedHorizontalPodAutoscaler', function() {
      it('should call deleteNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedHorizontalPodAutoscaler
        //instance.deleteNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIResources', function() {
      it('should call getAPIResources successfully', function(done) {
        //uncomment below and update the code to test getAPIResources
        //instance.getAPIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listHorizontalPodAutoscalerForAllNamespaces', function() {
      it('should call listHorizontalPodAutoscalerForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listHorizontalPodAutoscalerForAllNamespaces
        //instance.listHorizontalPodAutoscalerForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedHorizontalPodAutoscaler', function() {
      it('should call listNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test listNamespacedHorizontalPodAutoscaler
        //instance.listNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedHorizontalPodAutoscaler', function() {
      it('should call patchNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedHorizontalPodAutoscaler
        //instance.patchNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call patchNamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedHorizontalPodAutoscalerStatus
        //instance.patchNamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedHorizontalPodAutoscaler', function() {
      it('should call readNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test readNamespacedHorizontalPodAutoscaler
        //instance.readNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call readNamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedHorizontalPodAutoscalerStatus
        //instance.readNamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedHorizontalPodAutoscaler', function() {
      it('should call replaceNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedHorizontalPodAutoscaler
        //instance.replaceNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call replaceNamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedHorizontalPodAutoscalerStatus
        //instance.replaceNamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));