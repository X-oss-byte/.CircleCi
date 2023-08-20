## API Report File for "@azure/arm-azurestackhci"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type ActionType = string;

// @public
export interface ArcConnectivityProperties {
    enabled?: boolean;
}

// @public
export interface ArcIdentityResponse {
    // (undocumented)
    arcApplicationClientId?: string;
    // (undocumented)
    arcApplicationObjectId?: string;
    // (undocumented)
    arcApplicationTenantId?: string;
    // (undocumented)
    arcServicePrincipalObjectId?: string;
}

// @public
export interface ArcSetting extends ProxyResource {
    readonly aggregateState?: ArcSettingAggregateState;
    arcApplicationClientId?: string;
    arcApplicationObjectId?: string;
    arcApplicationTenantId?: string;
    arcInstanceResourceGroup?: string;
    arcServicePrincipalObjectId?: string;
    connectivityProperties?: Record<string, unknown>;
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    readonly perNodeDetails?: PerNodeState[];
    readonly provisioningState?: ProvisioningState;
}

// @public
export type ArcSettingAggregateState = string;

// @public
export interface ArcSettingList {
    readonly nextLink?: string;
    readonly value?: ArcSetting[];
}

// @public
export interface ArcSettings {
    beginCreateIdentity(resourceGroupName: string, clusterName: string, arcSettingName: string, options?: ArcSettingsCreateIdentityOptionalParams): Promise<PollerLike<PollOperationState<ArcSettingsCreateIdentityResponse>, ArcSettingsCreateIdentityResponse>>;
    beginCreateIdentityAndWait(resourceGroupName: string, clusterName: string, arcSettingName: string, options?: ArcSettingsCreateIdentityOptionalParams): Promise<ArcSettingsCreateIdentityResponse>;
    beginDelete(resourceGroupName: string, clusterName: string, arcSettingName: string, options?: ArcSettingsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, clusterName: string, arcSettingName: string, options?: ArcSettingsDeleteOptionalParams): Promise<void>;
    create(resourceGroupName: string, clusterName: string, arcSettingName: string, arcSetting: ArcSetting, options?: ArcSettingsCreateOptionalParams): Promise<ArcSettingsCreateResponse>;
    generatePassword(resourceGroupName: string, clusterName: string, arcSettingName: string, options?: ArcSettingsGeneratePasswordOptionalParams): Promise<ArcSettingsGeneratePasswordResponse>;
    get(resourceGroupName: string, clusterName: string, arcSettingName: string, options?: ArcSettingsGetOptionalParams): Promise<ArcSettingsGetResponse>;
    listByCluster(resourceGroupName: string, clusterName: string, options?: ArcSettingsListByClusterOptionalParams): PagedAsyncIterableIterator<ArcSetting>;
    update(resourceGroupName: string, clusterName: string, arcSettingName: string, arcSetting: ArcSettingsPatch, options?: ArcSettingsUpdateOptionalParams): Promise<ArcSettingsUpdateResponse>;
}

// @public
export interface ArcSettingsCreateIdentityOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ArcSettingsCreateIdentityResponse = ArcIdentityResponse;

// @public
export interface ArcSettingsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ArcSettingsCreateResponse = ArcSetting;

// @public
export interface ArcSettingsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ArcSettingsGeneratePasswordOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ArcSettingsGeneratePasswordResponse = PasswordCredential;

// @public
export interface ArcSettingsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ArcSettingsGetResponse = ArcSetting;

// @public
export interface ArcSettingsListByClusterNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ArcSettingsListByClusterNextResponse = ArcSettingList;

// @public
export interface ArcSettingsListByClusterOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ArcSettingsListByClusterResponse = ArcSettingList;

