/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SqlPoolTransparentDataEncryptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  TransparentDataEncryption,
  SqlPoolTransparentDataEncryptionsListNextOptionalParams,
  SqlPoolTransparentDataEncryptionsListOptionalParams,
  SqlPoolTransparentDataEncryptionsListResponse,
  TransparentDataEncryptionName,
  SqlPoolTransparentDataEncryptionsGetOptionalParams,
  SqlPoolTransparentDataEncryptionsGetResponse,
  SqlPoolTransparentDataEncryptionsCreateOrUpdateOptionalParams,
  SqlPoolTransparentDataEncryptionsCreateOrUpdateResponse,
  SqlPoolTransparentDataEncryptionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlPoolTransparentDataEncryptions operations. */
export class SqlPoolTransparentDataEncryptionsImpl
  implements SqlPoolTransparentDataEncryptions {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SqlPoolTransparentDataEncryptions class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get list of SQL pool's transparent data encryption configurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolTransparentDataEncryptionsListOptionalParams
  ): PagedAsyncIterableIterator<TransparentDataEncryption> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
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
        return this.listPagingPage(
          resourceGroupName,
          workspaceName,
          sqlPoolName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolTransparentDataEncryptionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<TransparentDataEncryption[]> {
    let result: SqlPoolTransparentDataEncryptionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
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
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolTransparentDataEncryptionsListOptionalParams
  ): AsyncIterableIterator<TransparentDataEncryption> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a SQL pool's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    transparentDataEncryptionName: TransparentDataEncryptionName,
    options?: SqlPoolTransparentDataEncryptionsGetOptionalParams
  ): Promise<SqlPoolTransparentDataEncryptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        transparentDataEncryptionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a Sql pool's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    transparentDataEncryptionName: TransparentDataEncryptionName,
    parameters: TransparentDataEncryption,
    options?: SqlPoolTransparentDataEncryptionsCreateOrUpdateOptionalParams
  ): Promise<SqlPoolTransparentDataEncryptionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        transparentDataEncryptionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Get list of SQL pool's transparent data encryption configurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolTransparentDataEncryptionsListOptionalParams
  ): Promise<SqlPoolTransparentDataEncryptionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    nextLink: string,
    options?: SqlPoolTransparentDataEncryptionsListNextOptionalParams
  ): Promise<SqlPoolTransparentDataEncryptionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/transparentDataEncryption/{transparentDataEncryptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.transparentDataEncryptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/transparentDataEncryption/{transparentDataEncryptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    201: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.transparentDataEncryptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/transparentDataEncryption",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryptionListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryptionListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};