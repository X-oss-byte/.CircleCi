/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Paged response contains list of requested objects and a URL link to get the next set of results. */
export interface ExtensionListResponse {
  /** List of requested objects. */
  value?: Extension[];
  /**
   * Continuation link (absolute URI) to the next page of results in the list.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Paged response contains list of requested objects and a URL link to get the next set of results. */
export interface FarmBeatsExtensionListResponse {
  /** List of requested objects. */
  value?: FarmBeatsExtension[];
  /**
   * Continuation link (absolute URI) to the next page of results in the list.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Model to capture detailed information for farmBeatsExtensions. */
export interface DetailedInformation {
  /** ApiName available for the farmBeatsExtension. */
  apiName?: string;
  /** List of customParameters. */
  customParameters?: string[];
  /** List of platformParameters. */
  platformParameters?: string[];
  /** Unit systems info for the data provider. */
  unitsSupported?: UnitSystemsInfo;
  /** List of apiInputParameters. */
  apiInputParameters?: string[];
}

/** Unit systems info for the data provider. */
export interface UnitSystemsInfo {
  /** UnitSystem key sent as part of ProviderInput. */
  key: string;
  /** List of unit systems supported by this data provider. */
  values: string[];
}

/** Identity for the resource. */
export interface Identity {
  /**
   * The principal ID of resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The identity type. */
  type?: "SystemAssigned";
}

/** Sensor integration request model. */
export interface SensorIntegration {
  /** Sensor integration enable state. Allowed values are True, None */
  enabled?: string;
  /**
   * Sensor integration instance provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
  provisioningInfo?: ErrorResponse;
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {
  /**
   * The ARM identifier for Private Endpoint
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** FarmBeats update request. */
export interface FarmBeatsUpdateRequestModel {
  /** Geo-location where the resource lives. */
  location?: string;
  /** Identity for the resource. */
  identity?: Identity;
  /** FarmBeats ARM Resource properties. */
  properties?: FarmBeatsUpdateProperties;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
}

/** FarmBeats ARM Resource properties. */
export interface FarmBeatsUpdateProperties {
  /** Sensor integration request model. */
  sensorIntegration?: SensorIntegration;
  /** Property to allow or block public traffic for an Azure FarmBeats resource. */
  publicNetworkAccess?: PublicNetworkAccess;
}

/** Paged response contains list of requested objects and a URL link to get the next set of results. */
export interface FarmBeatsListResponse {
  /** List of requested objects. */
  value?: FarmBeats[];
  /**
   * Continuation link (absolute URI) to the next page of results in the list.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/**
 * Arm async operation class.
 * Ref: https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/async-operations.
 */
export interface ArmAsyncOperation {
  /** Status of the async operation. */
  status?: string;
}

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

/** The check availability result. */
export interface CheckNameAvailabilityResponse {
  /** Indicates if the resource name is available. */
  nameAvailable?: boolean;
  /** The reason why the given name is not available. */
  reason?: CheckNameAvailabilityReason;
  /** Detailed reason why the given name is available. */
  message?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** List of private endpoint connection associated with the specified storage account */
export interface PrivateEndpointConnectionListResult {
  /** Array of private endpoint connections */
  value?: PrivateEndpointConnection[];
}

/** A list of private link resources */
export interface PrivateLinkResourceListResult {
  /** Array of private link resources */
  value?: PrivateLinkResource[];
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** The Private Endpoint Connection resource. */
export interface PrivateEndpointConnection extends Resource {
  /** The resource of private end point. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state of the private endpoint connection resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** A private link resource */
export interface PrivateLinkResource extends Resource {
  /**
   * The private link resource group id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * The private link resource required member names.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /** The private link resource Private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** Extension resource. */
export interface Extension extends ProxyResource {
  /**
   * The ETag value to implement optimistic concurrency.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly eTag?: string;
  /**
   * Extension Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extensionId?: string;
  /**
   * Extension category. e.g. weather/sensor/satellite.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extensionCategory?: string;
  /**
   * Installed extension version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly installedExtensionVersion?: string;
  /**
   * Extension auth link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extensionAuthLink?: string;
  /**
   * Extension api docs link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extensionApiDocsLink?: string;
}

/** FarmBeats extension resource. */
export interface FarmBeatsExtension extends ProxyResource {
  /**
   * Target ResourceType of the farmBeatsExtension.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetResourceType?: string;
  /**
   * FarmBeatsExtension ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly farmBeatsExtensionId?: string;
  /**
   * FarmBeatsExtension name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly farmBeatsExtensionName?: string;
  /**
   * FarmBeatsExtension version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly farmBeatsExtensionVersion?: string;
  /**
   * Publisher ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly publisherId?: string;
  /**
   * Textual description.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * Category of the extension. e.g. weather/sensor/satellite.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extensionCategory?: string;
  /**
   * FarmBeatsExtension auth link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extensionAuthLink?: string;
  /**
   * FarmBeatsExtension api docs link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extensionApiDocsLink?: string;
  /**
   * Detailed information which shows summary of requested data.
   * Used in descriptive get extension metadata call.
   * Information for weather category per api included are apisSupported,
   * customParameters, PlatformParameters and Units supported.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly detailedInformation?: DetailedInformation[];
}

/** FarmBeats ARM Resource. */
export interface FarmBeats extends TrackedResource {
  /** Identity for the resource. */
  identity?: Identity;
  /**
   * Uri of the FarmBeats instance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly instanceUri?: string;
  /**
   * FarmBeats instance provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Sensor integration request model. */
  sensorIntegration?: SensorIntegration;
  /** Property to allow or block public traffic for an Azure FarmBeats resource. */
  publicNetworkAccess?: PublicNetworkAccess;
  /**
   * The Private Endpoint Connection resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection;
}

/** Defines headers for FarmBeatsModels_update operation. */
export interface FarmBeatsModelsUpdateHeaders {
  location?: string;
}

/** Defines headers for PrivateEndpointConnections_delete operation. */
export interface PrivateEndpointConnectionsDeleteHeaders {
  location?: string;
}

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Succeeded** \
 * **Failed**
 */
export type ProvisioningState = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  /** Enabled */
  Enabled = "Enabled",
  /** Hybrid */
  Hybrid = "Hybrid"
}

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Hybrid**
 */
export type PublicNetworkAccess = string;

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  /** Pending */
  Pending = "Pending",
  /** Approved */
  Approved = "Approved",
  /** Rejected */
  Rejected = "Rejected"
}

/**
 * Defines values for PrivateEndpointServiceConnectionStatus. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed"
}

/**
 * Defines values for PrivateEndpointConnectionProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type PrivateEndpointConnectionProvisioningState = string;

/** Known values of {@link CheckNameAvailabilityReason} that the service accepts. */
export enum KnownCheckNameAvailabilityReason {
  /** Invalid */
  Invalid = "Invalid",
  /** AlreadyExists */
  AlreadyExists = "AlreadyExists"
}

/**
 * Defines values for CheckNameAvailabilityReason. \
 * {@link KnownCheckNameAvailabilityReason} can be used interchangeably with CheckNameAvailabilityReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type CheckNameAvailabilityReason = string;

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Optional parameters. */
export interface ExtensionsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type ExtensionsCreateResponse = Extension;

/** Optional parameters. */
export interface ExtensionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ExtensionsGetResponse = Extension;

/** Optional parameters. */
export interface ExtensionsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ExtensionsUpdateResponse = Extension;

/** Optional parameters. */
export interface ExtensionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExtensionsListByFarmBeatsOptionalParams
  extends coreClient.OperationOptions {
  /** Installed extension ids. */
  extensionIds?: string[];
  /** Installed extension categories. */
  extensionCategories?: string[];
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
}

/** Contains response data for the listByFarmBeats operation. */
export type ExtensionsListByFarmBeatsResponse = ExtensionListResponse;

/** Optional parameters. */
export interface ExtensionsListByFarmBeatsNextOptionalParams
  extends coreClient.OperationOptions {
  /** Installed extension ids. */
  extensionIds?: string[];
  /** Installed extension categories. */
  extensionCategories?: string[];
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
}

/** Contains response data for the listByFarmBeatsNext operation. */
export type ExtensionsListByFarmBeatsNextResponse = ExtensionListResponse;

/** Optional parameters. */
export interface FarmBeatsExtensionsListOptionalParams
  extends coreClient.OperationOptions {
  /** Extension categories. */
  extensionCategories?: string[];
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** FarmBeatsExtension ids. */
  farmBeatsExtensionIds?: string[];
  /** FarmBeats extension names. */
  farmBeatsExtensionNames?: string[];
  /** Publisher ids. */
  publisherIds?: string[];
}

/** Contains response data for the list operation. */
export type FarmBeatsExtensionsListResponse = FarmBeatsExtensionListResponse;

/** Optional parameters. */
export interface FarmBeatsExtensionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type FarmBeatsExtensionsGetResponse = FarmBeatsExtension;

/** Optional parameters. */
export interface FarmBeatsExtensionsListNextOptionalParams
  extends coreClient.OperationOptions {
  /** Extension categories. */
  extensionCategories?: string[];
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** FarmBeatsExtension ids. */
  farmBeatsExtensionIds?: string[];
  /** FarmBeats extension names. */
  farmBeatsExtensionNames?: string[];
  /** Publisher ids. */
  publisherIds?: string[];
}

/** Contains response data for the listNext operation. */
export type FarmBeatsExtensionsListNextResponse = FarmBeatsExtensionListResponse;

/** Optional parameters. */
export interface FarmBeatsModelsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type FarmBeatsModelsGetResponse = FarmBeats;

/** Optional parameters. */
export interface FarmBeatsModelsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type FarmBeatsModelsCreateOrUpdateResponse = FarmBeats;

/** Optional parameters. */
export interface FarmBeatsModelsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type FarmBeatsModelsUpdateResponse = FarmBeats;

/** Optional parameters. */
export interface FarmBeatsModelsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface FarmBeatsModelsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
}

/** Contains response data for the listBySubscription operation. */
export type FarmBeatsModelsListBySubscriptionResponse = FarmBeatsListResponse;

/** Optional parameters. */
export interface FarmBeatsModelsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Continuation token for getting next set of results. */
  skipToken?: string;
}

/** Contains response data for the listByResourceGroup operation. */
export type FarmBeatsModelsListByResourceGroupResponse = FarmBeatsListResponse;

/** Optional parameters. */
export interface FarmBeatsModelsGetOperationResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOperationResult operation. */
export type FarmBeatsModelsGetOperationResultResponse = ArmAsyncOperation;

/** Optional parameters. */
export interface FarmBeatsModelsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
}

/** Contains response data for the listBySubscriptionNext operation. */
export type FarmBeatsModelsListBySubscriptionNextResponse = FarmBeatsListResponse;

/** Optional parameters. */
export interface FarmBeatsModelsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Continuation token for getting next set of results. */
  skipToken?: string;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type FarmBeatsModelsListByResourceGroupNextResponse = FarmBeatsListResponse;

/** Optional parameters. */
export interface LocationsCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type LocationsCheckNameAvailabilityResponse = CheckNameAvailabilityResponse;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface PrivateEndpointConnectionsListByResourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResource operation. */
export type PrivateEndpointConnectionsListByResourceResponse = PrivateEndpointConnectionListResult;

/** Optional parameters. */
export interface PrivateLinkResourcesListByResourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResource operation. */
export type PrivateLinkResourcesListByResourceResponse = PrivateLinkResourceListResult;

/** Optional parameters. */
export interface PrivateLinkResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateLinkResourcesGetResponse = PrivateLinkResource;

/** Optional parameters. */
export interface AgriFoodMgmtClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
