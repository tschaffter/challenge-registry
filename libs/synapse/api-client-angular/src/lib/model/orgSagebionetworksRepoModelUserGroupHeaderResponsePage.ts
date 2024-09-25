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
import { OrgSagebionetworksRepoModelUserGroupHeader } from './orgSagebionetworksRepoModelUserGroupHeader';

/**
 * A single page of a users/groups info query response.
 */
export interface OrgSagebionetworksRepoModelUserGroupHeaderResponsePage {
  /**
   * The list of children that match the requested concept.
   */
  children?: Array<OrgSagebionetworksRepoModelUserGroupHeader>;
  prefixFilter?: string;
  totalNumberOfResults?: number;
}