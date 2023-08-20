# Release History

## 5.0.2 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 5.0.1 (2023-01-05)

**Migration Guide**

- To assist customers migrating from v4.0.0, since v5.0.0 release, we have moved the resourceGroupName and resourceName parameters from the SiteRecoveryManagementClient constructor method to its instance method level, to make it consistent with the client constructors of other service SDKs. For example, in the previous v4.0.0 release, we would create the client like this: `const client = new SiteRecoveryManagementClient(credentials, resourceGroupName, subscriptionId, resourceName);` and call the method like this: `client.replicationJobs.list();`. Now, we need to create the client like this: `const client = new SiteRecoveryManagementClient(credentials, subscriptionId);` and call the method like this: `client.replicationJobs.list(resourceName, resourceGroupName);`.

## 5.0.0 (2022-12-08)

**Features**

  - Added operation ReplicationMigrationItems.beginPauseReplication
  - Added operation ReplicationMigrationItems.beginPauseReplicationAndWait
  - Added operation ReplicationMigrationItems.beginResumeReplication
  - Added operation ReplicationMigrationItems.beginResumeReplicationAndWait
  - Added Interface A2AAddDisksInput
  - Added Interface A2AApplyRecoveryPointInput
  - Added Interface A2AContainerCreationInput
  - Added Interface A2AContainerMappingInput
  - Added Interface A2ACreateProtectionIntentInput
  - Added Interface A2ACrossClusterMigrationApplyRecoveryPointInput
  - Added Interface A2ACrossClusterMigrationContainerCreationInput
  - Added Interface A2ACrossClusterMigrationEnableProtectionInput
  - Added Interface A2ACrossClusterMigrationPolicyCreationInput
  - Added Interface A2ACrossClusterMigrationReplicationDetails
  - Added Interface A2AEnableProtectionInput
  - Added Interface A2AEventDetails
  - Added Interface A2AExtendedLocationDetails
  - Added Interface A2APolicyCreationInput
  - Added Interface A2APolicyDetails
  - Added Interface A2AProtectionContainerMappingDetails
  - Added Interface A2ARecoveryPointDetails
  - Added Interface A2ARemoveDisksInput
  - Added Interface A2AReplicationDetails
  - Added Interface A2AReplicationIntentDetails
  - Added Interface A2AReprotectInput
  - Added Interface A2ASwitchProtectionInput
  - Added Interface A2ATestFailoverInput
  - Added Interface A2AUnplannedFailoverInput
  - Added Interface A2AUpdateContainerMappingInput
  - Added Interface A2AUpdateReplicationProtectedItemInput
  - Added Interface Alert
  - Added Interface AsrJobDetails
  - Added Interface AutomationRunbookTaskDetails
  - Added Interface AzureFabricCreationInput
  - Added Interface AzureFabricSpecificDetails
  - Added Interface AzureToAzureCreateNetworkMappingInput
  - Added Interface AzureToAzureNetworkMappingSettings
  - Added Interface AzureToAzureUpdateNetworkMappingInput
  - Added Interface ConsistencyCheckTaskDetails
  - Added Interface CriticalJobHistoryDetails
  - Added Interface Event_2
  - Added Interface ExistingProtectionProfile
  - Added Interface ExistingRecoveryAvailabilitySet
  - Added Interface ExistingRecoveryProximityPlacementGroup
  - Added Interface ExistingRecoveryResourceGroup
  - Added Interface ExistingRecoveryVirtualNetwork
  - Added Interface ExistingStorageAccount
  - Added Interface ExportJobDetails
  - Added Interface Fabric
  - Added Interface FabricReplicationGroupTaskDetails
  - Added Interface FailoverJobDetails
  - Added Interface HyperVReplica2012EventDetails
  - Added Interface HyperVReplica2012R2EventDetails
  - Added Interface HyperVReplicaAzureApplyRecoveryPointInput
  - Added Interface HyperVReplicaAzureEnableProtectionInput
  - Added Interface HyperVReplicaAzureEventDetails
  - Added Interface HyperVReplicaAzureFailbackProviderInput
  - Added Interface HyperVReplicaAzurePlannedFailoverProviderInput
  - Added Interface HyperVReplicaAzurePolicyDetails
  - Added Interface HyperVReplicaAzurePolicyInput
  - Added Interface HyperVReplicaAzureReplicationDetails
  - Added Interface HyperVReplicaAzureReprotectInput
  - Added Interface HyperVReplicaAzureTestFailoverInput
  - Added Interface HyperVReplicaAzureUnplannedFailoverInput
  - Added Interface HyperVReplicaAzureUpdateReplicationProtectedItemInput
  - Added Interface HyperVReplicaBaseEventDetails
  - Added Interface HyperVReplicaBasePolicyDetails
  - Added Interface HyperVReplicaBaseReplicationDetails
  - Added Interface HyperVReplicaBluePolicyDetails
  - Added Interface HyperVReplicaBluePolicyInput
  - Added Interface HyperVReplicaBlueReplicationDetails
  - Added Interface HyperVReplicaPolicyDetails
  - Added Interface HyperVReplicaPolicyInput
  - Added Interface HyperVReplicaReplicationDetails
  - Added Interface HyperVSiteDetails
  - Added Interface HyperVVirtualMachineDetails
  - Added Interface InlineWorkflowTaskDetails
  - Added Interface InMageAzureV2ApplyRecoveryPointInput
  - Added Interface InMageAzureV2EnableProtectionInput
  - Added Interface InMageAzureV2EventDetails
  - Added Interface InMageAzureV2PolicyDetails
  - Added Interface InMageAzureV2PolicyInput
  - Added Interface InMageAzureV2RecoveryPointDetails
  - Added Interface InMageAzureV2ReplicationDetails
  - Added Interface InMageAzureV2ReprotectInput
  - Added Interface InMageAzureV2SwitchProviderInput
  - Added Interface InMageAzureV2TestFailoverInput
  - Added Interface InMageAzureV2UnplannedFailoverInput
  - Added Interface InMageAzureV2UpdateReplicationProtectedItemInput
  - Added Interface InMageBasePolicyDetails
  - Added Interface InMageDisableProtectionProviderSpecificInput
  - Added Interface InMageEnableProtectionInput
  - Added Interface InMagePolicyDetails
  - Added Interface InMagePolicyInput
  - Added Interface InMageRcmApplianceSpecificDetails
  - Added Interface InMageRcmApplyRecoveryPointInput
  - Added Interface InMageRcmEnableProtectionInput
  - Added Interface InMageRcmEventDetails
  - Added Interface InMageRcmFabricCreationInput
  - Added Interface InMageRcmFabricSpecificDetails
  - Added Interface InMageRcmFailbackEventDetails
  - Added Interface InMageRcmFailbackPlannedFailoverProviderInput
  - Added Interface InMageRcmFailbackPolicyCreationInput
  - Added Interface InMageRcmFailbackPolicyDetails
  - Added Interface InMageRcmFailbackReplicationDetails
  - Added Interface InMageRcmFailbackReprotectInput
  - Added Interface InMageRcmPolicyCreationInput
  - Added Interface InMageRcmPolicyDetails
  - Added Interface InMageRcmProtectionContainerMappingDetails
  - Added Interface InMageRcmRecoveryPointDetails
  - Added Interface InMageRcmReplicationDetails
  - Added Interface InMageRcmReprotectInput
  - Added Interface InMageRcmTestFailoverInput
  - Added Interface InMageRcmUnplannedFailoverInput
  - Added Interface InMageRcmUpdateApplianceForReplicationProtectedItemInput
  - Added Interface InMageRcmUpdateContainerMappingInput
  - Added Interface InMageRcmUpdateReplicationProtectedItemInput
  - Added Interface InMageReplicationDetails
  - Added Interface InMageReprotectInput
  - Added Interface InMageTestFailoverInput
  - Added Interface InMageUnplannedFailoverInput
  - Added Interface Job
  - Added Interface JobStatusEventDetails
  - Added Interface JobTaskDetails
  - Added Interface LogicalNetwork
  - Added Interface ManualActionTaskDetails
  - Added Interface MigrationItem
  - Added Interface MigrationRecoveryPoint
  - Added Interface Network
  - Added Interface NetworkMapping
  - Added Interface NewProtectionProfile
  - Added Interface NewRecoveryVirtualNetwork
  - Added Interface PauseReplicationInput
  - Added Interface PauseReplicationInputProperties
  - Added Interface Policy
  - Added Interface ProtectableItem
  - Added Interface ProtectionContainer
  - Added Interface ProtectionContainerMapping
  - Added Interface RecoveryPlan
  - Added Interface RecoveryPlanA2ADetails
  - Added Interface RecoveryPlanA2AFailoverInput
  - Added Interface RecoveryPlanA2AInput
  - Added Interface RecoveryPlanAutomationRunbookActionDetails
  - Added Interface RecoveryPlanGroupTaskDetails
  - Added Interface RecoveryPlanHyperVReplicaAzureFailbackInput
  - Added Interface RecoveryPlanHyperVReplicaAzureFailoverInput
  - Added Interface RecoveryPlanInMageAzureV2FailoverInput
  - Added Interface RecoveryPlanInMageFailoverInput
  - Added Interface RecoveryPlanInMageRcmFailbackFailoverInput
  - Added Interface RecoveryPlanInMageRcmFailoverInput
  - Added Interface RecoveryPlanManualActionDetails
  - Added Interface RecoveryPlanScriptActionDetails
  - Added Interface RecoveryPlanShutdownGroupTaskDetails
  - Added Interface RecoveryPoint
  - Added Interface RecoveryServicesProvider
  - Added Interface ReplicationGroupDetails
  - Added Interface ReplicationMigrationItemsPauseReplicationOptionalParams
  - Added Interface ReplicationMigrationItemsResumeReplicationOptionalParams
  - Added Interface ReplicationProtectedItem
  - Added Interface ReplicationProtectedItemsUpdateMobilityServiceHeaders
  - Added Interface ReplicationProtectionIntent
  - Added Interface ResumeReplicationInput
  - Added Interface ResumeReplicationInputProperties
  - Added Interface ResumeReplicationProviderSpecificInput
  - Added Interface ScriptActionTaskDetails
  - Added Interface StorageClassification
  - Added Interface StorageClassificationMapping
  - Added Interface SupportedOperatingSystems
  - Added Interface SwitchProtectionJobDetails
  - Added Interface TestFailoverJobDetails
  - Added Interface VaultHealthDetails
  - Added Interface VaultSetting
  - Added Interface VCenter
  - Added Interface VirtualMachineTaskDetails
  - Added Interface VmmDetails
  - Added Interface VmmToAzureCreateNetworkMappingInput
  - Added Interface VmmToAzureNetworkMappingSettings
  - Added Interface VmmToAzureUpdateNetworkMappingInput
  - Added Interface VmmToVmmCreateNetworkMappingInput
  - Added Interface VmmToVmmNetworkMappingSettings
  - Added Interface VmmToVmmUpdateNetworkMappingInput
  - Added Interface VmmVirtualMachineDetails
  - Added Interface VmNicUpdatesTaskDetails
  - Added Interface VMwareCbtContainerCreationInput
  - Added Interface VMwareCbtContainerMappingInput
  - Added Interface VMwareCbtEnableMigrationInput
  - Added Interface VMwareCbtEventDetails
  - Added Interface VMwareCbtMigrateInput
  - Added Interface VMwareCbtMigrationDetails
  - Added Interface VMwareCbtPolicyCreationInput
  - Added Interface VmwareCbtPolicyDetails
  - Added Interface VMwareCbtProtectionContainerMappingDetails
  - Added Interface VMwareCbtResumeReplicationInput
  - Added Interface VMwareCbtResyncInput
  - Added Interface VMwareCbtTestMigrateInput
  - Added Interface VMwareCbtUpdateMigrationItemInput
  - Added Interface VMwareDetails
  - Added Interface VMwareV2FabricCreationInput
  - Added Interface VMwareV2FabricSpecificDetails
  - Added Interface VMwareVirtualMachineDetails
  - Added Type Alias ReplicationMigrationItemsPauseReplicationResponse
  - Added Type Alias ReplicationMigrationItemsResumeReplicationResponse
  - Added Type Alias ResumeReplicationProviderSpecificInputUnion
  - Interface InMageRcmProtectedDiskDetails has a new optional parameter seedBlobUri
  - Interface MigrationItemProperties has a new optional parameter criticalJobHistory
  - Interface MigrationItemProperties has a new optional parameter lastMigrationStatus
  - Interface MigrationItemProperties has a new optional parameter lastMigrationTime
  - Interface MigrationItemProperties has a new optional parameter recoveryServicesProviderId
  - Interface MigrationItemProperties has a new optional parameter replicationStatus
  - Interface VMwareCbtNicDetails has a new optional parameter testIPAddress
  - Interface VMwareCbtNicDetails has a new optional parameter testIPAddressType
  - Interface VMwareCbtNicDetails has a new optional parameter testNetworkId
  - Interface VMwareCbtNicDetails has a new optional parameter testSubnetName
  - Interface VMwareCbtNicInput has a new optional parameter testStaticIPAddress
  - Interface VMwareCbtNicInput has a new optional parameter testSubnetName
  - Interface VMwareCbtProtectedDiskDetails has a new optional parameter seedBlobUri
  - Interface VMwareCbtProtectedDiskDetails has a new optional parameter targetBlobUri
  - Interface VMwareCbtUpdateDiskInput has a new optional parameter isOSDisk
  - Enum KnownMigrationItemOperation has a new value PauseReplication
  - Enum KnownMigrationItemOperation has a new value ResumeReplication
  - Enum KnownMigrationState has a new value MigrationCompletedWithInformation
  - Enum KnownMigrationState has a new value MigrationPartiallySucceeded
  - Enum KnownMigrationState has a new value ProtectionSuspended
  - Enum KnownMigrationState has a new value ResumeInitiated
  - Enum KnownMigrationState has a new value ResumeInProgress
  - Enum KnownMigrationState has a new value SuspendingProtection
  - Enum KnownTestMigrationState has a new value TestMigrationCompletedWithInformation
  - Enum KnownTestMigrationState has a new value TestMigrationPartiallySucceeded

