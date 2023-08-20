/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { UsageAggregates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { UsageManagementClient } from "../usageManagementClient";
import {
  UsageAggregation,
  UsageAggregatesListNextOptionalParams,
  UsageAggregatesListOptionalParams,
  UsageAggregatesListResponse,
  UsageAggregatesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing UsageAggregates operations. */
export class UsageAggregatesImpl implements UsageAggregates {
  private readonly client: UsageManagementClient;

  /**
   * Initialize a new instance of the class UsageAggregates class.
   * @param client Reference to the service client
   */
  constructor(client: UsageManagementClient) {
    this.client = client;
  }

  /**
   * Query aggregated Azure subscription consumption data for a date range.
   * @param reportedStartTime The start of the time range to retrieve data for.
   * @param reportedEndTime The end of the time range to retrieve data for.
   * @param options The options parameters.
   */
  public list(
    reportedStartTime: Date,
    reportedEndTime: Date,
    options?: UsageAggregatesListOptionalParams
  ): PagedAsyncIterableIterator<UsageAggregation> {
    const iter = this.listPagingAll(
      reportedStartTime,
      reportedEndTime,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          reportedStartTime,
          reportedEndTime,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    reportedStartTime: Date,
    reportedEndTime: Date,
    options?: UsageAggregatesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<UsageAggregation[]> {
    let result: UsageAggregatesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(reportedStartTime, reportedEndTime, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    reportedStartTime: Date,
    reportedEndTime: Date,
    options?: UsageAggregatesListOptionalParams
  ): AsyncIterableIterator<UsageAggregation> {
    for await (const page of this.listPagingPage(
      reportedStartTime,
      reportedEndTime,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Query aggregated Azure subscription consumption data for a date range.
   * @param reportedStartTime The start of the time range to retrieve data for.
   * @param reportedEndTime The end of the time range to retrieve data for.
   * @param options The options parameters.
   */
  private _list(
    reportedStartTime: Date,
    reportedEndTime: Date,
    options?: UsageAggregatesListOptionalParams
  ): Promise<UsageAggregatesListResponse> {
    return this.client.sendOperationRequest(
      { reportedStartTime, reportedEndTime, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: UsageAggregatesListNextOptionalParams
  ): Promise<UsageAggregatesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Commerce/UsageAggregates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageAggregationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.reportedStartTime,
    Parameters.reportedEndTime,
    Parameters.showDetails,
    Parameters.aggregationGranularity,
    Parameters.continuationToken,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageAggregationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};