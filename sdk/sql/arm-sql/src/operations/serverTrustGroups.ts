/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ServerTrustGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ServerTrustGroup,
  ServerTrustGroupsListByLocationNextOptionalParams,
  ServerTrustGroupsListByLocationOptionalParams,
  ServerTrustGroupsListByLocationResponse,
  ServerTrustGroupsListByInstanceNextOptionalParams,
  ServerTrustGroupsListByInstanceOptionalParams,
  ServerTrustGroupsListByInstanceResponse,
  ServerTrustGroupsGetOptionalParams,
  ServerTrustGroupsGetResponse,
  ServerTrustGroupsCreateOrUpdateOptionalParams,
  ServerTrustGroupsCreateOrUpdateResponse,
  ServerTrustGroupsDeleteOptionalParams,
  ServerTrustGroupsListByLocationNextResponse,
  ServerTrustGroupsListByInstanceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServerTrustGroups operations. */
export class ServerTrustGroupsImpl implements ServerTrustGroups {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServerTrustGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists a server trust group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  public listByLocation(
    resourceGroupName: string,
    locationName: string,
    options?: ServerTrustGroupsListByLocationOptionalParams
  ): PagedAsyncIterableIterator<ServerTrustGroup> {
    const iter = this.listByLocationPagingAll(
      resourceGroupName,
      locationName,
      options
    );
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
        return this.listByLocationPagingPage(
          resourceGroupName,
          locationName,
          options,
          settings
        );
      }
    };
  }

  private async *listByLocationPagingPage(
    resourceGroupName: string,
    locationName: string,
    options?: ServerTrustGroupsListByLocationOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ServerTrustGroup[]> {
    let result: ServerTrustGroupsListByLocationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByLocation(
        resourceGroupName,
        locationName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByLocationNext(
        resourceGroupName,
        locationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByLocationPagingAll(
    resourceGroupName: string,
    locationName: string,
    options?: ServerTrustGroupsListByLocationOptionalParams
  ): AsyncIterableIterator<ServerTrustGroup> {
    for await (const page of this.listByLocationPagingPage(
      resourceGroupName,
      locationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a server trust groups by instance name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ServerTrustGroupsListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<ServerTrustGroup> {
    const iter = this.listByInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
      options
    );
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
        return this.listByInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ServerTrustGroupsListByInstanceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ServerTrustGroup[]> {
    let result: ServerTrustGroupsListByInstanceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByInstance(
        resourceGroupName,
        managedInstanceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ServerTrustGroupsListByInstanceOptionalParams
  ): AsyncIterableIterator<ServerTrustGroup> {
    for await (const page of this.listByInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a server trust group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param serverTrustGroupName The name of the server trust group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    locationName: string,
    serverTrustGroupName: string,
    options?: ServerTrustGroupsGetOptionalParams
  ): Promise<ServerTrustGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, locationName, serverTrustGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a server trust group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param serverTrustGroupName The name of the server trust group.
   * @param parameters The server trust group parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    locationName: string,
    serverTrustGroupName: string,
    parameters: ServerTrustGroup,
    options?: ServerTrustGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServerTrustGroupsCreateOrUpdateResponse>,
      ServerTrustGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerTrustGroupsCreateOrUpdateResponse> => {
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
      args: {
        resourceGroupName,
        locationName,
        serverTrustGroupName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ServerTrustGroupsCreateOrUpdateResponse,
      OperationState<ServerTrustGroupsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a server trust group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param serverTrustGroupName The name of the server trust group.
   * @param parameters The server trust group parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    locationName: string,
    serverTrustGroupName: string,
    parameters: ServerTrustGroup,
    options?: ServerTrustGroupsCreateOrUpdateOptionalParams
  ): Promise<ServerTrustGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      locationName,
      serverTrustGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a server trust group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param serverTrustGroupName The name of the server trust group.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    locationName: string,
    serverTrustGroupName: string,
    options?: ServerTrustGroupsDeleteOptionalParams
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
      args: { resourceGroupName, locationName, serverTrustGroupName, options },
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
   * Deletes a server trust group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param serverTrustGroupName The name of the server trust group.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    locationName: string,
    serverTrustGroupName: string,
    options?: ServerTrustGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      locationName,
      serverTrustGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists a server trust group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  private _listByLocation(
    resourceGroupName: string,
    locationName: string,
    options?: ServerTrustGroupsListByLocationOptionalParams
  ): Promise<ServerTrustGroupsListByLocationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, locationName, options },
      listByLocationOperationSpec
    );
  }

  /**
   * Gets a server trust groups by instance name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ServerTrustGroupsListByInstanceOptionalParams
  ): Promise<ServerTrustGroupsListByInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      listByInstanceOperationSpec
    );
  }

  /**
   * ListByLocationNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    resourceGroupName: string,
    locationName: string,
    nextLink: string,
    options?: ServerTrustGroupsListByLocationNextOptionalParams
  ): Promise<ServerTrustGroupsListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, locationName, nextLink, options },
      listByLocationNextOperationSpec
    );
  }

  /**
   * ListByInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByInstance method.
   * @param options The options parameters.
   */
  private _listByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: ServerTrustGroupsListByInstanceNextOptionalParams
  ): Promise<ServerTrustGroupsListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, nextLink, options },
      listByInstanceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/serverTrustGroups/{serverTrustGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerTrustGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.serverTrustGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/serverTrustGroups/{serverTrustGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerTrustGroup
    },
    201: {
      bodyMapper: Mappers.ServerTrustGroup
    },
    202: {
      bodyMapper: Mappers.ServerTrustGroup
    },
    204: {
      bodyMapper: Mappers.ServerTrustGroup
    },
    default: {}
  },
  requestBody: Parameters.parameters51,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.serverTrustGroupName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/serverTrustGroups/{serverTrustGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.serverTrustGroupName
  ],
  serializer
};
const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/serverTrustGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerTrustGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInstanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/serverTrustGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerTrustGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerTrustGroupListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInstanceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerTrustGroupListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};