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
* The V1beta1CustomResourceDefinitionNames model module.
* @module client/client.models/V1beta1CustomResourceDefinitionNames
* @version 0.1
*/
export default class V1beta1CustomResourceDefinitionNames {
    /**
    * Constructs a new <code>V1beta1CustomResourceDefinitionNames</code>.
    * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
    * @alias module:client/client.models/V1beta1CustomResourceDefinitionNames
    * @class
    * @param kind {String} Kind is the serialized kind of the resource.  It is normally CamelCase and singular.
    * @param plural {String} Plural is the plural name of the resource to serve.  It must match the name of the CustomResourceDefinition-registration too: plural.group and it must be all lowercase.
    */

    constructor(kind, plural) {
        

        
        

        this['kind'] = kind;this['plural'] = plural;

        
    }

    /**
    * Constructs a <code>V1beta1CustomResourceDefinitionNames</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1CustomResourceDefinitionNames} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1CustomResourceDefinitionNames} The populated <code>V1beta1CustomResourceDefinitionNames</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CustomResourceDefinitionNames();

            
            
            

            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('listKind')) {
                obj['listKind'] = ApiClient.convertToType(data['listKind'], 'String');
            }
            if (data.hasOwnProperty('plural')) {
                obj['plural'] = ApiClient.convertToType(data['plural'], 'String');
            }
            if (data.hasOwnProperty('shortNames')) {
                obj['shortNames'] = ApiClient.convertToType(data['shortNames'], ['String']);
            }
            if (data.hasOwnProperty('singular')) {
                obj['singular'] = ApiClient.convertToType(data['singular'], 'String');
            }
        }
        return obj;
    }

    /**
    * Categories is a list of grouped resources custom resources belong to (e.g. 'all')
    * @member {Array.<String>} categories
    */
    categories = undefined;
    /**
    * Kind is the serialized kind of the resource.  It is normally CamelCase and singular.
    * @member {String} kind
    */
    kind = undefined;
    /**
    * ListKind is the serialized kind of the list for this resource.  Defaults to <kind>List.
    * @member {String} listKind
    */
    listKind = undefined;
    /**
    * Plural is the plural name of the resource to serve.  It must match the name of the CustomResourceDefinition-registration too: plural.group and it must be all lowercase.
    * @member {String} plural
    */
    plural = undefined;
    /**
    * ShortNames are short names for the resource.  It must be all lowercase.
    * @member {Array.<String>} shortNames
    */
    shortNames = undefined;
    /**
    * Singular is the singular name of the resource.  It must be all lowercase  Defaults to lowercased <kind>
    * @member {String} singular
    */
    singular = undefined;








}


