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
import IoIstioConfigV1alpha2BypassListMetadata from './IoIstioConfigV1alpha2BypassListMetadata';





/**
* The DevKnativeServingV1alpha1ConfigurationList model module.
* @module client/client.models/DevKnativeServingV1alpha1ConfigurationList
* @version 0.1
*/
export default class DevKnativeServingV1alpha1ConfigurationList {
    /**
    * Constructs a new <code>DevKnativeServingV1alpha1ConfigurationList</code>.
    * ConfigurationList is a list of Configuration
    * @alias module:client/client.models/DevKnativeServingV1alpha1ConfigurationList
    * @class
    * @param items {Array.<Object>} List of configurations. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md
    */

    constructor(items) {
        

        
        

        this['items'] = items;

        
    }

    /**
    * Constructs a <code>DevKnativeServingV1alpha1ConfigurationList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/DevKnativeServingV1alpha1ConfigurationList} obj Optional instance to populate.
    * @return {module:client/client.models/DevKnativeServingV1alpha1ConfigurationList} The populated <code>DevKnativeServingV1alpha1ConfigurationList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DevKnativeServingV1alpha1ConfigurationList();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Object]);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IoIstioConfigV1alpha2BypassListMetadata.constructFromObject(data['metadata']);
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
    * List of configurations. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md
    * @member {Array.<Object>} items
    */
    items = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * @member {module:client/client.models/IoIstioConfigV1alpha2BypassListMetadata} metadata
    */
    metadata = undefined;








}

