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
  Cluster,
  ClustersListByResourceGroupOptionalParams,
  ClustersListOptionalParams,
  ClusterCreateParametersExtended,
  ClustersCreateOptionalParams,
  ClustersCreateResponse,
  ClusterPatchParameters,
  ClustersUpdateOptionalParams,
  ClustersUpdateResponse,
  ClustersDeleteOptionalParams,
  ClustersGetOptionalParams,
  ClustersGetResponse,
  ClusterResizeParameters,
  RoleName,
  ClustersResizeOptionalParams,
  AutoscaleConfigurationUpdateParameter,
  ClustersUpdateAutoScaleConfigurationOptionalParams,
  ClusterDiskEncryptionParameters,
  ClustersRotateDiskEncryptionKeyOptionalParams,
  ClustersGetGatewaySettingsOptionalParams,
  ClustersGetGatewaySettingsResponse,
  UpdateGatewaySettingsParameters,
  ClustersUpdateGatewaySettingsOptionalParams,
  ClustersGetAzureAsyncOperationStatusOptionalParams,
  ClustersGetAzureAsyncOperationStatusResponse,
  UpdateClusterIdentityCertificateParameters,
  ClustersUpdateIdentityCertificateOptionalParams,
  ExecuteScriptActionParameters,
  ClustersExecuteScriptActionsOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Clusters. */
export interface Clusters {
  /**
   * Lists the HDInsight clusters in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ClustersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Lists all the HDInsight clusters under the subscription.
   * @param options The options parameters.
   */
  list(
    options?: ClustersListOptionalParams
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Creates a new HDInsight cluster with the specified parameters.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster create request.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterCreateParametersExtended,
    options?: ClustersCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersCreateResponse>,
      ClustersCreateResponse
    >
  >;
  /**
   * Creates a new HDInsight cluster with the specified parameters.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster create request.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterCreateParametersExtended,
    options?: ClustersCreateOptionalParams
  ): Promise<ClustersCreateResponse>;
  /**
   * Patch HDInsight cluster with the specified parameters.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster patch request.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterPatchParameters,
    options?: ClustersUpdateOptionalParams
  ): Promise<ClustersUpdateResponse>;
  /**
   * Deletes the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the specified cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams
  ): Promise<ClustersGetResponse>;
  /**
   * Resizes the specified HDInsight cluster to the specified size.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param roleName The constant value for the roleName
   * @param parameters The parameters for the resize operation.
   * @param options The options parameters.
   */
  beginResize(
    resourceGroupName: string,
    clusterName: string,
    roleName: RoleName,
    parameters: ClusterResizeParameters,
    options?: ClustersResizeOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Resizes the specified HDInsight cluster to the specified size.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param roleName The constant value for the roleName
   * @param parameters The parameters for the resize operation.
   * @param options The options parameters.
   */
  beginResizeAndWait(
    resourceGroupName: string,
    clusterName: string,
    roleName: RoleName,
    parameters: ClusterResizeParameters,
    options?: ClustersResizeOptionalParams
  ): Promise<void>;
  /**
   * Updates the Autoscale Configuration for HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param roleName The constant value for the roleName
   * @param parameters The parameters for the update autoscale configuration operation.
   * @param options The options parameters.
   */
  beginUpdateAutoScaleConfiguration(
    resourceGroupName: string,
    clusterName: string,
    roleName: RoleName,
    parameters: AutoscaleConfigurationUpdateParameter,
    options?: ClustersUpdateAutoScaleConfigurationOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Updates the Autoscale Configuration for HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param roleName The constant value for the roleName
   * @param parameters The parameters for the update autoscale configuration operation.
   * @param options The options parameters.
   */
  beginUpdateAutoScaleConfigurationAndWait(
    resourceGroupName: string,
    clusterName: string,
    roleName: RoleName,
    parameters: AutoscaleConfigurationUpdateParameter,
    options?: ClustersUpdateAutoScaleConfigurationOptionalParams
  ): Promise<void>;
  /**
   * Rotate disk encryption key of the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for the disk encryption operation.
   * @param options The options parameters.
   */
  beginRotateDiskEncryptionKey(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterDiskEncryptionParameters,
    options?: ClustersRotateDiskEncryptionKeyOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Rotate disk encryption key of the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for the disk encryption operation.
   * @param options The options parameters.
   */
  beginRotateDiskEncryptionKeyAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterDiskEncryptionParameters,
    options?: ClustersRotateDiskEncryptionKeyOptionalParams
  ): Promise<void>;
  /**
   * Gets the gateway settings for the specified cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  getGatewaySettings(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersGetGatewaySettingsOptionalParams
  ): Promise<ClustersGetGatewaySettingsResponse>;
  /**
   * Configures the gateway settings on the specified cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster configurations.
   * @param options The options parameters.
   */
  beginUpdateGatewaySettings(
    resourceGroupName: string,
    clusterName: string,
    parameters: UpdateGatewaySettingsParameters,
    options?: ClustersUpdateGatewaySettingsOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Configures the gateway settings on the specified cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster configurations.
   * @param options The options parameters.
   */
  beginUpdateGatewaySettingsAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: UpdateGatewaySettingsParameters,
    options?: ClustersUpdateGatewaySettingsOptionalParams
  ): Promise<void>;
  /**
   * The the async operation status.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param operationId The long running operation id.
   * @param options The options parameters.
   */
  getAzureAsyncOperationStatus(
    resourceGroupName: string,
    clusterName: string,
    operationId: string,
    options?: ClustersGetAzureAsyncOperationStatusOptionalParams
  ): Promise<ClustersGetAzureAsyncOperationStatusResponse>;
  /**
   * Updates the cluster identity certificate.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster configurations.
   * @param options The options parameters.
   */
  beginUpdateIdentityCertificate(
    resourceGroupName: string,
    clusterName: string,
    parameters: UpdateClusterIdentityCertificateParameters,
    options?: ClustersUpdateIdentityCertificateOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Updates the cluster identity certificate.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster configurations.
   * @param options The options parameters.
   */
  beginUpdateIdentityCertificateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: UpdateClusterIdentityCertificateParameters,
    options?: ClustersUpdateIdentityCertificateOptionalParams
  ): Promise<void>;
  /**
   * Executes script actions on the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for executing script actions.
   * @param options The options parameters.
   */
  beginExecuteScriptActions(
    resourceGroupName: string,
    clusterName: string,
    parameters: ExecuteScriptActionParameters,
    options?: ClustersExecuteScriptActionsOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Executes script actions on the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for executing script actions.
   * @param options The options parameters.
   */
  beginExecuteScriptActionsAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: ExecuteScriptActionParameters,
    options?: ClustersExecuteScriptActionsOptionalParams
  ): Promise<void>;
}