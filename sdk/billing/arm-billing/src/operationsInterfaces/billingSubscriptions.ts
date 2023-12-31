/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  BillingSubscription,
  BillingSubscriptionsListByCustomerOptionalParams,
  BillingSubscriptionsListByBillingAccountOptionalParams,
  BillingSubscriptionsListByBillingProfileOptionalParams,
  BillingSubscriptionsListByInvoiceSectionOptionalParams,
  BillingSubscriptionsGetOptionalParams,
  BillingSubscriptionsGetResponse,
  BillingSubscriptionsUpdateOptionalParams,
  BillingSubscriptionsUpdateResponse,
  TransferBillingSubscriptionRequestProperties,
  BillingSubscriptionsMoveOptionalParams,
  BillingSubscriptionsMoveResponse,
  BillingSubscriptionsValidateMoveOptionalParams,
  BillingSubscriptionsValidateMoveResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BillingSubscriptions. */
export interface BillingSubscriptions {
  /**
   * Lists the subscriptions for a customer. The operation is supported only for billing accounts with
   * agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  listByCustomer(
    billingAccountName: string,
    customerName: string,
    options?: BillingSubscriptionsListByCustomerOptionalParams
  ): PagedAsyncIterableIterator<BillingSubscription>;
  /**
   * Lists the subscriptions for a billing account. The operation is supported for billing accounts with
   * agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  listByBillingAccount(
    billingAccountName: string,
    options?: BillingSubscriptionsListByBillingAccountOptionalParams
  ): PagedAsyncIterableIterator<BillingSubscription>;
  /**
   * Lists the subscriptions that are billed to a billing profile. The operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingSubscriptionsListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<BillingSubscription>;
  /**
   * Lists the subscriptions that are billed to an invoice section. The operation is supported only for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingSubscriptionsListByInvoiceSectionOptionalParams
  ): PagedAsyncIterableIterator<BillingSubscription>;
  /**
   * Gets a subscription by its ID. The operation is supported for billing accounts with agreement type
   * Microsoft Customer Agreement and Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    options?: BillingSubscriptionsGetOptionalParams
  ): Promise<BillingSubscriptionsGetResponse>;
  /**
   * Updates the properties of a billing subscription. Currently, cost center can be updated. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing subscription operation.
   * @param options The options parameters.
   */
  update(
    billingAccountName: string,
    parameters: BillingSubscription,
    options?: BillingSubscriptionsUpdateOptionalParams
  ): Promise<BillingSubscriptionsUpdateResponse>;
  /**
   * Moves a subscription's charges to a new invoice section. The new invoice section must belong to the
   * same billing profile as the existing invoice section. This operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the move subscription operation.
   * @param options The options parameters.
   */
  beginMove(
    billingAccountName: string,
    parameters: TransferBillingSubscriptionRequestProperties,
    options?: BillingSubscriptionsMoveOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BillingSubscriptionsMoveResponse>,
      BillingSubscriptionsMoveResponse
    >
  >;
  /**
   * Moves a subscription's charges to a new invoice section. The new invoice section must belong to the
   * same billing profile as the existing invoice section. This operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the move subscription operation.
   * @param options The options parameters.
   */
  beginMoveAndWait(
    billingAccountName: string,
    parameters: TransferBillingSubscriptionRequestProperties,
    options?: BillingSubscriptionsMoveOptionalParams
  ): Promise<BillingSubscriptionsMoveResponse>;
  /**
   * Validates if a subscription's charges can be moved to a new invoice section. This operation is
   * supported for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the validate move eligibility operation.
   * @param options The options parameters.
   */
  validateMove(
    billingAccountName: string,
    parameters: TransferBillingSubscriptionRequestProperties,
    options?: BillingSubscriptionsValidateMoveOptionalParams
  ): Promise<BillingSubscriptionsValidateMoveResponse>;
}
