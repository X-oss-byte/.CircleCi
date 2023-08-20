/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** List of firmwares */
export interface FirmwareList {
  /**
   * The list of firmwares.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Firmware[];
  /** The uri to fetch the next page of asset. */
  nextLink?: string;
}

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

/** Firmware definition */
export interface FirmwareUpdateDefinition {
  /** File name for a firmware that user uploaded. */
  fileName?: string;
  /** Firmware vendor. */
  vendor?: string;
  /** Firmware model. */
  model?: string;
  /** Firmware version. */
  version?: string;
  /** User-specified description of the firmware. */
  description?: string;
  /** File size of the uploaded firmware image. */
  fileSize?: number;
  /** The status of firmware scan. */
  status?: Status;
  /** A list of errors or other messages generated during firmware analysis */
  statusMessages?: Record<string, unknown>[];
  /**
   * Provisioning state of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Url data for creating or accessing a blob file. */
export interface UrlToken {
  /**
   * SAS URL for creating or accessing a blob file.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly url?: string;
  /**
   * SAS URL for file uploading. Kept for backwards compatibility
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly uploadUrl?: string;
}

/** Summary result after scanning the firmware. */
export interface FirmwareSummary {
  /** Total extracted size of the firmware in bytes. */
  extractedSize?: number;
  /** Firmware file size in bytes. */
  fileSize?: number;
  /** Extracted file count. */
  extractedFileCount?: number;
  /** Components count. */
  componentCount?: number;
  /** Binary count */
  binaryCount?: number;
  /** Time used for analysis */
  analysisTimeSeconds?: number;
  /** The number of root file systems found. */
  rootFileSystems?: number;
}

/** List result for components */
export interface ComponentList {
  /**
   * The list of components.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Component[];
  /** The uri to fetch the next page of asset. */
  nextLink?: string;
}

/** Component of a firmware. */
export interface Component {
  /** ID for the component. */
  componentId?: string;
  /** Name for the component. */
  componentName?: string;
  /** Version for the component. */
  version?: string;
  /** License for the component. */
  license?: string;
  /** Release date for the component. */
  releaseDate?: Date;
  /** Paths of the component. */
  paths?: string[];
  /** Flag if new update is available for the component. */
  isUpdateAvailable?: IsUpdateAvailable;
}

/** List result for binary hardening */
export interface BinaryHardeningList {
  /**
   * The list of binary hardening results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: BinaryHardening[];
  /** The uri to fetch the next page of asset. */
  nextLink?: string;
}

/** Binary hardening of a firmware. */
export interface BinaryHardening {
  /** ID for the binary hardening result. */
  binaryHardeningId?: string;
  /** The architecture of the uploaded firmware. */
  architecture?: string;
  /** path for binary hardening. */
  path?: string;
  /** class for binary hardening. */
  class?: string;
  /** The runpath of the uploaded firmware. */
  runpath?: string;
  /** The rpath of the uploaded firmware. */
  rpath?: string;
  /** NX flag. */
  nx?: NxFlag;
  /** PIE flag. */
  pie?: PieFlag;
  /** RELRO flag. */
  relro?: RelroFlag;
  /** Canary flag. */
  canary?: CanaryFlag;
  /** Stripped flag. */
  stripped?: StrippedFlag;
}

/** Binary hardening summary percentages. */
export interface BinaryHardeningSummary {
  /** Total number of binaries that were analyzed */
  totalFiles?: number;
  /** NX summary percentage */
  nx?: number;
  /** PIE summary percentage */
  pie?: number;
  /** RELRO summary percentage */
  relro?: number;
  /** Canary summary percentage */
  canary?: number;
  /** Stripped summary percentage */
  stripped?: number;
}

/** Password hashes list */
export interface PasswordHashList {
  /**
   * Password hashes list
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: PasswordHash[];
  /** The uri to fetch the next page of asset. */
  nextLink?: string;
}

/** Password hash properties */
export interface PasswordHash {
  /** ID for password hash */
  passwordHashId?: string;
  /** File path of the password hash */
  filePath?: string;
  /** Salt of the password hash */
  salt?: string;
  /** Hash of the password */
  hash?: string;
  /** Context of password hash */
  context?: string;
  /** User name of password hash */
  username?: string;
  /** Algorithm of the password hash */
  algorithm?: string;
}

/** List result for CVE */
export interface CveList {
  /**
   * The list of CVE results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Cve[];
  /** The uri to fetch the next page of asset. */
  nextLink?: string;
}

/** Known CVEs of a firmware. */
export interface Cve {
  /** ID of CVE */
  cveId?: string;
  /** Component of CVE */
  component?: Record<string, unknown>;
  /** Severity of CVE */
  severity?: string;
  /** Name of CVE */
  name?: string;
  /** A single CVSS score to represent the CVE. If a V3 score is specified, then it will use the V3 score. Otherwise if the V2 score is specified it will be the V2 score */
  cvssScore?: string;
  /** Cvss version of CVE */
  cvssVersion?: string;
  /** Cvss V2 score of CVE */
  cvssV2Score?: string;
  /** Cvss V3 score of CVE */
  cvssV3Score?: string;
  /** Publish date of CVE */
  publishDate?: Date;
  /** Updated date of CVE */
  updatedDate?: Date;
  /**
   * The list of CVE links.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly links?: CveLink[];
  /** Description of CVE */
  description?: string;
}

/** Link for CVE */
export interface CveLink {
  /** Href of CVE link */
  href?: string;
  /** Label of CVE link */
  label?: string;
}

/** CVE summary values. */
export interface CveSummary {
  /** The total number of critical severity CVEs detected */
  critical?: number;
  /** The total number of high severity CVEs detected */
  high?: number;
  /** The total number of medium severity CVEs detected */
  medium?: number;
  /** The total number of low severity CVEs detected */
  low?: number;
  /** The total number of unknown severity CVEs detected */
  unknown?: number;
  /** The total number of undefined severity CVEs detected */
  undefined?: number;
}

/** Cryptographic certificate summary values. */
export interface CryptoCertificateSummary {
  /** Total number of certificates found. */
  totalCertificates?: number;
  /** Total number of paired private keys found for the certificates. */
  pairedKeys?: number;
  /** Total number of expired certificates found. */
  expired?: number;
  /** Total number of nearly expired certificates found. */
  expiringSoon?: number;
  /** Total number of certificates found using a weak signature algorithm. */
  weakSignature?: number;
  /** Total number of certificates found that are self-signed. */
  selfSigned?: number;
  /** Total number of certificates found that have an insecure key size for the key algorithm. */
  shortKeySize?: number;
}

/** Cryptographic key summary values. */
export interface CryptoKeySummary {
  /** Total number of cryptographic keys found. */
  totalKeys?: number;
  /** Total number of (non-certificate) public keys found. */
  publicKeys?: number;
  /** Total number of private keys found. */
  privateKeys?: number;
  /** Total number of keys found that have a matching paired key or certificate. */
  pairedKeys?: number;
  /** Total number of keys found that have an insecure key size for the algorithm. */
  shortKeySize?: number;
}

/** Crypto certificates list */
export interface CryptoCertificateList {
  /**
   * Crypto certificates list
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: CryptoCertificate[];
  /** The uri to fetch the next page of asset. */
  nextLink?: string;
}

/** Crypto certificate properties */
export interface CryptoCertificate {
  /** ID for the certificate. */
  cryptoCertId?: string;
  /** Name of the certificate. */
  name?: string;
  /** Subject information of the certificate. */
  subject?: CryptoCertificateEntity;
  /** Issuer information of the certificate. */
  issuer?: CryptoCertificateEntity;
  /** Issue date for the certificate. */
  issuedDate?: Date;
  /** Expiration date for the certificate. */
  expirationDate?: Date;
  /** Role of the certificate (Root CA, etc) */
  role?: string;
  /** The signature algorithm used in the certificate. */
  signatureAlgorithm?: string;
  /** Size of the certificate's key in bits */
  keySize?: number;
  /** Key algorithm used in the certificate. */
  keyAlgorithm?: string;
  /** Encoding used for the certificate. */
  encoding?: string;
  /** Serial number of the certificate. */
  serialNumber?: string;
  /** Fingerprint of the certificate. */
  fingerprint?: string;
  /** List of functions the certificate can fulfill. */
  usage?: string[];
  /**
   * List of files paths for this certificate
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly filePaths?: string[];
  /** A matching paired private key. */
  pairedKey?: PairedKey;
  /** Indicates if the certificate is expired. */
  isExpired?: IsExpired;
  /** Indicates if the certificate was self-signed. */
  isSelfSigned?: IsSelfSigned;
  /** Indicates the signature algorithm used is insecure. */
  isWeakSignature?: IsWeakSignature;
  /** Indicates the certificate's key size is considered too small to be secure for the key algorithm. */
  isShortKeySize?: IsShortKeySize;
}

/** Information on an entity (distinguished name) in a cryptographic certificate. */
export interface CryptoCertificateEntity {
  /** Common name of the certificate entity. */
  commonName?: string;
  /** Organization of the certificate entity. */
  organization?: string;
  /** The organizational unit of the certificate entity. */
  organizationalUnit?: string;
  /** Geographical state or province of the certificate entity. */
  state?: string;
  /** Country code of the certificate entity. */
  country?: string;
}

/** Details of a matching paired key or certificate. */
export interface PairedKey {
  /** ID of the paired key or certificate. */
  id?: string;
  /** The type indicating whether the paired object is a key or certificate. */
  type?: string;
  /** Additional paired key properties */
  additionalProperties?: Record<string, unknown>;
}

/** Crypto keys list */
export interface CryptoKeyList {
  /**
   * Crypto keys list
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: CryptoKey[];
  /** The uri to fetch the next page of asset. */
  nextLink?: string;
}

/** Crypto key properties */
export interface CryptoKey {
  /** ID for the key. */
  cryptoKeyId?: string;
  /** Type of the key (public or private). */
  keyType?: string;
  /** Size of the key in bits. */
  keySize?: number;
  /** Key algorithm name. */
  keyAlgorithm?: string;
  /** Functions the key can fulfill. */
  usage?: string[];
  /**
   * List of files paths for this key.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly filePaths?: string[];
  /** A matching paired key or certificate. */
  pairedKey?: PairedKey;
  /** Indicates the key size is considered too small to be secure for the algorithm. */
  isShortKeySize?: IsShortKeySize;
}

/** Return a list of firmware analysis workspaces. */
export interface WorkspaceList {
  /**
   * The list of firmware analysis workspaces.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Workspace[];
  /** The uri to fetch the next page of asset. */
  nextLink?: string;
}

/** Firmware analysis workspace. */
export interface WorkspaceUpdateDefinition {
  /**
   * Provisioning state of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Properties for generating an upload URL */
export interface GenerateUploadUrlRequest {
  /** A unique ID for the firmware to be uploaded. */
  firmwareId?: string;
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

/** Component for CVE */
export interface CveComponent {
  /** ID of CVE component */
  componentId?: string;
  /** Name of CVE component */
  name?: string;
  /** Version of CVE component */
  version?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** Firmware definition */
export interface Firmware extends ProxyResource {
  /** File name for a firmware that user uploaded. */
  fileName?: string;
  /** Firmware vendor. */
  vendor?: string;
  /** Firmware model. */
  model?: string;
  /** Firmware version. */
  version?: string;
  /** User-specified description of the firmware. */
  description?: string;
  /** File size of the uploaded firmware image. */
  fileSize?: number;
  /** The status of firmware scan. */
  status?: Status;
  /** A list of errors or other messages generated during firmware analysis */
  statusMessages?: Record<string, unknown>[];
  /**
   * Provisioning state of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Firmware analysis workspace. */
export interface Workspace extends TrackedResource {
  /**
   * Provisioning state of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Known values of {@link Status} that the service accepts. */
export enum KnownStatus {
  /** Pending */
  Pending = "Pending",
  /** Extracting */
  Extracting = "Extracting",
  /** Analyzing */
  Analyzing = "Analyzing",
  /** Ready */
  Ready = "Ready",
  /** Error */
  Error = "Error"
}

/**
 * Defines values for Status. \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Extracting** \
 * **Analyzing** \
 * **Ready** \
 * **Error**
 */
export type Status = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Accepted */
  Accepted = "Accepted",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Canceled */
  Canceled = "Canceled",
  /** Failed */
  Failed = "Failed"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Succeeded** \
 * **Canceled** \
 * **Failed**
 */
export type ProvisioningState = string;

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

/** Known values of {@link IsUpdateAvailable} that the service accepts. */
export enum KnownIsUpdateAvailable {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for IsUpdateAvailable. \
 * {@link KnownIsUpdateAvailable} can be used interchangeably with IsUpdateAvailable,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type IsUpdateAvailable = string;

/** Known values of {@link NxFlag} that the service accepts. */
export enum KnownNxFlag {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for NxFlag. \
 * {@link KnownNxFlag} can be used interchangeably with NxFlag,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type NxFlag = string;

/** Known values of {@link PieFlag} that the service accepts. */
export enum KnownPieFlag {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for PieFlag. \
 * {@link KnownPieFlag} can be used interchangeably with PieFlag,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type PieFlag = string;

/** Known values of {@link RelroFlag} that the service accepts. */
export enum KnownRelroFlag {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for RelroFlag. \
 * {@link KnownRelroFlag} can be used interchangeably with RelroFlag,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type RelroFlag = string;

/** Known values of {@link CanaryFlag} that the service accepts. */
export enum KnownCanaryFlag {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for CanaryFlag. \
 * {@link KnownCanaryFlag} can be used interchangeably with CanaryFlag,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type CanaryFlag = string;

/** Known values of {@link StrippedFlag} that the service accepts. */
export enum KnownStrippedFlag {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for StrippedFlag. \
 * {@link KnownStrippedFlag} can be used interchangeably with StrippedFlag,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type StrippedFlag = string;

/** Known values of {@link IsExpired} that the service accepts. */
export enum KnownIsExpired {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for IsExpired. \
 * {@link KnownIsExpired} can be used interchangeably with IsExpired,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type IsExpired = string;

/** Known values of {@link IsSelfSigned} that the service accepts. */
export enum KnownIsSelfSigned {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for IsSelfSigned. \
 * {@link KnownIsSelfSigned} can be used interchangeably with IsSelfSigned,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type IsSelfSigned = string;

/** Known values of {@link IsWeakSignature} that the service accepts. */
export enum KnownIsWeakSignature {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for IsWeakSignature. \
 * {@link KnownIsWeakSignature} can be used interchangeably with IsWeakSignature,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type IsWeakSignature = string;

/** Known values of {@link IsShortKeySize} that the service accepts. */
export enum KnownIsShortKeySize {
  /** True */
  True = "True",
  /** False */
  False = "False"
}

/**
 * Defines values for IsShortKeySize. \
 * {@link KnownIsShortKeySize} can be used interchangeably with IsShortKeySize,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type IsShortKeySize = string;

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
export interface FirmwareListByWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspace operation. */
export type FirmwareListByWorkspaceResponse = FirmwareList;

/** Optional parameters. */
export interface FirmwareCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type FirmwareCreateResponse = Firmware;

/** Optional parameters. */
export interface FirmwareUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type FirmwareUpdateResponse = Firmware;

/** Optional parameters. */
export interface FirmwareDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface FirmwareGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type FirmwareGetResponse = Firmware;

/** Optional parameters. */
export interface FirmwareGenerateDownloadUrlOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateDownloadUrl operation. */
export type FirmwareGenerateDownloadUrlResponse = UrlToken;

/** Optional parameters. */
export interface FirmwareGenerateFilesystemDownloadUrlOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateFilesystemDownloadUrl operation. */
export type FirmwareGenerateFilesystemDownloadUrlResponse = UrlToken;

/** Optional parameters. */
export interface FirmwareGenerateSummaryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateSummary operation. */
export type FirmwareGenerateSummaryResponse = FirmwareSummary;

/** Optional parameters. */
export interface FirmwareListGenerateComponentListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateComponentList operation. */
export type FirmwareListGenerateComponentListResponse = ComponentList;

/** Optional parameters. */
export interface FirmwareGenerateComponentDetailsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateComponentDetails operation. */
export type FirmwareGenerateComponentDetailsResponse = Component;

/** Optional parameters. */
export interface FirmwareListGenerateBinaryHardeningListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateBinaryHardeningList operation. */
export type FirmwareListGenerateBinaryHardeningListResponse = BinaryHardeningList;

/** Optional parameters. */
export interface FirmwareGenerateBinaryHardeningSummaryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateBinaryHardeningSummary operation. */
export type FirmwareGenerateBinaryHardeningSummaryResponse = BinaryHardeningSummary;

/** Optional parameters. */
export interface FirmwareGenerateBinaryHardeningDetailsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateBinaryHardeningDetails operation. */
export type FirmwareGenerateBinaryHardeningDetailsResponse = BinaryHardening;

/** Optional parameters. */
export interface FirmwareListGeneratePasswordHashListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGeneratePasswordHashList operation. */
export type FirmwareListGeneratePasswordHashListResponse = PasswordHashList;

/** Optional parameters. */
export interface FirmwareListGenerateCveListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateCveList operation. */
export type FirmwareListGenerateCveListResponse = CveList;

/** Optional parameters. */
export interface FirmwareGenerateCveSummaryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateCveSummary operation. */
export type FirmwareGenerateCveSummaryResponse = CveSummary;

/** Optional parameters. */
export interface FirmwareGenerateCryptoCertificateSummaryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateCryptoCertificateSummary operation. */
export type FirmwareGenerateCryptoCertificateSummaryResponse = CryptoCertificateSummary;

/** Optional parameters. */
export interface FirmwareGenerateCryptoKeySummaryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateCryptoKeySummary operation. */
export type FirmwareGenerateCryptoKeySummaryResponse = CryptoKeySummary;

/** Optional parameters. */
export interface FirmwareListGenerateCryptoCertificateListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateCryptoCertificateList operation. */
export type FirmwareListGenerateCryptoCertificateListResponse = CryptoCertificateList;

/** Optional parameters. */
export interface FirmwareListGenerateCryptoKeyListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateCryptoKeyList operation. */
export type FirmwareListGenerateCryptoKeyListResponse = CryptoKeyList;

/** Optional parameters. */
export interface FirmwareListByWorkspaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspaceNext operation. */
export type FirmwareListByWorkspaceNextResponse = FirmwareList;

/** Optional parameters. */
export interface FirmwareListGenerateComponentListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateComponentListNext operation. */
export type FirmwareListGenerateComponentListNextResponse = ComponentList;

/** Optional parameters. */
export interface FirmwareListGenerateBinaryHardeningListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateBinaryHardeningListNext operation. */
export type FirmwareListGenerateBinaryHardeningListNextResponse = BinaryHardeningList;

/** Optional parameters. */
export interface FirmwareListGeneratePasswordHashListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGeneratePasswordHashListNext operation. */
export type FirmwareListGeneratePasswordHashListNextResponse = PasswordHashList;

/** Optional parameters. */
export interface FirmwareListGenerateCveListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateCveListNext operation. */
export type FirmwareListGenerateCveListNextResponse = CveList;

/** Optional parameters. */
export interface FirmwareListGenerateCryptoCertificateListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateCryptoCertificateListNext operation. */
export type FirmwareListGenerateCryptoCertificateListNextResponse = CryptoCertificateList;

/** Optional parameters. */
export interface FirmwareListGenerateCryptoKeyListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGenerateCryptoKeyListNext operation. */
export type FirmwareListGenerateCryptoKeyListNextResponse = CryptoKeyList;

/** Optional parameters. */
export interface WorkspacesListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type WorkspacesListBySubscriptionResponse = WorkspaceList;

/** Optional parameters. */
export interface WorkspacesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type WorkspacesListByResourceGroupResponse = WorkspaceList;

/** Optional parameters. */
export interface WorkspacesCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type WorkspacesCreateResponse = Workspace;

/** Optional parameters. */
export interface WorkspacesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type WorkspacesUpdateResponse = Workspace;

/** Optional parameters. */
export interface WorkspacesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WorkspacesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type WorkspacesGetResponse = Workspace;

/** Optional parameters. */
export interface WorkspacesGenerateUploadUrlOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateUploadUrl operation. */
export type WorkspacesGenerateUploadUrlResponse = UrlToken;

/** Optional parameters. */
export interface WorkspacesListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type WorkspacesListBySubscriptionNextResponse = WorkspaceList;

/** Optional parameters. */
export interface WorkspacesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type WorkspacesListByResourceGroupNextResponse = WorkspaceList;

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
export interface IoTFirmwareDefenseClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}