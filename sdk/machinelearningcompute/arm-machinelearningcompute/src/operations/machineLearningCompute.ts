/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MachineLearningCompute } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MachineLearningComputeManagementClient } from "../machineLearningComputeManagementClient";
import {
  MachineLearningComputeListAvailableOperationsOptionalParams,
  MachineLearningComputeListAvailableOperationsResponse
} from "../models";

/** Class containing MachineLearningCompute operations. */
export class MachineLearningComputeImpl implements MachineLearningCompute {
  private readonly client: MachineLearningComputeManagementClient;

  /**
   * Initialize a new instance of the class MachineLearningCompute class.
   * @param client Reference to the service client
   */
  constructor(client: MachineLearningComputeManagementClient) {
    this.client = client;
  }

  /**
   * Gets all available operations.
   * @param options The options parameters.
   */
  listAvailableOperations(
    options?: MachineLearningComputeListAvailableOperationsOptionalParams
  ): Promise<MachineLearningComputeListAvailableOperationsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listAvailableOperationsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAvailableOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.MachineLearningCompute/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableOperations
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
