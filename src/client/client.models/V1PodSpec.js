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
import V1Affinity from './V1Affinity';
import V1Container from './V1Container';
import V1HostAlias from './V1HostAlias';
import V1LocalObjectReference from './V1LocalObjectReference';
import V1PodDNSConfig from './V1PodDNSConfig';
import V1PodReadinessGate from './V1PodReadinessGate';
import V1PodSecurityContext from './V1PodSecurityContext';
import V1Toleration from './V1Toleration';
import V1Volume from './V1Volume';





/**
* The V1PodSpec model module.
* @module client/client.models/V1PodSpec
* @version 0.1
*/
export default class V1PodSpec {
    /**
    * Constructs a new <code>V1PodSpec</code>.
    * PodSpec is a description of a pod.
    * @alias module:client/client.models/V1PodSpec
    * @class
    * @param containers {Array.<module:client/client.models/V1Container>} List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
    */

    constructor(containers) {
        

        
        

        this['containers'] = containers;

        
    }

    /**
    * Constructs a <code>V1PodSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1PodSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1PodSpec} The populated <code>V1PodSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PodSpec();

            
            
            

            if (data.hasOwnProperty('activeDeadlineSeconds')) {
                obj['activeDeadlineSeconds'] = ApiClient.convertToType(data['activeDeadlineSeconds'], 'Number');
            }
            if (data.hasOwnProperty('affinity')) {
                obj['affinity'] = V1Affinity.constructFromObject(data['affinity']);
            }
            if (data.hasOwnProperty('automountServiceAccountToken')) {
                obj['automountServiceAccountToken'] = ApiClient.convertToType(data['automountServiceAccountToken'], 'Boolean');
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [V1Container]);
            }
            if (data.hasOwnProperty('dnsConfig')) {
                obj['dnsConfig'] = V1PodDNSConfig.constructFromObject(data['dnsConfig']);
            }
            if (data.hasOwnProperty('dnsPolicy')) {
                obj['dnsPolicy'] = ApiClient.convertToType(data['dnsPolicy'], 'String');
            }
            if (data.hasOwnProperty('enableServiceLinks')) {
                obj['enableServiceLinks'] = ApiClient.convertToType(data['enableServiceLinks'], 'Boolean');
            }
            if (data.hasOwnProperty('hostAliases')) {
                obj['hostAliases'] = ApiClient.convertToType(data['hostAliases'], [V1HostAlias]);
            }
            if (data.hasOwnProperty('hostIPC')) {
                obj['hostIPC'] = ApiClient.convertToType(data['hostIPC'], 'Boolean');
            }
            if (data.hasOwnProperty('hostNetwork')) {
                obj['hostNetwork'] = ApiClient.convertToType(data['hostNetwork'], 'Boolean');
            }
            if (data.hasOwnProperty('hostPID')) {
                obj['hostPID'] = ApiClient.convertToType(data['hostPID'], 'Boolean');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('imagePullSecrets')) {
                obj['imagePullSecrets'] = ApiClient.convertToType(data['imagePullSecrets'], [V1LocalObjectReference]);
            }
            if (data.hasOwnProperty('initContainers')) {
                obj['initContainers'] = ApiClient.convertToType(data['initContainers'], [V1Container]);
            }
            if (data.hasOwnProperty('nodeName')) {
                obj['nodeName'] = ApiClient.convertToType(data['nodeName'], 'String');
            }
            if (data.hasOwnProperty('nodeSelector')) {
                obj['nodeSelector'] = ApiClient.convertToType(data['nodeSelector'], {'String': 'String'});
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('priorityClassName')) {
                obj['priorityClassName'] = ApiClient.convertToType(data['priorityClassName'], 'String');
            }
            if (data.hasOwnProperty('readinessGates')) {
                obj['readinessGates'] = ApiClient.convertToType(data['readinessGates'], [V1PodReadinessGate]);
            }
            if (data.hasOwnProperty('restartPolicy')) {
                obj['restartPolicy'] = ApiClient.convertToType(data['restartPolicy'], 'String');
            }
            if (data.hasOwnProperty('runtimeClassName')) {
                obj['runtimeClassName'] = ApiClient.convertToType(data['runtimeClassName'], 'String');
            }
            if (data.hasOwnProperty('schedulerName')) {
                obj['schedulerName'] = ApiClient.convertToType(data['schedulerName'], 'String');
            }
            if (data.hasOwnProperty('securityContext')) {
                obj['securityContext'] = V1PodSecurityContext.constructFromObject(data['securityContext']);
            }
            if (data.hasOwnProperty('serviceAccount')) {
                obj['serviceAccount'] = ApiClient.convertToType(data['serviceAccount'], 'String');
            }
            if (data.hasOwnProperty('serviceAccountName')) {
                obj['serviceAccountName'] = ApiClient.convertToType(data['serviceAccountName'], 'String');
            }
            if (data.hasOwnProperty('shareProcessNamespace')) {
                obj['shareProcessNamespace'] = ApiClient.convertToType(data['shareProcessNamespace'], 'Boolean');
            }
            if (data.hasOwnProperty('subdomain')) {
                obj['subdomain'] = ApiClient.convertToType(data['subdomain'], 'String');
            }
            if (data.hasOwnProperty('terminationGracePeriodSeconds')) {
                obj['terminationGracePeriodSeconds'] = ApiClient.convertToType(data['terminationGracePeriodSeconds'], 'Number');
            }
            if (data.hasOwnProperty('tolerations')) {
                obj['tolerations'] = ApiClient.convertToType(data['tolerations'], [V1Toleration]);
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], [V1Volume]);
            }
        }
        return obj;
    }

    /**
    * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
    * @member {Number} activeDeadlineSeconds
    */
    activeDeadlineSeconds = undefined;
    /**
    * If specified, the pod's scheduling constraints
    * @member {module:client/client.models/V1Affinity} affinity
    */
    affinity = undefined;
    /**
    * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
    * @member {Boolean} automountServiceAccountToken
    */
    automountServiceAccountToken = undefined;
    /**
    * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
    * @member {Array.<module:client/client.models/V1Container>} containers
    */
    containers = undefined;
    /**
    * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
    * @member {module:client/client.models/V1PodDNSConfig} dnsConfig
    */
    dnsConfig = undefined;
    /**
    * Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
    * @member {String} dnsPolicy
    */
    dnsPolicy = undefined;
    /**
    * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.
    * @member {Boolean} enableServiceLinks
    */
    enableServiceLinks = undefined;
    /**
    * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.
    * @member {Array.<module:client/client.models/V1HostAlias>} hostAliases
    */
    hostAliases = undefined;
    /**
    * Use the host's ipc namespace. Optional: Default to false.
    * @member {Boolean} hostIPC
    */
    hostIPC = undefined;
    /**
    * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
    * @member {Boolean} hostNetwork
    */
    hostNetwork = undefined;
    /**
    * Use the host's pid namespace. Optional: Default to false.
    * @member {Boolean} hostPID
    */
    hostPID = undefined;
    /**
    * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
    * @member {String} hostname
    */
    hostname = undefined;
    /**
    * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
    * @member {Array.<module:client/client.models/V1LocalObjectReference>} imagePullSecrets
    */
    imagePullSecrets = undefined;
    /**
    * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, or Liveness probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
    * @member {Array.<module:client/client.models/V1Container>} initContainers
    */
    initContainers = undefined;
    /**
    * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
    * @member {String} nodeName
    */
    nodeName = undefined;
    /**
    * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
    * @member {Object.<String, String>} nodeSelector
    */
    nodeSelector = undefined;
    /**
    * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
    * @member {Number} priority
    */
    priority = undefined;
    /**
    * If specified, indicates the pod's priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
    * @member {String} priorityClassName
    */
    priorityClassName = undefined;
    /**
    * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to \"True\" More info: https://git.k8s.io/enhancements/keps/sig-network/0007-pod-ready%2B%2B.md
    * @member {Array.<module:client/client.models/V1PodReadinessGate>} readinessGates
    */
    readinessGates = undefined;
    /**
    * Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
    * @member {String} restartPolicy
    */
    restartPolicy = undefined;
    /**
    * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the \"legacy\" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md This is an alpha feature and may change in the future.
    * @member {String} runtimeClassName
    */
    runtimeClassName = undefined;
    /**
    * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
    * @member {String} schedulerName
    */
    schedulerName = undefined;
    /**
    * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
    * @member {module:client/client.models/V1PodSecurityContext} securityContext
    */
    securityContext = undefined;
    /**
    * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
    * @member {String} serviceAccount
    */
    serviceAccount = undefined;
    /**
    * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
    * @member {String} serviceAccountName
    */
    serviceAccountName = undefined;
    /**
    * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. This field is beta-level and may be disabled with the PodShareProcessNamespace feature.
    * @member {Boolean} shareProcessNamespace
    */
    shareProcessNamespace = undefined;
    /**
    * If specified, the fully qualified Pod hostname will be \"<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>\". If not specified, the pod will not have a domainname at all.
    * @member {String} subdomain
    */
    subdomain = undefined;
    /**
    * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
    * @member {Number} terminationGracePeriodSeconds
    */
    terminationGracePeriodSeconds = undefined;
    /**
    * If specified, the pod's tolerations.
    * @member {Array.<module:client/client.models/V1Toleration>} tolerations
    */
    tolerations = undefined;
    /**
    * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
    * @member {Array.<module:client/client.models/V1Volume>} volumes
    */
    volumes = undefined;








}

