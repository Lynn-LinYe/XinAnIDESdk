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

export interface IGeolocation {
  /**
   * Longitude.
   */
  longitude: number;

  /**
   * Latitude.
   */
  latitude: number;

  /**
   * Location accuracy.
   */
  accuracy: number;

  /**
   * Time when the location is obtained.
   */
  time: number;
}

export interface ILocationType {
  /**
   * Available location types, ['gps']
   */
  types: Array<string>;
}

export default class Geolocation {
  /**
   * Obtains the geographic location.
   * @param options options.
   */
  static getLocation(options?: {
    /**
     * Timeout duration, in milliseconds. The default value is 180000.
     * The timeout duration is necessary in case no result is returned
     * if the request to obtain the geographic location is rejected for the lack of the required permission,
     * weak positioning signal, or incorrect location settings.
     * After the timeout duration expires, the fail function will be called.
     * The value is a 32-digit positive integer.
     * If the value set is less than or equal to 0, the default value will be used.
     */
    timeout?: number;

    /**
     * Coordinate system type.
     * Available types can be obtained using getSupportedCoordTypes.
     * The default type is wgs84.
     */
    coordType?: string;

    /**
     * Called when the geographic location is obtained.
     */
    success?: (data: IGeolocation) => void;

    /**
     * Called when the location types fail to be obtained
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains the supported location types.
   * @param options options.
   */
  static getLocationType(options?: {
    /**
     * Called when the location types are obtained
     */
    success?: (data: ILocationType) => void;

    /**
     * Called when the location types fail to be obtained
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Listens to the geographical location.
   * If this method is called multiple times, the last call takes effect.
   * @param options options.
   */
  static subscribe(options: {
    /**
     * Coordinate system type.
     * Available types can be obtained using getSupportedCoordTypes.
     * The default type is wgs84.
     */
    coordType?: string;

    /**
     * Called whenever the geographical location changes.
     */
    success: (data: IGeolocation) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Cancels listening to the geographical location.
   */
  static unsubscribe(): void;

  /**
   * Obtains coordinate system types supported by the device.
   * @returns A string array of the supported coordinate system types.
   */
  static getSupportedCoordTypes(): Array<string>;
}
