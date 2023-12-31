/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const LocationsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationsResponse",
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
      recipientName: {
        serializedName: "properties.recipientName",
        type: {
          name: "String"
        }
      },
      streetAddress1: {
        serializedName: "properties.streetAddress1",
        type: {
          name: "String"
        }
      },
      streetAddress2: {
        serializedName: "properties.streetAddress2",
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "properties.city",
        type: {
          name: "String"
        }
      },
      stateOrProvince: {
        serializedName: "properties.stateOrProvince",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "properties.postalCode",
        type: {
          name: "String"
        }
      },
      countryOrRegion: {
        serializedName: "properties.countryOrRegion",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "properties.phone",
        type: {
          name: "String"
        }
      },
      additionalShippingInformation: {
        serializedName: "properties.additionalShippingInformation",
        type: {
          name: "String"
        }
      },
      supportedCarriers: {
        serializedName: "properties.supportedCarriers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      alternateLocations: {
        serializedName: "properties.alternateLocations",
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

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "error.code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "error.message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "error.target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "error.details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseErrorDetailsItem"
            }
          }
        }
      },
      innererror: {
        serializedName: "error.innererror",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ErrorResponseErrorDetailsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseErrorDetailsItem",
    modelProperties: {
      code: {
        serializedName: "code",
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
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListJobsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ListJobsResponse",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JobResponse"
            }
          }
        }
      }
    }
  }
};

