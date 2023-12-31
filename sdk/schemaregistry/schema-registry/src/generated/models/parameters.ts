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
    defaultValue:
      "application/json; serialization=Avro, application/json; serialization=json, text/plain; charset=utf-8",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-10",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const schemaName: OperationURLParameter = {
  parameterPath: "schemaName",
  mapper: {
    constraints: {
      MaxLength: 50
    },
    serializedName: "schemaName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const schemaVersion: OperationURLParameter = {
  parameterPath: "schemaVersion",
  mapper: {
    serializedName: "schemaVersion",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const schemaContent: OperationParameter = {
  parameterPath: "schemaContent",
  mapper: {
    serializedName: "schemaContent",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    serializedName: "Content-Type",
    required: true,
    type: {
      name: "String"
    }
  }
};
