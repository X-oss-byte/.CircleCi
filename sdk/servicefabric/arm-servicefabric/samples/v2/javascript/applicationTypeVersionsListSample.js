/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ServiceFabricManagementClient } = require("@azure/arm-servicefabric");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets all application type version resources created or in the process of being created in the Service Fabric application type name resource.
 *
 * @summary Gets all application type version resources created or in the process of being created in the Service Fabric application type name resource.
 * x-ms-original-file: specification/servicefabric/resource-manager/Microsoft.ServiceFabric/stable/2021-06-01/examples/ApplicationTypeVersionListOperation_example.json
 */
async function getAListOfApplicationTypeVersionResources() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "resRg";
  const clusterName = "myCluster";
  const applicationTypeName = "myAppType";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagementClient(credential, subscriptionId);
  const result = await client.applicationTypeVersions.list(
    resourceGroupName,
    clusterName,
    applicationTypeName
  );
  console.log(result);
}

getAListOfApplicationTypeVersionResources().catch(console.error);
