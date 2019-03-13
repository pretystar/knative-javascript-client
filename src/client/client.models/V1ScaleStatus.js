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
* The V1ScaleStatus model module.
* @module client/client.models/V1ScaleStatus
* @version 0.1
*/
export default class V1ScaleStatus {
    /**
    * Constructs a new <code>V1ScaleStatus</code>.
    * ScaleStatus represents the current status of a scale subresource.
    * @alias module:client/client.models/V1ScaleStatus
    * @class
    * @param replicas {Number} actual number of observed instances of the scaled object.
    */

    constructor(replicas) {
        

        
        

        this['replicas'] = replicas;

        
    }

    /**
    * Constructs a <code>V1ScaleStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ScaleStatus} obj Optional instance to populate.
    * @return {module:client/client.models/V1ScaleStatus} The populated <code>V1ScaleStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ScaleStatus();

            
            
            

            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = ApiClient.convertToType(data['selector'], 'String');
            }
        }
        return obj;
    }

    /**
    * actual number of observed instances of the scaled object.
    * @member {Number} replicas
    */
    replicas = undefined;
    /**
    * label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
    * @member {String} selector
    */
    selector = undefined;








}

