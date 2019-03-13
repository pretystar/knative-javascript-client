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
* The V2beta2MetricValueStatus model module.
* @module client/client.models/V2beta2MetricValueStatus
* @version 0.1
*/
export default class V2beta2MetricValueStatus {
    /**
    * Constructs a new <code>V2beta2MetricValueStatus</code>.
    * MetricValueStatus holds the current value for a metric
    * @alias module:client/client.models/V2beta2MetricValueStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V2beta2MetricValueStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V2beta2MetricValueStatus} obj Optional instance to populate.
    * @return {module:client/client.models/V2beta2MetricValueStatus} The populated <code>V2beta2MetricValueStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2beta2MetricValueStatus();

            
            
            

            if (data.hasOwnProperty('averageUtilization')) {
                obj['averageUtilization'] = ApiClient.convertToType(data['averageUtilization'], 'Number');
            }
            if (data.hasOwnProperty('averageValue')) {
                obj['averageValue'] = ApiClient.convertToType(data['averageValue'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
    * @member {Number} averageUtilization
    */
    averageUtilization = undefined;
    /**
    * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
    * @member {String} averageValue
    */
    averageValue = undefined;
    /**
    * value is the current value of the metric (as a quantity).
    * @member {String} value
    */
    value = undefined;








}

