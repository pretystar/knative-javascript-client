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
import V1ObjectMeta from './V1ObjectMeta';
import V1RoleRef from './V1RoleRef';
import V1Subject from './V1Subject';





/**
* The V1RoleBinding model module.
* @module client/client.models/V1RoleBinding
* @version 0.1
*/
export default class V1RoleBinding {
    /**
    * Constructs a new <code>V1RoleBinding</code>.
    * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
    * @alias module:client/client.models/V1RoleBinding
    * @class
    * @param roleRef {module:client/client.models/V1RoleRef} RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
    */

    constructor(roleRef) {
        

        
        

        this['roleRef'] = roleRef;

        
    }

    /**
    * Constructs a <code>V1RoleBinding</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1RoleBinding} obj Optional instance to populate.
    * @return {module:client/client.models/V1RoleBinding} The populated <code>V1RoleBinding</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RoleBinding();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('roleRef')) {
                obj['roleRef'] = V1RoleRef.constructFromObject(data['roleRef']);
            }
            if (data.hasOwnProperty('subjects')) {
                obj['subjects'] = ApiClient.convertToType(data['subjects'], [V1Subject]);
            }
        }
        return obj;
    }

    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    * @member {String} apiVersion
    */
    apiVersion = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Standard object's metadata.
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
    * @member {module:client/client.models/V1RoleRef} roleRef
    */
    roleRef = undefined;
    /**
    * Subjects holds references to the objects the role applies to.
    * @member {Array.<module:client/client.models/V1Subject>} subjects
    */
    subjects = undefined;








}

