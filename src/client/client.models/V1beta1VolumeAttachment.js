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
import V1beta1VolumeAttachmentSpec from './V1beta1VolumeAttachmentSpec';
import V1beta1VolumeAttachmentStatus from './V1beta1VolumeAttachmentStatus';





/**
* The V1beta1VolumeAttachment model module.
* @module client/client.models/V1beta1VolumeAttachment
* @version 0.1
*/
export default class V1beta1VolumeAttachment {
    /**
    * Constructs a new <code>V1beta1VolumeAttachment</code>.
    * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.  VolumeAttachment objects are non-namespaced.
    * @alias module:client/client.models/V1beta1VolumeAttachment
    * @class
    * @param spec {module:client/client.models/V1beta1VolumeAttachmentSpec} Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
    */

    constructor(spec) {
        

        
        

        this['spec'] = spec;

        
    }

    /**
    * Constructs a <code>V1beta1VolumeAttachment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1VolumeAttachment} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1VolumeAttachment} The populated <code>V1beta1VolumeAttachment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1VolumeAttachment();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = V1beta1VolumeAttachmentSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1beta1VolumeAttachmentStatus.constructFromObject(data['status']);
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
    * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
    * @member {module:client/client.models/V1beta1VolumeAttachmentSpec} spec
    */
    spec = undefined;
    /**
    * Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
    * @member {module:client/client.models/V1beta1VolumeAttachmentStatus} status
    */
    status = undefined;








}


