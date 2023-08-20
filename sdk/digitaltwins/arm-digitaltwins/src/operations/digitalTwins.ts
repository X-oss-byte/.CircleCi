/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DigitalTwins } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDigitalTwinsManagementClient } from "../azureDigitalTwinsManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DigitalTwinsDescription,
  DigitalTwinsListNextOptionalParams,
  DigitalTwinsListOptionalParams,
  DigitalTwinsListResponse,
  DigitalTwinsListByResourceGroupNextOptionalParams,
  DigitalTwinsListByResourceGroupOptionalParams,
  DigitalTwinsListByResourceGroupResponse,
  DigitalTwinsGetOptionalParams,
  DigitalTwinsGetResponse,
  DigitalTwinsCreateOrUpdateOptionalParams,
  DigitalTwinsCreateOrUpdateResponse,
  DigitalTwinsPatchDescription,
  DigitalTwinsUpdateOptionalParams,
  DigitalTwinsUpdateResponse,
  DigitalTwinsDeleteOptionalParams,
  DigitalTwinsDeleteResponse,
  CheckNameRequest,
  DigitalTwinsCheckNameAvailabilityOptionalParams,
  DigitalTwinsCheckNameAvailabilityResponse,
  DigitalTwinsListNextResponse,
  DigitalTwinsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DigitalTwins operations. */
export class DigitalTwinsImpl implements DigitalTwins {
  private readonly client: AzureDigitalTwinsManagementClient;

  /**
   * Initialize a new instance of the class DigitalTwins class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDigitalTwinsManagementClient) {
    this.client = client;
  }

  /**
   * Get all the DigitalTwinsInstances in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DigitalTwinsListOptionalParams
  ): PagedAsyncIterableIterator<DigitalTwinsDescription> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: DigitalTwinsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DigitalTwinsDescription[]> {
    let result: DigitalTwinsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: DigitalTwinsListOptionalParams
  ): AsyncIterableIterator<DigitalTwinsDescription> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all the DigitalTwinsInstances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DigitalTwinsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DigitalTwinsDescription> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DigitalTwinsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DigitalTwinsDescription[]> {
    let result: DigitalTwinsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DigitalTwinsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DigitalTwinsDescription> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get DigitalTwinsInstances resource.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsGetOptionalParams
  ): Promise<DigitalTwinsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is
   * to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified
   * values in a new body to update the DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsCreate The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsCreate: DigitalTwinsDescription,
    options?: DigitalTwinsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DigitalTwinsCreateOrUpdateResponse>,
      DigitalTwinsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DigitalTwinsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, resourceName, digitalTwinsCreate, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      DigitalTwinsCreateOrUpdateResponse,
      OperationState<DigitalTwinsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is
   * to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified
   * values in a new body to update the DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsCreate The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsCreate: DigitalTwinsDescription,
    options?: DigitalTwinsCreateOrUpdateOptionalParams
  ): Promise<DigitalTwinsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceName,
      digitalTwinsCreate,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update metadata of DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsPatchDescription The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsPatchDescription: DigitalTwinsPatchDescription,
    options?: DigitalTwinsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DigitalTwinsUpdateResponse>,
      DigitalTwinsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DigitalTwinsUpdateResponse> => {
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
        resourceName,
        digitalTwinsPatchDescription,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      DigitalTwinsUpdateResponse,
      OperationState<DigitalTwinsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update metadata of DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsPatchDescription The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsPatchDescription: DigitalTwinsPatchDescription,
    options?: DigitalTwinsUpdateOptionalParams
  ): Promise<DigitalTwinsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      resourceName,
      digitalTwinsPatchDescription,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DigitalTwinsDeleteResponse>,
      DigitalTwinsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DigitalTwinsDeleteResponse> => {
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
      args: { resourceGroupName, resourceName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      DigitalTwinsDeleteResponse,
      OperationState<DigitalTwinsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsDeleteOptionalParams
  ): Promise<DigitalTwinsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get all the DigitalTwinsInstances in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DigitalTwinsListOptionalParams
  ): Promise<DigitalTwinsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get all the DigitalTwinsInstances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DigitalTwinsListByResourceGroupOptionalParams
  ): Promise<DigitalTwinsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Check if a DigitalTwinsInstance name is available.
   * @param location Location of DigitalTwinsInstance.
   * @param digitalTwinsInstanceCheckName Set the name parameter in the DigitalTwinsInstanceCheckName
   *                                      structure to the name of the DigitalTwinsInstance to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    digitalTwinsInstanceCheckName: CheckNameRequest,
    options?: DigitalTwinsCheckNameAvailabilityOptionalParams
  ): Promise<DigitalTwinsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, digitalTwinsInstanceCheckName, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DigitalTwinsListNextOptionalParams
  ): Promise<DigitalTwinsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DigitalTwinsListByResourceGroupNextOptionalParams
  ): Promise<DigitalTwinsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    201: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    202: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    204: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.digitalTwinsCreate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    201: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    202: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    204: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.digitalTwinsPatchDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    201: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    202: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    204: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/digitalTwinsInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.digitalTwinsInstanceCheckName,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};