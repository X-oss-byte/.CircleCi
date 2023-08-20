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
  InternetGateway,
  InternetGatewaysListByResourceGroupOptionalParams,
  InternetGatewaysListBySubscriptionOptionalParams,
  InternetGatewaysCreateOptionalParams,
  InternetGatewaysCreateResponse,
  InternetGatewaysGetOptionalParams,
  InternetGatewaysGetResponse,
  InternetGatewayPatch,
  InternetGatewaysUpdateOptionalParams,
  InternetGatewaysUpdateResponse,
  InternetGatewaysDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a InternetGateways. */
export interface InternetGateways {
  /**
   * Displays Internet Gateways list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: InternetGatewaysListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<InternetGateway>;
  /**
   * Displays Internet Gateways list by subscription GET method.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: InternetGatewaysListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<InternetGateway>;
  /**
   * Creates a Network Fabric Service Internet Gateway resource instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayName Name of the Internet Gateway.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    internetGatewayName: string,
    body: InternetGateway,
    options?: InternetGatewaysCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InternetGatewaysCreateResponse>,
      InternetGatewaysCreateResponse
    >
  >;
  /**
   * Creates a Network Fabric Service Internet Gateway resource instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayName Name of the Internet Gateway.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    internetGatewayName: string,
    body: InternetGateway,
    options?: InternetGatewaysCreateOptionalParams
  ): Promise<InternetGatewaysCreateResponse>;
  /**
   * Implements Gateway GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayName Name of the Internet Gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    internetGatewayName: string,
    options?: InternetGatewaysGetOptionalParams
  ): Promise<InternetGatewaysGetResponse>;
  /**
   * Execute patch on Network Fabric Service Internet Gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayName Name of the Internet Gateway.
   * @param body API to update certain properties of the L2 Isolation Domain resource..
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    internetGatewayName: string,
    body: InternetGatewayPatch,
    options?: InternetGatewaysUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InternetGatewaysUpdateResponse>,
      InternetGatewaysUpdateResponse
    >
  >;
  /**
   * Execute patch on Network Fabric Service Internet Gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayName Name of the Internet Gateway.
   * @param body API to update certain properties of the L2 Isolation Domain resource..
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    internetGatewayName: string,
    body: InternetGatewayPatch,
    options?: InternetGatewaysUpdateOptionalParams
  ): Promise<InternetGatewaysUpdateResponse>;
  /**
   * Execute a delete on Network Fabric Service Internet Gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayName Name of the Internet Gateway.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    internetGatewayName: string,
    options?: InternetGatewaysDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Execute a delete on Network Fabric Service Internet Gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayName Name of the Internet Gateway.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    internetGatewayName: string,
    options?: InternetGatewaysDeleteOptionalParams
  ): Promise<void>;
}