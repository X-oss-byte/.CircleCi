/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { FederatedIdentityCredentials } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ManagedServiceIdentityClient } from "../managedServiceIdentityClient";
import {
  FederatedIdentityCredential,
  FederatedIdentityCredentialsListNextOptionalParams,
  FederatedIdentityCredentialsListOptionalParams,
  FederatedIdentityCredentialsListResponse,
  FederatedIdentityCredentialsCreateOrUpdateOptionalParams,
  FederatedIdentityCredentialsCreateOrUpdateResponse,
  FederatedIdentityCredentialsGetOptionalParams,
  FederatedIdentityCredentialsGetResponse,
  FederatedIdentityCredentialsDeleteOptionalParams,
  FederatedIdentityCredentialsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FederatedIdentityCredentials operations. */
export class FederatedIdentityCredentialsImpl
  implements FederatedIdentityCredentials {
  private readonly client: ManagedServiceIdentityClient;

  /**
   * Initialize a new instance of the class FederatedIdentityCredentials class.
   * @param client Reference to the service client
   */
  constructor(client: ManagedServiceIdentityClient) {
    this.client = client;
  }

  /**
   * Lists all the federated identity credentials under the specified user assigned identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: FederatedIdentityCredentialsListOptionalParams
  ): PagedAsyncIterableIterator<FederatedIdentityCredential> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
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
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: FederatedIdentityCredentialsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<FederatedIdentityCredential[]> {
    let result: FederatedIdentityCredentialsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, resourceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: FederatedIdentityCredentialsListOptionalParams
  ): AsyncIterableIterator<FederatedIdentityCredential> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the federated identity credentials under the specified user assigned identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: FederatedIdentityCredentialsListOptionalParams
  ): Promise<FederatedIdentityCredentialsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Create or update a federated identity credential under the specified user assigned identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param federatedIdentityCredentialResourceName The name of the federated identity credential
   *                                                resource.
   * @param parameters Parameters to create or update the federated identity credential.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    federatedIdentityCredentialResourceName: string,
    parameters: FederatedIdentityCredential,
    options?: FederatedIdentityCredentialsCreateOrUpdateOptionalParams
  ): Promise<FederatedIdentityCredentialsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        federatedIdentityCredentialResourceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets the federated identity credential.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param federatedIdentityCredentialResourceName The name of the federated identity credential
   *                                                resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    federatedIdentityCredentialResourceName: string,
    options?: FederatedIdentityCredentialsGetOptionalParams
  ): Promise<FederatedIdentityCredentialsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        federatedIdentityCredentialResourceName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Deletes the federated identity credential.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param federatedIdentityCredentialResourceName The name of the federated identity credential
   *                                                resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    federatedIdentityCredentialResourceName: string,
    options?: FederatedIdentityCredentialsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        federatedIdentityCredentialResourceName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: FederatedIdentityCredentialsListNextOptionalParams
  ): Promise<FederatedIdentityCredentialsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}/federatedIdentityCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FederatedIdentityCredentialsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skiptoken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}/federatedIdentityCredentials/{federatedIdentityCredentialResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FederatedIdentityCredential
    },
    201: {
      bodyMapper: Mappers.FederatedIdentityCredential
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.resourceGroupName1,
    Parameters.federatedIdentityCredentialResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}/federatedIdentityCredentials/{federatedIdentityCredentialResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FederatedIdentityCredential
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.resourceGroupName1,
    Parameters.federatedIdentityCredentialResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}/federatedIdentityCredentials/{federatedIdentityCredentialResourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.resourceGroupName1,
    Parameters.federatedIdentityCredentialResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FederatedIdentityCredentialsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};