// @public
export interface ArcSettingsPatch {
    connectivityProperties?: Record<string, unknown>;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface ArcSettingsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ArcSettingsUpdateResponse = ArcSetting;

// @public (undocumented)
export class AzureStackHCIClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: AzureStackHCIClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    arcSettings: ArcSettings;
    // (undocumented)
    clusters: Clusters;
    // (undocumented)
    extensions: Extensions;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface AzureStackHCIClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface Cluster extends TrackedResource {
    aadApplicationObjectId?: string;
    aadClientId?: string;
    aadServicePrincipalObjectId?: string;
    aadTenantId?: string;
    readonly billingModel?: string;
    readonly cloudId?: string;
    cloudManagementEndpoint?: string;
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    desiredProperties?: ClusterDesiredProperties;
    readonly lastBillingTimestamp?: Date;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    readonly lastSyncTimestamp?: Date;
    readonly provisioningState?: ProvisioningState;
    readonly registrationTimestamp?: Date;
    readonly reportedProperties?: ClusterReportedProperties;
    readonly serviceEndpoint?: string;
    readonly status?: Status;
    readonly trialDaysRemaining?: number;
}

// @public
export interface ClusterDesiredProperties {
    diagnosticLevel?: DiagnosticLevel;
    windowsServerSubscription?: WindowsServerSubscription;
}

// @public
export interface ClusterIdentityResponse {
    // (undocumented)
    aadApplicationObjectId?: string;
    // (undocumented)
    aadClientId?: string;
    // (undocumented)
    aadServicePrincipalObjectId?: string;
    // (undocumented)
    aadTenantId?: string;
}

// @public
export interface ClusterList {
    readonly nextLink?: string;
    value?: Cluster[];
}

// @public
export interface ClusterNode {
    readonly coreCount?: number;
    readonly id?: number;
    readonly manufacturer?: string;
    readonly memoryInGiB?: number;
    readonly model?: string;
    readonly name?: string;
    readonly osName?: string;
    readonly osVersion?: string;
    readonly serialNumber?: string;
    readonly windowsServerSubscription?: WindowsServerSubscription;
}

// @public
export interface ClusterPatch {
    aadClientId?: string;
    aadTenantId?: string;
    cloudManagementEndpoint?: string;
    desiredProperties?: ClusterDesiredProperties;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface ClusterReportedProperties {
    readonly clusterId?: string;
    readonly clusterName?: string;
    readonly clusterVersion?: string;
    diagnosticLevel?: DiagnosticLevel;
    readonly imdsAttestation?: ImdsAttestation;
    readonly lastUpdated?: Date;
    readonly nodes?: ClusterNode[];
}

// @public
export interface Clusters {
    beginCreateIdentity(resourceGroupName: string, clusterName: string, options?: ClustersCreateIdentityOptionalParams): Promise<PollerLike<PollOperationState<ClustersCreateIdentityResponse>, ClustersCreateIdentityResponse>>;
    beginCreateIdentityAndWait(resourceGroupName: string, clusterName: string, options?: ClustersCreateIdentityOptionalParams): Promise<ClustersCreateIdentityResponse>;
    beginDelete(resourceGroupName: string, clusterName: string, options?: ClustersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, clusterName: string, options?: ClustersDeleteOptionalParams): Promise<void>;
    beginUploadCertificate(resourceGroupName: string, clusterName: string, uploadCertificateRequest: UploadCertificateRequest, options?: ClustersUploadCertificateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginUploadCertificateAndWait(resourceGroupName: string, clusterName: string, uploadCertificateRequest: UploadCertificateRequest, options?: ClustersUploadCertificateOptionalParams): Promise<void>;
    create(resourceGroupName: string, clusterName: string, cluster: Cluster, options?: ClustersCreateOptionalParams): Promise<ClustersCreateResponse>;
    get(resourceGroupName: string, clusterName: string, options?: ClustersGetOptionalParams): Promise<ClustersGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: ClustersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Cluster>;
    listBySubscription(options?: ClustersListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Cluster>;
    update(resourceGroupName: string, clusterName: string, cluster: ClusterPatch, options?: ClustersUpdateOptionalParams): Promise<ClustersUpdateResponse>;
}

// @public
export interface ClustersCreateIdentityOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ClustersCreateIdentityResponse = ClusterIdentityResponse;

// @public
export interface ClustersCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ClustersCreateResponse = Cluster;

// @public
export interface ClustersDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ClustersGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ClustersGetResponse = Cluster;

// @public
export interface ClustersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ClustersListByResourceGroupNextResponse = ClusterList;

// @public
export interface ClustersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ClustersListByResourceGroupResponse = ClusterList;

// @public
export interface ClustersListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ClustersListBySubscriptionNextResponse = ClusterList;

// @public
export interface ClustersListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ClustersListBySubscriptionResponse = ClusterList;

// @public
export interface ClustersUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ClustersUpdateResponse = Cluster;

// @public
export interface ClustersUploadCertificateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type CreatedByType = string;

// @public
export type DiagnosticLevel = string;

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorDetail {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorDetail[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public
export interface Extension extends ProxyResource {
    readonly aggregateState?: ExtensionAggregateState;
    autoUpgradeMinorVersion?: boolean;
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    forceUpdateTag?: string;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    readonly perNodeExtensionDetails?: PerNodeExtensionState[];
    protectedSettings?: Record<string, unknown>;
    readonly provisioningState?: ProvisioningState;
    publisher?: string;
    settings?: Record<string, unknown>;
    typeHandlerVersion?: string;
    typePropertiesExtensionParametersType?: string;
}

// @public
export type ExtensionAggregateState = string;

// @public
export interface ExtensionList {
    readonly nextLink?: string;
    readonly value?: Extension[];
}

// @public
export interface Extensions {
    beginCreate(resourceGroupName: string, clusterName: string, arcSettingName: string, extensionName: string, extension: Extension, options?: ExtensionsCreateOptionalParams): Promise<PollerLike<PollOperationState<ExtensionsCreateResponse>, ExtensionsCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, clusterName: string, arcSettingName: string, extensionName: string, extension: Extension, options?: ExtensionsCreateOptionalParams): Promise<ExtensionsCreateResponse>;
    beginDelete(resourceGroupName: string, clusterName: string, arcSettingName: string, extensionName: string, options?: ExtensionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, clusterName: string, arcSettingName: string, extensionName: string, options?: ExtensionsDeleteOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, clusterName: string, arcSettingName: string, extensionName: string, extension: Extension, options?: ExtensionsUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExtensionsUpdateResponse>, ExtensionsUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, clusterName: string, arcSettingName: string, extensionName: string, extension: Extension, options?: ExtensionsUpdateOptionalParams): Promise<ExtensionsUpdateResponse>;
    get(resourceGroupName: string, clusterName: string, arcSettingName: string, extensionName: string, options?: ExtensionsGetOptionalParams): Promise<ExtensionsGetResponse>;
    listByArcSetting(resourceGroupName: string, clusterName: string, arcSettingName: string, options?: ExtensionsListByArcSettingOptionalParams): PagedAsyncIterableIterator<Extension>;
}

// @public
export interface ExtensionsCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ExtensionsCreateResponse = Extension;

// @public
export interface ExtensionsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ExtensionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ExtensionsGetResponse = Extension;

// @public
export interface ExtensionsListByArcSettingNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ExtensionsListByArcSettingNextResponse = ExtensionList;

// @public
export interface ExtensionsListByArcSettingOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ExtensionsListByArcSettingResponse = ExtensionList;

// @public
export interface ExtensionsUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ExtensionsUpdateResponse = Extension;

// @public
export function getContinuationToken(page: unknown): string | undefined;

// @public
export type ImdsAttestation = string;

// @public
export enum KnownActionType {
    Internal = "Internal"
}

// @public
export enum KnownArcSettingAggregateState {
    Canceled = "Canceled",
    Connected = "Connected",
    Creating = "Creating",
    Deleted = "Deleted",
    Deleting = "Deleting",
    Disconnected = "Disconnected",
    Error = "Error",
    Failed = "Failed",
    InProgress = "InProgress",
    Moving = "Moving",
    NotSpecified = "NotSpecified",
    PartiallyConnected = "PartiallyConnected",
    PartiallySucceeded = "PartiallySucceeded",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownDiagnosticLevel {
    Basic = "Basic",
    Enhanced = "Enhanced",
    Off = "Off"
}

// @public
export enum KnownExtensionAggregateState {
    Canceled = "Canceled",
    Connected = "Connected",
    Creating = "Creating",
    Deleted = "Deleted",
    Deleting = "Deleting",
    Disconnected = "Disconnected",
    Error = "Error",
    Failed = "Failed",
    InProgress = "InProgress",
    Moving = "Moving",
    NotSpecified = "NotSpecified",
    PartiallyConnected = "PartiallyConnected",
    PartiallySucceeded = "PartiallySucceeded",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownImdsAttestation {
    Disabled = "Disabled",
    Enabled = "Enabled"
}

// @public
export enum KnownNodeArcState {
    Canceled = "Canceled",
    Connected = "Connected",
    Creating = "Creating",
    Deleted = "Deleted",
    Deleting = "Deleting",
    Disconnected = "Disconnected",
    Error = "Error",
    Failed = "Failed",
    Moving = "Moving",
    NotSpecified = "NotSpecified",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownNodeExtensionState {
    Canceled = "Canceled",
    Connected = "Connected",
    Creating = "Creating",
    Deleted = "Deleted",
    Deleting = "Deleting",
    Disconnected = "Disconnected",
    Error = "Error",
    Failed = "Failed",
    Moving = "Moving",
    NotSpecified = "NotSpecified",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownOrigin {
    System = "system",
    User = "user",
    UserSystem = "user,system"
}

// @public
export enum KnownProvisioningState {
    Accepted = "Accepted",
    Canceled = "Canceled",
    Failed = "Failed",
    Provisioning = "Provisioning",
    Succeeded = "Succeeded"
}

// @public
export enum KnownStatus {
    ConnectedRecently = "ConnectedRecently",
    Disconnected = "Disconnected",
    Error = "Error",
    NotConnectedRecently = "NotConnectedRecently",
    NotYetRegistered = "NotYetRegistered"
}

// @public
export enum KnownWindowsServerSubscription {
    Disabled = "Disabled",
    Enabled = "Enabled"
}

// @public
export type NodeArcState = string;

// @public
export type NodeExtensionState = string;

// @public
export interface Operation {
    readonly actionType?: ActionType;
    display?: OperationDisplay;
    readonly isDataAction?: boolean;
    readonly name?: string;
    readonly origin?: Origin;
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): Promise<OperationsListResponse>;
}

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type Origin = string;

// @public (undocumented)
export interface PasswordCredential {
    // (undocumented)
    endDateTime?: Date;
    // (undocumented)
    keyId?: string;
    // (undocumented)
    secretText?: string;
    // (undocumented)
    startDateTime?: Date;
}

// @public
export interface PerNodeExtensionState {
    readonly extension?: string;
    readonly name?: string;
    readonly state?: NodeExtensionState;
}

// @public
export interface PerNodeState {
    readonly arcInstance?: string;
    readonly name?: string;
    readonly state?: NodeArcState;
}

// @public
export type ProvisioningState = string;

// @public
export interface ProxyResource extends Resource {
}

// @public (undocumented)
export interface RawCertificateData {
    // (undocumented)
    certificates?: string[];
}

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export type Status = string;

// @public
export interface TrackedResource extends Resource {
    location: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public (undocumented)
export interface UploadCertificateRequest {
    // (undocumented)
    properties?: RawCertificateData;
}

// @public
export type WindowsServerSubscription = string;

// (No @packageDocumentation comment for this package)

```