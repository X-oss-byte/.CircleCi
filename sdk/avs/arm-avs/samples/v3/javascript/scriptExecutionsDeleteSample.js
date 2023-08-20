/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Cancel a ScriptExecution in a private cloud
 *
 * @summary Cancel a ScriptExecution in a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/ScriptExecutions_Delete.json
 */
async function scriptExecutionsDelete() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const scriptExecutionName = "{scriptExecutionName}";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.scriptExecutions.beginDeleteAndWait(
    resourceGroupName,
    privateCloudName,
    scriptExecutionName
  );
  console.log(result);
}

async function main() {
  scriptExecutionsDelete();
}

main().catch(console.error);