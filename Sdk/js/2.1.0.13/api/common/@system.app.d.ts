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

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export interface AppResponse {
  /**
   * Application name.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  appName: string;

  /**
   * Application version name.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  versionName: string;

  /**
   * Application version.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  versionCode: number;
}

/**
 * @devices phone, tablet
 */
export interface RequestFullWindowOptions {
  /**
   * Duration for transition from non-full window to full window, in milliseconds.
   * By default, the value is in direct proportion to the distance between the non-full window and the full window.
   * @devices phone, tablet
   */
  duration?: number
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export default class App {
  /**
   * Obtains the declared information in the config.json file of an application.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static getInfo(): AppResponse;

  /**
   * Destroys the current ability.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static terminate(): void;

  /**
   * Requests the application to run in full window.
   * In some scenarios, such as semi-modal FA, the FA runs in non-full window.
   * In this case, you can call this API.
   * This API is invalid for an application already in full-window mode.
   * @param options Transition time from non-full window to full window, in milliseconds.
   * By default, the value is in direct proportion to the distance between the non-full window and the full window.
   * @devices phone, tablet
   */
  static requestFullWindow(options?: RequestFullWindowOptions): void;
}
