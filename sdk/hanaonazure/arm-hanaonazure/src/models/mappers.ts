/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "Display"
        }
      }
    }
  }
};

export const Display: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Display",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponseError"
        }
      }
    }
  }
};

export const ErrorResponseError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseError",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SapMonitorListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SapMonitorListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SapMonitor"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Tags: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Tags",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ProviderInstanceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderInstanceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderInstance"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const SapMonitor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SapMonitor",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      managedResourceGroupName: {
        serializedName: "properties.managedResourceGroupName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      logAnalyticsWorkspaceArmId: {
        serializedName: "properties.logAnalyticsWorkspaceArmId",
        type: {
          name: "String"
        }
      },
      enableCustomerAnalytics: {
        serializedName: "properties.enableCustomerAnalytics",
        type: {
          name: "Boolean"
        }
      },
      logAnalyticsWorkspaceId: {
        serializedName: "properties.logAnalyticsWorkspaceId",
        type: {
          name: "String"
        }
      },
      logAnalyticsWorkspaceSharedKey: {
        serializedName: "properties.logAnalyticsWorkspaceSharedKey",
        type: {
          name: "String"
        }
      },
      sapMonitorCollectorVersion: {
        serializedName: "properties.sapMonitorCollectorVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      monitorSubnet: {
        serializedName: "properties.monitorSubnet",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProviderInstance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderInstance",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      typePropertiesType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties.properties",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
