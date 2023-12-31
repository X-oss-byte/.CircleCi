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
  AzureADAdministrator as AzureADAdministratorMapper,
  BackupAndExportRequest as BackupAndExportRequestMapper,
  Configuration as ConfigurationMapper,
  ConfigurationListForBatchUpdate as ConfigurationListForBatchUpdateMapper,
  Database as DatabaseMapper,
  FirewallRule as FirewallRuleMapper,
  Server as ServerMapper,
  ServerForUpdate as ServerForUpdateMapper,
  ServerRestartParameter as ServerRestartParameterMapper,
  ServerGtidSetParameter as ServerGtidSetParameterMapper,
  VirtualNetworkSubnetUsageParameter as VirtualNetworkSubnetUsageParameterMapper,
  NameAvailabilityRequest as NameAvailabilityRequestMapper
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: AzureADAdministratorMapper
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-12-01-preview",
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

export const serverName: OperationURLParameter = {
  parameterPath: "serverName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9][-a-z0-9]*(?<!-)$")
    },
    serializedName: "serverName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const administratorName: OperationURLParameter = {
  parameterPath: "administratorName",
  mapper: {
    serializedName: "administratorName",
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

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-09-30-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const backupName: OperationURLParameter = {
  parameterPath: "backupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$")
    },
    serializedName: "backupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: BackupAndExportRequestMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConfigurationMapper
};

export const configurationName: OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    serializedName: "configurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConfigurationListForBatchUpdateMapper
};

export const tags: OperationQueryParameter = {
  parameterPath: ["options", "tags"],
  mapper: {
    serializedName: "tags",
    type: {
      name: "String"
    }
  }
};

export const keyword: OperationQueryParameter = {
  parameterPath: ["options", "keyword"],
  mapper: {
    serializedName: "keyword",
    type: {
      name: "String"
    }
  }
};

export const page: OperationQueryParameter = {
  parameterPath: ["options", "page"],
  mapper: {
    serializedName: "page",
    type: {
      name: "Number"
    }
  }
};

export const pageSize: OperationQueryParameter = {
  parameterPath: ["options", "pageSize"],
  mapper: {
    serializedName: "pageSize",
    type: {
      name: "Number"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: DatabaseMapper
};

export const databaseName: OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    serializedName: "databaseName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: FirewallRuleMapper
};

export const firewallRuleName: OperationURLParameter = {
  parameterPath: "firewallRuleName",
  mapper: {
    serializedName: "firewallRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerMapper
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerForUpdateMapper
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerRestartParameterMapper
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerGtidSetParameterMapper
};

export const locationName: OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    serializedName: "locationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkSubnetUsageParameterMapper
};

export const nameAvailabilityRequest: OperationParameter = {
  parameterPath: "nameAvailabilityRequest",
  mapper: NameAvailabilityRequestMapper
};
