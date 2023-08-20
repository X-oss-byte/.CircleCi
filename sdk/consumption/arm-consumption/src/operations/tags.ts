/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Tags } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClient } from "../consumptionManagementClient";
import { TagsGetOptionalParams, TagsGetResponse } from "../models";

/** Class containing Tags operations. */
export class TagsImpl implements Tags {
  private readonly client: ConsumptionManagementClient;

  /**
   * Initialize a new instance of the class Tags class.
   * @param client Reference to the service client
   */
  constructor(client: ConsumptionManagementClient) {
    this.client = client;
  }

  /**
   * Get all available tag keys for the defined scope
   * @param scope The scope associated with tags operations. This includes
   *              '/subscriptions/{subscriptionId}/' for subscription scope,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope and
   *              '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope..
   * @param options The options parameters.
   */
  get(
    scope: string,
    options?: TagsGetOptionalParams
  ): Promise<TagsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Consumption/tags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsResult
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};