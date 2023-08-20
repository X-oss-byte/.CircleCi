/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AdvisorManagementClient } = require("@azure/arm-advisor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the list of metadata entities.
 *
 * @summary Gets the list of metadata entities.
 * x-ms-original-file: specification/advisor/resource-manager/Microsoft.Advisor/stable/2020-01-01/examples/ListRecommendationMetadata.json
 */
async function getMetadata() {
  const credential = new DefaultAzureCredential();
  const client = new AdvisorManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.recommendationMetadata.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getMetadata();
}

main().catch(console.error);