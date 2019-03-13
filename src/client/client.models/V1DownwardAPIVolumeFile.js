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
import V1ObjectFieldSelector from './V1ObjectFieldSelector';
import V1ResourceFieldSelector from './V1ResourceFieldSelector';





/**
* The V1DownwardAPIVolumeFile model module.
* @module client/client.models/V1DownwardAPIVolumeFile
* @version 0.1
*/
export default class V1DownwardAPIVolumeFile {
    /**
    * Constructs a new <code>V1DownwardAPIVolumeFile</code>.
    * DownwardAPIVolumeFile represents information to create the file containing the pod field
    * @alias module:client/client.models/V1DownwardAPIVolumeFile
    * @class
    * @param path {String} Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
    */

    constructor(path) {
        

        
        

        this['path'] = path;

        
    }

    /**
    * Constructs a <code>V1DownwardAPIVolumeFile</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1DownwardAPIVolumeFile} obj Optional instance to populate.
    * @return {module:client/client.models/V1DownwardAPIVolumeFile} The populated <code>V1DownwardAPIVolumeFile</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1DownwardAPIVolumeFile();

            
            
            

            if (data.hasOwnProperty('fieldRef')) {
                obj['fieldRef'] = V1ObjectFieldSelector.constructFromObject(data['fieldRef']);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('resourceFieldRef')) {
                obj['resourceFieldRef'] = V1ResourceFieldSelector.constructFromObject(data['resourceFieldRef']);
            }
        }
        return obj;
    }

    /**
    * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
    * @member {module:client/client.models/V1ObjectFieldSelector} fieldRef
    */
    fieldRef = undefined;
    /**
    * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    * @member {Number} mode
    */
    mode = undefined;
    /**
    * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
    * @member {String} path
    */
    path = undefined;
    /**
    * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
    * @member {module:client/client.models/V1ResourceFieldSelector} resourceFieldRef
    */
    resourceFieldRef = undefined;








}