export const JobResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobResponse",
    modelProperties: {
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
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
          value: { type: { name: "any" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "JobDetails"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "IdentityDetails"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const JobDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDetails",
    modelProperties: {
      storageAccountId: {
        serializedName: "storageAccountId",
        type: {
          name: "String"
        }
      },
      jobType: {
        serializedName: "jobType",
        type: {
          name: "String"
        }
      },
      returnAddress: {
        serializedName: "returnAddress",
        type: {
          name: "Composite",
          className: "ReturnAddress"
        }
      },
      returnShipping: {
        serializedName: "returnShipping",
        type: {
          name: "Composite",
          className: "ReturnShipping"
        }
      },
      shippingInformation: {
        serializedName: "shippingInformation",
        type: {
          name: "Composite",
          className: "ShippingInformation"
        }
      },
      deliveryPackage: {
        serializedName: "deliveryPackage",
        type: {
          name: "Composite",
          className: "DeliveryPackageInformation"
        }
      },
      returnPackage: {
        serializedName: "returnPackage",
        type: {
          name: "Composite",
          className: "PackageInformation"
        }
      },
      diagnosticsPath: {
        serializedName: "diagnosticsPath",
        type: {
          name: "String"
        }
      },
      logLevel: {
        serializedName: "logLevel",
        type: {
          name: "String"
        }
      },
      backupDriveManifest: {
        defaultValue: false,
        serializedName: "backupDriveManifest",
        type: {
          name: "Boolean"
        }
      },
      state: {
        defaultValue: "Creating",
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      cancelRequested: {
        defaultValue: false,
        serializedName: "cancelRequested",
        type: {
          name: "Boolean"
        }
      },
      percentComplete: {
        serializedName: "percentComplete",
        type: {
          name: "Number"
        }
      },
      incompleteBlobListUri: {
        serializedName: "incompleteBlobListUri",
        type: {
          name: "String"
        }
      },
      driveList: {
        serializedName: "driveList",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DriveStatus"
            }
          }
        }
      },
      export: {
        serializedName: "export",
        type: {
          name: "Composite",
          className: "Export"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      encryptionKey: {
        serializedName: "encryptionKey",
        type: {
          name: "Composite",
          className: "EncryptionKeyDetails"
        }
      }
    }
  }
};

export const ReturnAddress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReturnAddress",
    modelProperties: {
      recipientName: {
        serializedName: "recipientName",
        required: true,
        type: {
          name: "String"
        }
      },
      streetAddress1: {
        serializedName: "streetAddress1",
        required: true,
        type: {
          name: "String"
        }
      },
      streetAddress2: {
        serializedName: "streetAddress2",
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "city",
        required: true,
        type: {
          name: "String"
        }
      },
      stateOrProvince: {
        serializedName: "stateOrProvince",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        required: true,
        type: {
          name: "String"
        }
      },
      countryOrRegion: {
        serializedName: "countryOrRegion",
        required: true,
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        required: true,
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ReturnShipping: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReturnShipping",
    modelProperties: {
      carrierName: {
        serializedName: "carrierName",
        required: true,
        type: {
          name: "String"
        }
      },
      carrierAccountNumber: {
        serializedName: "carrierAccountNumber",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ShippingInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ShippingInformation",
    modelProperties: {
      recipientName: {
        serializedName: "recipientName",
        type: {
          name: "String"
        }
      },
      streetAddress1: {
        serializedName: "streetAddress1",
        type: {
          name: "String"
        }
      },
      streetAddress2: {
        serializedName: "streetAddress2",
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "city",
        type: {
          name: "String"
        }
      },
      stateOrProvince: {
        serializedName: "stateOrProvince",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String"
        }
      },
      countryOrRegion: {
        serializedName: "countryOrRegion",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      },
      additionalInformation: {
        serializedName: "additionalInformation",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeliveryPackageInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeliveryPackageInformation",
    modelProperties: {
      carrierName: {
        serializedName: "carrierName",
        required: true,
        type: {
          name: "String"
        }
      },
      trackingNumber: {
        serializedName: "trackingNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      driveCount: {
        serializedName: "driveCount",
        type: {
          name: "Number"
        }
      },
      shipDate: {
        serializedName: "shipDate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PackageInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PackageInformation",
    modelProperties: {
      carrierName: {
        serializedName: "carrierName",
        required: true,
        type: {
          name: "String"
        }
      },
      trackingNumber: {
        serializedName: "trackingNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      driveCount: {
        serializedName: "driveCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      shipDate: {
        serializedName: "shipDate",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DriveStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DriveStatus",
    modelProperties: {
      driveId: {
        serializedName: "driveId",
        type: {
          name: "String"
        }
      },
      bitLockerKey: {
        serializedName: "bitLockerKey",
        type: {
          name: "String"
        }
      },
      manifestFile: {
        serializedName: "manifestFile",
        type: {
          name: "String"
        }
      },
      manifestHash: {
        serializedName: "manifestHash",
        type: {
          name: "String"
        }
      },
      driveHeaderHash: {
        serializedName: "driveHeaderHash",
        type: {
          name: "String"
        }
      },
      state: {
        defaultValue: "Specified",
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "copyStatus",
        type: {
          name: "String"
        }
      },
      percentComplete: {
        serializedName: "percentComplete",
        type: {
          name: "Number"
        }
      },
      verboseLogUri: {
        serializedName: "verboseLogUri",
        type: {
          name: "String"
        }
      },
      errorLogUri: {
        serializedName: "errorLogUri",
        type: {
          name: "String"
        }
      },
      manifestUri: {
        serializedName: "manifestUri",
        type: {
          name: "String"
        }
      },
      bytesSucceeded: {
        serializedName: "bytesSucceeded",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Export: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Export",
    modelProperties: {
      blobListBlobPath: {
        serializedName: "blobListBlobPath",
        type: {
          name: "String"
        }
      },
      blobPath: {
        serializedName: "blobList.blobPath",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      blobPathPrefix: {
        serializedName: "blobList.blobPathPrefix",
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

export const EncryptionKeyDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionKeyDetails",
    modelProperties: {
      kekType: {
        defaultValue: "MicrosoftManaged",
        serializedName: "kekType",
        type: {
          name: "String"
        }
      },
      kekUrl: {
        serializedName: "kekUrl",
        type: {
          name: "String"
        }
      },
      kekVaultResourceID: {
        serializedName: "kekVaultResourceID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IdentityDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IdentityDetails",
    modelProperties: {
      type: {
        defaultValue: "None",
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      principalId: {
        serializedName: "principalId",
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
      }
    }
  }
};

export const UpdateJobParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateJobParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      cancelRequested: {
        defaultValue: false,
        serializedName: "properties.cancelRequested",
        type: {
          name: "Boolean"
        }
      },
      state: {
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      },
      returnAddress: {
        serializedName: "properties.returnAddress",
        type: {
          name: "Composite",
          className: "ReturnAddress"
        }
      },
      returnShipping: {
        serializedName: "properties.returnShipping",
        type: {
          name: "Composite",
          className: "ReturnShipping"
        }
      },
      deliveryPackage: {
        serializedName: "properties.deliveryPackage",
        type: {
          name: "Composite",
          className: "DeliveryPackageInformation"
        }
      },
      logLevel: {
        serializedName: "properties.logLevel",
        type: {
          name: "String"
        }
      },
      backupDriveManifest: {
        defaultValue: false,
        serializedName: "properties.backupDriveManifest",
        type: {
          name: "Boolean"
        }
      },
      driveList: {
        serializedName: "properties.driveList",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DriveStatus"
            }
          }
        }
      }
    }
  }
};

export const PutJobParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PutJobParameters",
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
          value: { type: { name: "any" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "JobDetails"
        }
      }
    }
  }
};

export const GetBitLockerKeysResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetBitLockerKeysResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DriveBitLockerKey"
            }
          }
        }
      }
    }
  }
};

export const DriveBitLockerKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DriveBitLockerKey",
    modelProperties: {
      bitLockerKey: {
        serializedName: "bitLockerKey",
        type: {
          name: "String"
        }
      },
      driveId: {
        serializedName: "driveId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListOperationsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ListOperationsResponse",
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
        required: true,
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "display.provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "display.resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "display.operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "display.description",
        type: {
          name: "String"
        }
      }
    }
  }
};
