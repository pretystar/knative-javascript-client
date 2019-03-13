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
import V1SecretReference from './V1SecretReference';





/**
* The V1ISCSIPersistentVolumeSource model module.
* @module client/client.models/V1ISCSIPersistentVolumeSource
* @version 0.1
*/
export default class V1ISCSIPersistentVolumeSource {
    /**
    * Constructs a new <code>V1ISCSIPersistentVolumeSource</code>.
    * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
    * @alias module:client/client.models/V1ISCSIPersistentVolumeSource
    * @class
    * @param iqn {String} Target iSCSI Qualified Name.
    * @param lun {Number} iSCSI Target Lun number.
    * @param targetPortal {String} iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
    */

    constructor(iqn, lun, targetPortal) {
        

        
        

        this['iqn'] = iqn;this['lun'] = lun;this['targetPortal'] = targetPortal;

        
    }

    /**
    * Constructs a <code>V1ISCSIPersistentVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ISCSIPersistentVolumeSource} obj Optional instance to populate.
    * @return {module:client/client.models/V1ISCSIPersistentVolumeSource} The populated <code>V1ISCSIPersistentVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ISCSIPersistentVolumeSource();

            
            
            

            if (data.hasOwnProperty('chapAuthDiscovery')) {
                obj['chapAuthDiscovery'] = ApiClient.convertToType(data['chapAuthDiscovery'], 'Boolean');
            }
            if (data.hasOwnProperty('chapAuthSession')) {
                obj['chapAuthSession'] = ApiClient.convertToType(data['chapAuthSession'], 'Boolean');
            }
            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('initiatorName')) {
                obj['initiatorName'] = ApiClient.convertToType(data['initiatorName'], 'String');
            }
            if (data.hasOwnProperty('iqn')) {
                obj['iqn'] = ApiClient.convertToType(data['iqn'], 'String');
            }
            if (data.hasOwnProperty('iscsiInterface')) {
                obj['iscsiInterface'] = ApiClient.convertToType(data['iscsiInterface'], 'String');
            }
            if (data.hasOwnProperty('lun')) {
                obj['lun'] = ApiClient.convertToType(data['lun'], 'Number');
            }
            if (data.hasOwnProperty('portals')) {
                obj['portals'] = ApiClient.convertToType(data['portals'], ['String']);
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('secretRef')) {
                obj['secretRef'] = V1SecretReference.constructFromObject(data['secretRef']);
            }
            if (data.hasOwnProperty('targetPortal')) {
                obj['targetPortal'] = ApiClient.convertToType(data['targetPortal'], 'String');
            }
        }
        return obj;
    }

    /**
    * whether support iSCSI Discovery CHAP authentication
    * @member {Boolean} chapAuthDiscovery
    */
    chapAuthDiscovery = undefined;
    /**
    * whether support iSCSI Session CHAP authentication
    * @member {Boolean} chapAuthSession
    */
    chapAuthSession = undefined;
    /**
    * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
    * @member {String} fsType
    */
    fsType = undefined;
    /**
    * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
    * @member {String} initiatorName
    */
    initiatorName = undefined;
    /**
    * Target iSCSI Qualified Name.
    * @member {String} iqn
    */
    iqn = undefined;
    /**
    * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
    * @member {String} iscsiInterface
    */
    iscsiInterface = undefined;
    /**
    * iSCSI Target Lun number.
    * @member {Number} lun
    */
    lun = undefined;
    /**
    * iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
    * @member {Array.<String>} portals
    */
    portals = undefined;
    /**
    * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
    * @member {Boolean} readOnly
    */
    readOnly = undefined;
    /**
    * CHAP Secret for iSCSI target and initiator authentication
    * @member {module:client/client.models/V1SecretReference} secretRef
    */
    secretRef = undefined;
    /**
    * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
    * @member {String} targetPortal
    */
    targetPortal = undefined;








}

