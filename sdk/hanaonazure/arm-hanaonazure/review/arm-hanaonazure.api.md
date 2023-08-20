## API Report File for "@azure/arm-hanaonazure"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export interface Display {
    readonly description?: string;
    readonly operation?: string;
    readonly origin?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorResponseError;
}

// @public
export interface ErrorResponseError {
    readonly code?: string;
    readonly message?: string;
}

// @public
export function getContinuationToken(page: unknown): string | undefined;

// @public (undocumented)
export class HanaManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: HanaManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    providerInstances: ProviderInstances;
    // (undocumented)
    sapMonitors: SapMonitors;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface HanaManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export type HanaProvisioningStatesEnum = string;

// @public
export enum KnownHanaProvisioningStatesEnum {
    Accepted = "Accepted",
    Creating = "Creating",
    Deleting = "Deleting",
    Failed = "Failed",
    Migrating = "Migrating",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export interface Operation {
    display?: Display;
    readonly name?: string;
}

// @public
export interface OperationList {
    value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationList;

// @public
export interface ProviderInstance extends ProxyResource {
    metadata?: string;
    properties?: string;
    readonly provisioningState?: HanaProvisioningStatesEnum;
    typePropertiesType?: string;
}

// @public
export interface ProviderInstanceListResult {
    nextLink?: string;
    value?: ProviderInstance[];
}

// @public
export interface ProviderInstances {
    beginCreate(resourceGroupName: string, sapMonitorName: string, providerInstanceName: string, providerInstanceParameter: ProviderInstance, options?: ProviderInstancesCreateOptionalParams): Promise<PollerLike<PollOperationState<ProviderInstancesCreateResponse>, ProviderInstancesCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, sapMonitorName: string, providerInstanceName: string, providerInstanceParameter: ProviderInstance, options?: ProviderInstancesCreateOptionalParams): Promise<ProviderInstancesCreateResponse>;
    beginDelete(resourceGroupName: string, sapMonitorName: string, providerInstanceName: string, options?: ProviderInstancesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, sapMonitorName: string, providerInstanceName: string, options?: ProviderInstancesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, sapMonitorName: string, providerInstanceName: string, options?: ProviderInstancesGetOptionalParams): Promise<ProviderInstancesGetResponse>;
    list(resourceGroupName: string, sapMonitorName: string, options?: ProviderInstancesListOptionalParams): PagedAsyncIterableIterator<ProviderInstance>;
}

// @public
export interface ProviderInstancesCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ProviderInstancesCreateResponse = ProviderInstance;

// @public
export interface ProviderInstancesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ProviderInstancesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ProviderInstancesGetResponse = ProviderInstance;

// @public
export interface ProviderInstancesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ProviderInstancesListNextResponse = ProviderInstanceListResult;

// @public
export interface ProviderInstancesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ProviderInstancesListResponse = ProviderInstanceListResult;

// @public
export interface ProxyResource extends Resource {
}

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface SapMonitor extends TrackedResource {
    enableCustomerAnalytics?: boolean;
    logAnalyticsWorkspaceArmId?: string;
    logAnalyticsWorkspaceId?: string;
    logAnalyticsWorkspaceSharedKey?: string;
    readonly managedResourceGroupName?: string;
    monitorSubnet?: string;
    readonly provisioningState?: HanaProvisioningStatesEnum;
    readonly sapMonitorCollectorVersion?: string;
}

// @public
export interface SapMonitorListResult {
    nextLink?: string;
    value?: SapMonitor[];
}

// @public
export interface SapMonitors {
    beginCreate(resourceGroupName: string, sapMonitorName: string, sapMonitorParameter: SapMonitor, options?: SapMonitorsCreateOptionalParams): Promise<PollerLike<PollOperationState<SapMonitorsCreateResponse>, SapMonitorsCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, sapMonitorName: string, sapMonitorParameter: SapMonitor, options?: SapMonitorsCreateOptionalParams): Promise<SapMonitorsCreateResponse>;
    beginDelete(resourceGroupName: string, sapMonitorName: string, options?: SapMonitorsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, sapMonitorName: string, options?: SapMonitorsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, sapMonitorName: string, options?: SapMonitorsGetOptionalParams): Promise<SapMonitorsGetResponse>;
    list(options?: SapMonitorsListOptionalParams): PagedAsyncIterableIterator<SapMonitor>;
    update(resourceGroupName: string, sapMonitorName: string, tagsParameter: Tags, options?: SapMonitorsUpdateOptionalParams): Promise<SapMonitorsUpdateResponse>;
}

// @public
export interface SapMonitorsCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type SapMonitorsCreateResponse = SapMonitor;

// @public
export interface SapMonitorsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface SapMonitorsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SapMonitorsGetResponse = SapMonitor;

// @public
export interface SapMonitorsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SapMonitorsListNextResponse = SapMonitorListResult;

// @public
export interface SapMonitorsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SapMonitorsListResponse = SapMonitorListResult;

// @public
export interface SapMonitorsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SapMonitorsUpdateResponse = SapMonitor;

// @public
export interface Tags {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface TrackedResource extends Resource {
    location: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// (No @packageDocumentation comment for this package)

```