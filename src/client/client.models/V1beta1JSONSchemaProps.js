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
import V1beta1ExternalDocumentation from './V1beta1ExternalDocumentation';
import V1beta1JSONSchemaProps from './V1beta1JSONSchemaProps';





/**
* The V1beta1JSONSchemaProps model module.
* @module client/client.models/V1beta1JSONSchemaProps
* @version 0.1
*/
export default class V1beta1JSONSchemaProps {
    /**
    * Constructs a new <code>V1beta1JSONSchemaProps</code>.
    * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
    * @alias module:client/client.models/V1beta1JSONSchemaProps
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1JSONSchemaProps</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1JSONSchemaProps} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1JSONSchemaProps} The populated <code>V1beta1JSONSchemaProps</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1JSONSchemaProps();

            
            
            

            if (data.hasOwnProperty('$ref')) {
                obj['$ref'] = ApiClient.convertToType(data['$ref'], 'String');
            }
            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('additionalItems')) {
                obj['additionalItems'] = ApiClient.convertToType(data['additionalItems'], Object);
            }
            if (data.hasOwnProperty('additionalProperties')) {
                obj['additionalProperties'] = ApiClient.convertToType(data['additionalProperties'], Object);
            }
            if (data.hasOwnProperty('allOf')) {
                obj['allOf'] = ApiClient.convertToType(data['allOf'], [V1beta1JSONSchemaProps]);
            }
            if (data.hasOwnProperty('anyOf')) {
                obj['anyOf'] = ApiClient.convertToType(data['anyOf'], [V1beta1JSONSchemaProps]);
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], Object);
            }
            if (data.hasOwnProperty('definitions')) {
                obj['definitions'] = ApiClient.convertToType(data['definitions'], {'String': V1beta1JSONSchemaProps});
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], {'String': Object});
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enum')) {
                obj['enum'] = ApiClient.convertToType(data['enum'], [Object]);
            }
            if (data.hasOwnProperty('example')) {
                obj['example'] = ApiClient.convertToType(data['example'], Object);
            }
            if (data.hasOwnProperty('exclusiveMaximum')) {
                obj['exclusiveMaximum'] = ApiClient.convertToType(data['exclusiveMaximum'], 'Boolean');
            }
            if (data.hasOwnProperty('exclusiveMinimum')) {
                obj['exclusiveMinimum'] = ApiClient.convertToType(data['exclusiveMinimum'], 'Boolean');
            }
            if (data.hasOwnProperty('externalDocs')) {
                obj['externalDocs'] = V1beta1ExternalDocumentation.constructFromObject(data['externalDocs']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], Object);
            }
            if (data.hasOwnProperty('maxItems')) {
                obj['maxItems'] = ApiClient.convertToType(data['maxItems'], 'Number');
            }
            if (data.hasOwnProperty('maxLength')) {
                obj['maxLength'] = ApiClient.convertToType(data['maxLength'], 'Number');
            }
            if (data.hasOwnProperty('maxProperties')) {
                obj['maxProperties'] = ApiClient.convertToType(data['maxProperties'], 'Number');
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = ApiClient.convertToType(data['maximum'], 'Number');
            }
            if (data.hasOwnProperty('minItems')) {
                obj['minItems'] = ApiClient.convertToType(data['minItems'], 'Number');
            }
            if (data.hasOwnProperty('minLength')) {
                obj['minLength'] = ApiClient.convertToType(data['minLength'], 'Number');
            }
            if (data.hasOwnProperty('minProperties')) {
                obj['minProperties'] = ApiClient.convertToType(data['minProperties'], 'Number');
            }
            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = ApiClient.convertToType(data['minimum'], 'Number');
            }
            if (data.hasOwnProperty('multipleOf')) {
                obj['multipleOf'] = ApiClient.convertToType(data['multipleOf'], 'Number');
            }
            if (data.hasOwnProperty('not')) {
                obj['not'] = V1beta1JSONSchemaProps.constructFromObject(data['not']);
            }
            if (data.hasOwnProperty('nullable')) {
                obj['nullable'] = ApiClient.convertToType(data['nullable'], 'Boolean');
            }
            if (data.hasOwnProperty('oneOf')) {
                obj['oneOf'] = ApiClient.convertToType(data['oneOf'], [V1beta1JSONSchemaProps]);
            }
            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
            if (data.hasOwnProperty('patternProperties')) {
                obj['patternProperties'] = ApiClient.convertToType(data['patternProperties'], {'String': V1beta1JSONSchemaProps});
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': V1beta1JSONSchemaProps});
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], ['String']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uniqueItems')) {
                obj['uniqueItems'] = ApiClient.convertToType(data['uniqueItems'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} $ref
    */
    $ref = undefined;
    /**
    * @member {String} $schema
    */
    $schema = undefined;
    /**
    * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
    * @member {Object} additionalItems
    */
    additionalItems = undefined;
    /**
    * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
    * @member {Object} additionalProperties
    */
    additionalProperties = undefined;
    /**
    * @member {Array.<module:client/client.models/V1beta1JSONSchemaProps>} allOf
    */
    allOf = undefined;
    /**
    * @member {Array.<module:client/client.models/V1beta1JSONSchemaProps>} anyOf
    */
    anyOf = undefined;
    /**
    * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
    * @member {Object} default
    */
    default = undefined;
    /**
    * @member {Object.<String, module:client/client.models/V1beta1JSONSchemaProps>} definitions
    */
    definitions = undefined;
    /**
    * @member {Object.<String, Object>} dependencies
    */
    dependencies = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {Array.<Object>} enum
    */
    enum = undefined;
    /**
    * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
    * @member {Object} example
    */
    example = undefined;
    /**
    * @member {Boolean} exclusiveMaximum
    */
    exclusiveMaximum = undefined;
    /**
    * @member {Boolean} exclusiveMinimum
    */
    exclusiveMinimum = undefined;
    /**
    * @member {module:client/client.models/V1beta1ExternalDocumentation} externalDocs
    */
    externalDocs = undefined;
    /**
    * @member {String} format
    */
    format = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
    * @member {Object} items
    */
    items = undefined;
    /**
    * @member {Number} maxItems
    */
    maxItems = undefined;
    /**
    * @member {Number} maxLength
    */
    maxLength = undefined;
    /**
    * @member {Number} maxProperties
    */
    maxProperties = undefined;
    /**
    * @member {Number} maximum
    */
    maximum = undefined;
    /**
    * @member {Number} minItems
    */
    minItems = undefined;
    /**
    * @member {Number} minLength
    */
    minLength = undefined;
    /**
    * @member {Number} minProperties
    */
    minProperties = undefined;
    /**
    * @member {Number} minimum
    */
    minimum = undefined;
    /**
    * @member {Number} multipleOf
    */
    multipleOf = undefined;
    /**
    * @member {module:client/client.models/V1beta1JSONSchemaProps} not
    */
    not = undefined;
    /**
    * @member {Boolean} nullable
    */
    nullable = undefined;
    /**
    * @member {Array.<module:client/client.models/V1beta1JSONSchemaProps>} oneOf
    */
    oneOf = undefined;
    /**
    * @member {String} pattern
    */
    pattern = undefined;
    /**
    * @member {Object.<String, module:client/client.models/V1beta1JSONSchemaProps>} patternProperties
    */
    patternProperties = undefined;
    /**
    * @member {Object.<String, module:client/client.models/V1beta1JSONSchemaProps>} properties
    */
    properties = undefined;
    /**
    * @member {Array.<String>} required
    */
    required = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} type
    */
    type = undefined;
    /**
    * @member {Boolean} uniqueItems
    */
    uniqueItems = undefined;








}

