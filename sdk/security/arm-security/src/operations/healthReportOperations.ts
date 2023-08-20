/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { HealthReportOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  HealthReportGetOptionalParams,
  HealthReportGetResponse
} from "../models";

/** Class containing HealthReportOperations operations. */
export class HealthReportOperationsImpl implements HealthReportOperations {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class HealthReportOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Get health report of resource
   * @param resourceId The identifier of the resource.
   * @param healthReportName The health report Key - Unique key for the health report type
   * @param options The options parameters.
   */
  get(
    resourceId: string,
    healthReportName: string,
    options?: HealthReportGetOptionalParams
  ): Promise<HealthReportGetResponse> {
    return this.client.sendOperationRequest(
      { resourceId, healthReportName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.Security/healthReports/{healthReportName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HealthReport
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion19],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceId,
    Parameters.healthReportName
  ],
  headerParameters: [Parameters.accept],
  serializer
};