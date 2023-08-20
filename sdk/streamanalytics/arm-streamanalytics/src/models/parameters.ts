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
import {
  StreamingJob as StreamingJobMapper,
  StartStreamingJobParameters as StartStreamingJobParametersMapper,
  ScaleStreamingJobParameters as ScaleStreamingJobParametersMapper,
  Input as InputMapper,
  Output as OutputMapper,
  Transformation as TransformationMapper,
  FunctionModel as FunctionModelMapper,
  FunctionRetrieveDefaultDefinitionParameters as FunctionRetrieveDefaultDefinitionParametersMapper,
  Cluster as ClusterMapper,
  PrivateEndpoint as PrivateEndpointMapper
} from "../models/mappers";

export const accept: OperationParameter = {
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-03-01",
    isConstant: true,
    serializedName: "api-version",
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

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const streamingJob: OperationParameter = {
  parameterPath: "streamingJob",
  mapper: StreamingJobMapper
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    serializedName: "jobName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const startJobParameters: OperationParameter = {
  parameterPath: ["options", "startJobParameters"],
  mapper: StartStreamingJobParametersMapper
};

export const scaleJobParameters: OperationParameter = {
  parameterPath: ["options", "scaleJobParameters"],
  mapper: ScaleStreamingJobParametersMapper
};

export const input: OperationParameter = {
  parameterPath: "input",
  mapper: InputMapper
};

export const inputName: OperationURLParameter = {
  parameterPath: "inputName",
  mapper: {
    serializedName: "inputName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};

export const input1: OperationParameter = {
  parameterPath: ["options", "input"],
  mapper: InputMapper
};

export const output: OperationParameter = {
  parameterPath: "output",
  mapper: OutputMapper
};

export const outputName: OperationURLParameter = {
  parameterPath: "outputName",
  mapper: {
    serializedName: "outputName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const output1: OperationParameter = {
  parameterPath: ["options", "output"],
  mapper: OutputMapper
};

export const transformation: OperationParameter = {
  parameterPath: "transformation",
  mapper: TransformationMapper
};

export const transformationName: OperationURLParameter = {
  parameterPath: "transformationName",
  mapper: {
    serializedName: "transformationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const functionParam: OperationParameter = {
  parameterPath: "functionParam",
  mapper: FunctionModelMapper
};

export const functionName: OperationURLParameter = {
  parameterPath: "functionName",
  mapper: {
    serializedName: "functionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const functionParam1: OperationParameter = {
  parameterPath: ["options", "function"],
  mapper: FunctionModelMapper
};

export const functionRetrieveDefaultDefinitionParameters: OperationParameter = {
  parameterPath: ["options", "functionRetrieveDefaultDefinitionParameters"],
  mapper: FunctionRetrieveDefaultDefinitionParametersMapper
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cluster: OperationParameter = {
  parameterPath: "cluster",
  mapper: ClusterMapper
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpoint: OperationParameter = {
  parameterPath: "privateEndpoint",
  mapper: PrivateEndpointMapper
};

export const privateEndpointName: OperationURLParameter = {
  parameterPath: "privateEndpointName",
  mapper: {
    serializedName: "privateEndpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};