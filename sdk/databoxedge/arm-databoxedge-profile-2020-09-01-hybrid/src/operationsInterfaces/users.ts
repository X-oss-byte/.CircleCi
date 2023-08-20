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
  User,
  UsersListByDataBoxEdgeDeviceOptionalParams,
  UsersGetOptionalParams,
  UsersGetResponse,
  UsersCreateOrUpdateOptionalParams,
  UsersCreateOrUpdateResponse,
  UsersDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Users. */
export interface Users {
  /**
   * Gets all the users registered on a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: UsersListByDataBoxEdgeDeviceOptionalParams
  ): PagedAsyncIterableIterator<User>;
  /**
   * Gets the properties of the specified user.
   * @param deviceName The device name.
   * @param name The user name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: UsersGetOptionalParams
  ): Promise<UsersGetResponse>;
  /**
   * Creates a new user or updates an existing user's information on a Data Box Edge/Data Box Gateway
   * device.
   * @param deviceName The device name.
   * @param name The user name.
   * @param resourceGroupName The resource group name.
   * @param user The user details.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    user: User,
    options?: UsersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<UsersCreateOrUpdateResponse>,
      UsersCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a new user or updates an existing user's information on a Data Box Edge/Data Box Gateway
   * device.
   * @param deviceName The device name.
   * @param name The user name.
   * @param resourceGroupName The resource group name.
   * @param user The user details.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    user: User,
    options?: UsersCreateOrUpdateOptionalParams
  ): Promise<UsersCreateOrUpdateResponse>;
  /**
   * Deletes the user on a databox edge/gateway device.
   * @param deviceName The device name.
   * @param name The user name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: UsersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the user on a databox edge/gateway device.
   * @param deviceName The device name.
   * @param name The user name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: UsersDeleteOptionalParams
  ): Promise<void>;
}