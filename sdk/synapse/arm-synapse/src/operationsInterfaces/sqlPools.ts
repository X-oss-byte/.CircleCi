/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SqlPool,
  SqlPoolsListByWorkspaceOptionalParams,
  SqlPoolsGetOptionalParams,
  SqlPoolsGetResponse,
  SqlPoolPatchInfo,
  SqlPoolsUpdateOptionalParams,
  SqlPoolsUpdateResponse,
  SqlPoolsCreateOptionalParams,
  SqlPoolsCreateResponse,
  SqlPoolsDeleteOptionalParams,
  SqlPoolsDeleteResponse,
  SqlPoolsPauseOptionalParams,
  SqlPoolsPauseResponse,
  SqlPoolsResumeOptionalParams,
  SqlPoolsResumeResponse,
  ResourceMoveDefinition,
  SqlPoolsRenameOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SqlPools. */
export interface SqlPools {
  /**
   * List all SQL pools
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: SqlPoolsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<SqlPool>;
  /**
   * Get SQL pool properties
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsGetOptionalParams
  ): Promise<SqlPoolsGetResponse>;
  /**
   * Apply a partial update to a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The updated SQL pool properties
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    sqlPoolInfo: SqlPoolPatchInfo,
    options?: SqlPoolsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlPoolsUpdateResponse>,
      SqlPoolsUpdateResponse
    >
  >;
  /**
   * Apply a partial update to a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The updated SQL pool properties
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    sqlPoolInfo: SqlPoolPatchInfo,
    options?: SqlPoolsUpdateOptionalParams
  ): Promise<SqlPoolsUpdateResponse>;
  /**
   * Create a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The SQL pool to create
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    sqlPoolInfo: SqlPool,
    options?: SqlPoolsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlPoolsCreateResponse>,
      SqlPoolsCreateResponse
    >
  >;
  /**
   * Create a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The SQL pool to create
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    sqlPoolInfo: SqlPool,
    options?: SqlPoolsCreateOptionalParams
  ): Promise<SqlPoolsCreateResponse>;
  /**
   * Delete a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlPoolsDeleteResponse>,
      SqlPoolsDeleteResponse
    >
  >;
  /**
   * Delete a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsDeleteOptionalParams
  ): Promise<SqlPoolsDeleteResponse>;
  /**
   * Pause a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  beginPause(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsPauseOptionalParams
  ): Promise<
    PollerLike<PollOperationState<SqlPoolsPauseResponse>, SqlPoolsPauseResponse>
  >;
  /**
   * Pause a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  beginPauseAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsPauseOptionalParams
  ): Promise<SqlPoolsPauseResponse>;
  /**
   * Resume a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  beginResume(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsResumeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlPoolsResumeResponse>,
      SqlPoolsResumeResponse
    >
  >;
  /**
   * Resume a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  beginResumeAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsResumeOptionalParams
  ): Promise<SqlPoolsResumeResponse>;
  /**
   * Rename a SQL pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param parameters The resource move definition for renaming this Sql pool.
   * @param options The options parameters.
   */
  rename(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    parameters: ResourceMoveDefinition,
    options?: SqlPoolsRenameOptionalParams
  ): Promise<void>;
}