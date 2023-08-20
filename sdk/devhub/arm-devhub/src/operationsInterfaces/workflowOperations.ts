/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Workflow,
  WorkflowListOptionalParams,
  WorkflowListByResourceGroupOptionalParams,
  WorkflowGetOptionalParams,
  WorkflowGetResponse,
  WorkflowCreateOrUpdateOptionalParams,
  WorkflowCreateOrUpdateResponse,
  WorkflowDeleteOptionalParams,
  WorkflowDeleteResponse,
  TagsObject,
  WorkflowUpdateTagsOptionalParams,
  WorkflowUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkflowOperations. */
export interface WorkflowOperations {
  /**
   * Gets a list of workflows associated with the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: WorkflowListOptionalParams
  ): PagedAsyncIterableIterator<Workflow>;
  /**
   * Gets a list of workflows within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WorkflowListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Workflow>;
  /**
   * Gets a workflow.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workflowName The name of the workflow resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workflowName: string,
    options?: WorkflowGetOptionalParams
  ): Promise<WorkflowGetResponse>;
  /**
   * Creates or updates a workflow
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workflowName The name of the workflow resource.
   * @param parameters Resource representation of a workflow
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workflowName: string,
    parameters: Workflow,
    options?: WorkflowCreateOrUpdateOptionalParams
  ): Promise<WorkflowCreateOrUpdateResponse>;
  /**
   * Deletes a workflow
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workflowName The name of the workflow resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workflowName: string,
    options?: WorkflowDeleteOptionalParams
  ): Promise<WorkflowDeleteResponse>;
  /**
   * Updates tags on a workflow.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workflowName The name of the workflow resource.
   * @param parameters Parameters supplied to the Update Workflow Tags operation.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    workflowName: string,
    parameters: TagsObject,
    options?: WorkflowUpdateTagsOptionalParams
  ): Promise<WorkflowUpdateTagsResponse>;
}