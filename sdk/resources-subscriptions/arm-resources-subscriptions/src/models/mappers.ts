/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
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
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
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
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
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
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const LocationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Location"
            }
          }
        }
      }
    }
  }
};

export const Location: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Location",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
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
          name: "Enum",
          allowedValues: ["Region", "EdgeZone"]
        }
      },
      displayName: {
        serializedName: "displayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      regionalDisplayName: {
        serializedName: "regionalDisplayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "LocationMetadata"
        }
      },
      availabilityZoneMappings: {
        serializedName: "availabilityZoneMappings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailabilityZoneMappings"
            }
          }
        }
      }
    }
  }
};

export const LocationMetadata: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationMetadata",
    modelProperties: {
      regionType: {
        serializedName: "regionType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      regionCategory: {
        serializedName: "regionCategory",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      geography: {
        serializedName: "geography",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      geographyGroup: {
        serializedName: "geographyGroup",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      longitude: {
        serializedName: "longitude",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      latitude: {
        serializedName: "latitude",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      physicalLocation: {
        serializedName: "physicalLocation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      pairedRegion: {
        serializedName: "pairedRegion",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PairedRegion"
            }
          }
        }
      },
      homeLocation: {
        serializedName: "homeLocation",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PairedRegion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PairedRegion",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailabilityZoneMappings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityZoneMappings",
    modelProperties: {
      logicalZone: {
        serializedName: "logicalZone",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      physicalZone: {
        serializedName: "physicalZone",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Subscription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Subscription",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Enabled", "Warned", "PastDue", "Disabled", "Deleted"]
        }
      },
      subscriptionPolicies: {
        serializedName: "subscriptionPolicies",
        type: {
          name: "Composite",
          className: "SubscriptionPolicies"
        }
      },
      authorizationSource: {
        serializedName: "authorizationSource",
        type: {
          name: "String"
        }
      },
      managedByTenants: {
        serializedName: "managedByTenants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedByTenant"
            }
          }
        }
      },
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

export const SubscriptionPolicies: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionPolicies",
    modelProperties: {
      locationPlacementId: {
        serializedName: "locationPlacementId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      quotaId: {
        serializedName: "quotaId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      spendingLimit: {
        serializedName: "spendingLimit",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["On", "Off", "CurrentPeriodOff"]
        }
      }
    }
  }
};

export const ManagedByTenant: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedByTenant",
    modelProperties: {
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Subscription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TenantListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TenantIdDescription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantIdDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TenantIdDescription",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantCategory: {
        serializedName: "tenantCategory",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Home", "ProjectedBy", "ManagedBy"]
        }
      },
      country: {
        serializedName: "country",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      domains: {
        serializedName: "domains",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      defaultDomain: {
        serializedName: "defaultDomain",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantType: {
        serializedName: "tenantType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantBrandingLogoUrl: {
        serializedName: "tenantBrandingLogoUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckZonePeersRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckZonePeersRequest",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      subscriptionIds: {
        serializedName: "subscriptionIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CheckZonePeersResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckZonePeersResult",
    modelProperties: {
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      availabilityZonePeers: {
        serializedName: "availabilityZonePeers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailabilityZonePeers"
            }
          }
        }
      }
    }
  }
};

export const AvailabilityZonePeers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityZonePeers",
    modelProperties: {
      availabilityZone: {
        serializedName: "availabilityZone",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      peers: {
        serializedName: "peers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Peers"
            }
          }
        }
      }
    }
  }
};

export const Peers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Peers",
    modelProperties: {
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      availabilityZone: {
        serializedName: "availabilityZone",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponseAutoGenerated: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseAutoGenerated",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
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
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ResourceName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceName",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckResourceNameResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckResourceNameResult",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationAutoGenerated: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationAutoGenerated",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayAutoGenerated"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplayAutoGenerated: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplayAutoGenerated",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResultAutoGenerated: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResultAutoGenerated",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationAutoGenerated"
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
