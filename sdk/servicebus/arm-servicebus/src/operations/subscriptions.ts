/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Subscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClient } from "../serviceBusManagementClient";
import {
  SBSubscription,
  SubscriptionsListByTopicNextOptionalParams,
  SubscriptionsListByTopicOptionalParams,
  SubscriptionsListByTopicResponse,
  SubscriptionsCreateOrUpdateOptionalParams,
  SubscriptionsCreateOrUpdateResponse,
  SubscriptionsDeleteOptionalParams,
  SubscriptionsGetOptionalParams,
  SubscriptionsGetResponse,
  SubscriptionsListByTopicNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Subscriptions operations. */
export class SubscriptionsImpl implements Subscriptions {
  private readonly client: ServiceBusManagementClient;

  /**
   * Initialize a new instance of the class Subscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceBusManagementClient) {
    this.client = client;
  }

  /**
   * List all the subscriptions under a specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param options The options parameters.
   */
  public listByTopic(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: SubscriptionsListByTopicOptionalParams
  ): PagedAsyncIterableIterator<SBSubscription> {
    const iter = this.listByTopicPagingAll(
      resourceGroupName,
      namespaceName,
      topicName,
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
        return this.listByTopicPagingPage(
          resourceGroupName,
          namespaceName,
          topicName,
          options,
          settings
        );
      }
    };
  }

  private async *listByTopicPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: SubscriptionsListByTopicOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SBSubscription[]> {
    let result: SubscriptionsListByTopicResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByTopic(
        resourceGroupName,
        namespaceName,
        topicName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByTopicNext(
        resourceGroupName,
        namespaceName,
        topicName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByTopicPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: SubscriptionsListByTopicOptionalParams
  ): AsyncIterableIterator<SBSubscription> {
    for await (const page of this.listByTopicPagingPage(
      resourceGroupName,
      namespaceName,
      topicName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the subscriptions under a specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param options The options parameters.
   */
  private _listByTopic(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: SubscriptionsListByTopicOptionalParams
  ): Promise<SubscriptionsListByTopicResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, topicName, options },
      listByTopicOperationSpec
    );
  }

  /**
   * Creates a topic subscription.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param parameters Parameters supplied to create a subscription resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    parameters: SBSubscription,
    options?: SubscriptionsCreateOrUpdateOptionalParams
  ): Promise<SubscriptionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a subscription from the specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    options?: SubscriptionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Returns a subscription description for the specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    options?: SubscriptionsGetOptionalParams
  ): Promise<SubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListByTopicNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param nextLink The nextLink from the previous successful call to the ListByTopic method.
   * @param options The options parameters.
   */
  private _listByTopicNext(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    nextLink: string,
    options?: SubscriptionsListByTopicNextOptionalParams
  ): Promise<SubscriptionsListByTopicNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, topicName, nextLink, options },
      listByTopicNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByTopicOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBSubscriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SBSubscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBSubscription
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
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTopicNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBSubscriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.nextLink,
    Parameters.topicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};