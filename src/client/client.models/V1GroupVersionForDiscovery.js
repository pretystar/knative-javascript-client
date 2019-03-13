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
* The V1GroupVersionForDiscovery model module.
* @module client/client.models/V1GroupVersionForDiscovery
* @version 0.1
*/
export default class V1GroupVersionForDiscovery {
    /**
    * Constructs a new <code>V1GroupVersionForDiscovery</code>.
    * GroupVersion contains the \&quot;group/version\&quot; and \&quot;version\&quot; string of a version. It is made a struct to keep extensibility.
    * @alias module:client/client.models/V1GroupVersionForDiscovery
    * @class
    * @param groupVersion {String} groupVersion specifies the API group and version in the form \"group/version\"
    * @param version {String} version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
    */

    constructor(groupVersion, version) {
        

        
        

        this['groupVersion'] = groupVersion;this['version'] = version;

        
    }

    /**
    * Constructs a <code>V1GroupVersionForDiscovery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1GroupVersionForDiscovery} obj Optional instance to populate.
    * @return {module:client/client.models/V1GroupVersionForDiscovery} The populated <code>V1GroupVersionForDiscovery</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1GroupVersionForDiscovery();

            
            
            

            if (data.hasOwnProperty('groupVersion')) {
                obj['groupVersion'] = ApiClient.convertToType(data['groupVersion'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
    * groupVersion specifies the API group and version in the form \"group/version\"
    * @member {String} groupVersion
    */
    groupVersion = undefined;
    /**
    * version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
    * @member {String} version
    */
    version = undefined;








}

