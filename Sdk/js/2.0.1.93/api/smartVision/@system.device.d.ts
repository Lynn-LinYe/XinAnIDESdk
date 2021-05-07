/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface IDevice {
  /**
   * Brand.
   */
  brand: string;

  /**
   * Manufacturer.
   */
  manufacturer: string;

  /**
   * Model.
   */
  model: string;

  /**
   * Product.
   */
  product: string;

  /**
   * Window width.
   */
  windowWidth: number;

  /**
   * Window height.
   */
  windowHeight: number;
}

export default class Device {
  /**
   * Obtains the device information.
   * @param options options.
   */
  static getInfo(options?: {
    /**
     * Called when the device information is obtained.
     */
    success?: (data: IDevice) => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;
}