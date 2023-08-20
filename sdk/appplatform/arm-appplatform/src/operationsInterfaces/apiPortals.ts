/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ApiPortalResource,
  ApiPortalsListOptionalParams,
  ApiPortalsGetOptionalParams,
  ApiPortalsGetResponse,
  ApiPortalsCreateOrUpdateOptionalParams,
  ApiPortalsCreateOrUpdateResponse,
  ApiPortalsDeleteOptionalParams,
  CustomDomainValidatePayload,
  ApiPortalsValidateDomainOptionalParams,
  ApiPortalsValidateDomainResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiPortals. */
export interface ApiPortals {
  /**
   * Handles requests to list all resources in a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiPortalsListOptionalParams
  ): PagedAsyncIterableIterator<ApiPortalResource>;
  /**
   * Get the API portal and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    options?: ApiPortalsGetOptionalParams
  ): Promise<ApiPortalsGetResponse>;
  /**
   * Create the default API portal or update the existing API portal.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param apiPortalResource The API portal for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    apiPortalResource: ApiPortalResource,
    options?: ApiPortalsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ApiPortalsCreateOrUpdateResponse>,
      ApiPortalsCreateOrUpdateResponse
    >
  >;
  /**
   * Create the default API portal or update the existing API portal.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param apiPortalResource The API portal for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    apiPortalResource: ApiPortalResource,
    options?: ApiPortalsCreateOrUpdateOptionalParams
  ): Promise<ApiPortalsCreateOrUpdateResponse>;
  /**
   * Delete the default API portal.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    options?: ApiPortalsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the default API portal.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    options?: ApiPortalsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Check the domains are valid as well as not in use.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param validatePayload Custom domain payload to be validated
   * @param options The options parameters.
   */
  validateDomain(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    validatePayload: CustomDomainValidatePayload,
    options?: ApiPortalsValidateDomainOptionalParams
  ): Promise<ApiPortalsValidateDomainResponse>;
}