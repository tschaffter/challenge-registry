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

/**
 * DEPRECATED: use EvaluationRound APIs instead. No SubmissionQuota will be returned with the Evaluation. Any SubmissionQuotas submitted will be instead be converted into similar EvaluationRounds.
 */
export interface OrgSagebionetworksEvaluationModelSubmissionQuota {
  firstRoundStart?: string;
  roundDurationMillis?: number;
  numberOfRounds?: number;
  submissionLimit?: number;
}