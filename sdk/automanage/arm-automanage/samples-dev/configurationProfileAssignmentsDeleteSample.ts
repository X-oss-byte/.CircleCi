/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomanageClient } from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a configuration profile assignment
 *
 * @summary Delete a configuration profile assignment
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/deleteConfigurationProfileAssignment.json
 */
async function deleteAnConfigurationProfileAssignment() {
  const subscriptionId =
    process.env["AUTOMANAGE_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const resourceGroupName =
    process.env["AUTOMANAGE_RESOURCE_GROUP"] || "myResourceGroupName";
  const configurationProfileAssignmentName = "default";
  const vmName = "myVMName";
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const result = await client.configurationProfileAssignments.delete(
    resourceGroupName,
    configurationProfileAssignmentName,
    vmName
  );
  console.log(result);
}

async function main() {
  deleteAnConfigurationProfileAssignment();
}

main().catch(console.error);