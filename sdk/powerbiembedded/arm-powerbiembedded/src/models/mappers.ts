/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const WorkspaceCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCollection",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
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
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureSku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
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
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateWorkspaceCollectionRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateWorkspaceCollectionRequest",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      }
    }
  }
};

export const UpdateWorkspaceCollectionRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateWorkspaceCollectionRequest",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      }
    }
  }
};

export const CheckNameRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameRequest",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        defaultValue: "Microsoft.PowerBI/workspaceCollections",
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameResponse",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceCollectionList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCollectionList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WorkspaceCollection"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceCollectionAccessKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCollectionAccessKeys",
    modelProperties: {
      key1: {
        serializedName: "key1",
        type: {
          name: "String"
        }
      },
      key2: {
        serializedName: "key2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceCollectionAccessKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCollectionAccessKey",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        type: {
          name: "Enum",
          allowedValues: ["key1", "key2"]
        }
      }
    }
  }
};

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
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Workspace"
            }
          }
        }
      }
    }
  }
};

export const Workspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MigrateWorkspaceCollectionRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MigrateWorkspaceCollectionRequest",
    modelProperties: {
      targetResourceGroup: {
        serializedName: "targetResourceGroup",
        type: {
          name: "String"
        }
      },
      resources: {
        serializedName: "resources",
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
