/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EducationManagementClient } = require("@azure/arm-education");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a list of grants that Microsoft has provided.
 *
 * @summary Get a list of grants that Microsoft has provided.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/GrantList.json
 */
async function grantList() {
  const includeAllocatedBudget = false;
  const options = { includeAllocatedBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.grants.listAll(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Get a list of grants that Microsoft has provided.
 *
 * @summary Get a list of grants that Microsoft has provided.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/GrantListIncludeAllocatedBudget.json
 */
async function grantListIncludeAllocatedBudget() {
  const includeAllocatedBudget = true;
  const options = { includeAllocatedBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.grants.listAll(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  grantList();
  grantListIncludeAllocatedBudget();
}

main().catch(console.error);