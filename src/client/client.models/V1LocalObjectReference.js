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





/**
* The V1LocalObjectReference model module.
* @module client/client.models/V1LocalObjectReference
* @version 0.1
*/
export default class V1LocalObjectReference {
    /**
    * Constructs a new <code>V1LocalObjectReference</code>.
    * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
    * @alias module:client/client.models/V1LocalObjectReference
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1LocalObjectReference</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1LocalObjectReference} obj Optional instance to populate.
    * @return {module:client/client.models/V1LocalObjectReference} The populated <code>V1LocalObjectReference</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1LocalObjectReference();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    * @member {String} name
    */
    name = undefined;








}

