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
import V1ConfigMapNodeConfigSource from './V1ConfigMapNodeConfigSource';





/**
* The V1NodeConfigSource model module.
* @module client/client.models/V1NodeConfigSource
* @version 0.1
*/
export default class V1NodeConfigSource {
    /**
    * Constructs a new <code>V1NodeConfigSource</code>.
    * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
    * @alias module:client/client.models/V1NodeConfigSource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1NodeConfigSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1NodeConfigSource} obj Optional instance to populate.
    * @return {module:client/client.models/V1NodeConfigSource} The populated <code>V1NodeConfigSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1NodeConfigSource();

            
            
            

            if (data.hasOwnProperty('configMap')) {
                obj['configMap'] = V1ConfigMapNodeConfigSource.constructFromObject(data['configMap']);
            }
        }
        return obj;
    }

    /**
    * ConfigMap is a reference to a Node's ConfigMap
    * @member {module:client/client.models/V1ConfigMapNodeConfigSource} configMap
    */
    configMap = undefined;








}

