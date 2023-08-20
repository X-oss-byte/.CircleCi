/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SharedKeysOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClient } from "../operationalInsightsManagementClient";
import {
  SharedKeysGetSharedKeysOptionalParams,
  SharedKeysGetSharedKeysResponse,
  SharedKeysRegenerateOptionalParams,
  SharedKeysRegenerateResponse
} from "../models";

/** Class containing SharedKeysOperations operations. */
export class SharedKeysOperationsImpl implements SharedKeysOperations {
  private readonly client: OperationalInsightsManagementClient;

  /**
   * Initialize a new instance of the class SharedKeysOperations class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets the shared keys for a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  getSharedKeys(
    resourceGroupName: string,
    workspaceName: string,
    options?: SharedKeysGetSharedKeysOptionalParams
  ): Promise<SharedKeysGetSharedKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      getSharedKeysOperationSpec
    );
  }

  /**
   * Regenerates the shared keys for a Log Analytics Workspace. These keys are used to connect Microsoft
   * Operational Insights agents to the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  regenerate(
    resourceGroupName: string,
    workspaceName: string,
    options?: SharedKeysRegenerateOptionalParams
  ): Promise<SharedKeysRegenerateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      regenerateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getSharedKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/sharedKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SharedKeys
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/regenerateSharedKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SharedKeys
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};