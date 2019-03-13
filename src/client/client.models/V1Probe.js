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
import V1ExecAction from './V1ExecAction';
import V1HTTPGetAction from './V1HTTPGetAction';
import V1TCPSocketAction from './V1TCPSocketAction';





/**
* The V1Probe model module.
* @module client/client.models/V1Probe
* @version 0.1
*/
export default class V1Probe {
    /**
    * Constructs a new <code>V1Probe</code>.
    * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
    * @alias module:client/client.models/V1Probe
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1Probe</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1Probe} obj Optional instance to populate.
    * @return {module:client/client.models/V1Probe} The populated <code>V1Probe</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Probe();

            
            
            

            if (data.hasOwnProperty('exec')) {
                obj['exec'] = V1ExecAction.constructFromObject(data['exec']);
            }
            if (data.hasOwnProperty('failureThreshold')) {
                obj['failureThreshold'] = ApiClient.convertToType(data['failureThreshold'], 'Number');
            }
            if (data.hasOwnProperty('httpGet')) {
                obj['httpGet'] = V1HTTPGetAction.constructFromObject(data['httpGet']);
            }
            if (data.hasOwnProperty('initialDelaySeconds')) {
                obj['initialDelaySeconds'] = ApiClient.convertToType(data['initialDelaySeconds'], 'Number');
            }
            if (data.hasOwnProperty('periodSeconds')) {
                obj['periodSeconds'] = ApiClient.convertToType(data['periodSeconds'], 'Number');
            }
            if (data.hasOwnProperty('successThreshold')) {
                obj['successThreshold'] = ApiClient.convertToType(data['successThreshold'], 'Number');
            }
            if (data.hasOwnProperty('tcpSocket')) {
                obj['tcpSocket'] = V1TCPSocketAction.constructFromObject(data['tcpSocket']);
            }
            if (data.hasOwnProperty('timeoutSeconds')) {
                obj['timeoutSeconds'] = ApiClient.convertToType(data['timeoutSeconds'], 'Number');
            }
        }
        return obj;
    }

    /**
    * One and only one of the following should be specified. Exec specifies the action to take.
    * @member {module:client/client.models/V1ExecAction} exec
    */
    exec = undefined;
    /**
    * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
    * @member {Number} failureThreshold
    */
    failureThreshold = undefined;
    /**
    * HTTPGet specifies the http request to perform.
    * @member {module:client/client.models/V1HTTPGetAction} httpGet
    */
    httpGet = undefined;
    /**
    * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    * @member {Number} initialDelaySeconds
    */
    initialDelaySeconds = undefined;
    /**
    * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
    * @member {Number} periodSeconds
    */
    periodSeconds = undefined;
    /**
    * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
    * @member {Number} successThreshold
    */
    successThreshold = undefined;
    /**
    * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
    * @member {module:client/client.models/V1TCPSocketAction} tcpSocket
    */
    tcpSocket = undefined;
    /**
    * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    * @member {Number} timeoutSeconds
    */
    timeoutSeconds = undefined;








}

