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
* The V1FlockerVolumeSource model module.
* @module client/client.models/V1FlockerVolumeSource
* @version 0.1
*/
export default class V1FlockerVolumeSource {
    /**
    * Constructs a new <code>V1FlockerVolumeSource</code>.
    * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
    * @alias module:client/client.models/V1FlockerVolumeSource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1FlockerVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1FlockerVolumeSource} obj Optional instance to populate.
    * @return {module:client/client.models/V1FlockerVolumeSource} The populated <code>V1FlockerVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1FlockerVolumeSource();

            
            
            

            if (data.hasOwnProperty('datasetName')) {
                obj['datasetName'] = ApiClient.convertToType(data['datasetName'], 'String');
            }
            if (data.hasOwnProperty('datasetUUID')) {
                obj['datasetUUID'] = ApiClient.convertToType(data['datasetUUID'], 'String');
            }
        }
        return obj;
    }

    /**
    * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
    * @member {String} datasetName
    */
    datasetName = undefined;
    /**
    * UUID of the dataset. This is unique identifier of a Flocker dataset
    * @member {String} datasetUUID
    */
    datasetUUID = undefined;








}


