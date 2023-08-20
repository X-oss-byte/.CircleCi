/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ManagementPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  ManagementPolicyName,
  ManagementPoliciesGetOptionalParams,
  ManagementPoliciesGetResponse,
  ManagementPolicy,
  ManagementPoliciesCreateOrUpdateOptionalParams,
  ManagementPoliciesCreateOrUpdateResponse,
  ManagementPoliciesDeleteOptionalParams
} from "../models";

/** Class containing ManagementPolicies operations. */
export class ManagementPoliciesImpl implements ManagementPolicies {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class ManagementPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * Gets the managementpolicy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param managementPolicyName The name of the Storage Account Management Policy. It should always be
   *                             'default'
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    managementPolicyName: ManagementPolicyName,
    options?: ManagementPoliciesGetOptionalParams
  ): Promise<ManagementPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, managementPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Sets the managementpolicy to the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param managementPolicyName The name of the Storage Account Management Policy. It should always be
   *                             'default'
   * @param properties The ManagementPolicy set to a storage account.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    managementPolicyName: ManagementPolicyName,
    properties: ManagementPolicy,
    options?: ManagementPoliciesCreateOrUpdateOptionalParams
  ): Promise<ManagementPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        managementPolicyName,
        properties,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the managementpolicy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param managementPolicyName The name of the Storage Account Management Policy. It should always be
   *                             'default'
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    managementPolicyName: ManagementPolicyName,
    options?: ManagementPoliciesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, managementPolicyName, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementPolicy
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.managementPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementPolicy
    }
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.managementPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.managementPolicyName
  ],
  serializer
};