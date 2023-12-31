/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { Monitoring } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitoringClient } from "../monitoringClient";
import {
  MonitoringGetSparkJobListOptionalParams,
  MonitoringGetSparkJobListResponse,
  MonitoringGetSqlJobQueryStringOptionalParams,
  MonitoringGetSqlJobQueryStringResponse
} from "../models";

/** Class containing Monitoring operations. */
export class MonitoringImpl implements Monitoring {
  private readonly client: MonitoringClient;

  /**
   * Initialize a new instance of the class Monitoring class.
   * @param client Reference to the service client
   */
  constructor(client: MonitoringClient) {
    this.client = client;
  }

  /**
   * Get list of spark applications for the workspace.
   * @param options The options parameters.
   */
  async getSparkJobList(
    options?: MonitoringGetSparkJobListOptionalParams
  ): Promise<MonitoringGetSparkJobListResponse> {
    return tracingClient.withSpan(
      "MonitoringClient.getSparkJobList",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getSparkJobListOperationSpec
        ) as Promise<MonitoringGetSparkJobListResponse>;
      }
    );
  }

  /**
   * Get SQL OD/DW Query for the workspace.
   * @param options The options parameters.
   */
  async getSqlJobQueryString(
    options?: MonitoringGetSqlJobQueryStringOptionalParams
  ): Promise<MonitoringGetSqlJobQueryStringResponse> {
    return tracingClient.withSpan(
      "MonitoringClient.getSqlJobQueryString",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getSqlJobQueryStringOperationSpec
        ) as Promise<MonitoringGetSqlJobQueryStringResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getSparkJobListOperationSpec: coreClient.OperationSpec = {
  path: "/monitoring/workloadTypes/spark/Applications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkJobListViewResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const getSqlJobQueryStringOperationSpec: coreClient.OperationSpec = {
  path: "/monitoring/workloadTypes/sql/querystring",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlQueryStringDataModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderby,
    Parameters.skip
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
