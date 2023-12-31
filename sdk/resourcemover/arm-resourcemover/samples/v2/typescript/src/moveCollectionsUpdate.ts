/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Updates a move collection.
 *
 * @summary Updates a move collection.
 * x-ms-original-file: specification/resourcemover/resource-manager/Microsoft.Migrate/stable/2021-08-01/examples/MoveCollections_Update.json
 */
import {
  UpdateMoveCollectionRequest,
  ResourceMoverServiceAPI
} from "@azure/arm-resourcemover";
import { DefaultAzureCredential } from "@azure/identity";

async function moveCollectionsUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const moveCollectionName = "movecollection1";
  const body: UpdateMoveCollectionRequest = {
    identity: { type: "SystemAssigned" },
    tags: { key1: "mc1" }
  };
  const options = { body: body };
  const credential = new DefaultAzureCredential();
  const client = new ResourceMoverServiceAPI(credential, subscriptionId);
  const result = await client.moveCollections.update(
    resourceGroupName,
    moveCollectionName,
    options
  );
  console.log(result);
}

moveCollectionsUpdate().catch(console.error);
