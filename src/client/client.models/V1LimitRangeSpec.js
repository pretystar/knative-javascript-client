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
import V1LimitRangeItem from './V1LimitRangeItem';





/**
* The V1LimitRangeSpec model module.
* @module client/client.models/V1LimitRangeSpec
* @version 0.1
*/
export default class V1LimitRangeSpec {
    /**
    * Constructs a new <code>V1LimitRangeSpec</code>.
    * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
    * @alias module:client/client.models/V1LimitRangeSpec
    * @class
    * @param limits {Array.<module:client/client.models/V1LimitRangeItem>} Limits is the list of LimitRangeItem objects that are enforced.
    */

    constructor(limits) {
        

        
        

        this['limits'] = limits;

        
    }

    /**
    * Constructs a <code>V1LimitRangeSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1LimitRangeSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1LimitRangeSpec} The populated <code>V1LimitRangeSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1LimitRangeSpec();

            
            
            

            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ApiClient.convertToType(data['limits'], [V1LimitRangeItem]);
            }
        }
        return obj;
    }

    /**
    * Limits is the list of LimitRangeItem objects that are enforced.
    * @member {Array.<module:client/client.models/V1LimitRangeItem>} limits
    */
    limits = undefined;








}

