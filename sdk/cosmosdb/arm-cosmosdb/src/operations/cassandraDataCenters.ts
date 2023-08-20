/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { CassandraDataCenters } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DataCenterResource,
  CassandraDataCentersListOptionalParams,
  CassandraDataCentersListResponse,
  CassandraDataCentersGetOptionalParams,
  CassandraDataCentersGetResponse,
  CassandraDataCentersDeleteOptionalParams,
  CassandraDataCentersCreateUpdateOptionalParams,
  CassandraDataCentersCreateUpdateResponse,
  CassandraDataCentersUpdateOptionalParams,
  CassandraDataCentersUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CassandraDataCenters operations. */
export class CassandraDataCentersImpl implements CassandraDataCenters {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class CassandraDataCenters class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * List all data centers in a particular managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraDataCentersListOptionalParams
  ): PagedAsyncIterableIterator<DataCenterResource> {
    const iter = this.listPagingAll(resourceGroupName, clusterName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          clusterName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraDataCentersListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<DataCenterResource[]> {
    let result: CassandraDataCentersListResponse;
    result = await this._list(resourceGroupName, clusterName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraDataCentersListOptionalParams
  ): AsyncIterableIterator<DataCenterResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all data centers in a particular managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraDataCentersListOptionalParams
  ): Promise<CassandraDataCentersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listOperationSpec
    );
  }

  /**
   * Get the properties of a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    options?: CassandraDataCentersGetOptionalParams
  ): Promise<CassandraDataCentersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, dataCenterName, options },
      getOperationSpec
    );
  }

  /**
   * Delete a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    options?: CassandraDataCentersDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterName, dataCenterName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    options?: CassandraDataCentersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      dataCenterName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Create or update a managed Cassandra data center. When updating, overwrite all properties. To update
   * only some properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param body Parameters specifying the managed Cassandra data center.
   * @param options The options parameters.
   */
  async beginCreateUpdate(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    body: DataCenterResource,
    options?: CassandraDataCentersCreateUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraDataCentersCreateUpdateResponse>,
      CassandraDataCentersCreateUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CassandraDataCentersCreateUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterName, dataCenterName, body, options },
      spec: createUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      CassandraDataCentersCreateUpdateResponse,
      OperationState<CassandraDataCentersCreateUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a managed Cassandra data center. When updating, overwrite all properties. To update
   * only some properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param body Parameters specifying the managed Cassandra data center.
   * @param options The options parameters.
   */
  async beginCreateUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    body: DataCenterResource,
    options?: CassandraDataCentersCreateUpdateOptionalParams
  ): Promise<CassandraDataCentersCreateUpdateResponse> {
    const poller = await this.beginCreateUpdate(
      resourceGroupName,
      clusterName,
      dataCenterName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update some of the properties of a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param body Parameters to provide for specifying the managed Cassandra data center.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    body: DataCenterResource,
    options?: CassandraDataCentersUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraDataCentersUpdateResponse>,
      CassandraDataCentersUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CassandraDataCentersUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterName, dataCenterName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      CassandraDataCentersUpdateResponse,
      OperationState<CassandraDataCentersUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update some of the properties of a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param body Parameters to provide for specifying the managed Cassandra data center.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    body: DataCenterResource,
    options?: CassandraDataCentersUpdateOptionalParams
  ): Promise<CassandraDataCentersUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      clusterName,
      dataCenterName,
      body,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListDataCenters
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters/{dataCenterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataCenterResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.dataCenterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters/{dataCenterName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.dataCenterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters/{dataCenterName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataCenterResource
    },
    201: {
      bodyMapper: Mappers.DataCenterResource
    },
    202: {
      bodyMapper: Mappers.DataCenterResource
    },
    204: {
      bodyMapper: Mappers.DataCenterResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.dataCenterName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters/{dataCenterName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataCenterResource
    },
    201: {
      bodyMapper: Mappers.DataCenterResource
    },
    202: {
      bodyMapper: Mappers.DataCenterResource
    },
    204: {
      bodyMapper: Mappers.DataCenterResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.dataCenterName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};