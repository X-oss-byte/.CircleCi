/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkflowRunActions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClient } from "../logicManagementClient";
import {
  WorkflowRunAction,
  WorkflowRunActionsListNextOptionalParams,
  WorkflowRunActionsListOptionalParams,
  WorkflowRunActionsListResponse,
  ExpressionRoot,
  WorkflowRunActionsListExpressionTracesOptionalParams,
  WorkflowRunActionsListExpressionTracesResponse,
  WorkflowRunActionsGetOptionalParams,
  WorkflowRunActionsGetResponse,
  WorkflowRunActionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkflowRunActions operations. */
export class WorkflowRunActionsImpl implements WorkflowRunActions {
  private readonly client: LogicManagementClient;

  /**
   * Initialize a new instance of the class WorkflowRunActions class.
   * @param client Reference to the service client
   */
  constructor(client: LogicManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of workflow run actions.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    options?: WorkflowRunActionsListOptionalParams
  ): PagedAsyncIterableIterator<WorkflowRunAction> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workflowName,
      runName,
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
          workflowName,
          runName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    options?: WorkflowRunActionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<WorkflowRunAction[]> {
    let result: WorkflowRunActionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        workflowName,
        runName,
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
        workflowName,
        runName,
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
    workflowName: string,
    runName: string,
    options?: WorkflowRunActionsListOptionalParams
  ): AsyncIterableIterator<WorkflowRunAction> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workflowName,
      runName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists a workflow run expression trace.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param options The options parameters.
   */
  public listExpressionTraces(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionsListExpressionTracesOptionalParams
  ): PagedAsyncIterableIterator<ExpressionRoot> {
    const iter = this.listExpressionTracesPagingAll(
      resourceGroupName,
      workflowName,
      runName,
      actionName,
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
        return this.listExpressionTracesPagingPage(
          resourceGroupName,
          workflowName,
          runName,
          actionName,
          options,
          settings
        );
      }
    };
  }

  private async *listExpressionTracesPagingPage(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionsListExpressionTracesOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<ExpressionRoot[]> {
    let result: WorkflowRunActionsListExpressionTracesResponse;
    result = await this._listExpressionTraces(
      resourceGroupName,
      workflowName,
      runName,
      actionName,
      options
    );
    yield result.inputs || [];
  }

  private async *listExpressionTracesPagingAll(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionsListExpressionTracesOptionalParams
  ): AsyncIterableIterator<ExpressionRoot> {
    for await (const page of this.listExpressionTracesPagingPage(
      resourceGroupName,
      workflowName,
      runName,
      actionName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of workflow run actions.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    options?: WorkflowRunActionsListOptionalParams
  ): Promise<WorkflowRunActionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, runName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a workflow run action.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionsGetOptionalParams
  ): Promise<WorkflowRunActionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, runName, actionName, options },
      getOperationSpec
    );
  }

  /**
   * Lists a workflow run expression trace.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param options The options parameters.
   */
  private _listExpressionTraces(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionsListExpressionTracesOptionalParams
  ): Promise<WorkflowRunActionsListExpressionTracesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, runName, actionName, options },
      listExpressionTracesOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workflowName: string,
    runName: string,
    nextLink: string,
    options?: WorkflowRunActionsListNextOptionalParams
  ): Promise<WorkflowRunActionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, runName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.runName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunAction
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
    Parameters.workflowName,
    Parameters.runName,
    Parameters.actionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listExpressionTracesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/listExpressionTraces",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressionTraces
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
    Parameters.workflowName,
    Parameters.runName,
    Parameters.actionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.nextLink,
    Parameters.runName
  ],
  headerParameters: [Parameters.accept],
  serializer
};