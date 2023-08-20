/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SendMessageRequest,
  SmsSendOptionalParams,
  SmsSendOperationResponse
} from "../models";

/** Interface representing a Sms. */
export interface Sms {
  /**
   * Sends a SMS message from a phone number that belongs to the authenticated account.
   * @param sendMessageRequest Represents the body of the send message request.
   * @param options The options parameters.
   */
  send(
    sendMessageRequest: SendMessageRequest,
    options?: SmsSendOptionalParams
  ): Promise<SmsSendOperationResponse>;
}