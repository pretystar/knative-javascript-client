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
* The V1Initializer model module.
* @module client/client.models/V1Initializer
* @version 0.1
*/
export default class V1Initializer {
    /**
    * Constructs a new <code>V1Initializer</code>.
    * Initializer is information about an initializer that has not yet completed.
    * @alias module:client/client.models/V1Initializer
    * @class
    * @param name {String} name of the process that is responsible for initializing this object.
    */

    constructor(name) {
        

        
        

        this['name'] = name;

        
    }

    /**
    * Constructs a <code>V1Initializer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1Initializer} obj Optional instance to populate.
    * @return {module:client/client.models/V1Initializer} The populated <code>V1Initializer</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Initializer();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * name of the process that is responsible for initializing this object.
    * @member {String} name
    */
    name = undefined;








}

