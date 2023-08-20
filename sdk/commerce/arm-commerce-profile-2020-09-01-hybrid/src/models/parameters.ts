/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const reportedStartTime: OperationQueryParameter = {
  parameterPath: "reportedStartTime",
  mapper: {
    serializedName: "reportedStartTime",
    required: true,
    type: {
      name: "DateTime"
    }
  }
};

export const reportedEndTime: OperationQueryParameter = {
  parameterPath: "reportedEndTime",
  mapper: {
    serializedName: "reportedEndTime",
    required: true,
    type: {
      name: "DateTime"
    }
  }
};

export const showDetails: OperationQueryParameter = {
  parameterPath: ["options", "showDetails"],
  mapper: {
    serializedName: "showDetails",
    type: {
      name: "Boolean"
    }
  }
};

export const aggregationGranularity: OperationQueryParameter = {
  parameterPath: ["options", "aggregationGranularity"],
  mapper: {
    defaultValue: "Daily",
    serializedName: "aggregationGranularity",
    type: {
      name: "Enum",
      allowedValues: ["Daily", "Hourly"]
    }
  }
};

export const continuationToken: OperationQueryParameter = {
  parameterPath: ["options", "continuationToken"],
  mapper: {
    serializedName: "continuationToken",
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2015-06-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const filter: OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    required: true,
    type: {
      name: "String"
    }
  }
};