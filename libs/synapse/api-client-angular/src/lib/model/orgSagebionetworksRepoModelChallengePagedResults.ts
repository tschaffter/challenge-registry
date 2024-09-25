/**
 * Synapse REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelChallenge } from './orgSagebionetworksRepoModelChallenge';

/**
 * A paginated list of Challenge objects
 */
export interface OrgSagebionetworksRepoModelChallengePagedResults {
  /**
   * The list of results for this page
   */
  results?: Array<OrgSagebionetworksRepoModelChallenge>;
  totalNumberOfResults?: number;
}