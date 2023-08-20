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
  Account as AccountMapper,
  RegenerateKeyParameters as RegenerateKeyParametersMapper,
  CheckSkuAvailabilityParameter as CheckSkuAvailabilityParameterMapper,
  CheckDomainAvailabilityParameter as CheckDomainAvailabilityParameterMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Deployment as DeploymentMapper,
  CommitmentPlan as CommitmentPlanMapper,
  PatchResourceTagsAndSku as PatchResourceTagsAndSkuMapper,
  CommitmentPlanAccountAssociation as CommitmentPlanAccountAssociationMapper
} from "../models/mappers";

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

export const account: OperationParameter = {
  parameterPath: "account",
  mapper: AccountMapper
};

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

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
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

export const accountName: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"),
      MaxLength: 64,
      MinLength: 2
    },
    serializedName: "accountName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-05-01",
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

export const keyName: OperationParameter = {
  parameterPath: "keyName",
  mapper: RegenerateKeyParametersMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
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

export const skus: OperationParameter = {
  parameterPath: "skus",
  mapper: CheckSkuAvailabilityParameterMapper
};

export const kind: OperationParameter = {
  parameterPath: "kind",
  mapper: CheckSkuAvailabilityParameterMapper
};

export const typeParam: OperationParameter = {
  parameterPath: "typeParam",
  mapper: CheckSkuAvailabilityParameterMapper
};

export const subdomainName: OperationParameter = {
  parameterPath: "subdomainName",
  mapper: CheckDomainAvailabilityParameterMapper
};

export const typeParam1: OperationParameter = {
  parameterPath: "typeParam",
  mapper: CheckDomainAvailabilityParameterMapper
};

export const kind1: OperationParameter = {
  parameterPath: ["options", "kind"],
  mapper: CheckDomainAvailabilityParameterMapper
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: PrivateEndpointConnectionMapper
};

export const deploymentName: OperationURLParameter = {
  parameterPath: "deploymentName",
  mapper: {
    serializedName: "deploymentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const deployment: OperationParameter = {
  parameterPath: "deployment",
  mapper: DeploymentMapper
};

export const commitmentPlanName: OperationURLParameter = {
  parameterPath: "commitmentPlanName",
  mapper: {
    serializedName: "commitmentPlanName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const commitmentPlan: OperationParameter = {
  parameterPath: "commitmentPlan",
  mapper: CommitmentPlanMapper
};

export const commitmentPlanName1: OperationURLParameter = {
  parameterPath: "commitmentPlanName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_.-]*$")
    },
    serializedName: "commitmentPlanName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const commitmentPlan1: OperationParameter = {
  parameterPath: "commitmentPlan",
  mapper: PatchResourceTagsAndSkuMapper
};

export const commitmentPlanAssociationName: OperationURLParameter = {
  parameterPath: "commitmentPlanAssociationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_.-]*$")
    },
    serializedName: "commitmentPlanAssociationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const association: OperationParameter = {
  parameterPath: "association",
  mapper: CommitmentPlanAccountAssociationMapper
};