**Breaking Changes**

  - Operation MigrationRecoveryPoints.get has a new signature
  - Operation MigrationRecoveryPoints.listByReplicationMigrationItems has a new signature
  - Operation Operations.list has a new signature
  - Operation RecoveryPoints.get has a new signature
  - Operation RecoveryPoints.listByReplicationProtectedItems has a new signature
  - Operation ReplicationAlertSettings.create has a new signature
  - Operation ReplicationAlertSettings.get has a new signature
  - Operation ReplicationAlertSettings.list has a new signature
  - Operation ReplicationAppliances.list has a new signature
  - Operation ReplicationEligibilityResultsOperations.get has a new signature
  - Operation ReplicationEligibilityResultsOperations.list has a new signature
  - Operation ReplicationEvents.get has a new signature
  - Operation ReplicationEvents.list has a new signature
  - Operation ReplicationFabrics.beginCheckConsistency has a new signature
  - Operation ReplicationFabrics.beginCheckConsistencyAndWait has a new signature
  - Operation ReplicationFabrics.beginCreate has a new signature
  - Operation ReplicationFabrics.beginCreateAndWait has a new signature
  - Operation ReplicationFabrics.beginDelete has a new signature
  - Operation ReplicationFabrics.beginDeleteAndWait has a new signature
  - Operation ReplicationFabrics.beginMigrateToAad has a new signature
  - Operation ReplicationFabrics.beginMigrateToAadAndWait has a new signature
  - Operation ReplicationFabrics.beginPurge has a new signature
  - Operation ReplicationFabrics.beginPurgeAndWait has a new signature
  - Operation ReplicationFabrics.beginReassociateGateway has a new signature
  - Operation ReplicationFabrics.beginReassociateGatewayAndWait has a new signature
  - Operation ReplicationFabrics.beginRenewCertificate has a new signature
  - Operation ReplicationFabrics.beginRenewCertificateAndWait has a new signature
  - Operation ReplicationFabrics.get has a new signature
  - Operation ReplicationFabrics.list has a new signature
  - Operation ReplicationJobs.beginCancel has a new signature
  - Operation ReplicationJobs.beginCancelAndWait has a new signature
  - Operation ReplicationJobs.beginExport has a new signature
  - Operation ReplicationJobs.beginExportAndWait has a new signature
  - Operation ReplicationJobs.beginRestart has a new signature
  - Operation ReplicationJobs.beginRestartAndWait has a new signature
  - Operation ReplicationJobs.beginResume has a new signature
  - Operation ReplicationJobs.beginResumeAndWait has a new signature
  - Operation ReplicationJobs.get has a new signature
  - Operation ReplicationJobs.list has a new signature
  - Operation ReplicationLogicalNetworks.get has a new signature
  - Operation ReplicationLogicalNetworks.listByReplicationFabrics has a new signature
  - Operation ReplicationMigrationItems.beginCreate has a new signature
  - Operation ReplicationMigrationItems.beginCreateAndWait has a new signature
  - Operation ReplicationMigrationItems.beginDelete has a new signature
  - Operation ReplicationMigrationItems.beginDeleteAndWait has a new signature
  - Operation ReplicationMigrationItems.beginMigrate has a new signature
  - Operation ReplicationMigrationItems.beginMigrateAndWait has a new signature
  - Operation ReplicationMigrationItems.beginResync has a new signature
  - Operation ReplicationMigrationItems.beginResyncAndWait has a new signature
  - Operation ReplicationMigrationItems.beginTestMigrate has a new signature
  - Operation ReplicationMigrationItems.beginTestMigrateAndWait has a new signature
  - Operation ReplicationMigrationItems.beginTestMigrateCleanup has a new signature
  - Operation ReplicationMigrationItems.beginTestMigrateCleanupAndWait has a new signature
  - Operation ReplicationMigrationItems.beginUpdate has a new signature
  - Operation ReplicationMigrationItems.beginUpdateAndWait has a new signature
  - Operation ReplicationMigrationItems.get has a new signature
  - Operation ReplicationMigrationItems.list has a new signature
  - Operation ReplicationMigrationItems.listByReplicationProtectionContainers has a new signature
  - Operation ReplicationNetworkMappings.beginCreate has a new signature
  - Operation ReplicationNetworkMappings.beginCreateAndWait has a new signature
  - Operation ReplicationNetworkMappings.beginDelete has a new signature
  - Operation ReplicationNetworkMappings.beginDeleteAndWait has a new signature
  - Operation ReplicationNetworkMappings.beginUpdate has a new signature
  - Operation ReplicationNetworkMappings.beginUpdateAndWait has a new signature
  - Operation ReplicationNetworkMappings.get has a new signature
  - Operation ReplicationNetworkMappings.list has a new signature
  - Operation ReplicationNetworkMappings.listByReplicationNetworks has a new signature
  - Operation ReplicationNetworks.get has a new signature
  - Operation ReplicationNetworks.list has a new signature
  - Operation ReplicationNetworks.listByReplicationFabrics has a new signature
  - Operation ReplicationPolicies.beginCreate has a new signature
  - Operation ReplicationPolicies.beginCreateAndWait has a new signature
  - Operation ReplicationPolicies.beginDelete has a new signature
  - Operation ReplicationPolicies.beginDeleteAndWait has a new signature
  - Operation ReplicationPolicies.beginUpdate has a new signature
  - Operation ReplicationPolicies.beginUpdateAndWait has a new signature
  - Operation ReplicationPolicies.get has a new signature
  - Operation ReplicationPolicies.list has a new signature
  - Operation ReplicationProtectableItems.get has a new signature
  - Operation ReplicationProtectableItems.listByReplicationProtectionContainers has a new signature
  - Operation ReplicationProtectedItems.beginAddDisks has a new signature
  - Operation ReplicationProtectedItems.beginAddDisksAndWait has a new signature
  - Operation ReplicationProtectedItems.beginApplyRecoveryPoint has a new signature
  - Operation ReplicationProtectedItems.beginApplyRecoveryPointAndWait has a new signature
  - Operation ReplicationProtectedItems.beginCreate has a new signature
  - Operation ReplicationProtectedItems.beginCreateAndWait has a new signature
  - Operation ReplicationProtectedItems.beginDelete has a new signature
  - Operation ReplicationProtectedItems.beginDeleteAndWait has a new signature
  - Operation ReplicationProtectedItems.beginFailoverCancel has a new signature
  - Operation ReplicationProtectedItems.beginFailoverCancelAndWait has a new signature
  - Operation ReplicationProtectedItems.beginFailoverCommit has a new signature
  - Operation ReplicationProtectedItems.beginFailoverCommitAndWait has a new signature
  - Operation ReplicationProtectedItems.beginPlannedFailover has a new signature
  - Operation ReplicationProtectedItems.beginPlannedFailoverAndWait has a new signature
  - Operation ReplicationProtectedItems.beginPurge has a new signature
  - Operation ReplicationProtectedItems.beginPurgeAndWait has a new signature
  - Operation ReplicationProtectedItems.beginRemoveDisks has a new signature
  - Operation ReplicationProtectedItems.beginRemoveDisksAndWait has a new signature
  - Operation ReplicationProtectedItems.beginRepairReplication has a new signature
  - Operation ReplicationProtectedItems.beginRepairReplicationAndWait has a new signature
  - Operation ReplicationProtectedItems.beginReprotect has a new signature
  - Operation ReplicationProtectedItems.beginReprotectAndWait has a new signature
  - Operation ReplicationProtectedItems.beginResolveHealthErrors has a new signature
  - Operation ReplicationProtectedItems.beginResolveHealthErrorsAndWait has a new signature
  - Operation ReplicationProtectedItems.beginSwitchProvider has a new signature
  - Operation ReplicationProtectedItems.beginSwitchProviderAndWait has a new signature
  - Operation ReplicationProtectedItems.beginTestFailover has a new signature
  - Operation ReplicationProtectedItems.beginTestFailoverAndWait has a new signature
  - Operation ReplicationProtectedItems.beginTestFailoverCleanup has a new signature
  - Operation ReplicationProtectedItems.beginTestFailoverCleanupAndWait has a new signature
  - Operation ReplicationProtectedItems.beginUnplannedFailover has a new signature
  - Operation ReplicationProtectedItems.beginUnplannedFailoverAndWait has a new signature
  - Operation ReplicationProtectedItems.beginUpdate has a new signature
  - Operation ReplicationProtectedItems.beginUpdateAndWait has a new signature
  - Operation ReplicationProtectedItems.beginUpdateAppliance has a new signature
  - Operation ReplicationProtectedItems.beginUpdateApplianceAndWait has a new signature
  - Operation ReplicationProtectedItems.beginUpdateMobilityService has a new signature
  - Operation ReplicationProtectedItems.beginUpdateMobilityServiceAndWait has a new signature
  - Operation ReplicationProtectedItems.get has a new signature
  - Operation ReplicationProtectedItems.list has a new signature
  - Operation ReplicationProtectedItems.listByReplicationProtectionContainers has a new signature
  - Operation ReplicationProtectionContainerMappings.beginCreate has a new signature
  - Operation ReplicationProtectionContainerMappings.beginCreateAndWait has a new signature
  - Operation ReplicationProtectionContainerMappings.beginDelete has a new signature
  - Operation ReplicationProtectionContainerMappings.beginDeleteAndWait has a new signature
  - Operation ReplicationProtectionContainerMappings.beginPurge has a new signature
  - Operation ReplicationProtectionContainerMappings.beginPurgeAndWait has a new signature
  - Operation ReplicationProtectionContainerMappings.beginUpdate has a new signature
  - Operation ReplicationProtectionContainerMappings.beginUpdateAndWait has a new signature
  - Operation ReplicationProtectionContainerMappings.get has a new signature
  - Operation ReplicationProtectionContainerMappings.list has a new signature
  - Operation ReplicationProtectionContainerMappings.listByReplicationProtectionContainers has a new signature
  - Operation ReplicationProtectionContainers.beginCreate has a new signature
  - Operation ReplicationProtectionContainers.beginCreateAndWait has a new signature
  - Operation ReplicationProtectionContainers.beginDelete has a new signature
  - Operation ReplicationProtectionContainers.beginDeleteAndWait has a new signature
  - Operation ReplicationProtectionContainers.beginDiscoverProtectableItem has a new signature
  - Operation ReplicationProtectionContainers.beginDiscoverProtectableItemAndWait has a new signature
  - Operation ReplicationProtectionContainers.beginSwitchProtection has a new signature
  - Operation ReplicationProtectionContainers.beginSwitchProtectionAndWait has a new signature
  - Operation ReplicationProtectionContainers.get has a new signature
  - Operation ReplicationProtectionContainers.list has a new signature
  - Operation ReplicationProtectionContainers.listByReplicationFabrics has a new signature
  - Operation ReplicationProtectionIntents.create has a new signature
  - Operation ReplicationProtectionIntents.get has a new signature
  - Operation ReplicationProtectionIntents.list has a new signature
  - Operation ReplicationRecoveryPlans.beginCreate has a new signature
  - Operation ReplicationRecoveryPlans.beginCreateAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginDelete has a new signature
  - Operation ReplicationRecoveryPlans.beginDeleteAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginFailoverCancel has a new signature
  - Operation ReplicationRecoveryPlans.beginFailoverCancelAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginFailoverCommit has a new signature
  - Operation ReplicationRecoveryPlans.beginFailoverCommitAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginPlannedFailover has a new signature
  - Operation ReplicationRecoveryPlans.beginPlannedFailoverAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginReprotect has a new signature
  - Operation ReplicationRecoveryPlans.beginReprotectAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginTestFailover has a new signature
  - Operation ReplicationRecoveryPlans.beginTestFailoverAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginTestFailoverCleanup has a new signature
  - Operation ReplicationRecoveryPlans.beginTestFailoverCleanupAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginUnplannedFailover has a new signature
  - Operation ReplicationRecoveryPlans.beginUnplannedFailoverAndWait has a new signature
  - Operation ReplicationRecoveryPlans.beginUpdate has a new signature
  - Operation ReplicationRecoveryPlans.beginUpdateAndWait has a new signature
  - Operation ReplicationRecoveryPlans.get has a new signature
  - Operation ReplicationRecoveryPlans.list has a new signature
  - Operation ReplicationRecoveryServicesProviders.beginCreate has a new signature
  - Operation ReplicationRecoveryServicesProviders.beginCreateAndWait has a new signature
  - Operation ReplicationRecoveryServicesProviders.beginDelete has a new signature
  - Operation ReplicationRecoveryServicesProviders.beginDeleteAndWait has a new signature
  - Operation ReplicationRecoveryServicesProviders.beginPurge has a new signature
  - Operation ReplicationRecoveryServicesProviders.beginPurgeAndWait has a new signature
  - Operation ReplicationRecoveryServicesProviders.beginRefreshProvider has a new signature
  - Operation ReplicationRecoveryServicesProviders.beginRefreshProviderAndWait has a new signature
  - Operation ReplicationRecoveryServicesProviders.get has a new signature
  - Operation ReplicationRecoveryServicesProviders.list has a new signature
  - Operation ReplicationRecoveryServicesProviders.listByReplicationFabrics has a new signature
  - Operation ReplicationStorageClassificationMappings.beginCreate has a new signature
  - Operation ReplicationStorageClassificationMappings.beginCreateAndWait has a new signature
  - Operation ReplicationStorageClassificationMappings.beginDelete has a new signature
  - Operation ReplicationStorageClassificationMappings.beginDeleteAndWait has a new signature
  - Operation ReplicationStorageClassificationMappings.get has a new signature
  - Operation ReplicationStorageClassificationMappings.list has a new signature
  - Operation ReplicationStorageClassificationMappings.listByReplicationStorageClassifications has a new signature
  - Operation ReplicationStorageClassifications.get has a new signature
  - Operation ReplicationStorageClassifications.list has a new signature
  - Operation ReplicationStorageClassifications.listByReplicationFabrics has a new signature
  - Operation ReplicationVaultHealth.beginRefresh has a new signature
  - Operation ReplicationVaultHealth.beginRefreshAndWait has a new signature
  - Operation ReplicationVaultHealth.get has a new signature
  - Operation ReplicationVaultSetting.beginCreate has a new signature
  - Operation ReplicationVaultSetting.beginCreateAndWait has a new signature
  - Operation ReplicationVaultSetting.get has a new signature
  - Operation ReplicationVaultSetting.list has a new signature
  - Operation ReplicationvCenters.beginCreate has a new signature
  - Operation ReplicationvCenters.beginCreateAndWait has a new signature
  - Operation ReplicationvCenters.beginDelete has a new signature
  - Operation ReplicationvCenters.beginDeleteAndWait has a new signature
  - Operation ReplicationvCenters.beginUpdate has a new signature
  - Operation ReplicationvCenters.beginUpdateAndWait has a new signature
  - Operation ReplicationvCenters.get has a new signature
  - Operation ReplicationvCenters.list has a new signature
  - Operation ReplicationvCenters.listByReplicationFabrics has a new signature
  - Operation SupportedOperatingSystemsOperations.get has a new signature
  - Operation TargetComputeSizes.listByReplicationProtectedItems has a new signature
  - Class SiteRecoveryManagementClient has a new signature
  - Interface ReplicationAppliancesListNextOptionalParams no longer has parameter filter
  - Interface ReplicationEventsListNextOptionalParams no longer has parameter filter
  - Interface ReplicationJobsListNextOptionalParams no longer has parameter filter
  - Interface ReplicationMigrationItemsListByReplicationProtectionContainersNextOptionalParams no longer has parameter filter
  - Interface ReplicationMigrationItemsListByReplicationProtectionContainersNextOptionalParams no longer has parameter skipToken
  - Interface ReplicationMigrationItemsListByReplicationProtectionContainersNextOptionalParams no longer has parameter takeToken
  - Interface ReplicationMigrationItemsListNextOptionalParams no longer has parameter filter
  - Interface ReplicationMigrationItemsListNextOptionalParams no longer has parameter skipToken
  - Interface ReplicationMigrationItemsListNextOptionalParams no longer has parameter takeToken
  - Interface ReplicationProtectableItemsListByReplicationProtectionContainersNextOptionalParams no longer has parameter filter
  - Interface ReplicationProtectableItemsListByReplicationProtectionContainersNextOptionalParams no longer has parameter skipToken
  - Interface ReplicationProtectableItemsListByReplicationProtectionContainersNextOptionalParams no longer has parameter take
  - Interface ReplicationProtectedItemsListNextOptionalParams no longer has parameter filter
  - Interface ReplicationProtectedItemsListNextOptionalParams no longer has parameter skipToken
  - Interface ReplicationProtectionIntentsListNextOptionalParams no longer has parameter skipToken
  - Interface ReplicationProtectionIntentsListNextOptionalParams no longer has parameter takeToken
  - Class SiteRecoveryManagementClient no longer has parameter resourceGroupName
  - Class SiteRecoveryManagementClient no longer has parameter resourceName
    
    
## 4.0.0 (2022-01-20)

The package of @azure/arm-recoveryservices-siterecovery is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).