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


import ApiClient from '../ApiClient';
import V1ObjectMeta from './V1ObjectMeta';
import V1ObjectReference from './V1ObjectReference';





/**
* The V1Binding model module.
* @module client/client.models/V1Binding
* @version 0.1
*/
export default class V1Binding {
    /**
    * Constructs a new <code>V1Binding</code>.
    * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
    * @alias module:client/client.models/V1Binding
    * @class
    * @param target {module:client/client.models/V1ObjectReference} The target object that you want to bind to the standard object.
    */

    constructor(target) {
        

        
        

        this['target'] = target;

        
    }

    /**
    * Constructs a <code>V1Binding</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1Binding} obj Optional instance to populate.
    * @return {module:client/client.models/V1Binding} The populated <code>V1Binding</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Binding();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = V1ObjectReference.constructFromObject(data['target']);
            }
        }
        return obj;
    }

    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    * @member {String} apiVersion
    */
    apiVersion = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * The target object that you want to bind to the standard object.
    * @member {module:client/client.models/V1ObjectReference} target
    */
    target = undefined;








}

