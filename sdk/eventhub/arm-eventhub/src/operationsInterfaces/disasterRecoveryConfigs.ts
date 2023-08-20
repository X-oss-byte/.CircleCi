/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AuthorizationRule,
  DisasterRecoveryConfigsListAuthorizationRulesOptionalParams,
  ArmDisasterRecovery,
  DisasterRecoveryConfigsListOptionalParams,
  DisasterRecoveryConfigsGetAuthorizationRuleOptionalParams,
  DisasterRecoveryConfigsGetAuthorizationRuleResponse,
  DisasterRecoveryConfigsListKeysOptionalParams,
  DisasterRecoveryConfigsListKeysResponse,
  CheckNameAvailabilityParameter,
  DisasterRecoveryConfigsCheckNameAvailabilityOptionalParams,
  DisasterRecoveryConfigsCheckNameAvailabilityResponse,
  DisasterRecoveryConfigsCreateOrUpdateOptionalParams,
  DisasterRecoveryConfigsCreateOrUpdateResponse,
  DisasterRecoveryConfigsDeleteOptionalParams,
  DisasterRecoveryConfigsGetOptionalParams,
  DisasterRecoveryConfigsGetResponse,
  DisasterRecoveryConfigsBreakPairingOptionalParams,
  DisasterRecoveryConfigsFailOverOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DisasterRecoveryConfigs. */
export interface DisasterRecoveryConfigs {
  /**
   * Gets a list of authorization rules for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams
  ): PagedAsyncIterableIterator<AuthorizationRule>;
  /**
   * Gets all Alias(Disaster Recovery configurations)
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    namespaceName: string,
    options?: DisasterRecoveryConfigsListOptionalParams
  ): PagedAsyncIterableIterator<ArmDisasterRecovery>;
  /**
   * Gets an AuthorizationRule for a Namespace by rule name.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    authorizationRuleName: string,
    options?: DisasterRecoveryConfigsGetAuthorizationRuleOptionalParams
  ): Promise<DisasterRecoveryConfigsGetAuthorizationRuleResponse>;
  /**
   * Gets the primary and secondary connection strings for the Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    authorizationRuleName: string,
    options?: DisasterRecoveryConfigsListKeysOptionalParams
  ): Promise<DisasterRecoveryConfigsListKeysResponse>;
  /**
   * Check the give Namespace name availability.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param parameters Parameters to check availability of the given Alias name
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    namespaceName: string,
    parameters: CheckNameAvailabilityParameter,
    options?: DisasterRecoveryConfigsCheckNameAvailabilityOptionalParams
  ): Promise<DisasterRecoveryConfigsCheckNameAvailabilityResponse>;
  /**
   * Creates or updates a new Alias(Disaster Recovery configuration)
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param parameters Parameters required to create an Alias(Disaster Recovery configuration)
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    parameters: ArmDisasterRecovery,
    options?: DisasterRecoveryConfigsCreateOrUpdateOptionalParams
  ): Promise<DisasterRecoveryConfigsCreateOrUpdateResponse>;
  /**
   * Deletes an Alias(Disaster Recovery configuration)
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsGetOptionalParams
  ): Promise<DisasterRecoveryConfigsGetResponse>;
  /**
   * This operation disables the Disaster Recovery and stops replicating changes from primary to
   * secondary namespaces
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  breakPairing(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsBreakPairingOptionalParams
  ): Promise<void>;
  /**
   * Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  failOver(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsFailOverOptionalParams
  ): Promise<void>;
}