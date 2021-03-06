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
import V1beta1CSINodeDriver from './V1beta1CSINodeDriver';





/**
* The V1beta1CSINodeSpec model module.
* @module client/client.models/V1beta1CSINodeSpec
* @version 0.1
*/
export default class V1beta1CSINodeSpec {
    /**
    * Constructs a new <code>V1beta1CSINodeSpec</code>.
    * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
    * @alias module:client/client.models/V1beta1CSINodeSpec
    * @class
    * @param drivers {Array.<module:client/client.models/V1beta1CSINodeDriver>} drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
    */

    constructor(drivers) {
        

        
        

        this['drivers'] = drivers;

        
    }

    /**
    * Constructs a <code>V1beta1CSINodeSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1CSINodeSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1CSINodeSpec} The populated <code>V1beta1CSINodeSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CSINodeSpec();

            
            
            

            if (data.hasOwnProperty('drivers')) {
                obj['drivers'] = ApiClient.convertToType(data['drivers'], [V1beta1CSINodeDriver]);
            }
        }
        return obj;
    }

    /**
    * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
    * @member {Array.<module:client/client.models/V1beta1CSINodeDriver>} drivers
    */
    drivers = undefined;








}


