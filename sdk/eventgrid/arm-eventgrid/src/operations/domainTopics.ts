/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DomainTopics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DomainTopic,
  DomainTopicsListByDomainNextOptionalParams,
  DomainTopicsListByDomainOptionalParams,
  DomainTopicsListByDomainResponse,
  DomainTopicsGetOptionalParams,
  DomainTopicsGetResponse,
  DomainTopicsCreateOrUpdateOptionalParams,
  DomainTopicsCreateOrUpdateResponse,
  DomainTopicsDeleteOptionalParams,
  DomainTopicsListByDomainNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DomainTopics operations. */
export class DomainTopicsImpl implements DomainTopics {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class DomainTopics class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List all the topics in a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Domain name.
   * @param options The options parameters.
   */
  public listByDomain(
    resourceGroupName: string,
    domainName: string,
    options?: DomainTopicsListByDomainOptionalParams
  ): PagedAsyncIterableIterator<DomainTopic> {
    const iter = this.listByDomainPagingAll(
      resourceGroupName,
      domainName,
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
        return this.listByDomainPagingPage(
          resourceGroupName,
          domainName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDomainPagingPage(
    resourceGroupName: string,
    domainName: string,
    options?: DomainTopicsListByDomainOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DomainTopic[]> {
    let result: DomainTopicsListByDomainResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDomain(resourceGroupName, domainName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDomainNext(
        resourceGroupName,
        domainName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDomainPagingAll(
    resourceGroupName: string,
    domainName: string,
    options?: DomainTopicsListByDomainOptionalParams
  ): AsyncIterableIterator<DomainTopic> {
    for await (const page of this.listByDomainPagingPage(
      resourceGroupName,
      domainName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get properties of a domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainTopicName Name of the topic.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    domainTopicName: string,
    options?: DomainTopicsGetOptionalParams
  ): Promise<DomainTopicsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, domainTopicName, options },
      getOperationSpec
    );
  }

  /**
   * Asynchronously creates or updates a new domain topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainTopicName Name of the domain topic.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    domainName: string,
    domainTopicName: string,
    options?: DomainTopicsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DomainTopicsCreateOrUpdateResponse>,
      DomainTopicsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DomainTopicsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, domainName, domainTopicName, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      DomainTopicsCreateOrUpdateResponse,
      OperationState<DomainTopicsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously creates or updates a new domain topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainTopicName Name of the domain topic.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    domainTopicName: string,
    options?: DomainTopicsCreateOrUpdateOptionalParams
  ): Promise<DomainTopicsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      domainName,
      domainTopicName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete existing domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainTopicName Name of the domain topic.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    domainName: string,
    domainTopicName: string,
    options?: DomainTopicsDeleteOptionalParams
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
      args: { resourceGroupName, domainName, domainTopicName, options },
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
   * Delete existing domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainTopicName Name of the domain topic.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    domainName: string,
    domainTopicName: string,
    options?: DomainTopicsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      domainName,
      domainTopicName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the topics in a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Domain name.
   * @param options The options parameters.
   */
  private _listByDomain(
    resourceGroupName: string,
    domainName: string,
    options?: DomainTopicsListByDomainOptionalParams
  ): Promise<DomainTopicsListByDomainResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options },
      listByDomainOperationSpec
    );
  }

  /**
   * ListByDomainNext
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Domain name.
   * @param nextLink The nextLink from the previous successful call to the ListByDomain method.
   * @param options The options parameters.
   */
  private _listByDomainNext(
    resourceGroupName: string,
    domainName: string,
    nextLink: string,
    options?: DomainTopicsListByDomainNextOptionalParams
  ): Promise<DomainTopicsListByDomainNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, nextLink, options },
      listByDomainNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainTopic
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.domainTopicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DomainTopic
    },
    201: {
      bodyMapper: Mappers.DomainTopic
    },
    202: {
      bodyMapper: Mappers.DomainTopic
    },
    204: {
      bodyMapper: Mappers.DomainTopic
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.domainTopicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.domainTopicName
  ],
  serializer
};
const listByDomainOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainTopicsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDomainNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainTopicsListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};