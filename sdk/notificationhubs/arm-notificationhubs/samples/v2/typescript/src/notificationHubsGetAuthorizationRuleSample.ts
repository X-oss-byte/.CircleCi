/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NotificationHubsManagementClient } from "@azure/arm-notificationhubs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets an authorization rule for a NotificationHub by name.
 *
 * @summary Gets an authorization rule for a NotificationHub by name.
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/stable/2017-04-01/examples/NotificationHubs/NotificationHubAuthorizationRuleGet.json
 */
async function notificationHubAuthorizationRuleGet() {
  const subscriptionId = "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName = "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const notificationHubName = "nh-sdk-hub";
  const authorizationRuleName = "DefaultListenSharedAccessSignature";
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.notificationHubs.getAuthorizationRule(
    resourceGroupName,
    namespaceName,
    notificationHubName,
    authorizationRuleName
  );
  console.log(result);
}

notificationHubAuthorizationRuleGet().catch(console.error);
