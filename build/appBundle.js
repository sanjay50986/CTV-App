/**
 * App version: 1.0.0
 * SDK version: 5.5.5
 * CLI version: 2.14.2
 * 
 * Generated: Wed, 16 Jul 2025 10:14:22 GMT
 */

var APP_com_domain_app_CTVApp = (function () {
  'use strict';

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const settings = {};
  const subscribers = {};
  const initSettings = (appSettings, platformSettings) => {
    settings['app'] = appSettings;
    settings['platform'] = platformSettings;
    settings['user'] = {};
  };
  const publish = (key, value) => {
    subscribers[key] && subscribers[key].forEach(subscriber => subscriber(value));
  };
  const dotGrab = function () {
    let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }
    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };
  var Settings$1 = {
    get(type, key) {
      let fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      const val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback;
    },
    has(type, key) {
      return !!this.get(type, key);
    },
    set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe(key, callback) {
      if (callback) {
        const index = subscribers[key] && subscribers[key].findIndex(cb => cb === callback);
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers)) {
        delete subscribers[key];
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const prepLog = (type, args) => {
    const colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };
  var Log$1 = {
    info() {
      Settings$1.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug() {
      Settings$1.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error() {
      Settings$1.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn() {
      Settings$1.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var lng = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ColorShift extends lng.shaders.WebGLDefaultShader {
    set brightness(v) {
      this._brightness = (v - 50) / 100;
      this.redraw();
    }
    set contrast(v) {
      this._contrast = (v + 50) / 100;
      this.redraw();
    }
    set gamma(v) {
      this._gamma = (v + 50) / 100;
      this.redraw();
    }
    setupUniforms(operation) {
      super.setupUniforms(operation);
      const gl = this.gl;
      this._setUniform('colorAdjust', [this._brightness || 0.0, this._contrast || 1.0, this._gamma || 1.0], gl.uniform3fv);
    }
  }
  ColorShift.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec3 colorAdjust;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
  ColorShift.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }   \n    \n    vec3 updateGamma(vec3 value, float param)\n    {\n        return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n    } \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = filter(fragColor) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,colorAdjust[0],colorAdjust[1]);        \n        vec3 ga = updateGamma(bc.rgb, colorAdjust[2]);  \n              \n        gl_FragColor = vec4(ga.rgb, color.a);          \n    }    \n";

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ProtanopiaShader extends ColorShift {}
  ProtanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));      \n    }    \n    ").concat(ColorShift.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class DeuteranopiaShader extends ColorShift {}
  DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n       \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));    \n    }\n    ").concat(ColorShift.after, "    \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class TritanopiaShader extends ColorShift {}
  TritanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }   \n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));\n    }   \n    ").concat(ColorShift.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class NeutralShader extends ColorShift {}
  NeutralShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {\n        return color;\n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class MonochromacyShader extends ColorShift {}
  MonochromacyShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const colorshiftShader = type => {
    const shadersMap = {
      normal: NeutralShader,
      monochromacy: MonochromacyShader,
      deuteranopia: DeuteranopiaShader,
      tritanopia: TritanopiaShader,
      protanopia: ProtanopiaShader
    };
    type = typeof type === 'string' && type.toLowerCase() || null;
    return Object.keys(shadersMap).indexOf(type) > -1 ? shadersMap[type] : false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* global SpeechSynthesisErrorEvent */
  function flattenStrings() {
    let series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const flattenedSeries = [];
    for (var i = 0; i < series.length; i++) {
      if (typeof series[i] === 'string' && !series[i].includes('PAUSE-')) {
        flattenedSeries.push(series[i]);
      } else {
        break;
      }
    }
    // add a "word boundary" to ensure the Announcer doesn't automatically try to
    // interpret strings that look like dates but are not actually dates
    // for example, if "Rising Sun" and "1993" are meant to be two separate lines,
    // when read together, "Sun 1993" is interpretted as "Sunday 1993"
    return [flattenedSeries.join(',\b ')].concat(series.slice(i));
  }
  function delay(pause) {
    return new Promise(resolve => {
      setTimeout(resolve, pause);
    });
  }

  /**
   * Speak a string
   *
   * @param {string} phrase Phrase to speak
   * @param {SpeechSynthesisUtterance[]} utterances An array which the new SpeechSynthesisUtterance instance representing this utterance will be appended
   * @return {Promise<void>} Promise resolved when the utterance has finished speaking, and rejected if there's an error
   */
  function speak(phrase, utterances) {
    let lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
    const synth = window.speechSynthesis;
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = lang;
      utterance.onend = () => {
        resolve();
      };
      utterance.onerror = e => {
        reject(e);
      };
      utterances.push(utterance);
      synth.speak(utterance);
    });
  }
  function speakSeries(series, lang) {
    let root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const synth = window.speechSynthesis;
    const remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
    const nestedSeriesResults = [];
    /*
      We hold this array of SpeechSynthesisUtterances in order to prevent them from being
      garbage collected prematurely on STB hardware which can cause the 'onend' events of
      utterances to not fire consistently.
    */
    const utterances = [];
    let active = true;
    const seriesChain = (async () => {
      try {
        while (active && remainingPhrases.length) {
          const phrase = await Promise.resolve(remainingPhrases.shift());
          if (!active) {
            // Exit
            // Need to check this after the await in case it was cancelled in between
            break;
          } else if (typeof phrase === 'string' && phrase.includes('PAUSE-')) {
            // Pause it
            let pause = phrase.split('PAUSE-')[1] * 1000;
            if (isNaN(pause)) {
              pause = 0;
            }
            await delay(pause);
          } else if (typeof phrase === 'string' && phrase.length) {
            // Speak it
            const totalRetries = 3;
            let retriesLeft = totalRetries;
            while (active && retriesLeft > 0) {
              try {
                await speak(phrase, utterances, lang);
                retriesLeft = 0;
              } catch (e) {
                // eslint-disable-next-line no-undef
                if (e instanceof SpeechSynthesisErrorEvent) {
                  if (e.error === 'network') {
                    retriesLeft--;
                    console.warn("Speech synthesis network error. Retries left: ".concat(retriesLeft));
                    await delay(500 * (totalRetries - retriesLeft));
                  } else if (e.error === 'canceled' || e.error === 'interrupted') {
                    // Cancel or interrupt error (ignore)
                    retriesLeft = 0;
                  } else {
                    throw new Error("SpeechSynthesisErrorEvent: ".concat(e.error));
                  }
                } else {
                  throw e;
                }
              }
            }
          } else if (typeof phrase === 'function') {
            const seriesResult = speakSeries(phrase(), lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          } else if (Array.isArray(phrase)) {
            // Speak it (recursively)
            const seriesResult = speakSeries(phrase, lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          }
        }
      } finally {
        active = false;
      }
    })();
    return {
      series: seriesChain,
      get active() {
        return active;
      },
      append: toSpeak => {
        remainingPhrases.push(toSpeak);
      },
      cancel: () => {
        if (!active) {
          return;
        }
        if (root) {
          synth.cancel();
        }
        nestedSeriesResults.forEach(nestedSeriesResults => {
          nestedSeriesResults.cancel();
        });
        active = false;
      }
    };
  }
  let currentSeries;
  function SpeechEngine (toSpeak, lang) {
    currentSeries && currentSeries.cancel();
    currentSeries = speakSeries(toSpeak, lang);
    return currentSeries;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * Code from: https://github.com/jashkenas/underscore is
   * Copyright (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
   * Licensed under the MIT License based off:
   * http://unscriptable.com/2009/03/20/debouncing-javascript-methods/ which is:
   * Copyright (c) 2007-2009 unscriptable.com and John M. Hann
   * Licensed under the MIT License (with X11 advertising exception)
   */

  function getElmName(elm) {
    return elm.ref || elm.constructor.name;
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear'
   * that is a function which will clear the timer to prevent previously scheduled executions.
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */
  function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;
    function later() {
      var last = Date.now() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function () {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
      return result;
    };
    debounced.clear = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    debounced.flush = function () {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        clearTimeout(timeout);
        timeout = null;
      }
    };
    return debounced;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let resetFocusPathTimer;
  let prevFocusPath = [];
  let currentlySpeaking;
  let voiceOutDisabled = false;
  const fiveMinutes = 300000;
  function onFocusChangeCore() {
    let focusPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!Announcer.enabled) {
      return;
    }
    const loaded = focusPath.every(elm => !elm.loading);
    const focusDiff = focusPath.filter(elm => !prevFocusPath.includes(elm));
    resetFocusPathTimer();
    if (!loaded) {
      Announcer.onFocusChange();
      return;
    }
    prevFocusPath = focusPath.slice(0);
    let toAnnounceText = [];
    let toAnnounce = focusDiff.reduce((acc, elm) => {
      if (elm.announce) {
        acc.push([getElmName(elm), 'Announce', elm.announce]);
        toAnnounceText.push(elm.announce);
      } else if (elm.title) {
        acc.push([getElmName(elm), 'Title', elm.title]);
        toAnnounceText.push(elm.title);
      }
      return acc;
    }, []);
    focusDiff.reverse().reduce((acc, elm) => {
      if (elm.announceContext) {
        acc.push([getElmName(elm), 'Context', elm.announceContext]);
        toAnnounceText.push(elm.announceContext);
      } else {
        acc.push([getElmName(elm), 'No Context', '']);
      }
      return acc;
    }, toAnnounce);
    if (Announcer.debug) {
      console.table(toAnnounce);
    }
    if (toAnnounceText.length) {
      return Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), []));
    }
  }
  function textToSpeech(toSpeak) {
    if (voiceOutDisabled) {
      return;
    }
    return currentlySpeaking = SpeechEngine(toSpeak);
  }
  const Announcer = {
    enabled: true,
    debug: false,
    cancel: function () {
      currentlySpeaking && currentlySpeaking.cancel();
    },
    clearPrevFocus: function () {
      let depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      prevFocusPath = prevFocusPath.slice(0, depth);
      resetFocusPathTimer();
    },
    speak: function (text) {
      let {
        append = false,
        notification = false
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (Announcer.enabled) {
        Announcer.onFocusChange.flush();
        if (append && currentlySpeaking && currentlySpeaking.active) {
          currentlySpeaking.append(text);
        } else {
          Announcer.cancel();
          textToSpeech(text);
        }
        if (notification) {
          voiceOutDisabled = true;
          currentlySpeaking.series.finally(() => {
            voiceOutDisabled = false;
            Announcer.refresh();
          });
        }
      }
      return currentlySpeaking;
    },
    setupTimers: function () {
      let {
        focusDebounce = 400,
        focusChangeTimeout = fiveMinutes
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Announcer.onFocusChange = debounce(onFocusChangeCore, focusDebounce);
      resetFocusPathTimer = debounce(() => {
        // Reset focus path for full announce
        prevFocusPath = [];
      }, focusChangeTimeout);
    }
  };
  Announcer.setupTimers();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Accessibility = {
    Announcer,
    colorshift(component) {
      let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        brightness: 50,
        contrast: 50,
        gamma: 50
      };
      config = {
        ...{
          brightness: 50,
          contrast: 50,
          gamma: 50
        },
        ...config
      };
      const shader = type && colorshiftShader(type);
      if (shader) {
        Log$1.info('Accessibility Colorshift', type, config);
        component.rtt = true;
        component.shader = {
          type: shader,
          ...config
        };
      } else {
        Log$1.info('Accessibility Colorshift', 'Disabled');
        component.rtt = false;
        component.shader = null;
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let Log;
  let Settings;
  let ApplicationInstance$1;
  let Ads$1;
  let Lightning;
  const initLightningSdkPlugin = {
    set log(v) {
      Log = v;
    },
    set settings(v) {
      Settings = v;
    },
    set ads(v) {
      Ads$1 = v;
    },
    set lightning(v) {
      Lightning = v;
    },
    set appInstance(v) {
      ApplicationInstance$1 = v;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initMetrics = config => {
    sendMetric = config.sendMetric;
  };
  let sendMetric = (type, event, params) => {
    Log.info('Sending metric', type, event, params);
  };

  // available metric per category
  const metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play',
    // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  };

  // error metric function (added to each category)
  const errorMetric = function (type, message, code, visible) {
    let params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = {
      params,
      ...{
        message,
        code,
        visible
      }
    };
    sendMetric(type, 'error', params);
  };
  const Metric = function (type, events) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce((obj, event) => {
      obj[event] = function (name) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = {
          ...options,
          ...(name ? {
            name
          } : {}),
          ...params
        };
        sendMetric(type, event, params);
      };
      return obj;
    }, {
      error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };
  const Metrics$1 = types => {
    return Object.keys(types).reduce((obj, type) => {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = url => Metric(type, types[type], {
        url
      }) : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };
  var Metrics$2 = Metrics$1(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const formatLocale = locale => {
    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  };
  const getLocale = defaultValue => {
    if ('language' in navigator) {
      const locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getLanguage = defaultValue => {
    if ('language' in navigator) {
      const language = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getCountryCode = defaultValue => {
    if ('language' in navigator) {
      const countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const hasOrAskForGeoLocationPermission = () => {
    return new Promise(resolve => {
      // force to prompt for location permission
      if (Settings.get('platform', 'forceBrowserGeolocation') === true) resolve(true);
      if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
        navigator.permissions.query({
          name: 'geolocation'
        }).then(status => {
          resolve(status.state === 'granted' || status.status === 'granted');
        });
      } else {
        resolve(false);
      }
    });
  };
  const getLatLon = defaultValue => {
    return new Promise(resolve => {
      hasOrAskForGeoLocationPermission().then(granted => {
        if (granted === true) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
            // success
            result => result && result.coords && resolve([result.coords.latitude, result.coords.longitude]),
            // error
            () => resolve(defaultValue),
            // options
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            });
          } else {
            return queryForLatLon().then(result => resolve(result || defaultValue));
          }
        } else {
          return queryForLatLon().then(result => resolve(result || defaultValue));
        }
      });
    });
  };
  const queryForLatLon = () => {
    return new Promise(resolve => {
      fetch('https://geolocation-db.com/json/').then(response => response.json()).then(_ref => {
        let {
          latitude,
          longitude
        } = _ref;
        return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
      }).catch(() => resolve(false));
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultProfile = {
    ageRating: 'adult',
    city: 'New York',
    zipCode: '27505',
    countryCode: () => getCountryCode('US'),
    ip: '127.0.0.1',
    household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
    language: () => getLanguage('en'),
    latlon: () => getLatLon([40.7128, 74.006]),
    locale: () => getLocale('en-US'),
    mac: '00:00:00:00:00:00',
    operator: 'metrological',
    platform: 'metrological',
    packages: [],
    uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
    stbType: 'metrological'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let getInfo = key => {
    const profile = {
      ...defaultProfile,
      ...Settings.get('platform', 'profile')
    };
    return Promise.resolve(typeof profile[key] === 'function' ? profile[key]() : profile[key]);
  };
  let setInfo = (key, params) => {
    if (key in defaultProfile) return defaultProfile[key] = params;
  };
  const initProfile = config => {
    getInfo = config.getInfo ? config.getInfo : getInfo;
    setInfo = config.setInfo ? config.setInfo : setInfo;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPurchase = config => {
    if (config.billingUrl) config.billingUrl;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  const channels = () => Settings.get('platform', 'tv', defaultChannels);
  const randomChannel = () => channels()[~~(channels.length * Math.random())];

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let currentChannel;
  const callbacks = {};
  const emit$1 = function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    callbacks[event] && callbacks[event].forEach(cb => {
      cb.apply(null, args);
    });
  };

  // local mock methods
  let methods = {
    getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        if (currentChannel) {
          const channel = {
            ...currentChannel
          };
          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel(number) {
      return new Promise((resolve, reject) => {
        if (number) {
          const newChannel = channels().find(c => c.number === number);
          if (newChannel) {
            currentChannel = newChannel;
            const channel = {
              ...currentChannel
            };
            delete channel.program;
            emit$1('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  const initTV = config => {
    methods = {};
    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }
    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }
    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }
    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit$1);
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPin = config => {
    if (config.submit && typeof config.submit === 'function') {
      config.submit;
    }
    if (config.check && typeof config.check === 'function') {
      config.check;
    }
  };

  var executeAsPromise = (function (method) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let result;
    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise
    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    }
    // otherwise make it into a promise
    else {
      return new Promise((resolve, reject) => {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var events$2 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var autoSetupMixin = (function (sourceObject) {
    let setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    let ready = false;
    const doSetup = () => {
      if (ready === false) {
        setup();
        ready = true;
      }
    };
    return Object.keys(sourceObject).reduce((obj, key) => {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }
      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let timeout = null;
  var easeExecution = (cb, delay) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, delay);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var VideoTexture = () => {
    return class VideoTexture extends Lightning.Component {
      static _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: Lightning.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
      set videoEl(v) {
        this._videoEl = v;
      }
      get videoEl() {
        return this._videoEl;
      }
      get videoView() {
        return this.tag('Video');
      }
      get videoTexture() {
        return this.videoView.texture;
      }
      get isVisible() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
      _init() {
        this._createVideoTexture();
      }
      _createVideoTexture() {
        const stage = this.stage;
        const gl = stage.gl;
        const glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
      start() {
        const stage = this.stage;
        this._lastTime = 0;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();
              const getVideoPlaybackQuality = this.videoEl.getVideoPlaybackQuality();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'
              const frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoView.visible = true;
                  this.videoTexture.options.w = this.videoEl.width;
                  this.videoTexture.options.h = this.videoEl.height;
                  const expectedAspectRatio = this.videoView.w / this.videoView.h;
                  const realAspectRatio = this.videoEl.width / this.videoEl.height;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoView.scaleY = 1;
                  } else {
                    this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error('texImage2d video', e);
                  this.stop();
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
      stop() {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
      position(top, left) {
        this.videoView.patch({
          x: left,
          y: top
        });
      }
      size(width, height) {
        this.videoView.patch({
          w: width,
          h: height
        });
      }
      show() {
        this.videoView.alpha = 1;
      }
      hide() {
        this.videoView.alpha = 0;
      }
    };
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let mediaUrl$1 = url => url;
  let videoEl;
  let videoTexture;
  let metrics;
  let consumer$1;
  let precision = 1;
  let textureMode = false;
  const initVideoPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };
  // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close
  let eventHandlers = {};
  const state$1 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,
    get playingAds() {
      return this._playingAds;
    },
    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },
    skipTime: false,
    playAfterSeek: null
  };
  const hooks = {
    play() {
      state$1.playing = true;
    },
    pause() {
      state$1.playing = false;
    },
    seeked() {
      state$1.playAfterSeek === true && videoPlayerPlugin.play();
      state$1.playAfterSeek = null;
    },
    abort() {
      deregisterEventListeners();
    }
  };
  const withPrecision = val => Math.round(precision * val) + 'px';
  const fireOnConsumer$1 = (event, args) => {
    if (consumer$1) {
      consumer$1.fire('$videoPlayer' + event, args, videoEl.currentTime);
      consumer$1.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };
  const fireHook = (event, args) => {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };
  let customLoader = null;
  let customUnloader = null;
  const loader$1 = (url, videoEl, config) => {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(resolve => {
      url = mediaUrl$1(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };
  const unloader = videoEl => {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(resolve => {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };
  const setupVideoTag = () => {
    const videoEls = document.getElementsByTagName('video');
    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      const videoEl = document.createElement('video');
      const platformSettingsWidth = Settings.get('platform', 'width') ? Settings.get('platform', 'width') : 1920;
      const platformSettingsHeight = Settings.get('platform', 'height') ? Settings.get('platform', 'height') : 1080;
      videoEl.setAttribute('id', 'video-player');
      videoEl.setAttribute('width', withPrecision(platformSettingsWidth));
      videoEl.setAttribute('height', withPrecision(platformSettingsHeight));
      videoEl.style.position = 'absolute';
      videoEl.style.zIndex = '1';
      videoEl.style.display = 'none';
      videoEl.style.visibility = 'hidden';
      videoEl.style.top = withPrecision(0);
      videoEl.style.left = withPrecision(0);
      videoEl.style.width = withPrecision(platformSettingsWidth);
      videoEl.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(videoEl);
      return videoEl;
    }
  };
  const setUpVideoTexture = () => {
    if (!ApplicationInstance$1.tag('VideoTexture')) {
      const el = ApplicationInstance$1.stage.c({
        type: VideoTexture(),
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl
      });
      ApplicationInstance$1.childList.addAt(el, 0);
    }
    return ApplicationInstance$1.tag('VideoTexture');
  };
  const registerEventListeners = () => {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$2).forEach(event => {
      const handler = e => {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        }
        // fire an internal hook
        fireHook(event, {
          videoElement: videoEl,
          event: e
        });

        // fire the event (with human friendly event name) to the consumer of the VideoPlayer
        fireOnConsumer$1(events$2[event], {
          videoElement: videoEl,
          event: e
        });
      };
      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };
  const deregisterEventListeners = () => {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(event => {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };
  const videoPlayerPlugin = {
    consumer(component) {
      consumer$1 = component;
    },
    loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);
      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size() {
      let width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);
      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      let bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      let left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open(url) {
      let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$2.media(url);
      this.hide();
      deregisterEventListeners();
      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        const adConfig = {
          enabled: state$1.adsEnabled,
          duration: 300
        };
        if (config.videoId) {
          adConfig.caid = config.videoId;
        }
        Ads$1.get(adConfig, consumer$1).then(ads => {
          state$1.playingAds = true;
          ads.prerolls().then(() => {
            state$1.playingAds = false;
            loader$1(url, videoEl, config).then(() => {
              registerEventListeners();
              this.show();
              this.play();
            }).catch(e => {
              fireOnConsumer$1('Error', {
                videoElement: videoEl,
                event: e
              });

              // This is not API-compliant, as it results in firing "$videoPlayererror" rather than "$videoPlayerError".
              // See docs here for API-compliant events -> https://github.com/Metrological/metrological-sdk/blob/master/docs/plugins/videoplayer.md#event-overview
              // It has been kept for backwards compatability for library consumers who may have already written handler functions to match it.
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload() {
      if (!this.canInteract) return;
      const url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close() {
      Ads$1.cancel();
      if (state$1.playingAds) {
        state$1.playingAds = false;
        Ads$1.stop();
        // call self in next tick
        setTimeout(() => {
          this.close();
        });
      }
      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear() {
      if (!this.canInteract) return;
      // pause the video first to disable sound
      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(() => {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(e => {
        fireOnConsumer$1('Error', {
          videoElement: videoEl,
          event: e
        });

        // This is not API-compliant, as it results in firing "$videoPlayererror" rather than "$videoPlayerError".
        // See docs here for API-compliant events -> https://github.com/Metrological/metrological-sdk/blob/master/docs/plugins/videoplayer.md#event-overview
        // It has been kept for backwards compatability for library consumers who may have already written handler functions to match it.
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute() {
      let muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop() {
      let looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return;
      // define whether should continue to play after seek is complete (in seeked hook)
      if (state$1.playAfterSeek === null) {
        state$1.playAfterSeek = !!state$1.playing;
      }
      // pause before actually seeking
      this.pause();
      // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)
      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip(seconds) {
      if (!this.canInteract) return;
      if (!this.src) return;
      state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
      easeExecution(() => {
        this.seek(state$1.skipTime);
        state$1.skipTime = false;
      }, 300);
    },
    show() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds() {
      let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$1.adsEnabled = enabled;
    },
    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },
    get currentTime() {
      return videoEl && videoEl.currentTime;
    },
    get muted() {
      return videoEl && videoEl.muted;
    },
    get looped() {
      return videoEl && videoEl.loop;
    },
    get src() {
      return videoEl && videoEl.getAttribute('src');
    },
    get playing() {
      return state$1.playing;
    },
    get playingAds() {
      return state$1.playingAds;
    },
    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$1.playingAds === false;
    },
    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },
    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },
    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },
    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },
    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },
    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },
    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },
    get adsEnabled() {
      return state$1.adsEnabled;
    },
    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },
    get _consumer() {
      return consumer$1;
    }
  };
  autoSetupMixin(videoPlayerPlugin, () => {
    precision = ApplicationInstance$1 && ApplicationInstance$1.stage && ApplicationInstance$1.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings.get('platform', 'textureMode', false);
    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let consumer;
  let getAds = () => {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };
  const initAds = config => {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  const state = {
    active: false
  };
  const playSlot = function () {
    let slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce((promise, ad) => {
      return promise.then(() => {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };
  const playAd = ad => {
    return new Promise(resolve => {
      if (state.active === false) {
        Log$1.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      }
      // is it safe to rely on videoplayer plugin already created the video tag?
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl$1(ad.url);
      videoEl.load();
      let timeEvents = null;
      let timeout;
      const cleanup = () => {
        // remove all listeners
        Object.keys(handlers).forEach(handler => videoEl.removeEventListener(handler, handlers[handler]));
        resolve();
      };
      const handlers = {
        play() {
          Log$1.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log$1.info('Ad', 'Calculated quartiles times', {
              timeEvents
            });
          }
          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }
          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }
          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(() => {
            cleanup();
          }, 5000); // make timeout configurable
        },
        canplay() {
          timeout && clearTimeout(timeout);
        },
        error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort() {
          cleanup();
        }
        // todo: pause, resume, mute, unmute beacons
      };
      // add all listeners
      Object.keys(handlers).forEach(handler => videoEl.addEventListener(handler, handlers[handler]));
      videoEl.play();
    });
  };
  const sendBeacon = (callbacks, event) => {
    if (callbacks && callbacks[event]) {
      Log$1.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce((promise, url) => {
        return promise.then(() => fetch(url)
        // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
        // note: for fetch failed http responses don't throw an Error :)
        .then(response => {
          if (response.status === 200) {
            fireOnConsumer('Beacon' + event + 'Sent');
          } else {
            fireOnConsumer('Beacon' + event + 'Failed' + response.status);
          }
          Promise.resolve(null);
        }).catch(() => {
          Promise.resolve(null);
        }));
      }, Promise.resolve(null));
    } else {
      Log$1.info('Ad', 'No callback found for ' + event);
    }
  };
  const fireOnConsumer = (event, args) => {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };
  var Ads = {
    get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls() {
            return Promise.resolve();
          }
        });
      }
      consumer = videoPlayerConsumer;
      return new Promise(resolve => {
        Log$1.info('Ad', 'Starting session');
        getAds(config).then(ads => {
          Log$1.info('Ad', 'API result', ads);
          resolve({
            prerolls() {
              if (ads.preroll) {
                state.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(() => {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state.active = false;
                });
              }
              return Promise.resolve();
            },
            midrolls() {
              return Promise.resolve();
            },
            postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel() {
      Log$1.info('Ad', 'Cancel Ad');
      state.active = false;
    },
    stop() {
      Log$1.info('Ad', 'Stop Ad');
      state.active = false;
      // fixme: duplication
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }
  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }
  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }
  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
  }
  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }
  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  }

  // Protects from prototype poisoning and unexpected merging up the prototype chain.
  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }
  function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }
    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }
      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }
  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }
  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }
    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  function isObject$2(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  function isPlainObject$1(o) {
    var ctor,prot;

    if (isObject$2(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObject$2(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let warned = false;
  const deprecated = function () {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }
    warned = true;
  };
  class Locale {
    constructor() {
      this.__enabled = false;
    }

    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */
    async load(path) {
      if (!this.__enabled) {
        return;
      }
      await fetch(path).then(resp => resp.json()).then(resp => {
        this.loadFromObject(resp);
      });
    }

    /**
     * Sets language used by module.
     *
     * @param {String} lang
     */
    setLanguage(lang) {
      deprecated();
      this.__enabled = true;
      this.language = lang;
    }

    /**
     * Returns reference to translation object for current language.
     *
     * @return {Object}
     */
    get tr() {
      deprecated(true);
      return this.__trObj[this.language];
    }

    /**
     * Loads translation object from existing object (binds existing object).
     *
     * @param {Object} trObj
     */
    loadFromObject(trObj) {
      deprecated();
      const fallbackLanguage = 'en';
      if (Object.keys(trObj).indexOf(this.language) === -1) {
        Log$1.warn('No translations found for: ' + this.language);
        if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
          Log$1.warn('Using fallback language: ' + fallbackLanguage);
          this.language = fallbackLanguage;
        } else {
          const error = 'No translations found for fallback language: ' + fallbackLanguage;
          Log$1.error(error);
          throw Error(error);
        }
      }
      this.__trObj = trObj;
      for (const lang of Object.values(this.__trObj)) {
        for (const str of Object.keys(lang)) {
          lang[str] = new LocalizedString(lang[str]);
        }
      }
    }
  }

  /**
   * Extended string class used for localization.
   */
  class LocalizedString extends String {
    /**
     * Returns formatted LocalizedString.
     * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
     *
     * E.g.:
     * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
     * A and B and A
     *
     * @param  {...any} args List of arguments for placeholders.
     */
    format() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const sub = args.reduce((string, arg, index) => string.split("{".concat(index, "}")).join(arg), this);
      return new LocalizedString(sub);
    }
  }
  var Locale$1 = new Locale();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class VersionLabel extends lng.Component {
    static _template() {
      return {
        rect: true,
        color: 0xbb0078ac,
        h: 40,
        w: 100,
        x: w => w - 50,
        y: h => h - 50,
        mount: 1,
        Text: {
          w: w => w,
          h: h => h,
          y: 5,
          x: 20,
          text: {
            fontSize: 22,
            lineHeight: 26
          }
        }
      };
    }
    _firstActive() {
      this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
      this.tag('Text').loadTexture();
      this.w = this.tag('Text').renderWidth + 40;
      this.h = this.tag('Text').renderHeight + 5;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class FpsIndicator extends lng.Component {
    static _template() {
      return {
        rect: true,
        color: 0xffffffff,
        texture: lng.Tools.getRoundRect(80, 80, 40),
        h: 80,
        w: 80,
        x: 100,
        y: 100,
        mount: 1,
        Background: {
          x: 3,
          y: 3,
          texture: lng.Tools.getRoundRect(72, 72, 36),
          color: 0xff008000
        },
        Counter: {
          w: w => w,
          h: h => h,
          y: 10,
          text: {
            fontSize: 32,
            textAlign: 'center'
          }
        },
        Text: {
          w: w => w,
          h: h => h,
          y: 48,
          text: {
            fontSize: 15,
            textAlign: 'center',
            text: 'FPS'
          }
        }
      };
    }
    _setup() {
      this.config = {
        ...{
          log: false,
          interval: 500,
          threshold: 1
        },
        ...Settings$1.get('platform', 'showFps')
      };
      this.fps = 0;
      this.lastFps = this.fps - this.config.threshold;
      const fpsCalculator = () => {
        this.fps = ~~(1 / this.stage.dt);
      };
      this.stage.on('frameStart', fpsCalculator);
      this.stage.off('framestart', fpsCalculator);
      this.interval = setInterval(this.showFps.bind(this), this.config.interval);
    }
    _firstActive() {
      this.showFps();
    }
    _detach() {
      clearInterval(this.interval);
    }
    showFps() {
      if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
      this.lastFps = this.fps;
      // green
      let bgColor = 0xff008000;
      // orange
      if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500;
      // red
      else if (this.fps <= 20) bgColor = 0xffff0000;
      this.tag('Background').setSmooth('color', bgColor);
      this.tag('Counter').text = "".concat(this.fps);
      this.config.log && Log$1.info('FPS', this.fps);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var fetchJson = file => {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          // file protocol returns 0
          // http(s) protocol returns 200
          if (xhr.status === 0 || xhr.status === 200) resolve(JSON.parse(xhr.responseText));else reject(xhr.statusText);
        }
      };
      xhr.open('GET', file);
      xhr.send(null);
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let basePath;
  let proxyUrl;
  const initUtils = config => {
    basePath = ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));
    if (config.proxyUrl) {
      proxyUrl = ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl(url) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return proxyUrl ? proxyUrl + '?' + makeQueryString(url, options) : url;
    },
    makeQueryString() {
      return makeQueryString(...arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol() {
      return ensureUrlWithProtocol(...arguments);
    }
  };
  const ensureUrlWithProtocol = url => {
    if (/^\/[^/]/i.test(url) && /^(?:file:)/i.test(window.location.protocol)) {
      return window.location.protocol + '//' + url;
    }
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }
    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }
    return url;
  };
  const makeFullStaticPath = function () {
    let pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;

    // if path is URL, we assume it's already the full static path, so we just return it
    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }
    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname);

      // remove possible leading dot from path
      path = path.charAt(0) === '.' ? path.substr(1) : path;
      // ensure path has leading slash
      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  const cleanUpPathName = pathname => {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    const parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };
  const makeQueryString = function (url) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value
    options[type] = url;
    return Object.keys(options).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let meta = {};
  let translations = {};
  let language = null;
  const initLanguage = function (file) {
    let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise((resolve, reject) => {
      fetchJson(file).then(json => {
        setTranslations(json);
        // set language (directly or in a promise)
        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(lang => setLanguage(lang).then(resolve).catch(reject)).catch(e => {
          Log$1.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(() => {
        const error = 'Language file ' + file + ' not found';
        Log$1.error(error);
        reject(error);
      });
    });
  };
  const setTranslations = obj => {
    if ('meta' in obj) {
      meta = {
        ...obj.meta
      };
      delete obj.meta;
    }
    translations = obj;
  };
  const setLanguage = lng => {
    language = null;
    return new Promise((resolve, reject) => {
      if (lng in translations) {
        language = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          const error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
          Log$1.warn(error);
          language = meta.default;
        } else {
          const error = 'Translations for Language ' + language + ' not found.';
          Log$1.error(error);
          reject(error);
        }
      }
      if (language) {
        Log$1.info('Setting language to', language);
        const translationsObj = translations[language];
        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          const url = Utils.asset(translationsObj);
          fetchJson(url).then(json => {
            // save the translations for this language (to prevent loading twice)
            translations[language] = json;
            resolve();
          }).catch(e => {
            const error = 'Error while fetching ' + url;
            Log$1.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout(cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }
      const timeoutId = setTimeout(() => {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        cb.apply(null, params);
      }, timeout, params);
      Log$1.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    },
    clearTimeout(timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        Log$1.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log$1.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    },
    clearTimeouts() {
      registry.timeouts.forEach(timeoutId => {
        this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval(cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }
      const intervalId = setInterval(() => {
        registry.intervals.filter(id => id !== intervalId);
        cb.apply(null, params);
      }, interval, params);
      Log$1.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    },
    clearInterval(intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(id => id !== intervalId);
        Log$1.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log$1.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    },
    clearIntervals() {
      registry.intervals.forEach(intervalId => {
        this.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      const targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log$1.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener(target, event, handler) {
      const targetIndex = registry.targets.indexOf(target);
      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(fn => fn !== handler);
        Log$1.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
        // remove key from event listeners object when no events are registered for that event
        Object.keys(registry.eventListeners[targetIndex]).forEach(event => {
          if (registry.eventListeners[targetIndex][event].length === 0) {
            delete registry.eventListeners[targetIndex][event];
          }
        });
        // remove reference to the target when target has no event listeners registered
        if (Object.keys(registry.eventListeners[targetIndex]).length === 0) {
          registry.targets.splice(targetIndex, 1);
          registry.eventListeners.splice(targetIndex, 1);
        }
      } else {
        Log$1.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners(target, event) {
      if (target && event) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(handler => {
            this.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          Object.keys(registry.eventListeners[targetIndex]).forEach(_event => {
            this.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(targetIndex => {
          this.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const isObject$1 = v => {
    return typeof v === 'object' && v !== null;
  };
  const isString$1 = v => {
    return typeof v === 'string';
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  const normalizedColors = {
    //store for normalized colors
  };
  const addColors = (colorsToAdd, value) => {
    if (isObject$1(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(color => cleanUpNormalizedColors(color));
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$1(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };
  const cleanUpNormalizedColors = color => {
    for (let c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };
  const initColors = file => {
    return new Promise((resolve, reject) => {
      if (typeof file === 'object') {
        addColors(file);
        return resolve();
      }
      fetchJson(file).then(json => {
        addColors(json);
        return resolve();
      }).catch(() => {
        const error = 'Colors file ' + file + ' not found';
        Log$1.error(error);
        return reject(error);
      });
    });
  };

  var name = "@lightningjs/sdk";
  var version = "5.5.5";
  var license = "Apache-2.0";
  var types = "index.d.ts";
  var scripts = {
  	postinstall: "node ./scripts/postinstall.js",
  	lint: "eslint '**/*.js'",
  	release: "npm publish --access public",
  	typedoc: "typedoc --tsconfig tsconfig.typedoc.json",
  	tsd: "tsd"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "lint-staged"
  	}
  };
  var dependencies = {
  	"@babel/polyfill": "^7.11.5",
  	"@lightningjs/core": "^2.15.0",
  	"@metrological/sdk": "^1.0.2",
  	"@michieljs/execute-as-promise": "^1.0.0",
  	deepmerge: "^4.2.2",
  	"is-plain-object": "^5.0.0",
  	localcookies: "^2.0.0",
  	shelljs: "^0.8.5",
  	"url-polyfill": "^1.1.10",
  	"whatwg-fetch": "^3.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.11.6",
  	"@babel/plugin-transform-parameters": "^7.10.5 ",
  	"@babel/plugin-transform-spread": "^7.11.0",
  	"@babel/preset-env": "^7.11.5",
  	"babel-eslint": "^10.1.0",
  	eslint: "^7.10.0",
  	"eslint-config-prettier": "^6.12.0",
  	"eslint-plugin-prettier": "^3.1.4",
  	husky: "^4.3.0",
  	"lint-staged": "^10.4.0",
  	prettier: "^1.19.1",
  	rollup: "^1.32.1",
  	"rollup-plugin-babel": "^4.4.0",
  	tsd: "^0.22.0",
  	typedoc: "^0.23.9"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:rdkcentral/Lightning-SDK.git"
  };
  var bugs = {
  	url: "https://github.com/rdkcentral/Lightning-SDK/issues"
  };
  var packageInfo = {
  	name: name,
  	version: version,
  	license: license,
  	types: types,
  	scripts: scripts,
  	"lint-staged": {
  	"*.js": [
  		"eslint --fix"
  	],
  	"src/startApp.js": [
  		"rollup -c ./rollup.config.js"
  	]
  },
  	husky: husky,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	repository: repository,
  	bugs: bugs
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let AppInstance;
  const defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      precision: 1,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };
  const customFontFaces$1 = [];
  const fontLoader$1 = (fonts, store) => new Promise((resolve, reject) => {
    fonts.map(_ref => {
      let {
        family,
        url,
        urls,
        descriptors
      } = _ref;
      return () => {
        const src = urls ? urls.map(url => {
          return 'url(' + url + ')';
        }) : 'url(' + url + ')';
        const fontFace = new FontFace(family, src, descriptors || {});
        store.push(fontFace);
        Log$1.info('Loading font', family);
        document.fonts.add(fontFace);
        return fontFace.load();
      };
    }).reduce((promise, method) => {
      return promise.then(() => method());
    }, Promise.resolve(null)).then(resolve).catch(reject);
  });
  function Application (App, appData, platformSettings) {
    const {
      width,
      height
    } = platformSettings;
    if (width && height) {
      defaultOptions.stage['w'] = width;
      defaultOptions.stage['h'] = height;
      defaultOptions.stage['precision'] = width / 1920;
    }

    // support for 720p browser
    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage['w'] = 1280;
      defaultOptions.stage['h'] = 720;
      defaultOptions.stage['precision'] = 1280 / 1920;
    }
    return class Application extends lng.Application {
      constructor(options) {
        const config = cjs(defaultOptions, options, {
          isMergeableObject: isPlainObject$1
        });
        super(config);
        this.config = config;
      }
      static _template() {
        return {
          w: 1920,
          h: 1080
        };
      }
      colorshift() {
        let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Accessibility.colorshift(this, type, config);
      }
      get keymapping() {
        return this.stage.application.config.keys;
      }

      /**
       * This function overrides the default keymap with the latest keymap.
       * @param customKeyMap
       * @param keepDuplicates
       */
      overrideKeyMap(customKeyMap) {
        let keepDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const baseKeyMap = this.stage.application.config.keys;
        Object.keys(customKeyMap).reduce((keymapping, key) => {
          // prevent duplicate values to exist in final keymapping (i.e. 2 keys triggering 'Back')
          if (!keepDuplicates) {
            Object.keys(baseKeyMap).forEach(baseKey => {
              if (baseKey != key && baseKeyMap[baseKey] == customKeyMap[key]) {
                delete keymapping[baseKey];
              }
            });
          }
          keymapping[key] = customKeyMap[key];
          return keymapping;
        }, baseKeyMap);
        return baseKeyMap;
      }
      _setup() {
        Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []),
        // to be deprecated
        Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(() => {
          Metrics$2.app.loaded();
          this.w = this.config.stage.w / this.config.stage.precision;
          this.h = this.config.stage.h / this.config.stage.precision;
          AppInstance = this.stage.c({
            ref: 'App',
            type: App,
            zIndex: 1,
            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
          });
          this.childList.a(AppInstance);
          this._refocus();
          Log$1.info('App version', this.config.version);
          Log$1.info('SDK version', packageInfo.version);
          if (platformSettings.showVersion) {
            this.childList.a({
              ref: 'VersionLabel',
              type: VersionLabel,
              version: this.config.version,
              sdkVersion: packageInfo.version,
              zIndex: 1
            });
          }
          if (platformSettings.showFps) {
            this.childList.a({
              ref: 'FpsCounter',
              type: FpsIndicator,
              zIndex: 1
            });
          }
          super._setup();
        }).catch(console.error);
      }
      _handleBack() {
        this.closeApp();
      }
      _handleExit() {
        this.closeApp();
      }
      closeApp() {
        Log$1.info('Signaling App Close');
        if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
          platformSettings.onClose(...arguments);
        } else {
          this.close();
        }
      }
      close() {
        Log$1.info('Closing App');
        Settings$1.clearSubscribers();
        Registry.clear();
        this.childList.remove(this.tag('App'));
        this.cleanupFonts();
        // force texture garbage collect
        this.stage.gc();
        this.destroy();
      }
      loadFonts(fonts) {
        return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces$1) : fontLoader$1(fonts, customFontFaces$1);
      }
      cleanupFonts() {
        if ('delete' in document.fonts) {
          customFontFaces$1.forEach(fontFace => {
            Log$1.info('Removing font', fontFace.family);
            document.fonts.delete(fontFace);
          });
        } else {
          Log$1.info('No support for removing manually-added fonts');
        }
      }
      loadLanguage(config) {
        let file = Utils.asset('translations.json');
        let language = config;
        if (typeof language === 'object') {
          language = config.language || null;
          file = config.file || file;
        }
        return initLanguage(file, language);
      }
      loadColors(config) {
        let file = Utils.asset('colors.json');
        if (config && (typeof config === 'string' || typeof config === 'object')) {
          file = config;
        }
        return initColors(file);
      }
      set focus(v) {
        this._focussed = v;
        this._refocus();
      }
      _getFocused() {
        return this._focussed || this.tag('App');
      }
    };
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ScaledImageTexture extends lng.textures.ImageTexture {
    constructor(stage) {
      super(stage);
      this._scalingOptions = undefined;
    }
    set options(options) {
      this.resizeMode = this._scalingOptions = options;
    }
    _getLookupId() {
      return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
    }
    getNonDefaults() {
      const obj = super.getNonDefaults();
      if (this._src) {
        obj.src = this._src;
      }
      return obj;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const events$1 = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];
  let mediaUrl = url => url;
  const initMediaPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  };
  class Mediaplayer extends lng.Component {
    _construct() {
      this._skipRenderToTexture = false;
      this._metrics = null;
      this._textureMode = Settings$1.get('platform', 'textureMode') || false;
      Log$1.info('Texture mode: ' + this._textureMode);
      console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
    }
    static _template() {
      return {
        Video: {
          VideoWrap: {
            VideoTexture: {
              visible: false,
              pivot: 0.5,
              texture: {
                type: lng.textures.StaticTexture,
                options: {}
              }
            }
          }
        }
      };
    }
    set skipRenderToTexture(v) {
      this._skipRenderToTexture = v;
    }
    get textureMode() {
      return this._textureMode;
    }
    get videoView() {
      return this.tag('Video');
    }
    _init() {
      //re-use videotag if already there
      const videoEls = document.getElementsByTagName('video');
      if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
        this.videoEl = document.createElement('video');
        this.videoEl.setAttribute('id', 'video-player');
        this.videoEl.style.position = 'absolute';
        this.videoEl.style.zIndex = '1';
        this.videoEl.style.display = 'none';
        this.videoEl.setAttribute('width', '100%');
        this.videoEl.setAttribute('height', '100%');
        this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
        document.body.appendChild(this.videoEl);
      }
      if (this.textureMode && !this._skipRenderToTexture) {
        this._createVideoTexture();
      }
      this.eventHandlers = [];
    }
    _registerListeners() {
      events$1.forEach(event => {
        const handler = e => {
          if (this._metrics && this._metrics[event] && typeof this._metrics[event] === 'function') {
            this._metrics[event]({
              currentTime: this.videoEl.currentTime
            });
          }
          this.fire(event, {
            videoElement: this.videoEl,
            event: e
          });
        };
        this.eventHandlers.push(handler);
        this.videoEl.addEventListener(event, handler);
      });
    }
    _deregisterListeners() {
      Log$1.info('Deregistering event listeners MediaPlayer');
      events$1.forEach((event, index) => {
        this.videoEl.removeEventListener(event, this.eventHandlers[index]);
      });
      this.eventHandlers = [];
    }
    _attach() {
      this._registerListeners();
    }
    _detach() {
      this._deregisterListeners();
      this.close();
    }
    _createVideoTexture() {
      const stage = this.stage;
      const gl = stage.gl;
      const glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.videoTexture.options = {
        source: glTexture,
        w: this.videoEl.width,
        h: this.videoEl.height
      };
    }
    _startUpdatingVideoTexture() {
      if (this.textureMode && !this._skipRenderToTexture) {
        const stage = this.stage;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              const frameCount = this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoTextureView.visible = true;
                  this.videoTexture.options.w = this.videoEl.videoWidth;
                  this.videoTexture.options.h = this.videoEl.videoHeight;
                  const expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
                  const realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoTextureView.scaleY = 1;
                  } else {
                    this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoTextureView.scaleX = 1;
                  }
                } catch (e) {
                  Log$1.error('texImage2d video', e);
                  this._stopUpdatingVideoTexture();
                  this.videoTextureView.visible = false;
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }
    _stopUpdatingVideoTexture() {
      if (this.textureMode) {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoTextureView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }
    updateSettings() {
      let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // The Component that 'consumes' the media player.
      this._consumer = settings.consumer;
      if (this._consumer && this._consumer.getMediaplayerSettings) {
        // Allow consumer to add settings.
        settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
      }
      if (!lng.Utils.equalValues(this._stream, settings.stream)) {
        if (settings.stream && settings.stream.keySystem) {
          navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(keySystemAccess => {
            return keySystemAccess.createMediaKeys();
          }).then(createdMediaKeys => {
            return this.videoEl.setMediaKeys(createdMediaKeys);
          }).then(() => {
            if (settings.stream && settings.stream.src) this.open(settings.stream.src);
          }).catch(() => {
            console.error('Failed to set up MediaKeys');
          });
        } else if (settings.stream && settings.stream.src) {
          // This is here to be backwards compatible, will be removed
          // in future sdk release
          if (Settings$1.get('app', 'hls')) {
            if (!window.Hls) {
              window.Hls = class Hls {
                static isSupported() {
                  console.warn('hls-light not included');
                  return false;
                }
              };
            }
            if (window.Hls.isSupported()) {
              if (!this._hls) this._hls = new window.Hls({
                liveDurationInfinity: true
              });
              this._hls.loadSource(settings.stream.src);
              this._hls.attachMedia(this.videoEl);
              this.videoEl.style.display = 'block';
            }
          } else {
            this.open(settings.stream.src);
          }
        } else {
          this.close();
        }
        this._stream = settings.stream;
      }
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPos);
    }
    _setHide(hide) {
      if (this.textureMode) {
        this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
      } else {
        this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
      }
    }
    open(url) {
      let settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        hide: false,
        videoPosition: null
      };
      // prep the media url to play depending on platform (mediaPlayerplugin)
      url = mediaUrl(url);
      this._metrics = Metrics$2.media(url);
      Log$1.info('Playing stream', url);
      if (this.application.noVideo) {
        Log$1.info('noVideo option set, so ignoring: ' + url);
        return;
      }
      // close the video when opening same url as current (effectively reloading)
      if (this.videoEl.getAttribute('src') === url) {
        this.close();
      }
      this.videoEl.setAttribute('src', url);

      // force hide, then force show (in next tick!)
      // (fixes comcast playback rollover issue)
      this.videoEl.style.visibility = 'hidden';
      this.videoEl.style.display = 'none';
      setTimeout(() => {
        this.videoEl.style.display = 'block';
        this.videoEl.style.visibility = 'visible';
      });
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
    }
    close() {
      // We need to pause first in order to stop sound.
      this.videoEl.pause();
      this.videoEl.removeAttribute('src');

      // force load to reset everything without errors
      this.videoEl.load();
      this._clearSrc();
      this.videoEl.style.display = 'none';
    }
    playPause() {
      if (this.isPlaying()) {
        this.doPause();
      } else {
        this.doPlay();
      }
    }
    get muted() {
      return this.videoEl.muted;
    }
    set muted(v) {
      this.videoEl.muted = v;
    }
    get loop() {
      return this.videoEl.loop;
    }
    set loop(v) {
      this.videoEl.loop = v;
    }
    isPlaying() {
      return this._getState() === 'Playing';
    }
    doPlay() {
      this.videoEl.play();
    }
    doPause() {
      this.videoEl.pause();
    }
    reload() {
      var url = this.videoEl.getAttribute('src');
      this.close();
      this.videoEl.src = url;
    }
    getPosition() {
      return Promise.resolve(this.videoEl.currentTime);
    }
    setPosition(pos) {
      this.videoEl.currentTime = pos;
    }
    getDuration() {
      return Promise.resolve(this.videoEl.duration);
    }
    seek(time) {
      let absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (absolute) {
        this.videoEl.currentTime = time;
      } else {
        this.videoEl.currentTime += time;
      }
    }
    get videoTextureView() {
      return this.tag('Video').tag('VideoTexture');
    }
    get videoTexture() {
      return this.videoTextureView.texture;
    }
    _setVideoArea(videoPos) {
      if (lng.Utils.equalValues(this._videoPos, videoPos)) {
        return;
      }
      this._videoPos = videoPos;
      if (this.textureMode) {
        this.videoTextureView.patch({
          smooth: {
            x: videoPos[0],
            y: videoPos[1],
            w: videoPos[2] - videoPos[0],
            h: videoPos[3] - videoPos[1]
          }
        });
      } else {
        const precision = this.stage.getRenderPrecision();
        this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
        this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
        this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
        this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
      }
    }
    _fireConsumer(event, args) {
      if (this._consumer) {
        this._consumer.fire(event, args);
      }
    }
    _equalInitData(buf1, buf2) {
      if (!buf1 || !buf2) return false;
      if (buf1.byteLength != buf2.byteLength) return false;
      const dv1 = new Int8Array(buf1);
      const dv2 = new Int8Array(buf2);
      for (let i = 0; i != buf1.byteLength; i++) if (dv1[i] != dv2[i]) return false;
      return true;
    }
    error(args) {
      this._fireConsumer('$mediaplayerError', args);
      this._setState('');
      return '';
    }
    loadeddata(args) {
      this._fireConsumer('$mediaplayerLoadedData', args);
    }
    play(args) {
      this._fireConsumer('$mediaplayerPlay', args);
    }
    playing(args) {
      this._fireConsumer('$mediaplayerPlaying', args);
      this._setState('Playing');
    }
    canplay(args) {
      this.videoEl.play();
      this._fireConsumer('$mediaplayerStart', args);
    }
    loadstart(args) {
      this._fireConsumer('$mediaplayerLoad', args);
    }
    seeked() {
      this._fireConsumer('$mediaplayerSeeked', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    seeking() {
      this._fireConsumer('$mediaplayerSeeking', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    durationchange(args) {
      this._fireConsumer('$mediaplayerDurationChange', args);
    }
    encrypted(args) {
      const video = args.videoElement;
      const event = args.event;
      // FIXME: Double encrypted events need to be properly filtered by Gstreamer
      if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
        this._previousInitData = event.initData;
        this._fireConsumer('$mediaplayerEncrypted', args);
      }
    }
    static _states() {
      return [class Playing extends this {
        $enter() {
          this._startUpdatingVideoTexture();
        }
        $exit() {
          this._stopUpdatingVideoTexture();
        }
        timeupdate() {
          this._fireConsumer('$mediaplayerProgress', {
            currentTime: this.videoEl.currentTime,
            duration: this.videoEl.duration || 1
          });
        }
        ended(args) {
          this._fireConsumer('$mediaplayerEnded', args);
          this._setState('');
        }
        pause(args) {
          this._fireConsumer('$mediaplayerPause', args);
          this._setState('Playing.Paused');
        }
        _clearSrc() {
          this._fireConsumer('$mediaplayerStop', {});
          this._setState('');
        }
        static _states() {
          return [class Paused extends this {}];
        }
      }];
    }
  }

  class localCookie {
    constructor(e) {
      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage,
        keys: this._getLocalStorageKeys
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies,
        keys: this._getCookieKeys
      };
    }
    _checkIfLocalStorageWorks() {
      if ("undefined" == typeof localStorage) return !1;
      try {
        return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
      } catch (e) {
        return !1;
      }
    }
    _getItemLocalStorage(e) {
      return window.localStorage.getItem(e);
    }
    _setItemLocalStorage(e, t) {
      return window.localStorage.setItem(e, t);
    }
    _removeItemLocalStorage(e) {
      return window.localStorage.removeItem(e);
    }
    _clearLocalStorage() {
      return window.localStorage.clear();
    }
    _getLocalStorageKeys() {
      return Object.keys(window.localStorage);
    }
    _getItemCookie(e) {
      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
        return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
      }(e) + "=([^;]*)"));
      return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
    }
    _setItemCookie(e, t) {
      var o = new Date(),
        r = new Date(o.getTime() + 15768e7);
      document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
    }
    _removeItemCookie(e) {
      document.cookie = "".concat(e, "=;Max-Age=-99999999;");
    }
    _clearCookies() {
      document.cookie.split(";").forEach(e => {
        document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
      });
    }
    _getCookieKeys() {
      return document.cookie.split(";").map(e => e.split("=")[0]);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initStorage = () => {
    Settings$1.get('platform', 'id');
    // todo: pass options (for example to force the use of cookies)
    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  const isWildcard = /^[!*$]$/;
  const hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  const isNamedGroup = /^\/:/;

  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */
  const stripRegex = function (route) {
    let char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';
    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }
    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  const createRegister = flags => {
    const reg = new Map()
    // store user defined and router
    // defined flags in register
    ;
    [...Object.keys(flags), ...Object.getOwnPropertySymbols(flags)].forEach(key => {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Request {
    constructor() {
      let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      let navArgs = arguments.length > 1 ? arguments[1] : undefined;
      let storeCaller = arguments.length > 2 ? arguments[2] : undefined;
      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;

      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */
      this._storeCaller = storeCaller;

      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */
      this._register = new Map();

      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */
      this._isCreated = false;

      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */
      this._isSharedInstance = false;

      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */
      this._cancelled = false;

      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */
      this._copiedHistoryState = null;

      // if there are arguments attached to navigate()
      // we store them in new request
      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      }
      // @todo: remove because we can simply check
      // ._storeCaller property
      this._register.set(symbols.store, this._storeCaller);
    }
    cancel() {
      Log$1.debug('[router]:', "cancelled ".concat(this._hash));
      this._cancelled = true;
    }
    get url() {
      return this._hash;
    }
    get register() {
      return this._register;
    }
    get hash() {
      return this._hash;
    }
    set hash(args) {
      this._hash = args;
    }
    get route() {
      return this._route;
    }
    set route(args) {
      this._route = args;
    }
    get provider() {
      return this._provider;
    }
    set provider(args) {
      this._provider = args;
    }
    get providerType() {
      return this._providerType;
    }
    set providerType(args) {
      this._providerType = args;
    }
    set page(args) {
      this._page = args;
    }
    get page() {
      return this._page;
    }
    set isCreated(args) {
      this._isCreated = args;
    }
    get isCreated() {
      return this._isCreated;
    }
    get isSharedInstance() {
      return this._isSharedInstance;
    }
    set isSharedInstance(args) {
      this._isSharedInstance = args;
    }
    get isCancelled() {
      return this._cancelled;
    }
    set copiedHistoryState(v) {
      this._copiedHistoryState = v;
    }
    get copiedHistoryState() {
      return this._copiedHistoryState;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Route {
    constructor() {
      let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // keep backwards compatible
      let type = ['on', 'before', 'after'].reduce((acc, type) => {
        return isFunction(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;
      if (type) {
        this._provider = {
          type,
          request: config[type]
        };
      }
    }
    get path() {
      return this._cfg.path;
    }
    get name() {
      return this._cfg.name;
    }
    get component() {
      return this._cfg.component;
    }
    get options() {
      return this._cfg.options;
    }
    get widgets() {
      return this._cfg.widgets;
    }
    get cache() {
      return this._cfg.cache;
    }
    get hook() {
      return this._cfg.hook;
    }
    get beforeNavigate() {
      return this._cfg.beforeNavigate;
    }
    get provider() {
      return this._provider;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */
  const getFloor = route => {
    return stripRegex(route).split('/').length;
  };

  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */
  const getRoutesByFloor = floor => {
    const matches = [];
    // simple filter of level candidates
    for (let [route] of routes$1.entries()) {
      if (getFloor(route) === floor) {
        matches.push(route);
      }
    }
    return matches;
  };

  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */
  const getRouteByHash = hash => {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    const getUrlParts = /(\/?:?[^/]+)/g;
    // grab possible candidates from stored routes
    const candidates = getRoutesByFloor(getFloor(hash));
    // break hash down in chunks
    const hashParts = hash.match(getUrlParts) || [];

    // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash
    let regexStore = [];
    let matches = candidates.filter(route => {
      let isMatching = true;
      // replace regex in route with lookup id => @@{storeId}@@
      if (hasRegex.test(route)) {
        const regMatches = route.match(hasRegex);
        if (regMatches && regMatches.length) {
          route = regMatches.reduce((fullRoute, regex) => {
            const lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }
      const routeParts = route.match(getUrlParts) || [];
      for (let i = 0, j = routeParts.length; i < j; i++) {
        const routePart = routeParts[i];
        const hashPart = hashParts[i];

        // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash
        if (hasLookupId.test(routePart)) {
          const routeMatches = hasLookupId.exec(routePart);
          const storeId = routeMatches[1];
          const routeRegex = regexStore[storeId];

          // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line
          const regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
          if (regMatches && regMatches.length) {
            const expression = regMatches[1];
            const modifiers = regMatches[2];
            const regex = new RegExp("^/".concat(expression, "$"), modifiers);
            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }
      return isMatching;
    });
    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        const match = matches[matches.indexOf(hash)];
        return routes$1.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(a => {
          return isNamedGroup.test(a) ? -1 : 1;
        });
        // would be strange if this fails
        // but still we test
        if (routeExists(matches[0])) {
          return routes$1.get(matches[0]);
        }
      }
    }
    return false;
  };
  const getValuesFromHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    const getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    const hashParts = hash.match(getUrlParts) || [];
    const routeParts = path.match(getUrlParts) || [];
    const getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce((storage, value, index) => {
      const match = getNamedGroup.exec(value);
      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }
      return storage;
    }, new Map());
  };
  const getOption = (stack, prop) => {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    }
    // we explicitly return undefined since we're testing
    // for explicit test values
  };

  /**
   * create and return new Route instance
   * @param config
   */
  const createRoute = config => {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      let options = {
        preventStorage: true
      };
      if (isObject(config.options)) {
        options = {
          ...config.options,
          ...options
        };
      }
      config.options = options;
      // if configured add reference to bootRequest
      // as router after provider
      if (bootRequest) {
        config.after = bootRequest;
      }
    }
    return new Route(config);
  };

  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */
  const createRequest = (url, args, store) => {
    return new Request(url, args, store);
  };
  const getHashByName = obj => {
    if (!obj.to && !obj.name) {
      return false;
    }
    const route = getRouteByName(obj.to || obj.name);
    const hasDynamicGroup = /\/:([\w-]+)\/?/;
    let hash = route;

    // if route contains dynamic group
    // we replace them with the provided params
    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        const keys = Object.keys(obj.params);
        hash = keys.reduce((acc, key) => {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }
      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }
    return hash;
  };
  const getRouteByName = name => {
    for (let [path, route] of routes$1.entries()) {
      if (route.name === name) {
        return path;
      }
    }
    return false;
  };
  const keepActivePageAlive = (route, request) => {
    if (isString(route)) {
      const routes = getRoutes();
      if (routes.has(route)) {
        route = routes.get(route);
      } else {
        return false;
      }
    }
    const register = request.register;
    const routeOptions = route.options;
    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }
    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emit = (function (page) {
    let events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!isArray(events)) {
      events = [events];
    }
    events.forEach(e => {
      const event = "_on".concat(ucfirst(e));
      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let activeWidget = null;
  const getReferences = () => {
    if (!widgetsHost) {
      return;
    }
    return widgetsHost.get().reduce((storage, widget) => {
      const key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };

  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */
  const updateWidgets = (widgets, page) => {
    // force lowercase lookup
    const configured = (widgets || []).map(ref => ref.toLowerCase());
    widgetsHost.forEach(widget => {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
      if (widget.visible) {
        emit(widget, ['activated'], page);
      }
    });
    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };
  const getWidgetByName = name => {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };

  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */
  const focusWidget = name => {
    const widget = getWidgetByName(name);
    if (widget) {
      setActiveWidget(widget);

      // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath
      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  const restoreFocus = () => {
    activeWidget = null;
    app._setState('');
  };
  const getActiveWidget = () => {
    return activeWidget;
  };
  const setActiveWidget = instance => {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const createComponent = (stage, type) => {
    return stage.c({
      type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */
  let history = [];
  const updateHistory = request => {
    const hash = getActiveHash();
    if (!hash) {
      return;
    }

    // navigate storage flag
    const register = request.register;
    const forceNavigateStore = register.get(symbols.store);

    // test preventStorage on route configuration
    const activeRoute = getRouteByHash(hash);
    const preventStorage = getOption(activeRoute.options, 'preventStorage');

    // we give prio to navigate storage flag
    let store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;
    if (store) {
      const toStore = hash.replace(/^\//, '');
      const location = locationInHistory(toStore);
      const stateObject = getStateObject(getActivePage(), request);
      const routerConfig = getRouterConfig();

      // store hash if it's not a part of history or flag for
      // storage of same hash is true
      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        const prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };
  const locationInHistory = hash => {
    for (let i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }
    return -1;
  };
  const getHistoryState = hash => {
    let state = null;
    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        const record = history[history.length - 1];
        // could be null
        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          const record = history[locationInHistory(hash)];
          state = record.state;
        }
      }
    }
    return state;
  };
  const replaceHistoryState = function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let hash = arguments.length > 1 ? arguments[1] : undefined;
    if (!history.length) {
      return;
    }
    const location = hash ? locationInHistory(hash) : history.length - 1;
    if (location !== -1 && isObject(state)) {
      history[location].state = state;
    }
  };
  const getStateObject = (page, request) => {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }
    return null;
  };
  const getHistory = () => {
    return history.slice(0);
  };
  const setHistory = function () {
    let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (isArray(arr)) {
      history = arr;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @type {Lightning.Application}
   */
  let application;

  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */
  let app;

  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */
  let pagesHost;

  /**
   * @type {Lightning.Stage}
   */
  let stage;

  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */
  let routerConfig;

  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */
  let widgetsHost;

  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */
  let rootHash;

  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */
  let bootRequest;

  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */
  let updateHash = true;

  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line
  let beforeEachRoute = async (from, to) => {
    return true;
  };

  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */
  let afterEachRoute = () => {};

  /**
   * All configured routes
   * @type {Map<string, object>}
   */
  let routes$1 = new Map();

  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */
  let components = new Map();

  /**
   * Flag if router has been initialised
   * @type {boolean}
   */
  let initialised = false;

  /**
   * Current page being rendered on screen
   * @type {null}
   */
  let activePage = null;
  let activeHash;
  let activeRoute;

  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */
  let lastAcceptedHash;

  /**
   * With on()-data providing behaviour the Router forced the App
   * in a Loading state. When the data-provider resolves we want to
   * change the state back to where we came from
   */
  let previousState;
  const mixin = app => {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    }
    // if the app is using widgets we grab refs
    // and hide all the widgets
    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList;
      // hide all widgets on boot
      widgetsHost.forEach(w => w.visible = false);
    }
    app._handleBack = e => {
      step(-1);
      e.preventDefault();
    };
  };
  const bootRouter = (config, instance) => {
    let {
      appInstance,
      routes
    } = config;

    // if instance is provided and it's and Lightning Component instance
    if (instance && isPage(instance)) {
      app = instance;
    }
    if (!app) {
      app = appInstance || AppInstance;
    }
    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);
    if (isArray(routes)) {
      setup(config);
    } else if (isFunction(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };
  const setup = config => {
    if (!initialised) {
      init(config);
    }
    config.routes.forEach(r => {
      const path = cleanHash(r.path);
      if (!routeExists(path)) {
        const route = createRoute(r);
        routes$1.set(path, route);
        // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route
        if (route.component) {
          let type = route.component;
          if (isComponentConstructor(type)) {
            if (!routerConfig.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }
          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };
  const init = config => {
    rootHash = config.root;
    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }
    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }
    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }
    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }
    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');
      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }
    config.routes.forEach(item => {
      // replacing regexes with 'R' to avoid issues with pattern matching below
      const strippedPath = stripRegex(item.path);

      // Pattern to identify the last path of the route
      // It should start with "/:" + any word  and ends with "?"
      // It should be the last path of the route
      // valid => /player/:asset/:assetId? (:assetId is optional)
      // invalid => /player/:asset/:assetId?/test (:assetId? is not an optional path)
      // invalid => /player/:asset?/:assetId? (second path is not considered as an optional path)
      const pattern = /.*\/:.*?\?$/u;
      if (pattern.test(strippedPath)) {
        const optionalPath = item.path.substring(0, item.path.lastIndexOf('/'));
        const originalPath = item.path.substring(0, item.path.lastIndexOf('?'));
        item.path = originalPath;
        //Create another entry with the optional path
        let optionalItem = {
          ...item
        };
        optionalItem.path = optionalPath;
        config.routes.push(optionalItem);
      }
    });
    initialised = true;
  };
  const storeComponent = (route, type) => {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  const getComponent = route => {
    if (components.has(route)) {
      return components.get(route);
    }
    return null;
  };

  // delete existing route instance from memory
  const deleteCurrentInstance = route => {
    if (components.has(route) && pagesHost.getIndex(components.get(route)) !== -1) {
      pagesHost.remove(components.get(route));
      storeComponent(route, components.get(route)._routedType || components.get(route).constructor);
    }
  };

  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */
  const mustUpdateLocationHash = () => {
    if (!routerConfig || !routerConfig.size) {
      return false;
    }
    // we need support to either turn change hash off
    // per platform or per app
    const updateConfig = routerConfig.get('updateHash');
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };

  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */
  const onRequestResolved = request => {
    const hash = request.hash;
    const route = request.route;
    const register = request.register;
    const page = request.page;

    // clean up history if modifier is set
    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    }

    // we only update the stackLocation if a route
    // is not expired before it resolves
    storeComponent(route.path, page);
    if (request.isSharedInstance || !request.isCreated) {
      emit(page, 'changed');
    } else if (request.isCreated) {
      emit(page, 'mounted');
    }

    // only update widgets if we have a host
    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    }

    // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route
    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    }

    // provide history object to active page
    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }
    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path;

    // cleanup all cancelled requests
    for (let request of navigateQueue.values()) {
      if (request.isCancelled && request.hash) {
        navigateQueue.delete(request.hash);
      }
    }
    afterEachRoute(request);
    Log$1.info('[route]:', route.path);
    Log$1.info('[hash]:', hash);
  };
  const cleanUp = (page, request) => {
    const route = activeRoute;
    const register = request.register;
    const lazyDestroy = routerConfig.get('lazyDestroy');
    const destroyOnBack = routerConfig.get('destroyOnHistoryBack');
    const keepAlive = register.get('keepAlive');
    const isFromHistory = register.get(symbols.backtrack);
    let doCleanup = false;

    // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled
    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    }

    // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false
    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    }

    // if the current and new request share the same route blueprint
    if (activeRoute === request.route.path) {
      doCleanup = true;
    }
    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor);

      // actual remove of page from memory
      pagesHost.remove(page);

      // force texture gc() if configured
      // so we can cleanup textures in the same tick
      if (routerConfig.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        visible: false,
        alpha: 1
      });
    }
  };
  const getActiveHash = () => {
    return activeHash;
  };
  const setActivePage = page => {
    activePage = page;
  };
  const getActivePage = () => {
    return activePage;
  };
  const getActiveRoute = () => {
    return activeRoute;
  };
  const getLastHash = () => {
    return lastAcceptedHash;
  };
  const setLastHash = hash => {
    lastAcceptedHash = hash;
  };
  const setPreviousState = state => {
    previousState = state;
  };
  const getPreviousState = () => {
    return previousState;
  };
  const routeExists = key => {
    return routes$1.has(key);
  };
  const getRootHash = () => {
    return rootHash;
  };
  const getBootRequest = () => {
    return bootRequest;
  };
  const getRouterConfig = () => {
    return routerConfig;
  };
  const getRoutes = () => {
    return routes$1;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const isFunction = v => {
    return typeof v === 'function';
  };
  const isObject = v => {
    return typeof v === 'object' && v !== null;
  };
  const isBoolean = v => {
    return typeof v === 'boolean';
  };
  const isPage = v => {
    if (v instanceof lng.Element || isComponentConstructor(v)) {
      return true;
    }
    return false;
  };
  const isComponentConstructor = type => {
    return type.prototype && 'isComponent' in type.prototype;
  };
  const isArray = v => {
    return Array.isArray(v);
  };
  const ucfirst = v => {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  const isString = v => {
    return typeof v === 'string';
  };
  const isPromise = method => {
    let result;
    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    return isObject(result) && isFunction(result.then);
  };
  const cleanHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  const getConfigMap = () => {
    const routerSettings = Settings$1.get('platform', 'router');
    const isObj = isObject(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce((config, key) => {
      config.set(key, isObj ? routerSettings[key] : Settings$1.get('platform', key));
      return config;
    }, new Map());
  };
  const getQueryStringParams = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    const resumeHash = getResumeHash();
    if ((hash === '$' || !hash) && resumeHash) {
      if (isString(resumeHash)) {
        hash = resumeHash;
      }
    }
    let parse = '';
    const getQuery = /([?&].*)/;
    const matches = getQuery.exec(hash);
    const params = {};
    if (document.location && document.location.search) {
      parse = document.location.search;
    }
    if (matches && matches.length) {
      let hashParams = matches[1];
      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, '');
        // we parse hash params last so they we can always
        // override search params with hash params
        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }
    if (parse) {
      const urlParams = new URLSearchParams(parse);
      for (const [key, value] of urlParams.entries()) {
        params[key] = value;
      }
      return params;
    } else {
      return false;
    }
  };
  const objectToQueryString = obj => {
    if (!isObject(obj)) {
      return '';
    }
    return '?' + Object.keys(obj).map(key => {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  const symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const dataHooks = {
    on: request => {
      setPreviousState(app.state || '');
      app._setState('Loading');
      return execProvider(request);
    },
    before: request => {
      return execProvider(request);
    },
    after: request => {
      try {
        execProvider(request, true);
      } catch (e) {
        // for now we fail silently
      }
      return Promise.resolve();
    }
  };
  const execProvider = (request, emitProvided) => {
    const route = request.route;
    const provider = route.provider;
    const expires = route.cache ? route.cache * 1000 : 0;
    const params = addPersistData(request);
    return provider.request(request.page, {
      ...params
    }).then(() => {
      request.page[symbols.expires] = Date.now() + expires;
      if (emitProvided) {
        emit(request.page, 'dataProvided');
      }
    }).catch(e => {
      request.page[symbols.expires] = Date.now();
      throw e;
    });
  };
  const addPersistData = _ref => {
    let {
      page,
      route,
      hash,
      register = new Map()
    } = _ref;
    const urlValues = getValuesFromHash(hash, route.path);
    const queryParams = getQueryStringParams(hash);
    const pageData = new Map([...urlValues, ...register]);
    const params = {};

    // make dynamic url data available to the page
    // as instance properties
    for (let [name, value] of pageData) {
      params[name] = value;
    }
    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    }

    // check navigation register for persistent data
    if (register.size) {
      const obj = {};
      for (let [k, v] of register) {
        obj[k] = v;
      }
      page.persist = obj;
    }

    // make url data and persist data available
    // via params property
    page.params = params;
    emit(page, ['urlParams'], params);
    return params;
  };

  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */
  const isPageExpired = page => {
    if (!page[symbols.expires]) {
      return false;
    }
    const expires = page[symbols.expires];
    const now = Date.now();
    return now >= expires;
  };
  const hasProvider = path => {
    if (routeExists(path)) {
      const record = routes$1.get(path);
      return !!record.provider;
    }
    return false;
  };
  const getProvider = route => {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      const {
        provider
      } = routes$1.get(route.path);
      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const fade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        if (o) {
          o.visible = false;
        }
        resolve();
      });
    });
  };
  const crossFade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      }
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        resolve();
      });
    });
  };
  const moveOnAxes = (axis, direction, i, o) => {
    const bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(resolve => {
      i.patch({
        ["".concat(axis)]: direction ? bounds * -1 : bounds,
        visible: true,
        smooth: {
          ["".concat(axis)]: [0, {
            duration: 0.4,
            delay: 0.2
          }]
        }
      });
      // out is optional
      if (o) {
        o.patch({
          ["".concat(axis)]: 0,
          smooth: {
            ["".concat(axis)]: [direction ? bounds : bounds * -1, {
              duration: 0.4,
              delay: 0.2
            }]
          }
        });
      }
      // resolve on y finish
      i.transition(axis).on('finish', () => {
        resolve();
      });
    });
  };
  const up = (i, o) => {
    return moveOnAxes('y', 0, i, o);
  };
  const down = (i, o) => {
    return moveOnAxes('y', 1, i, o);
  };
  const left = (i, o) => {
    return moveOnAxes('x', 0, i, o);
  };
  const right = (i, o) => {
    return moveOnAxes('x', 1, i, o);
  };
  var Transitions = {
    fade,
    crossFade,
    up,
    down,
    left,
    right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */
  const executeTransition = function (pageIn) {
    let pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const transition = pageIn.pageTransition || pageIn.easing;
    const hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    const transitionsDisabled = getRouterConfig().get('disableTransitions');
    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    }

    // default behaviour is a visibility toggle
    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;
      if (pageOut) {
        pageOut.visible = false;
      }
      return Promise.resolve();
    }
    if (transition) {
      let type;
      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }
      if (isPromise(type)) {
        return type;
      }
      if (isString(type)) {
        const fn = Transitions[type];
        if (fn) {
          return fn(pageIn, pageOut);
        }
      }

      // keep backwards compatible for now
      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        const smooth = function (p, v) {
          let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(resolve => {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', () => {
              resolve();
            });
          });
        };
        return pageIn.smoothIn({
          pageIn,
          smooth
        });
      }
    }
    return Transitions.crossFade(pageIn, pageOut);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * The actual loading of the component
   * */
  const load = async request => {
    let expired = false;
    try {
      request = await loader(request);
      if (request && !request.isCancelled) {
        // in case of on() providing we need to reset
        // app state;
        if (app.state === 'Loading') {
          if (getPreviousState() === 'Widgets') {
            app._setState('Widgets', [getActiveWidget()]);
          } else {
            app._setState('');
          }
        }
        // Do page transition if instance
        // is not shared between the routes
        if (!request.isSharedInstance && !request.isCancelled) {
          await executeTransition(request.page, getActivePage());
        }
      } else {
        expired = true;
      }
      // on expired we only cleanup
      if (expired || request.isCancelled) {
        Log$1.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
      } else {
        onRequestResolved(request);
        // resolve promise
        return request.page;
      }
    } catch (request) {
      if (!request.route) {
        console.error(request);
      } else if (!expired) {
        // @todo: revisit
        const {
          route
        } = request;
        // clean up history if modifier is set
        if (getOption(route.options, 'clearHistory')) {
          setHistory([]);
        } else if (!isWildcard.test(route.path)) {
          updateHistory(request);
        }
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
        handleError(request);
      }
    }
  };
  const loader = async request => {
    const route = request.route;
    const hash = request.hash;
    const register = request.register;

    // todo: grab from Route instance
    let type = getComponent(route.path);
    let isConstruct = isComponentConstructor(type);
    let provide = false;

    // if it's an instance bt we're not coming back from
    // history we test if we can re-use this instance
    if (!isConstruct && !register.get(symbols.backtrack)) {
      if (!mustReuse(route)) {
        type = type.constructor;
        isConstruct = true;
      }
    }

    // If page is Lightning Component instance
    if (!isConstruct) {
      request.page = type;
      // if we have have a data route for current page
      if (hasProvider(route.path)) {
        if (isPageExpired(type) || type[symbols.hash] !== hash) {
          provide = true;
        }
      }
      let currentRoute = getActivePage() && getActivePage()[symbols.route];
      // if the new route is equal to the current route it means that both
      // route share the Component instance and stack location / since this case
      // is conflicting with the way before() and after() loading works we flag it,
      // and check platform settings in we want to re-use instance
      if (route.path === currentRoute) {
        request.isSharedInstance = true;
        // since we're re-using the instance we must attach
        // historyState to the request to prevent it from
        // being overridden.
        if (isFunction(request.page.historyState)) {
          request.copiedHistoryState = request.page.historyState();
        }
      }
    } else {
      request.page = createComponent(stage, type);
      pagesHost.a(request.page);
      // test if need to request data provider
      if (hasProvider(route.path)) {
        provide = true;
      }
      request.isCreated = true;
    }

    // we store hash and route as properties on the page instance
    // that way we can easily calculate new behaviour on page reload
    request.page[symbols.hash] = hash;
    request.page[symbols.route] = route.path;
    try {
      if (provide) {
        // extract attached data-provider for route
        // we're processing
        const {
          type: loadType,
          provider
        } = getProvider(route);

        // update running request
        request.provider = provider;
        request.providerType = loadType;
        await dataHooks[loadType](request);

        // we early exit if the current request is expired
        if (hash !== getLastHash()) {
          return false;
        } else {
          if (request.providerType !== 'after') {
            emit(request.page, 'dataProvided');
          }
          // resolve promise
          return request;
        }
      } else {
        addPersistData(request);
        return request;
      }
    } catch (e) {
      request.error = e;
      return Promise.reject(request);
    }
  };
  const handleError = request => {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log$1.error(request);
    }
    if (request.page && routeExists('!')) {
      navigate('!', {
        request
      }, false);
    }
  };
  const mustReuse = route => {
    const opt = getOption(route.options, 'reuseInstance');
    const config = routerConfig.get('reuseInstance');

    // route always has final decision
    if (isBoolean(opt)) {
      return opt;
    }
    return !(isBoolean(config) && config === false);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class RoutedApp extends lng.Component {
    static _template() {
      return {
        Pages: {
          forceZIndexContext: true
        },
        /**
         * This is a default Loading page that will be made visible
         * during data-provider on() you CAN override in child-class
         */
        Loading: {
          rect: true,
          w: 1920,
          h: 1080,
          color: 0xff000000,
          visible: false,
          zIndex: 99,
          Label: {
            mount: 0.5,
            x: 960,
            y: 540,
            text: {
              text: 'Loading..'
            }
          }
        }
      };
    }
    static _states() {
      return [class Loading extends this {
        $enter() {
          this.tag('Loading').visible = true;
        }
        $exit() {
          this.tag('Loading').visible = false;
        }
      }, class Widgets extends this {
        $enter(args, widget) {
          // store widget reference
          this._widget = widget;

          // since it's possible that this behaviour
          // is non-remote driven we force a recalculation
          // of the focuspath
          this._refocus();
        }
        _getFocused() {
          // we delegate focus to selected widget
          // so it can consume remotecontrol presses
          return this._widget;
        }

        // if we want to widget to widget focus delegation
        reload(widget) {
          this._widget = widget;
          this._refocus();
        }
        _handleKey() {
          const restoreFocus = routerConfig.get('autoRestoreRemote');
          /**
           * The Router used to delegate focus back to the page instance on
           * every unhandled key. This is barely usefull in any situation
           * so for now we offer the option to explicity turn that behaviour off
           * so we don't don't introduce a breaking change.
           */
          if (!isBoolean(restoreFocus) || restoreFocus === true) {
            Router.focusPage();
          }
        }
      }];
    }

    /**
     * Return location where pages need to be stored
     */
    get pages() {
      return this.tag('Pages');
    }

    /**
     * Tell router where widgets are stored
     */
    get widgets() {
      return this.tag('Widgets');
    }

    /**
     * we MUST register _handleBack method so the Router
     * can override it
     * @private
     */
    _handleBack() {}

    /**
     * We MUST return Router.activePage() so the new Page
     * can listen to the remote-control.
     */
    _getFocused() {
      return Router.getActivePage();
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
  rouThor ==[x]
   */
  let navigateQueue = new Map();
  let forcedHash = '';
  let resumeHash = '';

  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */
  const startRouter = (config, instance) => {
    bootRouter(config, instance);
    registerListener();
    start();
  };

  // start translating url
  const start = () => {
    let hash = (getHash$1() || '').replace(/^#/, '');
    const bootKey = '$';
    const params = getQueryStringParams(hash);
    const bootRequest = getBootRequest();
    const rootHash = getRootHash();
    const isDirectLoad = hash.indexOf(bootKey) !== -1;

    // prevent direct reload of wildcard routes
    // expect bootComponent
    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    }

    // store resume point for manual resume
    resumeHash = isDirectLoad ? rootHash : hash || rootHash;
    const ready = () => {
      if (!hash && rootHash) {
        if (isString(rootHash)) {
          navigate(rootHash);
        } else if (isFunction(rootHash)) {
          rootHash().then(res => {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    };
    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }
      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest)) {
      bootRequest(params).then(() => {
        ready();
      }).catch(e => {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };
  const handleBootError = e => {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };

  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */
  const navigate = function (url) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    if (isObject(url)) {
      url = getHashByName(url);
      if (!url) {
        return;
      }
    }
    let hash = getHash$1();
    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }
    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      if (mustUpdateLocationHash()) {
        setHash(url);
      } else {
        forcedHash = url;
        handleHashChange(url).then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(() => {
        app._refocus();
      }).catch(e => {
        console.error(e);
      });
    }
  };
  const queue = function (hash) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);
    if (!navigateQueue.has(hash)) {
      for (let request of navigateQueue.values()) {
        request.cancel();
      }
      const request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }
    return false;
  };

  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */
  const handleHashChange = async override => {
    const hash = cleanHash(override || getHash$1());
    const queueId = decodeURIComponent(hash);
    let request = navigateQueue.get(queueId);

    // handle hash updated manually
    if (!request && !navigateQueue.size) {
      request = queue(hash);
    }
    const route = getRouteByHash(hash);
    if (!route) {
      if (routeExists('*')) {
        navigate('*', {
          failedHash: hash
        });
      } else {
        console.error("Unable to navigate to: ".concat(hash));
      }
      return;
    }

    // update current processed request
    request.hash = hash;
    request.route = route;
    let result = await beforeEachRoute(getActiveHash(), request);

    // test if a local hook is configured for the route
    if (result && route.beforeNavigate) {
      result = await route.beforeNavigate(getActiveHash(), request);
    }
    if (isBoolean(result)) {
      // only if resolve value is explicitly true
      // we continue the current route request
      if (result) {
        return resolveHashChange(request);
      }
    } else {
      // if navigation guard didn't return true
      // we cancel the current request
      request.cancel();
      navigateQueue.delete(queueId);
      if (isString(result)) {
        navigate(result);
      } else if (isObject(result)) {
        let store = true;
        if (isBoolean(result.store)) {
          store = result.store;
        }
        navigate(result.path, result.params, store);
      }
    }
  };

  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */
  const resolveHashChange = request => {
    const hash = request.hash;
    const route = request.route;
    const queueId = decodeURIComponent(hash);
    // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself
    setLastHash(hash);
    if (route.path) {
      const component = getComponent(route.path);
      // if a hook is provided for the current route
      if (isFunction(route.hook)) {
        const urlParams = getValuesFromHash(hash, route.path);
        const params = {};
        for (const key of urlParams.keys()) {
          params[key] = urlParams.get(key);
        }
        route.hook(app, {
          ...params
        });
      }
      // if there is a component attached to the route
      if (component) {
        // force page to root state to prevent shared state issues
        const activePage = getActivePage();
        if (activePage) {
          const keepAlive = keepActivePageAlive(getActiveRoute(), request);
          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }
        if (isPage(component)) {
          load(request).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(contents => {
            return contents.default;
          }).then(module => {
            storeComponent(route.path, module);
            return load(request);
          }).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };

  /**
   * Directional step in history
   * @param level
   */
  const step = function () {
    let level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (!level || isNaN(level)) {
      return false;
    }
    const history = getHistory();
    // for now we only support negative numbers
    level = Math.abs(level);

    //Check whether we have any history avaialble or not
    if (history.length) {
      // for now we only support history back
      const route = history.splice(history.length - level, level)[0];
      // store changed history
      setHistory(history);
      return navigate(route.hash, {
        [symbols.backtrack]: true,
        [symbols.historyState]: route.state
      }, false);
    } else if (routerConfig.get('backtrack')) {
      const hashLastPart = /(\/:?[\w%\s-]+)$/;
      let hash = stripRegex(getHash$1());
      let floor = getFloor(hash);

      // test if we got deep-linked
      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, '');
          // if we have a configured route
          // we navigate to it
          if (getRouteByHash(hash)) {
            return navigate(hash, {
              [symbols.backtrack]: true
            }, false);
          }
        }
      }
    }

    // we can't step back past the amount
    // of history entries
    if (level > history.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }
      return app.application.closeApp();
    }
    return false;
  };

  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */
  const resume = () => {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction(resumeHash)) {
      resumeHash().then(res => {
        resumeHash = '';
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };

  /**
   * Force reload active hash
   */
  const reload = () => {
    if (!isNavigating()) {
      const hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };

  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */
  const isNavigating = () => {
    if (navigateQueue.size) {
      let isProcessing = false;
      for (let request of navigateQueue.values()) {
        if (!request.isCancelled) {
          isProcessing = true;
        }
      }
      return isProcessing;
    }
    return false;
  };
  const getResumeHash = () => {
    return resumeHash;
  };

  /**
   * By default we return the location hash
   * @returns {string}
   */
  let getHash$1 = () => {
    return document.location.hash;
  };

  /**
   * Update location hash
   * @param url
   */
  let setHash = url => {
    document.location.hash = url;
  };

  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */
  const initRouter = config => {
    if (config.getHash) {
      getHash$1 = config.getHash;
    }
    if (config.setHash) {
      setHash = config.setHash;
    }
  };

  /**
   * On hash change we start processing
   */
  const registerListener = () => {
    Registry.addEventListener(window, 'hashchange', async () => {
      if (mustUpdateLocationHash()) {
        try {
          await handleHashChange();
        } catch (e) {
          console.error(e);
        }
      }
    });
  };

  /**
   * Navigate to root hash
   */
  const root = () => {
    const rootHash = getRootHash();
    if (isString(rootHash)) {
      navigate(rootHash);
    } else if (isFunction(rootHash)) {
      rootHash().then(res => {
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  };
  const deletePage = param => {
    deleteCurrentInstance(param);
  };

  // export API
  var Router = {
    startRouter,
    navigate,
    resume,
    step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage() {
      // warning
      return getActivePage();
    },
    deletePage,
    getActiveRoute,
    getActiveHash,
    focusWidget,
    getActiveWidget,
    restoreFocus,
    isNavigating,
    getHistory,
    setHistory,
    getHistoryState,
    replaceHistoryState,
    getQueryStringParams,
    reload,
    symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root: root,
    /**
     * Deprecated api methods
     */
    setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let ApplicationInstance;
  var Launch = (App, appSettings, platformSettings, appData) => {
    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage();
    // Initialize plugins
    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }
    const app = Application(App, appData, platformSettings);
    initLightningSdkPlugin.log = Log$1;
    initLightningSdkPlugin.settings = Settings$1;
    initLightningSdkPlugin.ads = Ads;
    initLightningSdkPlugin.lightning = lng;
    ApplicationInstance = new app(appSettings);
    initLightningSdkPlugin.appInstance = ApplicationInstance;
    return ApplicationInstance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class SubtitleComponent extends lng.Component {
    static _template() {
      return {
        visible: false,
        rect: true,
        color: 0x90000000,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: 5
        },
        Text: {
          y: 5,
          x: 20,
          text: {
            textColor: 0xffffffff,
            fontSize: 38,
            lineHeight: 38 * 1.4,
            textAlign: 'center',
            wordWrap: true,
            maxLines: 3,
            shadow: true,
            shadowColor: 0xff333333
          }
        }
      };
    }
    _init() {
      this._textTextureDefaults = new lng.textures.TextTexture(this.stage).cloneArgs();
      this.tag('Text').on('txLoaded', _ref => {
        let {
          _source
        } = _ref;
        this.w = _source.w + this.tag('Text').x * 2;
        this.h = _source.h;
        this.position();
      });
    }
    get textFormat() {
      const textTag = this.tag('Text').text;
      return {
        fontFace: textTag.fontFace || 'sans-serif',
        fontSize: textTag.fontSize,
        lineHeight: textTag.lineHeight,
        textAlign: textTag.textAlign,
        wordWrap: true,
        maxLines: textTag.maxLines
      };
    }
    show() {
      this.visible = true;
    }
    hide() {
      this.visible = false;
    }
    position() {
      this.x = this._calculateX(this.xPos);
      this.y = this._calculateY(this.yPos);
    }
    set viewportW(v) {
      this._viewportW = v;
      this.x = this._calculateX(this.xPos);
    }
    get viewportW() {
      return this._viewportW || this.application.finalW;
    }
    set viewportH(v) {
      this._viewportH = v;
      this.y = this._calculateY(this.yPos);
    }
    get viewportH() {
      return this._viewportH || this.application.finalH;
    }
    _calculateX(x) {
      if (x === 'center') {
        x = (this.viewportW - this.finalW) / 2;
      } else if (x === 'left') {
        x = 60;
      } else if (x === 'right') {
        x = this.viewportW - this.finalW - 60;
      }
      return x;
    }
    set xPos(v) {
      this._x = v;
      this.x = this._calculateX(v);
    }
    get xPos() {
      return this._x || 'center';
    }
    _calculateY(y) {
      if (y === 'center') {
        return (this.viewportH - this.finalH) / 2;
      } else if (y === 'top') {
        return 60;
      } else if (y === 'bottom') {
        return this.viewportH - this.finalH - 60;
      }
      return y;
    }
    set yPos(v) {
      this._y = v;
      this.y = this._calculateY(v);
    }
    get yPos() {
      return this._y || 'bottom';
    }
    set fontFamily(v) {
      this.tag('Text').text.fontFace = v;
    }
    set fontSize(v) {
      this.tag('Text').text.fontSize = v;
      this.tag('Text').text.lineHeight = v * 1.3;
    }
    set fontColor(v) {
      this.tag('Text').color = v;
    }
    set backgroundColor(v) {
      this.color = v;
    }
    _defineBreakpoint(text, breakpoint) {
      if (breakpoint >= this.maxWidth) return this.maxWidth;
      const info = lng.textures.TextTexture.renderer(this.stage, this.stage.platform.getDrawingCanvas(), {
        ...this._textTextureDefaults,
        ...this.textFormat,
        ...{
          wordWrapWidth: breakpoint
        },
        text
      })._calculateRenderInfo();
      if (info.width <= breakpoint && info.lines.length <= 2) {
        return breakpoint;
      } else {
        return this._defineBreakpoint(text, breakpoint * 1.25);
      }
    }
    set text(v) {
      this.alpha = 0;
      if (v && v.length) {
        const breakpoint = this._defineBreakpoint(v, 640);
        this.tag('Text').text.wordWrapWidth = breakpoint;
        this.tag('Text').text = v;
        this.alpha = 1;
      }
    }
    set textAlign(v) {
      this._textAlign = v;
      this.tag('Text').text.textAlign = v;
    }
    set maxWidth(v) {
      this._maxWidth = v;
    }
    get maxWidth() {
      return (this._maxWidth || 1200) - this.tag('Text').x * 2;
    }
    set maxLines(v) {
      this.tag('Text').text.maxLines = v;
    }
  }

  function _defineProperty$1(e, r, t) {
    return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _toPrimitive$1(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$1(t) {
    var i = _toPrimitive$1(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  function asyncGeneratorStep(n, t, e, r, o, a, c) {
      try {
          var i = n[a](c), u = i.value;
      } catch (n) {
          return void e(n);
      }
      i.done ? t(u) : Promise.resolve(u).then(r, o);
  }

  function _asyncToGenerator(n) {
      return function() {
          var t = this, e = arguments;
          return new Promise((function(r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                  asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                  asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
          }));
      };
  }

  function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter((function(r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
          }))), t.push.apply(t, o);
      }
      return t;
  }

  function _objectSpread(e) {
      for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
              _defineProperty(e, r, t[r]);
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          }));
      }
      return e;
  }

  function _defineProperty(e, r, t) {
      return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[r] = t, e;
  }

  function _toPropertyKey(t) {
      var i = _toPrimitive(t, "string");
      return "symbol" == typeof i ? i : i + "";
  }

  function _toPrimitive(t, r) {
      if ("object" != typeof t || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
  }

  class Logger {
      constructor() {
          this._logCallback = undefined;
          this._prefix = "LightningUI";
          this._debug = false;
      }
      get debug() {
          return this._debug;
      }
      set debug(value) {
          this._debug = Boolean(value);
      }
      get logCallback() {
          return this._logCallback;
      }
      set logCallback(value) {
          if ("function" !== typeof value) {
              this.warn("logCallback value must be a function, instead received ".concat(typeof value));
              return;
          }
          this._logCallback = value;
      }
      log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }
          if (this._logCallback) {
              this._logCallback({
                  level: "log",
                  payload: args
              });
          }
          if (this.debug) {
              console.log(this._prefix, ...args);
          }
      }
      info() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }
          if (this._logCallback) {
              this._logCallback({
                  level: "info",
                  payload: args
              });
          }
          if (this.debug) {
              console.info(this._prefix, ...args);
          }
      }
      warn() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
          }
          if (this._logCallback) {
              this._logCallback({
                  level: "warn",
                  payload: args
              });
          }
          if (this.debug) {
              console.warn(this._prefix, ...args);
          }
      }
      error() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
          }
          if (this._logCallback) {
              this._logCallback({
                  level: "error",
                  payload: args
              });
          }
          if (this.debug) {
              console.error(this._prefix, ...args);
          }
      }
  }

  var loggerInstance = new Logger;

  function getEuclideanDistance(xA, yA, xB, yB) {
      var xDiff = xA - xB;
      var yDiff = yA - yB;
      return Math.sqrt(Math.pow(xDiff, 2) + Math.sqrt(Math.pow(yDiff, 2)));
  }

  function getShortestDistance(coordinate, element) {
      var [xA, yA] = coordinate;
      var [xB, yB] = element.core ? element.core.getAbsoluteCoords(0, 0) : [ 0, 0 ];
      var distanceToStart = getEuclideanDistance(xA, yA, xB, yB);
      var distanceToMiddle = getEuclideanDistance(xA, yA, xB + element.w / 2, yB + element.h / 2);
      var distanceToEnd = getEuclideanDistance(xA, yA, xB + element.w, yB + element.h);
      return Math.min(distanceToStart, distanceToMiddle, distanceToEnd);
  }

  function isComponentOnScreen(component) {
      var offsets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!component) return false;
      var {w: w, h: h, core: {renderContext: {px: px, py: py}, _scissor: scissor = []} = {}} = component;
      var stageH = component.stage.h / component.stage.getRenderPrecision();
      var stageW = component.stage.w / component.stage.getRenderPrecision();
      var finalX = px;
      var finalY = py;
      var relativeOffsetX = px - component.x;
      var relativeOffsetY = py - component.y;
      var offsetX = offsets.offsetX - relativeOffsetX || 0;
      var offsetY = offsets.offsetY - relativeOffsetY || 0;
      if (component.transition("x")) {
          finalX = px - component.x + component.transition("x").targetValue;
      }
      if (component.transition("y")) {
          finalY = py - component.y + component.transition("y").targetValue;
      }
      finalX += offsetX;
      finalY += offsetY;
      var wVis = finalX >= 0 && finalX + w <= stageW;
      var hVis = finalY >= 0 && finalY + h <= stageH;
      if (!wVis || !hVis) return false;
      if (scissor && scissor.length) {
          var [leftBounds = null, topBounds = null, clipWidth = null, clipHeight = null] = scissor;
          var withinLeftClippingBounds = Math.round(finalX + w) >= Math.round(leftBounds);
          var withinRightClippingBounds = Math.round(finalX) <= Math.round(leftBounds + clipWidth);
          var withinTopClippingBounds = Math.round(finalY + h) >= Math.round(topBounds);
          var withinBottomClippingBounds = Math.round(finalY + h) <= Math.round(topBounds + clipHeight);
          return withinLeftClippingBounds && withinRightClippingBounds && withinTopClippingBounds && withinBottomClippingBounds;
      }
      return true;
  }

  function getWidthByUpCount(theme) {
      var upCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var screenW = theme.layout.screenW;
      var columnCount = theme.layout.columnCount;
      var marginX = theme.layout.marginX;
      var gutterX = theme.layout.gutterX;
      if (upCount < 1 || upCount > columnCount) {
          console.error("Column expects a number between 1 & ".concat(columnCount, ". Received ").concat(upCount));
          return;
      }
      var columnWidth = screenW - marginX * 2;
      var columnGapTotal = (upCount - 1) * gutterX;
      var totalColumnsWidth = columnWidth - columnGapTotal;
      return totalColumnsWidth / upCount;
  }

  function getWidthByColumnSpan(theme, columnSpan) {
      var columnCount = theme.layout.columnCount;
      var gutterX = theme.layout.gutterX;
      return getWidthByUpCount(theme, columnCount) * columnSpan + gutterX * (columnSpan - 1);
  }

  function getDimensions(theme) {
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {w: w, h: h, ratioX: ratioX, ratioY: ratioY, upCount: upCount} = obj;
      var fallbackW = fallback.w || 0;
      var fallbackH = fallback.h || 0;
      var dimensions = {};
      if (w && h) {
          dimensions = {
              w: w,
              h: h
          };
      } else if (h && ratioX && ratioY) {
          dimensions = {
              w: Math.round(h * ratioX / ratioY),
              h: h
          };
      } else if (ratioX && ratioY && upCount) {
          dimensions = getItemRatioDimensions(theme, ratioX, ratioY, upCount);
      } else if (h && upCount) {
          dimensions = {
              w: Math.round(getWidthByUpCount(theme, upCount)),
              h: h
          };
      } else if (h) {
          dimensions = {
              w: fallbackW,
              h: h
          };
      } else if (w) {
          dimensions = {
              w: w,
              h: fallbackH
          };
      } else {
          dimensions = {
              w: fallbackW,
              h: fallbackH
          };
      }
      dimensions = _objectSpread(_objectSpread({}, dimensions), {}, {
          ratioX: ratioX,
          ratioY: ratioY,
          upCount: upCount
      });
      return dimensions;
  }

  function getItemRatioDimensions(theme, ratioX, ratioY, upCount) {
      var w, h;
      if (ratioX && ratioY && upCount) {
          w = Math.round(getWidthByUpCount(theme, upCount));
          h = Math.round(w / ratioX * ratioY);
      } else {
          w = 0;
          h = 0;
      }
      return {
          w: w,
          h: h
      };
  }

  function getAspectRatioW(h) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "16:9";
      var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ":";
      var [ratioW, ratioH] = ratio.split(seperator);
      return h * (ratioW / ratioH);
  }

  function getAspectRatioH(w) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "16:9";
      var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ":";
      var [ratioW, ratioH] = ratio.split(seperator);
      return w / (ratioW / ratioH);
  }

  function getHexColor(hex) {
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (!hex) {
          return 0;
      }
      if (typeof hex === "number") {
          hex = hex.toString(16).slice(2);
      }
      hex = hex.replace("#", "");
      var hexAlpha = Math.round(alpha * 255).toString(16);
      var str = "0x".concat(hexAlpha).concat(hex);
      return Number(str);
  }

  function getValidColor(color) {
      if (typeof color === "string" || typeof color === "number") {
          if (/^0x[0-9a-fA-F]{8}/g.test(color)) {
              return Number(color);
          } else if (/^#[0-9a-fA-F]{6}/g.test(color)) {
              return getHexColor(color.substr(1, 6));
          } else if (typeof color === "string" && /^[0-9]{8,10}/g.test(color)) {
              return parseInt(color);
          } else if (typeof color === "number" && /^[0-9]{8,10}/g.test(color.toString())) {
              return color;
          } else if (typeof color === "string" && color.indexOf("rgba") > -1) {
              return rgba2argb(color);
          } else if (typeof color === "string" && color.indexOf("rgb") > -1) {
              var rgba = [ ...color.replace(/rgb\(|\)/g, "").split(","), "255" ];
              return lng.StageUtils.getArgbNumber(rgba);
          }
      }
      return null;
  }

  function simplifyFraction(_ref) {
      var [numerator, denominator] = _ref;
      for (var i = numerator; i > 0; i--) {
          if (!(numerator % i) && !(denominator % i)) {
              return [ numerator / i, denominator / i ];
          }
      }
  }

  function reduceFraction(string) {
      return simplifyFraction(string.split("/").map((n => +n))).join("/");
  }

  var getValFromObjPath = (object, path) => {
      if (typeof path === "string") path = path.split(".").filter((key => key.length));
      return path.reduce(((dive, key) => dive && dive[key]), object);
  };

  function rgba2argb(rgbaStr) {
      var rgba = rgbaStr.replace(/rgba\(|\)/g, "").split(",");
      rgba[3] = rgba[3] * 255;
      return lng.StageUtils.getArgbNumber(rgba);
  }

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var RoundRect = {
      getWidth(w) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var {padding: padding, paddingLeft: paddingLeft, paddingRight: paddingRight, strokeWidth: strokeWidth} = _objectSpread({
              padding: 0,
              paddingLeft: 0,
              paddingRight: 0,
              strokeWidth: 0
          }, options);
          if (!w) return 0;
          return w - (paddingLeft || padding) - (paddingRight || padding) - strokeWidth;
      },
      getHeight(h) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var {padding: padding, paddingBottom: paddingBottom, paddingTop: paddingTop, strokeWidth: strokeWidth} = _objectSpread({
              padding: 0,
              paddingBottom: 0,
              paddingTop: 0,
              strokeWidth: 0
          }, options);
          if (!h) return 0;
          return h - (paddingBottom || padding) - (paddingTop || padding) - strokeWidth;
      }
  };

  function clone(target, object) {
      var _clone = Object.create(Object.getPrototypeOf(target));
      Object.defineProperties(_clone, Object.getOwnPropertyDescriptors(target));
      if (!object || target === object) return _clone;
      for (var key in object) {
          var value = object[key];
          if (target.hasOwnProperty(key)) {
              _clone[key] = getMergeValue(key, target, object);
          } else {
              _clone[key] = value;
          }
      }
      return _clone;
  }

  function getMergeValue(key, target, object) {
      var targetVal = target[key];
      var objectVal = object[key];
      var targetValType = typeof targetVal;
      var objectValType = typeof objectVal;
      if (targetValType !== objectValType || objectValType === "function" || Array.isArray(objectVal)) {
          return objectVal;
      }
      if (objectVal && objectValType === "object") {
          return clone(targetVal, objectVal);
      }
      return objectVal;
  }

  function measureTextWidth() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      var {fontStyle: fontStyle, fontWeight: fontWeight, fontSize: fontSize, fontFamily: fontFamily = text.fontFace || "sans-serif"} = text;
      var fontCss = [ fontStyle, fontWeight, fontSize ? "".concat(fontSize, "px") : "0", "'".concat(fontFamily, "'") ].filter(Boolean).join(" ");
      ctx.font = fontCss;
      var textMetrics = ctx.measureText(text.text || "");
      return Math.round(textMetrics.width);
  }

  function getFirstNumber() {
      for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          numbers[_key5] = arguments[_key5];
      }
      return numbers.find(Number.isFinite);
  }

  function getDimension(prop, component) {
      if (!component) return 0;
      var transition = component.transition(prop);
      if (transition.isRunning()) return transition.targetValue;
      var renderProp = prop;
      if (prop === "w") {
          renderProp = "renderWidth";
      } else if (prop === "h") {
          renderProp = "renderHeight";
      }
      return component[renderProp] || component[prop];
  }

  var getX = component => getDimension("x", component);

  var getY = component => getDimension("y", component);

  var getW = component => getDimension("w", component);

  var getH = component => getDimension("h", component);

  function flatten(arr) {
      return arr.reduce(((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)), []);
  }

  function objectPropertyOf(object, path) {
      return path.reduce(((obj, key) => obj && obj[key] !== "undefined" ? obj[key] : undefined), object);
  }

  function stringifyCompare(objA, objB) {
      return JSON.stringify(objA) === JSON.stringify(objB);
  }

  function delayForAnimation(callback) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
      setTimeout(callback, delay);
  }

  function downloadFile(content, fileName, contentType) {
      var validContentTypes = [ "plain", "json" ];
      if (!validContentTypes.includes(contentType)) {
          contentType = "plain";
      }
      var dataStr = "data:text/".concat(contentType, ";charset=utf-8,") + encodeURIComponent(JSON.stringify(content));
      var dlAnchorElem = document.createElement("a");
      dlAnchorElem.setAttribute("href", dataStr);
      dlAnchorElem.setAttribute("download", fileName);
      dlAnchorElem.click();
  }

  var degreesToRadians = deg => deg * (Math.PI / 180);

  var MARKUP_STRING_PATTERN = /({ICON.*?}|{BADGE:.*?}|{NEWLINE}|{TEXT:.*?})/g;

  function isMarkupString() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (typeof str !== "string") {
          return false;
      }
      return MARKUP_STRING_PATTERN.test(str);
  }

  function parseInlineContent() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var content = [];
      if (str && typeof str === "string" || str.text) {
          var string = typeof str === "string" ? str : str.text;
          var iconRegEx = /^{ICON:(.*?)?\|(.*?)?}$/g;
          var badgeRegEx = /^{BADGE:(.*?)}$/g;
          var newlineRegEx = /^{NEWLINE}$/g;
          var textRegEx = /^{TEXT:(.*?)?\|(.*?)?}$/g;
          var splitStr = string.split(MARKUP_STRING_PATTERN);
          if (splitStr && splitStr.length) {
              splitStr.forEach((item => {
                  var formattedItem = item;
                  var badge = badgeRegEx.exec(item);
                  var icon = iconRegEx.exec(item);
                  var newline = newlineRegEx.exec(item);
                  var text = textRegEx.exec(item);
                  if (badge && badge[1]) {
                      formattedItem = {
                          badge: badge[1]
                      };
                  } else if (icon && icon[1]) {
                      formattedItem = {
                          title: icon[1],
                          icon: icon[2] || icon[1]
                      };
                  } else if (newline) {
                      formattedItem = {
                          newline: true
                      };
                  } else if (text && text[1]) {
                      formattedItem = {
                          text: text[1],
                          style: text[2]
                      };
                  }
                  content.push(formattedItem);
              }));
          }
      }
      return content;
  }

  function max() {
      if (!arguments) {
          return;
      }
      var args = Array.from(arguments).filter((arg => !isNaN(arg) && arg != null));
      if (!args.length) {
          return;
      }
      return Math.max(...args);
  }

  function createConditionalZContext(component, zOffset) {
      if (!component.zIndex && typeof zOffset !== "undefined" && zOffset !== 0) {
          component.forceZIndexContext = true;
          component.zIndex = 0;
      }
  }

  function watchForUpdates(_ref2) {
      var _element$__core;
      var {element: element, watchProps: watchProps = [], sideEffect: sideEffect = () => {}} = _ref2;
      if (!(element !== null && element !== void 0 && element.isElement)) {
          loggerInstance.error("watchForUpdates: Expected a Lightning Element passed to element parameter, received ".concat(typeof element));
      }
      var initialOnAfterUpdate = (_element$__core = element.__core) === null || _element$__core === void 0 ? void 0 : _element$__core._onAfterUpdate;
      element.onAfterUpdate = function(element) {
          var hasChanged = false;
          watchProps.forEach((prop => {
              if (element.transition(prop) && element.transition(prop).isRunning()) {
                  return;
              }
              var prevValueKey = "__watchPrev".concat(prop);
              var nextValue = element[prop];
              if (nextValue !== element[prevValueKey]) {
                  element[prevValueKey] = nextValue;
                  hasChanged = true;
              }
          }));
          if (hasChanged) {
              sideEffect();
          }
          if (initialOnAfterUpdate) {
              initialOnAfterUpdate(element);
          }
      }.bind(this);
      return element;
  }

  function convertTextAlignToFlexJustify(align) {
      switch (align) {
        case "left":
          return "flex-start";

        case "center":
          return "center";

        case "right":
          return "flex-end";

        default:
          console.warn('Expected "textAlign" values are "left," "center," and "right," but instead, '.concat(align, ' was received and will fall back to "left."'));
          return "flex-start";
      }
  }

  function getMaxRoundRadius(radius, width, height) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var maxRadius = r => Math.max(0, Math.min(r, Math.min(width, height) / 2) + offset);
      return Array.isArray(radius) ? radius.map((r => Number(maxRadius(r)) || 0)) : Number(maxRadius(radius)) || 0;
  }

  var utils = {
      isMarkupString: isMarkupString,
      capitalizeFirstLetter: capitalizeFirstLetter,
      degreesToRadians: degreesToRadians,
      downloadFile: downloadFile,
      delayForAnimation: delayForAnimation,
      stringifyCompare: stringifyCompare,
      objectPropertyOf: objectPropertyOf,
      flatten: flatten,
      getDimension: getDimension,
      getFirstNumber: getFirstNumber,
      measureTextWidth: measureTextWidth,
      clone: clone,
      getMergeValue: getMergeValue,
      RoundRect: RoundRect,
      rgba2argb: rgba2argb,
      getValFromObjPath: getValFromObjPath,
      reduceFraction: reduceFraction,
      getValidColor: getValidColor,
      getHexColor: getHexColor,
      getAspectRatioH: getAspectRatioH,
      getAspectRatioW: getAspectRatioW,
      getWidthByUpCount: getWidthByUpCount,
      getDimensions: getDimensions,
      getWidthByColumnSpan: getWidthByColumnSpan,
      createConditionalZContext: createConditionalZContext,
      watchForUpdates: watchForUpdates,
      convertTextAlignToFlexJustify: convertTextAlignToFlexJustify,
      getMaxRoundRadius: getMaxRoundRadius
  };

  var utils$1 = utils;

  class Metrics {
      constructor() {
          this._keyMetricsCallback = undefined;
      }
      get keyMetricsCallback() {
          return this._keyMetricsCallback;
      }
      set keyMetricsCallback(value) {
          if (-1 < [ "undefined", "function" ].indexOf(typeof value)) {
              this._keyMetricsCallback = value;
              return;
          }
          loggerInstance.warn("context keyMetricsCallback expected a function. Received ".concat(typeof value));
      }
  }

  var metricsInstance = new Metrics;

  var eventEmitterInstance = new lng.EventEmitter;

  var events = eventEmitterInstance;

  var baseTheme = {
      name: "Base Lightning TV",
      alpha: {
          primary: 1,
          secondary: .7,
          tertiary: .1,
          inactive: .5,
          full: 1,
          none: 0,
          alpha1: .1,
          alpha2: .3,
          alpha3: .5,
          alpha4: .7,
          alpha5: .9
      },
      animation: {
          duration: {
              none: 0,
              xfast: .1,
              fast: .25,
              normal: .5,
              slow: .75,
              xslow: .9
          },
          delay: {
              none: 0,
              xfast: .01,
              fast: .025,
              normal: .05,
              slow: .075,
              xslow: .09
          },
          expressive: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          },
          expressiveEntrance: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          },
          expressiveExit: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          },
          standard: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          },
          standardEntrance: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          },
          standardExit: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          },
          utility: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          },
          utilityEntrance: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          },
          utilityExit: {
              timingFunction: "cubic-bezier(0, 0, 1, 1)",
              delay: 0,
              duration: .25
          }
      },
      asset: {
          arrowLeft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==",
          arrowRight: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=",
          backspaceOutline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC",
          check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=="
      },
      color: {
          white: [ "#ffffff", 1 ],
          black: [ "#000000", 1 ],
          grey: [ "#929096", 1 ],
          red: [ "#e74c3c", 1 ],
          orange: [ "#dc7633", 1 ],
          yellow: [ "#f7dc6f", 1 ],
          green: [ "#2Ecc71", 1 ],
          blue: [ "#93a9fd", 1 ],
          purple: [ "#663399", 1 ],
          palette: {
              "grey-05": [ "#f8f7fa", 1 ],
              "grey-40": [ "#929096", 1 ],
              "grey-70": [ "#48474b", 1 ],
              "grey-90": [ "#181819", 1 ],
              "blue-20": [ "#becffe", 1 ],
              "blue-40": [ "#93a9fd", 1 ],
              "blue-90": [ "#000033", 1 ]
          },
          material: [ "#181819", 1 ],
          materialBrand: [ "#000033", 1 ],
          overlay: [ "#181819", .7 ],
          textNeutral: [ "#f8f7fa", 1 ],
          textNeutralSecondary: [ "#f8f7fa", .7 ],
          textNeutralTertiary: [ "#f8f7fa", .1 ],
          textNeutralDisabled: [ "#f8f7fa", .5 ],
          textInverse: [ "#181819", 1 ],
          textInverseSecondary: [ "#181819", .7 ],
          textInverseTertiary: [ "#181819", .1 ],
          textInverseDisabled: [ "#181819", .5 ],
          textBrand: [ "#93a9fd", 1 ],
          textBrandSecondary: [ "#93a9fd", .7 ],
          textBrandTertiary: [ "#93a9fd", .1 ],
          textBrandDisabled: [ "#93a9fd", .5 ],
          textPositive: [ "#2Ecc71", 1 ],
          textNegative: [ "#e74c3c", 1 ],
          textInfo: [ "#93a9fd", 1 ],
          textCaution: [ "#dc7633", 1 ],
          fillTransparent: [ "#ffffff", 0 ],
          fillNeutral: [ "#f8f7fa", 1 ],
          fillNeutralSecondary: [ "#f8f7fa", .7 ],
          fillNeutralTertiary: [ "#f8f7fa", .1 ],
          fillNeutralDisabled: [ "#f8f7fa", .5 ],
          fillInverse: [ "#181819", 1 ],
          fillInverseSecondary: [ "#181819", .7 ],
          fillInverseTertiary: [ "#181819", .1 ],
          fillInverseDisabled: [ "#181819", .5 ],
          fillBrand: [ "#93a9fd", 1 ],
          fillBrandSecondary: [ "#93a9fd", .7 ],
          fillBrandTertiary: [ "#93a9fd", .1 ],
          fillBrandDisabled: [ "#93a9fd", .5 ],
          fillPositive: [ "#2Ecc71", 1 ],
          fillNegative: [ "#e74c3c", 1 ],
          fillInfo: [ "#93a9fd", 1 ],
          fillCaution: [ "#dc7633", 1 ],
          strokeNeutral: [ "#f8f7fa", 1 ],
          strokeNeutralSecondary: [ "#f8f7fa", .7 ],
          strokeNeutralTertiary: [ "#f8f7fa", .1 ],
          strokeNeutralDisabled: [ "#f8f7fa", .5 ],
          strokeInverse: [ "#181819", 1 ],
          strokeInverseSecondary: [ "#181819", .7 ],
          strokeInverseTertiary: [ "#181819", .1 ],
          strokeInverseDisabled: [ "#181819", .5 ],
          strokeBrand: [ "#93a9fd", 1 ],
          strokeBrandSecondary: [ "#93a9fd", .7 ],
          strokeBrandTertiary: [ "#93a9fd", .1 ],
          strokeBrandDisabled: [ "#93a9fd", .5 ],
          strokePositive: [ "#2Ecc71", 1 ],
          strokeNegative: [ "#e74c3c", 1 ],
          strokeInfo: [ "#93a9fd", 1 ],
          strokeCaution: [ "#dc7633", 1 ],
          interactiveNeutral: [ "#ffffff", .1 ],
          interactiveNeutralFocus: [ "#ffffff", 1 ],
          interactiveNeutralFocusSoft: [ "#ffffff", .1 ],
          interactiveInverse: [ "#48474b", undefined ],
          interactiveInverseFocus: [ "#48474b", 1 ],
          interactiveInverseFocusSoft: [ "#48474b", .1 ],
          interactiveBrand: [ "#becffe", .1 ],
          interactiveBrandFocus: [ "#becffe", 1 ],
          interactiveBrandFocusSoft: [ "#becffe", .1 ],
          shadowNeutral: [ "#000000", .7 ],
          shadowNeutralFocus: [ "#000000", .7 ],
          shadowNeutralFocusSoft: [ "#000000", .7 ],
          shadowNeutralText: [ "#000000", 1 ],
          shadowInverse: [ "#000000", .7 ],
          shadowInverseFocus: [ "#000000", .7 ],
          shadowInverseFocusSoft: [ "#000000", .7 ],
          shadowInverseText: [ "#000000", 1 ],
          shadowBrand: [ "#000000", .7 ],
          shadowBrandFocus: [ "#000000", .7 ],
          shadowBrandFocusSoft: [ "#000000", .7 ],
          shadowBrandText: [ "#000000", 1 ]
      },
      componentConfig: {
          Keyboard: {
              style: {
                  keyProps: {
                      delete: {
                          title: null,
                          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC"
                      }
                  }
              }
          }
      },
      font: [],
      layout: {
          columnCount: 10,
          focusScale: 1.2,
          gutterX: 20,
          gutterY: 20,
          marginX: 150,
          marginY: 150,
          safe: 50,
          screenW: 1920,
          screenH: 1080
      },
      radius: {
          none: 0,
          xs: 2,
          sm: 4,
          md: 8,
          lg: 16,
          xl: 24
      },
      spacer: {
          none: 0,
          xxs: 2,
          xs: 4,
          sm: 8,
          md: 10,
          lg: 20,
          xl: 30,
          xxl: 40,
          xxxl: 50
      },
      stroke: {
          none: 0,
          sm: 2,
          md: 4,
          lg: 6,
          xl: 8
      },
      typography: {
          display1: {
              fontFamily: "Arial",
              fontSize: 75,
              lineHeight: 85,
              fontStyle: "500",
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          display2: {
              fontFamily: "Arial",
              fontSize: 50,
              lineHeight: 60,
              fontStyle: "500",
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          headline1: {
              fontFamily: "Arial",
              fontSize: 35,
              fontStyle: "500",
              lineHeight: 48,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          headline2: {
              fontFamily: "Arial",
              fontSize: 30,
              fontStyle: "500",
              lineHeight: 40,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          headline3: {
              fontFamily: "Arial",
              fontSize: 25,
              fontStyle: "500",
              lineHeight: 36,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          body1: {
              fontFamily: "Arial",
              fontSize: 25,
              fontStyle: "300",
              lineHeight: 40,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          body2: {
              fontFamily: "Arial",
              fontSize: 22,
              fontStyle: "300",
              lineHeight: 32,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          body3: {
              fontFamily: "Arial",
              fontSize: 20,
              fontStyle: "300",
              lineHeight: 32,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          button1: {
              fontFamily: "Arial",
              fontSize: 25,
              fontStyle: "500",
              lineHeight: 32,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          button2: {
              fontFamily: "Arial",
              fontSize: 20,
              fontStyle: "500",
              lineHeight: 32,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          callout1: {
              fontFamily: "Arial",
              fontSize: 20,
              fontStyle: "500",
              lineHeight: 32,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          caption1: {
              fontFamily: "Arial",
              fontSize: 15,
              fontStyle: "500",
              lineHeight: 24,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          tag1: {
              fontFamily: "Arial",
              fontSize: 20,
              fontStyle: "500",
              lineHeight: 24,
              verticalAlign: "middle",
              textBaseline: "bottom"
          },
          footnote1: {
              fontFamily: "Arial",
              fontSize: 22,
              fontStyle: "300",
              lineHeight: 30,
              verticalAlign: "middle",
              textBaseline: "bottom"
          }
      }
  };

  var customFontFaces = [];

  var fontLoader = fonts => {
      var promises = [];
      var _loop = function _loop() {
          var {family: family, src: src, descriptors: descriptors} = fonts[i];
          var fontSrc = src && Array.isArray(src) && src.length ? src.map((url => url.substr(0, 5) === "local" ? url : "url(".concat(url, ")"))).join(",") : "url(" + src + ")";
          var fontFace = new FontFace(family, fontSrc, descriptors || {});
          loggerInstance.info("Loading font", family);
          document.fonts.add(fontFace);
          promises.push(new Promise((resolve => {
              fontFace.load().then((() => {
                  customFontFaces.push(fontFace);
                  resolve(family);
              })).catch((err => {
                  resolve(new Error("".concat(family, ": ").concat(err.message)));
              }));
          })));
      };
      for (var i = 0; i < fonts.length; i++) {
          _loop();
      }
      return Promise.all(promises).then((fontsLoaded => {
          var loaded = fontsLoaded.filter((font => !(font instanceof Error))).join(", ");
          if (loaded) {
              loggerInstance.log("Fonts loaded: ".concat(loaded));
          }
          var failed = fontsLoaded.filter((font => font instanceof Error)).map((item => item.message)).join(", ");
          if (failed) {
              loggerInstance.error("Unable to load fonts: ".concat(failed));
          }
      }));
  };

  var cleanupFonts = function() {
      var _ref3 = _asyncToGenerator((function*(fonts) {
          if (document.fonts && "delete" in document.fonts) {
              if (!customFontFaces.length) return;
              customFontFaces = customFontFaces.filter((fontFace => {
                  if (!fonts.find((font => font.family === fontFace.family))) {
                      loggerInstance.info("Removing font", fontFace.family);
                      document.fonts.delete(fontFace);
                      return false;
                  } else {
                      return fontFace;
                  }
              }));
          } else {
              loggerInstance.info("Unable to remove manually-added fonts");
          }
      }));
      return function cleanupFonts(_x) {
          return _ref3.apply(this, arguments);
      };
  }();

  var THEME_KEY_REPLACER = {
      fontFamily: "fontFace"
  };

  var merge = {
      all: objArray => {
          var result = {};
          for (var i = 0; i < objArray.length; i++) {
              result = clone(result, objArray[i]);
          }
          return result;
      }
  };

  var base64Cache = [];

  var isSubTheme = themeName => "subTheme" === themeName.slice(0, 8);

  function getMimeTypeFromDataUri(dataUri) {
      var matches = dataUri.match(/^data:(.*?);base64,/);
      if (matches && matches.length === 2) {
          return matches[1];
      }
      return null;
  }

  function checkBase64EncodedImage(str) {
      var regex = /^data:image\/(jpeg|jpg|png|gif);base64,/;
      var isImage = regex.test(str);
      var mimeType = isImage ? getMimeTypeFromDataUri(str.match(regex)[0]) : null;
      return {
          isImage: isImage,
          mimeType: mimeType
      };
  }

  function base64ToBlobURL(base64String, mimeType) {
      var byteCharacters = atob(base64String.substring(base64String.indexOf(",") + 1));
      var byteArrays = [];
      try {
          for (var offset = 0; offset < byteCharacters.length; offset += 512) {
              var slice = byteCharacters.slice(offset, offset + 512);
              var byteNumbers = new Array(slice.length);
              for (var i = 0; i < slice.length; i++) {
                  byteNumbers[i] = slice.charCodeAt(i);
              }
              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
          }
          var blob = new Blob(byteArrays, {
              type: mimeType
          });
          var blobURL = URL.createObjectURL(blob);
          return blobURL;
      } catch (error) {
          loggerInstance.info("Unable to convert base64 image to URL");
          return null;
      }
  }

  class ThemeManager {
      constructor() {
          this._cache = new Map;
          if (typeof window === "undefined") return;
          if (!window.LUI) {
              window.LUI = {};
          }
          if (!window.LUI.themeManagerInstances) {
              window.LUI.themeManagerInstances = [ {
                  themeManager: this,
                  events: events
              } ];
          } else {
              window.LUI.themeManagerInstances.push({
                  themeManager: this,
                  events: events
              });
          }
      }
      _setCache(key, payload) {
          if (typeof window === "undefined") return;
          window.LUI.themeManagerInstances.forEach((_ref4 => {
              var {themeManager: themeManager} = _ref4;
              if (themeManager) themeManager._cache.set(key, payload);
          }));
      }
      _deleteCache(key) {
          if (typeof window === "undefined") return;
          window.LUI.themeManagerInstances.forEach((_ref5 => {
              var {themeManager: themeManager} = _ref5;
              if (themeManager) themeManager._cache.delete(key);
          }));
      }
      _emit(key, payload) {
          if (typeof window === "undefined") return;
          window.LUI.themeManagerInstances.forEach((_ref6 => {
              var {events: events} = _ref6;
              events.emit(key, payload);
          }));
      }
      getTheme() {
          if (this._cache.has("theme")) {
              return this._cache.get("theme");
          }
          var theme = this._processTheme.call(this);
          this._setCache("theme", theme);
          return theme;
      }
      setTheme(themeConfig) {
          var _this = this;
          return _asyncToGenerator((function*() {
              var value;
              if (Array.isArray(themeConfig)) {
                  value = merge.all(themeConfig);
              } else {
                  value = themeConfig;
              }
              if ("object" !== typeof value || null === value) {
                  loggerInstance.warn("context theme expected an object. Received ".concat(typeof value));
                  return;
              }
              _this._clearCache();
              var theme = _this._processTheme.call(_this, [ value ], value.extensions);
              _this._setCache("theme", theme);
              yield cleanupFonts(theme.font);
              if (theme.font && theme.font.length) {
                  yield _this._loadFonts(theme.font);
              }
              _this._refreshSubThemes();
              _this._emit("themeExtensionsUpdate");
              _this._emit("themeUpdate");
              return theme;
          }))();
      }
      getSubTheme(subThemeName) {
          if (this._cache.has("subTheme".concat(subThemeName))) {
              return this._cache.get("subTheme".concat(subThemeName)).result;
          }
          return;
      }
      setSubTheme(subThemeName, value) {
          var _arguments = arguments, _this2 = this;
          return _asyncToGenerator((function*() {
              var triggerUpdate = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : true;
              if (!subThemeName) {
                  loggerInstance.warn("Sub theme name not specified");
                  return;
              }
              if ("string" !== typeof subThemeName) {
                  loggerInstance.warn("Sub theme name must be a string. Received an ".concat(typeof subThemeName));
                  return;
              }
              if ("object" !== typeof value || !Object.keys(value).length) {
                  loggerInstance.warn("Could not set subTheme ".concat(subThemeName, ", value should be an object with properties. Received an ").concat(typeof value));
                  return;
              }
              var globalTheme = _this2.getTheme();
              var subTheme = _this2._processTheme.call(_this2, [ globalTheme, value ]);
              if (subTheme.font && subTheme.font.length) {
                  yield _this2._loadFonts(subTheme.font);
              }
              _this2._setCache("subTheme".concat(subThemeName), {
                  original: value,
                  result: subTheme
              });
              if (triggerUpdate) _this2._emit("themeUpdate".concat(subThemeName));
              return subTheme;
          }))();
      }
      _refreshSubThemes() {
          [ ...this._cache.keys() ].forEach((key => {
              if ("string" === typeof key && isSubTheme(key)) {
                  var _cache = this._cache.get(key);
                  if (_cache.original) this.updateSubTheme(key.replace(/^subTheme/, ""), _cache.original);
              }
          }));
      }
      _loadFonts(fontArray) {
          return _asyncToGenerator((function*() {
              try {
                  yield fontLoader(fontArray);
              } catch (err) {
                  loggerInstance.error("Unable to load font: ".concat(err));
              }
          }))();
      }
      updateTheme(themeConfig) {
          var _this3 = this;
          return _asyncToGenerator((function*() {
              var value;
              if (Array.isArray(themeConfig)) {
                  value = merge.all(themeConfig);
              } else {
                  value = themeConfig;
              }
              var currentTheme = {};
              if (_this3._cache.has("theme")) {
                  currentTheme = _this3._cache.get("theme");
              }
              _this3._clearCache();
              var theme = _this3._processTheme.call(_this3, [ currentTheme, value ], value.extensions || currentTheme.extensions);
              _this3._setCache("theme", theme);
              if (theme.font && theme.font.length) {
                  yield _this3._loadFonts(theme.font);
              }
              _this3._refreshSubThemes();
              if (value.extensions) _this3._emit("themeExtensionsUpdate");
              _this3._emit("themeUpdate");
              return theme;
          }))();
      }
      _clearCache() {
          base64Cache.filter((image => {
              if (window.URL && typeof window.URL.revokeObjectURL === "function") URL.revokeObjectURL(image);
              return false;
          }));
          this._cache.forEach(((value, key) => {
              if ("string" !== typeof key || !isSubTheme(key)) {
                  this._deleteCache(key);
              }
          }));
          this._cache.forEach(((value, key) => {
              if ("string" === typeof key && isSubTheme(key)) {
                  this.setSubTheme(key.replace("subTheme", ""), value.original, false);
              }
          }));
      }
      updateSubTheme(subThemeName, value) {
          var _arguments2 = arguments, _this4 = this;
          return _asyncToGenerator((function*() {
              var triggerUpdate = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : true;
              if (!subThemeName) {
                  loggerInstance.warn("Sub theme name not specified");
                  return;
              }
              if ("object" !== typeof value || !Object.keys(value).length) {
                  loggerInstance.warn("Could not update subTheme ".concat(subThemeName, " due to invalid value"));
                  return;
              }
              var globalTheme = _this4.getTheme();
              var currentTheme = {};
              if (_this4._cache.has("subTheme".concat(subThemeName))) {
                  currentTheme = _this4._cache.get("subTheme".concat(subThemeName)).original;
              }
              var subTheme = _this4._processTheme.call(_this4, [ globalTheme, currentTheme, value ]);
              if (subTheme.font && subTheme.font.length) {
                  yield _this4._loadFonts(subTheme.font);
              }
              _this4._setCache("subTheme".concat(subThemeName), {
                  original: clone(currentTheme, value),
                  result: subTheme
              });
              if (triggerUpdate) _this4._emit("themeUpdate".concat(subThemeName));
              return subTheme;
          }))();
      }
      removeSubTheme(subThemeName) {
          if (this._cache.has("subTheme".concat(subThemeName))) {
              this._deleteCache("subTheme".concat(subThemeName));
          }
          this._emit("themeUpdate".concat(subThemeName));
      }
      _getComponentUUID(id) {
          return "componentStyle".concat(id);
      }
      _processTheme() {
          var themeArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var extensions = arguments.length > 1 ? arguments[1] : undefined;
          if (!Array.isArray(themeArray)) {
              throw new Error("context processTheme expected an array. Received ".concat(typeof themeArray));
          }
          var theme = merge.all([ baseTheme, ...themeArray ]);
          var themeFunctions = {};
          var themeString = JSON.stringify(theme, ((key, originalValue) => {
              var value = originalValue;
              if (value && typeof value === "object") {
                  var replacement = originalValue;
                  for (var k in value) {
                      if (Object.hasOwnProperty.call(value, k) && THEME_KEY_REPLACER[k]) {
                          replacement[k && THEME_KEY_REPLACER[k]] = value[k];
                          delete replacement[k];
                      }
                  }
                  value = replacement;
              }
              var {isImage: isImage, mimeType: mimeType} = checkBase64EncodedImage(value);
              if (window.URL && typeof window.URL.createObjectURL === "function" && isImage) {
                  try {
                      var blobURL = base64ToBlobURL(value, mimeType);
                      base64Cache.push(blobURL);
                      return blobURL;
                  } catch (error) {
                      return value;
                  }
              }
              if (Array.isArray(value) && 2 === value.length && !value[0].targetComponent && value[0].length && typeof value[0] === "string" && value[0].substr(0, 1) === "#" && typeof value[1] === "number") {
                  return getHexColor(value[0], value[1]);
              } else if ("extensions" === key || "function" === typeof value || "object" === typeof value && value !== null && "Object" !== value.constructor.name && !Array.isArray(value)) {
                  themeFunctions[key] = value;
                  return;
              } else if ("string" === typeof value && value.includes("theme.")) {
                  var themeValue = getValFromObjPath({
                      theme: theme
                  }, value);
                  if (themeValue) {
                      return themeValue;
                  } else {
                      return value;
                  }
              } else {
                  var validColor = getValidColor(value);
                  if (validColor) {
                      return validColor;
                  }
                  return value;
              }
          }));
          return _objectSpread(_objectSpread(_objectSpread({}, JSON.parse(themeString)), themeFunctions), {}, {
              extensions: extensions
          });
      }
  }

  var themeManagerInstance = new ThemeManager;

  class Context {
      get theme() {
          return themeManagerInstance.getTheme();
      }
      set theme(value) {
          loggerInstance.warn("Context.theme must be set using context.setTheme or context.updateTheme");
      }
      get keyMetricsCallback() {
          return metricsInstance.keyMetricsCallback;
      }
      set keyMetricsCallback(value) {
          loggerInstance.warn("Context.keyMetricsCallback must be set using context.setKeyMetricsCallback");
      }
      get debug() {
          return loggerInstance.debug;
      }
      set debug(value) {
          loggerInstance.debug = value;
      }
      on() {
          return events.on(...arguments);
      }
      off() {
          return events.off(...arguments);
      }
      emit() {
          return events.emit(...arguments);
      }
      log() {
          loggerInstance.log(...arguments);
      }
      info() {
          loggerInstance.info(...arguments);
      }
      warn() {
          loggerInstance.warn(...arguments);
      }
      error() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
          }
          loggerInstance.error(args);
      }
      setTheme(value) {
          return themeManagerInstance.setTheme(value);
      }
      updateTheme(value) {
          return themeManagerInstance.updateTheme(value);
      }
      getSubTheme(subThemeName) {
          return themeManagerInstance.getSubTheme(subThemeName);
      }
      setSubThemes(subThemesObj) {
          if ("object" !== typeof subThemesObj) {
              loggerInstance.warn("subThemes must be an object");
              return;
          }
          for (var subTheme in subThemesObj) {
              themeManagerInstance.setSubTheme(subTheme, subThemesObj[subTheme]);
          }
      }
      setSubTheme(subThemeName, value) {
          return themeManagerInstance.setSubTheme(subThemeName, value);
      }
      updateSubTheme(subThemeName, value) {
          return themeManagerInstance.updateSubTheme(subThemeName, value);
      }
      removeSubTheme(subThemeName) {
          themeManagerInstance.removeSubTheme(subThemeName);
      }
      setLogCallback(value) {
          loggerInstance.logCallback = value;
      }
      setKeyMetricsCallback(value) {
          metricsInstance.keyMetricsCallback = value;
      }
      config() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var configKeys = Object.keys(config);
          for (var i = 0; i < configKeys.length; i++) {
              var setMethod = this["set" + capitalizeFirstLetter(configKeys[i])];
              if (setMethod) {
                  setMethod(config[configKeys[i]]);
              }
          }
          return this;
      }
  }

  var contextInstance = new Context;

  class GlobalUpdateManager {
      constructor() {
          this._updateThemeSet = new Set;
          this._requestUpdateSet = new Set;
          this._timeout = null;
          this._runUpdatesTimeoutHandler = this._runUpdatesTimeoutHandler.bind(this);
      }
      _runUpdatesTimeoutHandler() {
          this._timeout = null;
          this._updateThemeSet.forEach((component => {
              try {
                  component._updateThemeComponent();
              } catch (e) {
                  contextInstance.error("Error updating component themes", e);
              }
          }));
          this._updateThemeSet.clear();
          this._requestUpdateSet.forEach((component => {
              try {
                  component.requestUpdate();
              } catch (e) {
                  contextInstance.error("Error updating component", e);
              }
          }));
          this._requestUpdateSet.clear();
      }
      flush() {
          if (!this._timeout) return;
          clearTimeout(this._timeout);
          this._runUpdatesTimeoutHandler();
      }
      addUpdateTheme(component) {
          this._updateThemeSet.add(component);
          if (!this._timeout) {
              this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0);
          }
      }
      deleteUpdateTheme(component) {
          this._updateThemeSet.delete(component);
      }
      addRequestUpdate(component) {
          this._requestUpdateSet.add(component);
          if (!this._timeout) {
              this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0);
          }
      }
      deleteRequestUpdate(component) {
          this._requestUpdateSet.delete(component);
      }
      hasQueuedRequestFor(component) {
          return this._requestUpdateSet.has(component);
      }
  }

  var updateManager = new GlobalUpdateManager;

  function capital(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function mergeProps(componentConfigProp, prop) {
      var _result;
      var result = prop;
      if (typeof componentConfigProp === "object" && Object.keys(componentConfigProp).length && typeof prop === "object") {
          result = clone(componentConfigProp, prop);
      }
      return (_result = result) !== null && _result !== void 0 ? _result : componentConfigProp;
  }

  function getPropertyDescriptor$1(name, key) {
      return {
          get() {
              var _this$__componentConf3;
              var customGetter = this["_get".concat(capital(name))];
              if (customGetter && typeof customGetter === "function") {
                  var _this$__componentConf, _this$__componentConf2;
                  var value = customGetter.call(this, this[key]);
                  this[key] = value || ((_this$__componentConf = this.__componentConfigProps) === null || _this$__componentConf === void 0 ? void 0 : _this$__componentConf[name]);
                  return mergeProps((_this$__componentConf2 = this.__componentConfigProps) === null || _this$__componentConf2 === void 0 ? void 0 : _this$__componentConf2[name], value);
              }
              return mergeProps((_this$__componentConf3 = this.__componentConfigProps) === null || _this$__componentConf3 === void 0 ? void 0 : _this$__componentConf3[name], this[key]);
          },
          set(value) {
              var oldValue = this[key];
              if (value !== oldValue) {
                  var changeHandler = this["_set".concat(capital(name))];
                  if (changeHandler && typeof changeHandler === "function") {
                      value = changeHandler.call(this, value);
                  }
                  var newValue = key === "style" ? clone(this[key], value) : value;
                  if (typeof this[key] === "object" && this[key] !== null && this[key].style) {
                      var style = clone(this[key].style, value.style || {});
                      newValue.style = style;
                  }
                  this[key] = newValue;
                  this.queueRequestUpdate();
              }
          },
          configurable: true,
          enumerable: true
      };
  }

  function getAliasPropertyDescriptor(prev, curr) {
      var deprecationWarning = 'The property "'.concat(prev, '" is deprecated and will be removed in a future release. Please use "').concat(curr, '" instead.');
      return {
          get() {
              console.warn(deprecationWarning);
              return this[curr];
          },
          set(value) {
              console.warn(deprecationWarning);
              this[curr] = value;
          }
      };
  }

  function withUpdates(Base) {
      return class extends Base {
          static get name() {
              return Base.name;
          }
          _construct() {
              var prototype = Object.getPrototypeOf(this);
              if (!prototype._withUpdatesInitialized) {
                  var props = this.constructor.properties || [];
                  props.forEach((name => {
                      var key = "_" + name;
                      var descriptor = getPropertyDescriptor$1(name, key);
                      if (descriptor !== undefined) {
                          Object.defineProperty(prototype, name, descriptor);
                      }
                  }));
                  var aliasProps = this.constructor.aliasProperties || [];
                  aliasProps.forEach((alias => {
                      if (alias && typeof alias.prev === "string" && typeof alias.curr === "string") {
                          var descriptor = getAliasPropertyDescriptor(alias.prev, alias.curr);
                          if (descriptor !== undefined) {
                              Object.defineProperty(prototype, alias.prev, descriptor);
                          }
                      }
                  }));
                  prototype._withUpdatesInitialized = true;
              }
              this._whenEnabled = new Promise((resolve => {
                  this._whenEnabledResolver = resolve;
              }));
              super._construct && super._construct();
          }
          queueRequestUpdate() {
              if (!this._isAttached()) return;
              updateManager.addRequestUpdate(this);
          }
          _firstEnable() {
              this._readyForUpdates = true;
              this._whenEnabledResolver();
              updateManager.deleteRequestUpdate(this);
              this.requestUpdate();
              super._firstEnable && super._firstEnable();
          }
          requestEarlyUpdate() {
              this._readyForUpdates = true;
              if (updateManager.hasQueuedRequestFor(this)) {
                  updateManager.deleteRequestUpdate(this);
                  this._readyForUpdates = true;
                  this.requestUpdate();
                  return true;
              }
              return false;
          }
          _detach() {
              super._detach();
              updateManager.deleteRequestUpdate(this);
          }
          requestUpdate() {
              var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              if (this._readyForUpdates || force) {
                  var result = this._update();
                  if (typeof result === "object" && result !== null && result.catch) {
                      result.catch((e => {
                          contextInstance.error("asyncronous _update() error in '".concat(this.constructor.__componentName, "'"), this, e);
                      }));
                  }
              }
          }
          logPropTable() {
              console.table(this._propTable);
          }
          get _propTable() {
              return this.constructor.properties.reduce(((acc, prop) => {
                  acc[prop] = this[prop];
                  return acc;
              }), {});
          }
      };
  }

  function getPropertyDescriptor(path) {
      return {
          get() {
              return this.tag(path);
          },
          configurable: true,
          enumerable: true
      };
  }

  function withTags(Base) {
      return class extends Base {
          static get name() {
              return Base.name;
          }
          _construct() {
              var prototype = Object.getPrototypeOf(this);
              if (!prototype._withTagsInitialized) {
                  var tags = this.constructor.tags || [];
                  tags.forEach((tag => {
                      if (typeof tag === "object") {
                          var {name: name, path: path} = tag;
                      } else {
                          var name = tag;
                          var path = tag;
                      }
                      var key = "_" + name;
                      var descriptor = getPropertyDescriptor(path);
                      Object.defineProperty(prototype, key, descriptor);
                  }));
                  prototype._withTagsInitialized = true;
              }
              super._construct && super._construct();
          }
      };
  }

  function withHandleKey(Base) {
      return class extends Base {
          static get name() {
              return Base.name;
          }
          _handleKey(keyEvent) {
              return this._processEvent(keyEvent);
          }
          _handleKeyRelease(keyEvent) {
              return this._processEvent(keyEvent, "Release");
          }
          _processEvent(keyEvent) {
              var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
              var keyMap = this.stage.application.__keymap || {};
              var key = keyMap[keyEvent.keyCode];
              if (!key) {
                  key = keyEvent.key;
              }
              if (key && typeof this["on".concat(key).concat(suffix)] === "function") {
                  this._invokeKeyPayloadCallback(key + suffix);
                  return this["on".concat(key).concat(suffix)].call(this, this, keyEvent);
              }
              return false;
          }
          _invokeKeyPayloadCallback(key) {
              if (this.metricsPayload && typeof contextInstance.keyMetricsCallback === "function") {
                  contextInstance.keyMetricsCallback(key, this.metricsPayload);
              }
          }
      };
  }

  function withLayout(Base) {
      return class extends Base {
          _construct() {
              super._construct && super._construct();
              this._previousDimensionData = null;
          }
          get itemLayout() {
              return this._itemLayout;
          }
          set itemLayout(v) {
              var componentName = this.constructor._componentName || this.constructor.name;
              var itemLayout;
              if (v) {
                  itemLayout = JSON.parse(JSON.stringify(v, ((k, v) => {
                      if (k !== "circle" && v < 0) {
                          contextInstance.error("itemLayout for ".concat(componentName, " received an invalid value of ").concat(v, " for ").concat(k));
                          return;
                      } else if (k === "circle") {
                          return Boolean(v);
                      }
                      return v;
                  })));
              }
              if (!stringifyCompare(this._itemLayout, itemLayout)) {
                  if (itemLayout && !itemLayout.upCount) {
                      this._originalW = this.w;
                      this._originalH = this.h;
                      this._itemLayout = _objectSpread({
                          w: this._originalW,
                          h: this._originalH
                      }, itemLayout);
                  } else {
                      this._itemLayout = itemLayout;
                  }
                  this._updateItemLayout();
              }
          }
          _allowUpdate() {
              var {w: w = "", h: h = "", circle: circle = "", ratioX: ratioX = "", ratioY: ratioY = "", upCount: upCount = ""} = this._itemLayout || {};
              var layoutString = Object.values(contextInstance.theme.layout).join("") + "".concat(w).concat(h).concat(circle ? 1 : 0).concat(ratioX).concat(ratioY).concat(upCount);
              if (layoutString !== this._previousDimensionData) {
                  this._previousDimensionData = layoutString;
                  return true;
              }
              return false;
          }
          _updateItemLayout() {
              if (!this._allowUpdate()) return;
              var {w: w, h: h} = getDimensions(this.theme, this._itemLayout);
              if (h || w) {
                  var width = contextInstance.theme.layout.screenW;
                  var height = contextInstance.theme.layout.screenH;
                  var calculatedWidth = w || h * (width / height);
                  var calculatedHeight = h || w * (height / width);
                  this.w = this._itemLayout && this._itemLayout.circle ? calculatedHeight : calculatedWidth;
                  this.h = calculatedHeight;
                  if (this._itemLayout && this._itemLayout.circle && this.style.radius) {
                      this._circleSet = true;
                      this._originalRadius = this.style.radius;
                      this.style = _objectSpread(_objectSpread({}, this.style), {}, {
                          radius: calculatedHeight / 2
                      });
                  } else if (this._circleSet) {
                      this.style = _objectSpread(_objectSpread({}, this.style), {}, {
                          radius: this._originalRadius
                      });
                      this._originalRadius = undefined;
                      this._circleSet = false;
                  }
                  this.queueRequestUpdate && this.queueRequestUpdate();
                  this.fireAncestors("$itemChanged");
              }
          }
      };
  }

  var getCharacterValue = (char, index) => char.charCodeAt(0) * (index + 1);

  var sortObject = obj => {
      var sortedObj = {};
      Object.keys(obj).sort().forEach((key => {
          if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
              sortedObj[key] = sortObject(obj[key]);
          } else {
              sortedObj[key] = obj[key];
          }
      }));
      return sortedObj;
  };

  var getCharacterSum = obj => {
      var sortedObj = sortObject(obj);
      var str = JSON.stringify(sortedObj).replace(/[{}:",\s]/g, "");
      var sum = 0;
      for (var i = 0; i < str.length; i++) {
          sum += getCharacterValue(str[i], i);
      }
      return sum;
  };

  var getHash = obj => {
      var str = JSON.stringify(obj);
      return str.length + "-" + getCharacterSum(obj);
  };

  function executeWithContextRecursive(objOrFunction, theme) {
      if (typeof objOrFunction === "function") {
          var result = objOrFunction(theme);
          return executeWithContextRecursive(result, theme);
      } else if (Array.isArray(objOrFunction)) {
          return objOrFunction.map((item => executeWithContextRecursive(item, theme)));
      } else if (typeof objOrFunction === "object" && objOrFunction !== null) {
          var _result2 = {};
          for (var key in objOrFunction) {
              if (objOrFunction.hasOwnProperty(key)) {
                  _result2[key] = executeWithContextRecursive(objOrFunction[key], theme);
              }
          }
          return _result2;
      } else {
          return objOrFunction;
      }
  }

  function isPlainObject(value) {
      return typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof Date) && !(value instanceof RegExp) && !(value instanceof Function) && !(value instanceof Error);
  }

  var getSubTheme = obj => {
      while (obj && (!obj.subTheme || typeof obj.subTheme !== "string")) {
          obj = obj.p;
      }
      return obj ? obj.subTheme : undefined;
  };

  var getComponentConfig = obj => {
      var _obj$theme;
      if (!isPlainObject(obj)) return {};
      return (obj === null || obj === void 0 || (_obj$theme = obj.theme) === null || _obj$theme === void 0 || (_obj$theme = _obj$theme.componentConfig) === null || _obj$theme === void 0 ? void 0 : _obj$theme[obj.constructor.__componentName]) || {};
  };

  function removeEmptyObjects(obj) {
      for (var key in obj) {
          if (obj.hasOwnProperty(key) && isPlainObject(obj[key])) {
              removeEmptyObjects(obj[key]);
              if (Object.keys(obj[key]).length === 0) {
                  delete obj[key];
              }
          }
      }
      return obj;
  }

  function safeStringify(originalObj) {
      var obj = _objectSpread({}, originalObj);
      var seen = new WeakSet;
      return JSON.stringify(obj, ((key, value) => {
          if (typeof value === "object" && value !== null) {
              if (seen.has(value)) {
                  return "[Circular]";
              }
              seen.add(value);
          }
          return value;
      }));
  }

  function createSharedReferences() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var seenObjects = new Map;
      function process(currentObj) {
          var queue = [ currentObj ];
          while (queue.length > 0) {
              var current = queue.shift();
              for (var key in current) {
                  if (current.hasOwnProperty(key)) {
                      var value = current[key];
                      if (typeof value === "object" && value !== null) {
                          var cacheKey = safeStringify(value);
                          if (seenObjects.has(cacheKey)) {
                              current[key] = seenObjects.get(cacheKey);
                          } else {
                              seenObjects.set(cacheKey, value);
                              queue.push(value);
                          }
                      }
                  }
              }
          }
      }
      process(obj);
      return obj;
  }

  function getUniqueProperties() {
      var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!Array.isArray(defaultProps)) {
          throw new TypeError("Expected defaultProps to be an array of strings.");
      }
      return [ ...new Set(defaultProps) ];
  }

  function generatePayload(base, defaultStyle, toneItem, modeItem, tone, mode) {
      var _tone$toneItem, _mode$modeItem;
      var payload = clone(defaultStyle, base);
      payload = clone(payload, tone === null || tone === void 0 ? void 0 : tone[toneItem]);
      payload = clone(payload, mode === null || mode === void 0 ? void 0 : mode[modeItem]);
      payload = clone(payload, (tone === null || tone === void 0 || (_tone$toneItem = tone[toneItem]) === null || _tone$toneItem === void 0 || (_tone$toneItem = _tone$toneItem.mode) === null || _tone$toneItem === void 0 ? void 0 : _tone$toneItem[modeItem]) || {});
      payload = clone(payload, (mode === null || mode === void 0 || (_mode$modeItem = mode[modeItem]) === null || _mode$modeItem === void 0 || (_mode$modeItem = _mode$modeItem.tone) === null || _mode$modeItem === void 0 ? void 0 : _mode$modeItem[toneItem]) || {});
      return payload;
  }

  function findNestedKeys(obj, keyToFind) {
      var nestedKeys = [];
      function searchNestedKeys(obj) {
          if (typeof obj === "object" && obj !== null) {
              for (var key in obj) {
                  if (obj.hasOwnProperty(key)) {
                      nestedKeys.push(key);
                  }
              }
          }
      }
      function searchForKey(obj) {
          if (typeof obj === "object" && obj !== null) {
              for (var key in obj) {
                  if (obj.hasOwnProperty(key)) {
                      if (key === keyToFind) {
                          searchNestedKeys(obj[key]);
                          break;
                      }
                      searchForKey(obj[key]);
                  }
              }
          }
      }
      searchForKey(obj);
      return nestedKeys;
  }

  var generateSolution = function generateSolution(_ref7) {
      var {base: base = {}, tone: tone = {}, mode: mode = {}, defaultStyle: defaultStyle = {}} = _ref7;
      var modeKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var toneKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var solution = {};
      var uniqueModes = getUniqueProperties([ "focused", "disabled", ...modeKeys, "unfocused" ]);
      var uniqueTones = getUniqueProperties([ "neutral", "inverse", "brand", ...toneKeys ]);
      for (var modeItem of uniqueModes) {
          for (var toneItem of uniqueTones) {
              var payload = generatePayload(base, defaultStyle, toneItem, modeItem, tone, mode);
              solution["".concat(modeItem, "_").concat(toneItem)] = payload;
          }
      }
      return solution;
  };

  var DEFAULT_KEYS = [ "unfocused_neutral", "unfocused_inverse", "unfocused_brand", "focused_neutral", "focused_inverse", "focused_brand", "disabled_neutral", "disabled_inverse", "disabled_brand" ];

  function enforceContract(inputObj) {
      var result = {};
      for (var key of [ ...DEFAULT_KEYS, ...Object.keys(inputObj) ]) {
          if (!inputObj.hasOwnProperty(key)) {
              var fallbackKey = DEFAULT_KEYS.find((fallback => inputObj.hasOwnProperty(fallback)));
              if (fallbackKey) {
                  var fallback = inputObj[fallbackKey];
                  result[key] = typeof fallback !== "object" ? {} : fallback;
              } else {
                  result[key] = {};
              }
          } else {
              if (typeof inputObj[key] !== "object") {
                  result[key] = {};
              } else {
                  result[key] = inputObj[key];
              }
          }
      }
      return result;
  }

  var generateComponentStyleSource = function generateComponentStyleSource() {
      var {theme: theme = {}, styleChain: styleChain = [], inlineStyle: inlineStyle = {}, alias: alias = []} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (typeof theme !== "object") {
          throw new Error("Expected theme to be an object");
      }
      if (!Array.isArray(styleChain)) {
          throw new Error("Expected styleChain to be an array");
      }
      if (typeof inlineStyle !== "object") {
          throw new Error("Expected inlineStyle to be an object");
      }
      if (!Array.isArray(alias)) {
          throw new Error("Expected alias to be an array");
      }
      var componentDefault = styleChain.map((_ref8 => {
          var {style: style} = _ref8;
          if (typeof style === "object" && !style.base && !style.mode && !style.tone && !style.default) {
              return {
                  base: style
              };
          } else {
              var {base: _base = {}, mode: _mode = {}, tone: _tone = {}} = style;
              var componentConfigDefaultStyle;
              if (style) {
                  var defaultStyle = JSON.parse(JSON.stringify(style));
                  delete defaultStyle.base;
                  delete defaultStyle.tone;
                  delete defaultStyle.mode;
                  componentConfigDefaultStyle = defaultStyle;
              }
              return {
                  defaultStyle: componentConfigDefaultStyle || {},
                  base: _base,
                  mode: _mode,
                  tone: _tone
              };
          }
      }));
      var localDefaultStyle;
      if (inlineStyle) {
          var defaultStyle = JSON.parse(JSON.stringify(inlineStyle));
          delete defaultStyle.base;
          delete defaultStyle.tone;
          delete defaultStyle.mode;
          localDefaultStyle = defaultStyle;
      }
      var local = {
          defaultStyle: localDefaultStyle || {},
          base: (inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.base) || {},
          mode: (inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.mode) || {},
          tone: (inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.tone) || {}
      };
      var merged = [ ...componentDefault, local ];
      var parsedStyles = merged.map((style => executeWithContextRecursive(style, theme)));
      var modeKeys = findNestedKeys(parsedStyles, "mode");
      var toneKeys = findNestedKeys(parsedStyles, "tone");
      var solution = parsedStyles.reduce(((acc, style) => clone(acc, generateSolution(style, modeKeys, toneKeys))), {});
      var final = formatStyleObj(removeEmptyObjects(colorParser({
          theme: theme
      }, solution)) || {}, alias);
      var cleanObj = createSharedReferences(final);
      return enforceContract(cleanObj);
  };

  var colorParser = (targetObject, styleObj) => {
      if (typeof targetObject !== "object" || targetObject === null) {
          throw new TypeError("targetObject must be an object.");
      }
      if (typeof styleObj !== "object" || styleObj === null) {
          throw new TypeError("styleObj must be an object.");
      }
      var processedStyle = JSON.stringify(styleObj, ((_, value) => {
          if (-1 < [ "tone", "mode" ].indexOf(_)) return value;
          if (typeof value === "string" && value.startsWith("theme.")) {
              return getValFromObjPath(targetObject, value);
          }
          function isValidColor(num) {
              return num >= 0 && num <= 4294967295;
          }
          if (Array.isArray(value) && value.length === 2 && (typeof value[0] === "string" && value[0].startsWith("#") || typeof value[0] === "number" && isValidColor(value[0])) && typeof value[1] === "number") {
              return getHexColor(value[0], value[1]) || value;
          }
          return value;
      }));
      return JSON.parse(processedStyle || {});
  };

  var generateStyle = function generateStyle(component) {
      var componentStyleSource = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!isPlainObject(component)) return {};
      var {mode: mode = "unfocused", tone: tone = "neutral"} = component;
      return componentStyleSource["".concat(mode, "_").concat(tone)] || componentStyleSource["unfocused_neutral"] || {};
  };

  function generateNameFromPrototypeChain(obj) {
      var _proto$constructor;
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (!obj) return name;
      var proto = Object.getPrototypeOf(obj);
      if (!proto || !proto.constructor) return name;
      var componentName = "".concat(name ? name + "." : "").concat((proto === null || proto === void 0 || (_proto$constructor = proto.constructor) === null || _proto$constructor === void 0 ? void 0 : _proto$constructor.__componentName) || "").replace(/\.*$/, "").trim();
      var result = generateNameFromPrototypeChain(proto, componentName);
      return result;
  }

  var styleChainCache = {};

  var clearStyleChainCache = () => {
      for (var key in styleChainCache) {
          if (styleChainCache.hasOwnProperty(key)) {
              delete styleChainCache[key];
          }
      }
  };

  var getStyleChainMemoized = componentObj => {
      var cacheKey = generateNameFromPrototypeChain(componentObj);
      if (styleChainCache[cacheKey]) {
          return styleChainCache[cacheKey];
      }
      var styleChain = getStyleChain(componentObj);
      styleChainCache[cacheKey] = styleChain;
      return styleChain;
  };

  var getStyleChain = componentObj => {
      var styleMap = new Map;
      var proto;
      do {
          var _proto;
          proto = !proto ? componentObj : Object.getPrototypeOf(proto);
          if (((_proto = proto) === null || _proto === void 0 ? void 0 : _proto.constructor) === Object) break;
          if (proto && typeof proto === "object" && proto.hasOwnProperty("constructor")) {
              var {style: componentConfigStyle} = getComponentConfig(proto);
              if (Object.keys(componentConfigStyle || {}).length) {
                  if (!styleMap.has(componentConfigStyle)) {
                      styleMap.set(componentConfigStyle, {
                          style: componentConfigStyle
                      });
                  }
              }
              var themeStyle = proto.constructor.hasOwnProperty("__themeStyle") && proto.constructor.__themeStyle;
              if (Object.keys(themeStyle || {}).length) {
                  if (!styleMap.has(themeStyle)) {
                      styleMap.set(themeStyle, {
                          style: _objectSpread({}, themeStyle)
                      });
                  }
              } else if (typeof themeStyle === "function") {
                  if (!styleMap.has(themeStyle)) {
                      styleMap.set(themeStyle, {
                          style: themeStyle
                      });
                  }
              }
              var mixinStyle = proto.constructor.hasOwnProperty("__mixinStyle") && proto.constructor.__mixinStyle;
              if (Object.keys(mixinStyle || {}).length) {
                  if (!styleMap.has(mixinStyle)) {
                      styleMap.set(mixinStyle, {
                          style: mixinStyle
                      });
                  }
              }
          }
      } while (proto);
      var uniqueStyles = Array.from(styleMap.values());
      return uniqueStyles.map((style => style)).reverse();
  };

  var formatStyleObj = function formatStyleObj(originalObj) {
      var aliasStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (typeof originalObj !== "object" || originalObj === null) {
          throw new Error("The originalObj parameter must be an object.");
      }
      var formatters = new Set;
      formatters.add([ replaceAliasValues, [ aliasStyles ] ]);
      var formattersArray = Array.from(formatters);
      return formattersArray.reduce(((obj, _ref9) => {
          var [func, args] = _ref9;
          return func(obj, ...args);
      }), originalObj);
  };

  var replaceAliasValues = function replaceAliasValues(value) {
      var aliasStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (typeof value !== "object" || value === null) {
          throw new Error("Value must be an object");
      }
      if (!Array.isArray(aliasStyles)) {
          throw new Error("Alias styles must be an array");
      }
      var str = JSON.stringify(value);
      var aliasProps = [ {
          prev: "height",
          curr: "h",
          skipWarn: true
      }, {
          prev: "width",
          curr: "w",
          skipWarn: true
      }, ...aliasStyles || [] ];
      aliasProps.forEach((alias => {
          if (alias && typeof alias.prev === "string" && typeof alias.curr === "string") {
              !alias.skipWarn && str.search('"'.concat(alias.prev, '":')) >= 0 && loggerInstance.warn('The style property "'.concat(alias.prev, '" is deprecated and will be removed in a future release. Please use "').concat(alias.curr, '" instead.'));
              str = str.replace(new RegExp('"'.concat(alias.prev, '":'), "gi"), '"'.concat(alias.curr, '":'));
          }
      }));
      return JSON.parse(str);
  };

  var themeStyleCache = new Map;

  contextInstance.on("themeUpdate", (() => {
      themeStyleCache.clear();
  }));

  var cache = themeStyleCache;

  class StyleManager extends lng.EventEmitter {
      constructor() {
          var {component: component = {}} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          super(...arguments);
          this.init(component);
      }
      init(component) {
          this.isActive = true;
          this.component = component;
          this.setupListeners();
          this._style = {};
          this.update();
      }
      setupListeners() {
          this._boundThemeUpdate = this._onThemeUpdate.bind(this);
          this._hasSubTheme = Boolean(this.component._targetSubTheme);
          if (!this.component._targetSubTheme) {
              contextInstance.on("themeUpdate", this._boundThemeUpdate);
          } else {
              contextInstance.on("themeUpdate".concat(this.component._targetSubTheme), this._boundThemeUpdate);
          }
      }
      clearListeners() {
          if (!this._boundThemeUpdate) return;
          if (!this.component._targetSubTheme) {
              contextInstance.off("themeUpdate", this._boundThemeUpdate);
          } else {
              contextInstance.off("themeUpdate".concat(this.component._targetSubTheme), this._boundThemeUpdate);
          }
      }
      destroy() {
          this.isActive = false;
          this._cleanupCache();
          this.clearListeners();
          this._styleCache = null;
          this._boundThemeUpdate = null;
          this.component = null;
      }
      _onThemeUpdate() {
          clearStyleChainCache();
          this.clearSourceCache();
          this.clearStyleCache();
          this.update();
      }
      clearStyleChainCache() {
          clearStyleChainCache();
      }
      clearSourceCache() {
          if (!this.component) return;
          var sourceKey = this._generateCacheKey("styleSource");
          this._removeCache(sourceKey);
      }
      clearStyleCache() {
          if (!this.component) return;
          var {tone: tone, mode: mode} = this.component;
          var styleKey = this._generateCacheKey("style_".concat(mode, "_").concat(tone));
          cache.delete(styleKey);
      }
      _generateCacheKey(name) {
          var cacheKey = [ name, this.component._targetSubTheme, this.component.constructor.__componentName, this._customStyleHash ].filter(Boolean).join("_");
          return cacheKey;
      }
      _addCache(name, payload) {
          var key = this._generateCacheKey(name);
          var existing = cache.get(key);
          cache.set(key, {
              ids: [ ...new Set([ ...(existing === null || existing === void 0 ? void 0 : existing.ids) || [], this.component.__id ]) ],
              payload: payload
          });
      }
      _cleanupCache() {
          if (!this.component) return;
          cache.forEach(((_ref10, name) => {
              var {ids: ids, payload: payload} = _ref10;
              var removeIndex = ids && ids.length && ids.indexOf(this.component.__id);
              if (removeIndex > -1 && ids.length > 1) {
                  cache.set(name, {
                      ids: ids.slice(0, removeIndex).concat(ids.slice(removeIndex + 1)),
                      payload: payload
                  });
              } else if (removeIndex > -1) {
                  cache.delete(name);
              }
          }));
      }
      _removeCache(name) {
          cache.delete(name);
      }
      _getCache(name) {
          var key = this._generateCacheKey(name);
          return cache.get(key);
      }
      update() {
          if (!this.component) return;
          var {mode: mode, tone: tone} = this.component;
          try {
              var _this$_getCache, _this$_getCache2;
              var styleSource = (_this$_getCache = this._getCache("styleSource")) === null || _this$_getCache === void 0 ? void 0 : _this$_getCache.payload;
              if (!styleSource) {
                  styleSource = generateComponentStyleSource({
                      alias: this.component.constructor.aliasStyles,
                      inlineStyle: this.component._componentLevelStyle,
                      styleChain: getStyleChainMemoized(this.component),
                      theme: this.component.theme
                  });
                  this._addCache("styleSource", styleSource);
              }
              var style = (_this$_getCache2 = this._getCache("style_".concat(mode, "_").concat(tone))) === null || _this$_getCache2 === void 0 ? void 0 : _this$_getCache2.payload;
              if (!style) {
                  style = generateStyle(this.component, styleSource);
                  this._addCache("style_".concat(mode, "_").concat(tone), style);
              }
              this._style = style;
              this.emit("styleUpdate", this.style);
          } catch (error) {
              contextInstance.error("styleManager: ", error.message);
          }
      }
      set style(v) {
          contextInstance.warn("styleManager: Cannot mutate style directly");
      }
      get style() {
          return this._style;
      }
      set props(v) {
          contextInstance.warn("styleManager: Cannot mutate props directly");
      }
      get props() {
          return Object.keys(this.component._componentConfig).reduce(((acc, key) => {
              if (![ "base", "tone", "mode", "style", "styleConfig" ].includes(key)) {
                  acc[key] = this.component._componentConfig[key];
              }
              return acc;
          }), {});
      }
      get _customStyleHash() {
          var hasCustomStyle = Boolean(Object.keys(this.component.constructor.__mixinStyle || {}).length) || Boolean(Object.keys(this.component._componentLevelStyle || {}).length);
          if (hasCustomStyle) {
              return getHash(clone(this.component.constructor.__mixinStyle || {}, this.component._componentLevelStyle || {}));
          }
          return undefined;
      }
  }

  function mergeObjectsWithSecondDominant(firstObj, secondObj) {
      if (firstObj !== null && typeof firstObj === "object") {
          if (Array.isArray(firstObj)) {
              return firstObj.map(((item, index) => mergeObjectsWithSecondDominant(item, Array.isArray(secondObj) ? secondObj[index] : undefined)));
          } else {
              var result = {};
              var allKeys = new Set([ ...Object.keys(firstObj), ...Object.keys(secondObj) ]);
              allKeys.forEach((key => {
                  if (typeof firstObj[key] === "object" && firstObj[key] !== null) {
                      result[key] = mergeObjectsWithSecondDominant(firstObj[key], secondObj[key] || {});
                  } else if (typeof secondObj[key] === "object" && secondObj[key] !== null) {
                      result[key] = mergeObjectsWithSecondDominant(firstObj[key] || {}, secondObj[key]);
                  } else {
                      result[key] = secondObj.hasOwnProperty(key) ? secondObj[key] : undefined;
                  }
              }));
              return result;
          }
      } else {
          return firstObj;
      }
  }

  function withThemeStyles(Base) {
      var mixinStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return class extends Base {
          _construct() {
              if (this._withThemeStylesSetupComplete) {
                  super._construct();
                  return;
              }
              this._hSetByUser = false;
              this._wSetByUser = false;
              this._styleManager = new StyleManager({
                  component: this
              });
              this._style = this._styleManager.style;
              this._updatePropDefaults();
              this._styleManager.on("styleUpdate", (() => {
                  this._style = this._styleManager.style;
                  this._updatePropDefaults();
                  this.queueThemeUpdate();
              }));
              this._withThemeStylesSetupComplete = true;
              super._construct();
          }
          _setup() {
              super._setup && super._setup();
              this._targetSubTheme = getSubTheme(this);
              if (this._targetSubTheme) {
                  this._styleManager.clearListeners();
                  this._styleManager.setupListeners();
                  this._styleManager.clearStyleChainCache();
                  this._styleManager.clearStyleCache();
                  this._styleManager.clearSourceCache();
                  this._styleManager.update();
              }
          }
          _updatePropDefaults() {
              if (!Object.keys(this._styleManager.props).length || JSON.stringify(this._styleManager.props) === JSON.stringify(this._prevComponentConfigProps)) {
                  return;
              }
              var payload = this._prevComponentConfigProps ? mergeObjectsWithSecondDominant(this._prevComponentConfigProps || {}, this._styleManager.props || {}) : this._styleManager.props || {};
              this._prevComponentConfigProps = this._styleManager.props && JSON.parse(JSON.stringify(this._styleManager.props));
              this.__componentConfigProps = payload;
          }
          _attach() {
              super._attach();
              if (!this._styleManager.isActive) {
                  this._styleManager.init(this);
              }
          }
          _detach() {
              super._detach();
              this._styleManager.destroy();
          }
          _unfocus() {
              if (this._isFocusedMode) this.mode = "unfocused";
              super._unfocus();
          }
          _focus() {
              if (!this._isDisabledMode) this.mode = "focused";
              super._focus();
          }
          _checkDimensionUpdates() {
              var dimensionUpdateRequired = false;
              if (!this._wSetByUser && this.style.w && this._w !== this.style.w) {
                  this._w = this.style.w;
                  dimensionUpdateRequired = true;
              }
              if (!this._hSetByUser && this.style.h && this._h !== this.style.h) {
                  this._h = this.style.h;
                  dimensionUpdateRequired = true;
              }
              if (dimensionUpdateRequired) {
                  this._updateDimensions();
              }
          }
          _updateThemeComponent() {
              if (!this.style) return;
              if (!this._isAttached()) return;
              this._checkDimensionUpdates();
              this.queueRequestUpdate ? this.queueRequestUpdate() : this._update && this._update();
              this._updateItemLayout && this._updateItemLayout();
          }
          queueThemeUpdate() {
              updateManager.addUpdateTheme(this);
          }
          static get name() {
              return Base.name;
          }
          static get __componentName() {
              if (!super.__componentName) {
                  throw new Error("A valid static __componentName property is required for theming to work properly. Please add this to the ".concat(this.constructor.name, " class."));
              }
              return super.__componentName;
          }
          static get __mixinStyle() {
              return mixinStyle;
          }
          get theme() {
              var subTheme = this._targetSubTheme && contextInstance.getSubTheme(this._targetSubTheme);
              return subTheme || contextInstance.theme;
          }
          set style(v) {
              if (Object.prototype.toString.call(v) !== "[object Object]") {
                  contextInstance.error("style must be an object");
                  return;
              }
              this._componentLevelStyle = v;
              this._styleManager.clearStyleCache();
              this._styleManager.update();
          }
          get style() {
              return this._style;
          }
          get _componentStyle() {
              contextInstance.info("_componentStyle will soon be deprecated. Please use Component.style");
              return this._style;
          }
          set styleConfig(v) {
              contextInstance.info("style config is deprecated. Please use style = { base: {}, tone: {}, mode: {} }");
              this._styleConfig = v;
              this._styleManager.update();
          }
          get styleConfig() {
              return this._styleConfig;
          }
          get _componentConfig() {
              return getComponentConfig(this);
          }
          get mode() {
              var _this$_componentConfi;
              return this._mode || ((_this$_componentConfi = this._componentConfig) === null || _this$_componentConfi === void 0 ? void 0 : _this$_componentConfi.mode) || "unfocused";
          }
          set mode(v) {
              if (typeof v !== "string" || this._mode === v) return;
              this._mode = v;
              var event = this["on".concat(capitalizeFirstLetter(v))];
              if (event && typeof event === "function") event.call(this);
              this._styleManager.update();
          }
          get tone() {
              return this._tone || this._componentConfig.tone || "neutral";
          }
          set tone(v) {
              if (typeof v !== "string" || this._tone === v) return;
              this._tone = v;
              this._styleManager.update();
          }
          get w() {
              var _this$style;
              return this._wSetByUser && this._w || ((_this$style = this.style) === null || _this$style === void 0 ? void 0 : _this$style.w) || 0;
          }
          set w(v) {
              if (this._w === v) return;
              super.w = v;
              this._wSetByUser = true;
              this._updateThemeComponent();
          }
          get h() {
              var _this$style2;
              return this._hSetByUser && this._h || ((_this$style2 = this.style) === null || _this$style2 === void 0 ? void 0 : _this$style2.h) || this._h || 0;
          }
          set h(v) {
              if (this._h === v) return;
              super.h = v;
              this._hSetByUser = true;
              this._updateThemeComponent();
          }
      };
  }

  var SUFFIX = "__original";

  function withExtensions(Base) {
      if (Base.prototype.constructor._withExtensionsApplied) {
          return Base;
      }
      return class extends Base {
          static get name() {
              return Base.name;
          }
          static get __componentName() {
              if (!super.__componentName) {
                  throw new Error("A valid static __componentName property is required for theming to work properly. Please add this to the ".concat(this.constructor.name, " class."));
              }
              return super.__componentName;
          }
          static get _withExtensionsApplied() {
              return true;
          }
          get _prototypeChain() {
              if (this.__prototypeChain) return this.__prototypeChain;
              var prototypeChain = new Set;
              var proto = this;
              do {
                  proto = Object.getPrototypeOf(proto);
                  if (null !== proto && typeof proto === "object") {
                      try {
                          if (proto.constructor.__componentName) prototypeChain.add(proto.constructor.__componentName);
                      } catch (error) {}
                  }
              } while (proto);
              this.__prototypeChain = prototypeChain;
              return prototypeChain;
          }
          get _extensions() {
              var extensions = contextInstance && contextInstance.theme && contextInstance.theme.extensions;
              if (!extensions || !Array.isArray(extensions) || Array.isArray(extensions) && !extensions.length) return [];
              return extensions.filter((_ref11 => {
                  var {targetComponent: targetComponent, extension: extension} = _ref11;
                  return (typeof targetComponent === "string" || Array.isArray(targetComponent)) && typeof extension === "function";
              })).slice().reverse() || [];
          }
          get _componentExtensions() {
              return this._extensions.filter((_ref12 => {
                  var {targetComponent: targetComponent} = _ref12;
                  if (typeof targetComponent === "string") {
                      return targetComponent === this.constructor.__componentName || this._prototypeChain.has(targetComponent);
                  } else if (Array.isArray(targetComponent)) {
                      return targetComponent.find((pattern => {
                          if (pattern.startsWith("/") && pattern.endsWith("/")) {
                              var ComponentRegExp = new RegExp(pattern.slice(1, -1));
                              return Array.from(this._prototypeChain).some((name => ComponentRegExp.test(name)));
                          } else {
                              return this._prototypeChain.has(pattern);
                          }
                      }));
                  }
                  return false;
              })).reduce(((acc, _ref13) => {
                  var {extension: extension} = _ref13;
                  acc.push(extension);
                  return acc;
              }), []);
          }
          get _extensionApplied() {
              return this._currentComponentExtensionLength === this._appliedExtensionLength;
          }
          _construct() {
              this._appliedExtensionLength = 0;
              this._extendedList = {};
              this._extensionInstance = {};
              this._setupExtensionBound = this._setupExtension.bind(this);
              contextInstance.on("themeUpdate", this._setupExtensionBound);
              this._currentComponentExtensionLength = this._calculateComponentExtensionLength();
              this._createExtension();
              super._construct();
          }
          _detach() {
              super._detach();
              contextInstance.off("themeUpdate", this._setupExtensionBound);
          }
          _setupExtension() {
              this._currentComponentExtensionLength = this._calculateComponentExtensionLength();
              this._createExtension.call(this);
          }
          _resetComponent() {
              this._extensionInstance._extensionCleanup && this._extensionInstance._extensionCleanup.call(this);
              (Object.keys(this._extendedList) || []).forEach((prop => {
                  delete this[prop];
                  delete this[prop + SUFFIX];
              }));
              this._extensionInstance = {};
              this._extendedList = {};
          }
          _calculateComponentExtensionLength() {
              var extensionLength = this._componentExtensions.reduce(((acc, extensionMixin) => {
                  acc += extensionMixin.toString().length;
                  return acc;
              }), 0);
              return extensionLength;
          }
          _createExtension() {
              if (this._extensionApplied) return;
              this._resetComponent();
              var ExtendedClass = this._createExtensionClass();
              var instance = new ExtendedClass;
              this._extendedList = this._createExtensionAliases(instance);
              this._extensionInstance = instance;
              this._setComponentAliases(this._extendedList);
          }
          _createExtensionClass() {
              function ExtensionBase() {}
              var ExtendedClass = this._componentExtensions.reduce(((acc, extension) => extension(acc)), ExtensionBase);
              this._appliedExtensionLength = this._calculateComponentExtensionLength();
              return ExtendedClass;
          }
          _createExtensionAliases(obj) {
              var baseProto = obj;
              for (var i = 0; i < this._componentExtensions.length + 1; i++) {
                  baseProto = Object.getPrototypeOf(baseProto);
              }
              var extended = {};
              var extensionOverrides = this._componentExtensions.reduce(((acc, extension) => {
                  var extensionClass = new extension(class FakeClass {});
                  var instance = new extensionClass;
                  var originalComponentDescriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(instance));
                  Object.keys(originalComponentDescriptors).forEach((prop => {
                      if ([ "constructor" ].includes(prop)) return;
                      if (originalComponentDescriptors[prop].get || originalComponentDescriptors[prop].set) {
                          extended[prop] = {
                              type: "accessor"
                          };
                          acc[prop] = {
                              get: function get() {
                                  return this[prop + SUFFIX];
                              },
                              set: function set(v) {
                                  this[prop + SUFFIX] = v;
                              }
                          };
                          return;
                      }
                      extended[prop] = {
                          type: "method"
                      };
                      acc[prop] = {
                          value: function value() {
                              this[prop + SUFFIX] && this[prop + SUFFIX]();
                          }
                      };
                  }));
                  return acc;
              }), {});
              Object.defineProperties(baseProto, extensionOverrides);
              Object.setPrototypeOf(baseProto, this);
              return extended;
          }
          _setComponentAliases(aliasObj) {
              Object.keys(aliasObj).forEach((prop => {
                  this[prop + SUFFIX] = this[prop];
                  if (aliasObj[prop].type === "method") {
                      this[prop] = this._extensionInstance[prop];
                  } else if (aliasObj[prop].type === "accessor") {
                      Object.defineProperty(this, prop, {
                          configurable: true,
                          get() {
                              return this._extensionInstance[prop];
                          },
                          set(v) {
                              this._extensionInstance[prop] = v;
                          }
                      });
                  }
              }));
          }
      };
  }

  class Base extends lng.Component {
      static get __componentName() {
          return "Base";
      }
      _construct() {
          this.constructor.__componentName;
          this.skipPlinko = false;
          this.centerInParent = false;
          if (!this.loaded) this.loaded = Promise.resolve();
      }
      _init() {
          this.queueRequestUpdate();
      }
      _resetLoadedPromise() {
          this.loaded = new Promise(((resolve, reject) => {
              this._resolveLoadedPromise = resolve;
              this._rejectLoadedPromise = reject;
          }));
      }
      _update() {}
      _focus() {
          this._updateShouldSmooth();
          this.queueRequestUpdate();
      }
      _unfocus() {
          this.queueRequestUpdate();
      }
      _updateShouldSmooth() {
          if (this.shouldSmooth === undefined) this.shouldSmooth = true;
      }
      applySmooth(ref, patch, smooth) {
          if (this.shouldSmooth) {
              ref.smooth = smooth || patch;
          } else {
              ref.patch(patch);
          }
      }
      get announce() {
          return this._announce;
      }
      set announce(announce) {
          this._announce = announce;
      }
      get announceContext() {
          return this._announceContext;
      }
      set announceContext(announce) {
          this._announceContext = announce;
      }
      get shouldSmooth() {
          return this._shouldSmooth;
      }
      set shouldSmooth(shouldSmooth) {
          this._shouldSmooth = shouldSmooth;
      }
      get _isDisabledMode() {
          return this.mode === "disabled";
      }
      get _isUnfocusedMode() {
          return this.mode === "unfocused";
      }
      get _isFocusedMode() {
          return this.mode === "focused";
      }
      isFullyOnScreen(offsets) {
          return isComponentOnScreen(this, offsets);
      }
      getFocusScale() {
          return contextInstance.theme.layout.focusScale;
      }
      getUnfocusScale() {
          return 1;
      }
  }

  function withMixins(baseComponent) {
      return withExtensions(withLayout(withThemeStyles(withUpdates(withTags(withHandleKey(baseComponent))))));
  }

  var Base$1 = withMixins(Base);

  var base$R = theme => ({
      gradientTop: theme.color.fillTransparent,
      radius: theme.radius.none
  });

  var tone$p = theme => ({
      neutral: {
          gradientColor: theme.color.material
      },
      inverse: {
          gradientColor: theme.color.fillNeutral
      },
      brand: {
          gradientColor: theme.color.fillBrand
      }
  });

  var styles$S = Object.freeze({
      __proto__: null,
      base: base$R,
      tone: tone$p
  });

  class Gradient extends Base$1 {
      static get __componentName() {
          return "Gradient";
      }
      static get __themeStyle() {
          return styles$S;
      }
      _update() {
          this.patch({
              rect: true,
              rtt: true,
              colorTop: this.style.gradientTop,
              colorBottom: this.style.gradientColor,
              texture: lng.Tools.getRoundRect(this.w, this.h, getMaxRoundRadius(this.style.radius, this.w, this.h))
          });
      }
  }

  var base$Q = theme => ({
      animationBlurEntrance: theme.animation.utilityEntrance,
      animationBlurExit: theme.animation.utilityExit,
      animationComponentEntrance: theme.animation.utilityEntrance,
      animationGradientEntrance: theme.animation.utilityEntrance,
      animationGradientExit: theme.animation.utilityExit,
      animationImageScaleEntrance: theme.animation.standardEntrance,
      animationImageScaleExit: theme.animation.standardEntrance,
      blur: 4,
      centerImageRadius: theme.radius.md,
      fallbackSrc: undefined,
      fillColor: theme.color.overlay,
      gradientColor: theme.color.material,
      imageScale: 1,
      imageScalePivotX: .5,
      imageScalePivotY: .5,
      padding: theme.spacer.md,
      radius: 0,
      zIndexSet: {
          image: 1,
          blur: 2,
          centerImage: 3,
          fill: 4,
          gradient: 5,
          foreground: 6
      }
  });

  var styles$R = Object.freeze({
      __proto__: null,
      base: base$Q
  });

  function checkFileType(str) {
      if (str.startsWith("<svg")) {
          return "SVG";
      } else if (str.startsWith("blob:")) {
          return "Blob";
      } else if (/\.(jpeg|jpg|gif|png|svg)$/i.test(str)) {
          return "Image";
      } else {
          return "Unknown";
      }
  }

  function createSvg(cb, stage, url, w, h) {
      var canvas = stage.platform.getDrawingCanvas();
      var ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      var img = new Image;
      img.onload = () => {
          canvas.width = w;
          canvas.height = h;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          cb(null, {
              source: canvas,
              w: w,
              h: h
          });
      };
      img.onerror = err => {
          cb(err);
      };
      if (!lng.Utils.isPS4) {
          img.crossOrigin = "Anonymous";
      }
      img.src = url;
  }

  function imageLoader(_ref14, cb) {
      var {src: src} = _ref14;
      var image = new Image;
      if (!(src.substr(0, 5) == "data:") && !lng.Utils.isPS4) {
          image.crossOrigin = "Anonymous";
      }
      image.onerror = function() {
          if (image.src) {
              return cb("Image load error");
          }
      };
      image.onload = function() {
          cb(null, {
              source: image,
              renderInfo: {
                  src: src,
                  compressed: false
              },
              hasAlpha: true
          });
      };
      image.src = src;
      return function() {
          image.onerror = null;
          image.onload = null;
          image.removeAttribute("src");
      };
  }

  class CustomImageTexture extends lng.Texture {
      constructor(stage) {
          super(stage);
          this._src = undefined;
          this._hasAlpha = false;
      }
      get src() {
          return this._src;
      }
      set src(v) {
          if (this._src !== v) {
              this._src = v;
              this._changed();
          }
      }
      get hasAlpha() {
          return this._hasAlpha;
      }
      set hasAlpha(v) {
          if (this._hasAlpha !== v) {
              this._hasAlpha = v;
              this._changed();
          }
      }
      get w() {
          return this._w;
      }
      set w(l) {
          this._w = l;
          this._changed();
      }
      get h() {
          return this._h;
      }
      set h(l) {
          this._h = l;
          this._changed();
      }
      _getIsValid() {
          return !!this._src;
      }
      _getLookupId() {
          return this._src;
      }
      _getSourceLoader() {
          var w = this._w;
          var h = this._h;
          var src = this._src;
          var hasAlpha = this._hasAlpha;
          if (this.stage.getOption("srcBasePath")) {
              var fc = src.charCodeAt(0);
              if (src.indexOf("//") === -1 && (fc >= 65 && fc <= 90 || fc >= 97 && fc <= 122 || fc == 46)) {
                  src = this.stage.getOption("srcBasePath") + src;
              }
          }
          return cb => {
              var fileType = checkFileType(src);
              switch (fileType) {
                case "SVG":
                  return createSvg(cb, this.stage, "data:image/svg+xml,".concat(encodeURIComponent(src)), w, h);

                case "Blob":
                  return imageLoader({
                      src: src
                  }, cb);

                default:
                  return this.stage.platform.loadSrcTexture({
                      src: src,
                      hasAlpha: hasAlpha
                  }, cb);
              }
          };
      }
      getNonDefaults() {
          var obj = super.getNonDefaults();
          if (this._src) {
              obj.src = this._src;
          }
          return obj;
      }
  }

  class Artwork extends Base$1 {
      static get __componentName() {
          return "Artwork";
      }
      static get __themeStyle() {
          return styles$R;
      }
      static get properties() {
          return [ "blur", "fallbackSrc", "foregroundHeight", "foregroundSrc", "foregroundWidth", "gradient", "format", "src", "fill", "shouldScale", "srcCallback", "srcCallbackAspectRatios" ];
      }
      static get tags() {
          return [ "Blur", "CenterImage", "FillColor", "ForegroundImage", "Gradient", "Image", "Item" ];
      }
      static get aliasProperties() {
          return [ {
              prev: "foregroundH",
              curr: "foregroundHeight"
          }, {
              prev: "foregroundW",
              curr: "foregroundWidth"
          } ];
      }
      static _template() {
          return {
              rtt: true,
              Image: {}
          };
      }
      get _shouldBlur() {
          var shouldBur = this._blur || this._hasCenterImage;
          this._Image.rtt = shouldBur;
          return shouldBur;
      }
      get _hasCenterImage() {
          return -1 < [ "circle", "square" ].indexOf(this.format) || "contain" === this.format && !this._aspectRatioEqual;
      }
      set w(v) {
          if (v === super.w) return;
          super.w = v;
          this._componentSrc = this._generatePromise();
      }
      get w() {
          return super.w;
      }
      set h(v) {
          if (v === super.h) return;
          super.h = v;
          this._componentSrc = this._generatePromise();
      }
      get h() {
          return super.h;
      }
      get _actualAspectRatio() {
          if (!this.w || !this.h) return null;
          return reduceFraction("".concat(this.w, "/").concat(this.h)).replace("/", "x");
      }
      get _supportedAspectRatioHeights() {
          return this.srcCallbackAspectRatios.map((ratio => {
              var [rw, rh] = ratio.split("x").map((v => parseInt(v)));
              var calcHeight = this.w / rw * rh;
              return calcHeight;
          }));
      }
      get _closestSupportedAspectRatio() {
          var closest = this._supportedAspectRatioHeights.reduce(((prev, curr) => Math.abs(curr - this.h) < Math.abs(prev - this.h) ? curr : prev));
          return this.srcCallbackAspectRatios[this._supportedAspectRatioHeights.indexOf(closest)];
      }
      get _processedImageSrc() {
          var src = this.src || this.fallbackSrc;
          if (src !== this.fallbackSrc && this.srcCallback && typeof this.srcCallback === "function") {
              src = this.srcCallback({
                  closestAspectRatio: this._closestSupportedAspectRatio,
                  aspectRatio: this._actualAspectRatio,
                  src: this.src,
                  w: this.w,
                  h: this.h
              });
          }
          return src && src.then ? src : Promise.resolve(src);
      }
      get _gradientPatch() {
          return {
              alpha: !this._Gradient && this.shouldSmooth ? .001 : 1,
              style: {
                  gradientColor: getValidColor(this.style.gradientColor)
              },
              h: this.h + 4,
              type: Gradient,
              w: this.w + 4,
              x: -2,
              y: -2,
              zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.gradient
          };
      }
      _construct() {
          super._construct();
          this._srcCallbackAspectRatios = [ "16x9", "3x4", "4x3", "2x1", "1x1" ];
      }
      _setSrc(v) {
          this._componentSrc = this._generatePromise();
          return v;
      }
      _getFallbackSrc() {
          return this._fallbackSrc || this.style && this.style.fallbackSrc;
      }
      _generatePromise() {
          var resolvePromise, rejectPromise;
          var complete = new Promise((function(resolve, reject) {
              resolvePromise = resolve;
              rejectPromise = reject;
          }));
          return {
              complete: complete,
              resolve: resolvePromise,
              reject: rejectPromise
          };
      }
      _setup() {
          this.alpha = .001;
          this._componentSrc = this._generatePromise();
          this._aspectRatioEqual = false;
          this._Image.on("txLoaded", this._resolveLoading.bind(this));
          this._Image.on("txError", this._rejectLoading.bind(this));
      }
      _resolveLoading() {
          this._aspectRatioEqual = this._Image.texture.source ? parseFloat(this.finalW / this.finalH).toFixed(2) === parseFloat(this._Image.texture.source.w / this._Image.texture.source.h).toFixed(2) : false;
          this._componentSrc.resolve && this._componentSrc.resolve();
          this.signal("imageLoaded");
      }
      _rejectLoading(error) {
          this._componentSrc.reject && this._componentSrc.reject(error);
          this.signal("imageLoadFailed");
      }
      _update() {
          var _this5 = this;
          return _asyncToGenerator((function*() {
              _this5._updateRadius();
              _this5._updateGradient();
              yield _this5._updateImage();
              _this5._updateFillColor();
              _this5._updateForegroundImage();
              if (!_this5.src) {
                  _this5._showComponent();
                  return;
              }
              try {
                  yield _this5._componentSrc.complete;
                  yield _this5._updateCenterImage();
                  _this5._updateBlur();
                  _this5._showComponent();
                  _this5._updateScale();
              } catch (e) {
                  _this5._handleImageLoadError();
              }
              if (_this5.shouldSmooth === undefined) _this5.shouldSmooth = true;
          }))();
      }
      _updateScale() {
          if (this.shouldScale) {
              var imageScale;
              switch (typeof this.style.imageScale) {
                case "function":
                  imageScale = this.style.imageScale(this.w);
                  break;

                case "number":
                  imageScale = this.style.imageScale;
                  break;

                default:
                  imageScale = 1;
              }
              this._Image.smooth = {
                  pivotX: this.style.imageScalePivotX,
                  pivotY: this.style.imageScalePivotY,
                  scale: [ imageScale, this._Image.scale < imageScale ? this.style.animationImageScaleEntrance : this.style.animationImageScaleExit ]
              };
          } else {
              var scale = 1;
              this._Image.smooth = {
                  scale: [ scale, this.style.animationImageScaleExit ]
              };
          }
      }
      _handleImageLoadError() {
          if (this.src === this.fallbackSrc) return;
          contextInstance.error("Image ".concat(this._src, " failed to load"));
          if (this.fallbackSrc && this.fallbackSrc !== this.src) {
              this.src = this.fallbackSrc;
          }
      }
      _showComponent() {
          this.smooth = {
              alpha: [ 1, this.style.animationComponentEntrance ]
          };
      }
      _updateForegroundImage() {
          var _this6 = this;
          return _asyncToGenerator((function*() {
              if (!_this6._foregroundSrc) {
                  if (_this6._ForegroundImage) {
                      _this6.patch({
                          ForegroundImage: undefined
                      });
                  }
                  return;
              }
              var foregroundImagePatch = {
                  mount: .5,
                  x: _this6.w / 2,
                  y: _this6.h / 2,
                  zIndex: _this6.core.findZContext().zIndex + _this6.style.zIndexSet.foreground,
                  texture: {
                      type: CustomImageTexture,
                      src: _this6._foregroundSrc,
                      hasAlpha: true
                  }
              };
              if (_this6.foregroundWidth && _this6.foregroundHeight) {
                  foregroundImagePatch.h = _this6.foregroundHeight;
                  foregroundImagePatch.w = _this6.foregroundWidth;
                  _this6.patch({
                      ForegroundImage: foregroundImagePatch
                  });
              } else if (_this6.foregroundWidth || _this6.foregroundHeight) {
                  _this6.patch({
                      ForegroundImage: _objectSpread(_objectSpread({}, foregroundImagePatch), {}, {
                          alpha: .001
                      })
                  });
                  _this6._ForegroundImage.once("txLoaded", (() => {
                      var imageW = _this6._ForegroundImage.texture.getRenderWidth();
                      var imageH = _this6._ForegroundImage.texture.getRenderHeight();
                      _this6._ForegroundImage.patch({
                          alpha: 1,
                          w: _this6.foregroundHeight ? _this6.foregroundHeight * (imageW / imageH) : _this6.foregroundWidth,
                          h: _this6.foregroundWidth ? _this6.foregroundWidth * (imageH / imageW) : _this6.foregroundHeight
                      });
                  }));
              }
              _this6.patch({
                  ForegroundImage: foregroundImagePatch
              });
          }))();
      }
      _updateBlur() {
          if ((!this._shouldBlur || this._Image && this._Image.texture && this._Image.texture.src === this.fallbackSrc) && this._Blur) {
              if (this.shouldSmooth) {
                  this._Blur._getTransition("alpha").once("finish", (() => {
                      this.patch({
                          Blur: undefined
                      });
                  }));
                  this._Blur.smooth = {
                      alpha: [ 0, this.style.animationBlurExit ]
                  };
              } else {
                  this.patch({
                      Blur: undefined
                  });
              }
              return;
          }
          if (!this._srcFailed && this._shouldBlur) {
              this.patch({
                  Blur: {
                      alpha: !this._Blur && this.shouldSmooth ? .001 : 1,
                      amount: this.style.blur,
                      zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.blur,
                      content: {
                          Image: {
                              h: this.h,
                              texture: this._Image.getTexture(),
                              w: this.w
                          }
                      },
                      h: this.h,
                      rtt: true,
                      type: lng.components.FastBlurComponent,
                      w: this.w
                  }
              });
              if (this._Blur.alpha < 1) {
                  this._Blur.smooth = {
                      alpha: [ 1, this.style.animationBlurEntrance ]
                  };
              }
          }
      }
      _updateCenterImage() {
          if (this.format === "contain") {
              this._updateFormatContain();
          } else if (this.format === "circle" || this.format === "square") {
              this._updateFormatSquareCircle();
          } else if (this._CenterImage) {
              this.patch({
                  CenterImage: undefined
              });
          }
      }
      _updateFormatContain() {
          var _this7 = this;
          return _asyncToGenerator((function*() {
              if (_this7._CenterImage && _this7._CenterImage.mode !== _this7.format || _this7.src === _this7.fallbackSrc || _this7._aspectRatioEqual) {
                  _this7.patch({
                      CenterImage: undefined
                  });
                  if (_this7.src === _this7.fallbackSrc || _this7._aspectRatioEqual) {
                      _this7._Image.alpha = 1;
                      return;
                  }
              }
              var imageW;
              var imageH;
              var ratioW = Math.abs(_this7._Image.texture.source.w / _this7._Image.texture.source.h);
              var ratioH = Math.abs(_this7._Image.texture.source.h / _this7._Image.texture.source.w);
              if (_this7._Image.texture.source.w < _this7._Image.texture.source.h) {
                  if (_this7.h * ratioW < _this7.w) {
                      imageW = _this7.h * ratioW;
                      imageH = _this7.h;
                  } else {
                      imageW = _this7.w;
                      imageH = _this7.w * ratioH;
                  }
              } else if (_this7._Image.texture.source.w > _this7._Image.texture.source.h) {
                  if (_this7.w * ratioH < _this7.h) {
                      imageW = _this7.w;
                      imageH = _this7.w * ratioH;
                  } else {
                      imageW = _this7.h * ratioW;
                      imageH = _this7.h;
                  }
              } else {
                  imageW = Math.min(_this7.w, _this7.h);
                  imageH = imageW;
              }
              var src = yield _this7._processedImageSrc;
              _this7.patch({
                  CenterImage: {
                      format: _this7.format,
                      mount: .5,
                      w: imageW,
                      h: imageH,
                      x: _this7.w / 2,
                      y: _this7.h / 2,
                      zIndex: _this7.core.findZContext().zIndex + _this7.style.zIndexSet.centerImage,
                      texture: {
                          src: src,
                          resizeMode: {
                              h: imageH,
                              type: "cover",
                              w: imageW
                          },
                          type: CustomImageTexture
                      }
                  }
              });
          }))();
      }
      _updateFormatSquareCircle() {
          if (this._CenterImage && this._CenterImage.mode !== this.format || this.src === this.fallbackSrc) {
              this.patch({
                  CenterImage: undefined
              });
              if (this.src === this.fallbackSrc) return;
          }
          var imageSize = Math.min(this.w, this.h) - this.style.padding * 2;
          this.patch({
              CenterImage: {
                  format: this.format,
                  h: imageSize,
                  shader: {
                      radius: "circle" === this.format ? imageSize / 2 : this.style.centerImageRadius,
                      type: lng.shaders.RoundedRectangle
                  },
                  w: imageSize,
                  zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.centerImage,
                  Image: {
                      h: imageSize,
                      mount: .5,
                      rtt: true,
                      w: imageSize,
                      x: this.w / 2,
                      y: this.h / 2,
                      texture: {
                          src: this._Image.texture.src,
                          resizeMode: {
                              h: imageSize,
                              type: "cover",
                              w: imageSize
                          },
                          type: CustomImageTexture
                      }
                  }
              }
          });
      }
      _updateGradient() {
          if (!this.gradient) {
              if (this._Gradient) {
                  if (this.shouldSmooth) {
                      this._Gradient._getTransition("alpha").once("finish", (() => {
                          var transition = this._Gradient && this._Gradient._getTransition("alpha");
                          if (!this.gradient && transition && transition.p === 1) this.patch({
                              Gradient: undefined
                          });
                      }));
                      this._Gradient.patch(this._gradientPatch);
                      this._Gradient.smooth = {
                          alpha: [ 0, this.style.animationGradientExit ]
                      };
                  } else {
                      this.patch({
                          Gradient: undefined
                      });
                  }
              }
              return;
          }
          this._createGradient();
      }
      _createGradient() {
          this.patch({
              Gradient: this._gradientPatch
          });
          if (this.shouldSmooth) {
              this.applySmooth(this._Gradient, {
                  alpha: [ 1, this.style.animationGradientEntrance ]
              });
          }
      }
      _updateImage() {
          var _this8 = this;
          return _asyncToGenerator((function*() {
              _this8._aspectRatioEqual = false;
              if (!_this8._processedImageSrc) {
                  if (_this8._Image) {
                      _this8._Image.texture = undefined;
                  }
                  return;
              }
              var src = yield _this8._processedImageSrc;
              _this8._Image.patch({
                  alpha: _this8.src !== _this8.fallbackSrc && (_this8._blur || _this8._hasCenterImage) ? .001 : 1,
                  h: _this8.h,
                  texture: {
                      type: CustomImageTexture,
                      src: src,
                      resizeMode: {
                          type: "cover",
                          w: _this8.w,
                          h: _this8.h
                      }
                  },
                  w: _this8.w,
                  zIndex: _this8.core.findZContext().zIndex + _this8.style.zIndexSet.image
              });
          }))();
      }
      _updateFillColor() {
          if (!this.fill) {
              this.patch({
                  FillColor: undefined
              });
          } else {
              this.patch({
                  FillColor: {
                      rect: true,
                      w: this.w,
                      h: this.h,
                      color: this.style.fillColor,
                      zIndex: 5
                  }
              });
          }
      }
      _updateRadius() {
          this.patch(this.style.radius ? {
              shader: {
                  type: lng.shaders.RoundedRectangle,
                  radius: getMaxRoundRadius(this.style.radius, this.w, this.h)
              }
          } : {
              shader: undefined
          });
      }
  }

  var tone$o = theme => ({
      neutral: {
          color: theme.color.fillNeutral
      },
      inverse: {
          color: theme.color.fillInverse
      },
      brand: {
          color: theme.color.fillBrand
      }
  });

  var styles$Q = Object.freeze({
      __proto__: null,
      tone: tone$o
  });

  class Icon extends Base$1 {
      static get __componentName() {
          return "Icon";
      }
      static get __themeStyle() {
          return styles$Q;
      }
      static get properties() {
          return [ "icon", "fixed", "color" ];
      }
      _init() {
          this.on("txLoaded", (() => {
              if (!this.fixed) {
                  this._notify.bind(this)();
              }
          }));
          this.on("txError", this._handleTxtError.bind(this));
      }
      _getColor() {
          return this._color || this.style.color;
      }
      _notify() {
          this.w = this.finalW;
          this.h = this.finalH;
          this.signal("itemChanged", this);
          this.fireAncestors("$itemChanged");
      }
      _handleTxtError() {
          contextInstance.error("Unable to load icon ".concat(this._icon));
          this._icon = null;
          this.texture = null;
      }
      _update() {
          if (!this._icon) {
              this.texture = null;
              return;
          }
          this.patch(this._iconPatch);
      }
      get _iconPatch() {
          var [isSvgTag, isSvgURI] = [ /^<svg.*<\/svg>$/, /\.svg$/ ].map((regex => RegExp.prototype.test.bind(regex)));
          var texture;
          var svgTag = isSvgTag(this.icon);
          var svgURI = isSvgURI(this.icon);
          if (svgTag) {
              texture = lng.Tools.getSvgTexture("data:image/svg+xml,".concat(encodeURIComponent(this.icon)), this.w, this.h);
          } else if (svgURI) {
              texture = lng.Tools.getSvgTexture(this.icon, this.w, this.h);
          } else {
              texture = {
                  type: CustomImageTexture,
                  w: this.w,
                  h: this.h,
                  src: this.icon
              };
          }
          var color = getValidColor(this._color || this.style.color);
          var shader = this.radius || this.style.radius ? {
              radius: this.radius || this.style.radius,
              type: lng.shaders.RoundedRectangle
          } : undefined;
          return _objectSpread({
              texture: texture,
              shader: shader
          }, color ? {
              colorUl: color,
              colorUr: color,
              colorBl: color,
              colorBr: color
          } : {});
      }
  }

  var base$P = theme => ({
      contentSpacing: theme.spacer.xs,
      offsetY: 1,
      paddingX: theme.spacer.md,
      paddingY: theme.spacer.xs,
      radius: theme.radius.sm,
      strokeWidth: theme.stroke.sm,
      textStyle: _objectSpread(_objectSpread({}, theme.typography.tag1), {}, {
          textAlign: "center"
      })
  });

  var tone$n = theme => ({
      neutral: {
          backgroundColor: theme.color.fillInverseSecondary,
          iconColor: theme.color.textNeutral,
          textStyle: {
              textColor: theme.color.textNeutral
          },
          strokeColor: theme.color.strokeNeutralSecondary
      },
      inverse: {
          backgroundColor: theme.color.fillNeutralSecondary,
          iconColor: theme.color.textInverse,
          textStyle: {
              textColor: theme.color.textInverse
          },
          strokeColor: theme.color.strokeInverseSecondary
      },
      brand: {
          backgroundColor: theme.color.fillBrand,
          iconColor: theme.color.textNeutral,
          textStyle: {
              textColor: theme.color.textNeutral
          },
          strokeColor: theme.color.strokeInverseSecondary
      }
  });

  var styles$P = Object.freeze({
      __proto__: null,
      base: base$P,
      tone: tone$n
  });

  class Badge extends Base$1 {
      static _template() {
          return {
              Text: {
                  mountY: .5
              },
              Icon: {
                  type: Icon,
                  mountY: .5,
                  signals: {
                      itemChanged: "_updateLayout"
                  }
              }
          };
      }
      static get __componentName() {
          return "Badge";
      }
      static get __themeStyle() {
          return styles$P;
      }
      static get properties() {
          return [ "title", "icon", "iconAlign", "iconWidth", "iconHeight" ];
      }
      static get tags() {
          return [ "Background", "Text", "Icon" ];
      }
      _init() {
          this._Text.on("txLoaded", this._updateLayout.bind(this));
          super._init();
      }
      _update() {
          this._updateText();
          this._updateIcon();
          this._updateLayout();
          this._updateVisibility();
      }
      _updateVisibility() {
          this.alpha = this.title || this.icon ? 1 : 0;
      }
      _updateLayout() {
          this._updateWidth();
          this._updateBackground();
          this._updatePositions();
          this.signal("loadedBadge", this);
      }
      _updateBackground() {
          var height = Math.max(this._Text.renderHeight, this._Icon.h) + this.style.paddingY * 2;
          this.patch({
              h: height,
              texture: lng.Tools.getRoundRect(this.w, height, getMaxRoundRadius(this.style.radius, this.w, height), this.style.strokeWidth, this.style.strokeColor, true, this.style.backgroundColor)
          });
      }
      _updateText() {
          if (this._Text) {
              this._Text.patch({
                  text: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
                      text: this.title || ""
                  })
              });
          }
      }
      _updateIcon() {
          this._Icon.patch({
              icon: this.icon,
              w: this.iconWidth,
              h: this.iconHeight,
              style: {
                  color: getHexColor(this.style.iconColor)
              }
          });
      }
      _updateWidth() {
          var width = 0;
          if (this.title && this.icon) {
              width = this._Text.renderWidth + this._Icon.finalW + this.style.contentSpacing + this.style.paddingX * 2;
          } else if (this.title) {
              width = this._Text.renderWidth + this.style.paddingX * 2;
          } else if (this.icon) {
              width = this._Icon.finalW + this.style.paddingX * 2;
          }
          this.w = width;
      }
      _updatePositions() {
          this._Icon.y = this.h / 2;
          if (this.iconAlign === "left" && this.title && this.icon) {
              this._Icon.x = this.style.paddingX;
              this._Text.x = this._Icon.x + this._Icon.finalW + this.style.contentSpacing;
          } else if (this.iconAlign === "right" && this.title && this.icon) {
              this._Text.x = this.style.paddingX;
              this._Icon.x = this._Text.x + this._Text.renderWidth + this.style.contentSpacing;
          } else {
              this._Text.x = this.style.paddingX;
              this._Icon.x = this.style.paddingX;
          }
          this._Text.y = this._h / 2 + this.style.offsetY;
      }
      _getIconHeight() {
          if (this.icon) {
              return !this._Icon.finalH && this._Text ? this._Text.text.lineHeight : this._Icon.finalH;
          }
          return 0;
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          return this._announce || this.title;
      }
  }

  var base$O = theme => ({
      width: 0,
      justify: "center",
      minWidth: getWidthByColumnSpan(theme, 3),
      paddingX: theme.spacer.xxxl,
      paddingXNoTitle: theme.spacer.xl,
      paddingY: theme.spacer.xl,
      radius: theme.radius.sm,
      contentSpacing: theme.spacer.md,
      itemSpacing: theme.spacer.md,
      textStyle: _objectSpread(_objectSpread({}, theme.typography.button1), {}, {
          maxLines: 1,
          textColor: theme.color.textNeutral
      }),
      contentColor: theme.color.fillNeutral
  });

  var mode$g = theme => ({
      focused: {
          textStyle: {
              textColor: theme.color.textInverse
          },
          contentColor: theme.color.fillInverse,
          tone: {
              inverse: {
                  textStyle: {
                      textColor: theme.color.textNeutral
                  },
                  contentColor: theme.color.fillNeutral
              },
              brand: {
                  contentColor: theme.color.fillNeutral
              }
          }
      },
      disabled: {
          textStyle: {
              textColor: theme.color.textNeutralDisabled
          },
          contentColor: theme.color.fillNeutralDisabled
      }
  });

  var styles$O = Object.freeze({
      __proto__: null,
      base: base$O,
      mode: mode$g
  });

  class FocusManager extends Base$1 {
      static get __componentName() {
          return "FocusManager";
      }
      static get tags() {
          return [ "Items" ];
      }
      static get properties() {
          return [ "direction", "wrapSelected" ];
      }
      _construct() {
          super._construct();
          this._selectedIndex = 0;
          this._itemPosX = 0;
          this._itemPosY = 0;
          this.direction = this.direction || "row";
      }
      _init() {
          this._checkSkipFocus();
      }
      get Items() {
          if (!this.tag("Items")) {
              this.patch({
                  Items: {}
              });
          }
          return this._Items;
      }
      _setDirection(direction) {
          var state = {
              none: "None",
              column: "Column",
              row: "Row"
          }[direction];
          if (state) {
              this._setState(state);
          }
          return direction;
      }
      _getItems() {
          return this._Items.children;
      }
      get items() {
          return this.Items.children;
      }
      set items(items) {
          this._resetItems();
          this._selectedIndex = 0;
          this.appendItems(items);
          this._checkSkipFocus();
      }
      set itemPosX(x) {
          this.Items.x = this._itemPosX = x;
      }
      get itemPosX() {
          return this._itemPosX;
      }
      set itemPosY(y) {
          this.Items.y = this._itemPosY = y;
      }
      get itemPosY() {
          return this._itemPosY;
      }
      _resetItems() {
          this.Items.childList.clear();
          this.Items.patch({
              w: 0,
              h: 0,
              x: this.itemPosX,
              y: this.itemPosY
          });
          if (this._lazyItems) {
              this._lazyItems = null;
          }
      }
      _appendLazyItem(item) {
          this.appendItems([ item ]);
      }
      appendItems() {
          var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.Items.childList.a(items);
          this._refocus();
      }
      appendItemsAt() {
          var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var idx = arguments.length > 1 ? arguments[1] : undefined;
          var addIndex = Number.isInteger(idx) ? idx : this.Items.children.length;
          this.shouldSmooth = false;
          this._lastAppendedIdx = addIndex;
          items.forEach(((item, itemIdx) => {
              this.Items.childList.addAt(_objectSpread(_objectSpread({}, item), {}, {
                  parentFocus: this.hasFocus()
              }), addIndex + itemIdx);
          }));
          if (this.selectedIndex >= this._lastAppendedIdx) {
              this._selectedIndex += items.length;
          }
          this.requestUpdate();
          this._refocus();
      }
      prependItems(items) {
          this.appendItemsAt(items, 0);
      }
      removeItemAt(index) {
          this.shouldSmooth = false;
          this.Items.childList.removeAt(index);
          if (this.selectedIndex > index || this.selectedIndex === this.Items.children.length) {
              this._selectedIndex--;
          }
          this.requestUpdate();
          this._refocus();
      }
      _checkSkipFocus() {
          var initialSelection = this.Items.children[this.selectedIndex];
          if (initialSelection && initialSelection.skipFocus) {
              this.selectNext(false);
          }
      }
      get selected() {
          return this.Items.children[this.selectedIndex];
      }
      get selectedIndex() {
          return this._selectedIndex;
      }
      set selectedIndex(index) {
          this.prevSelected = this.selected;
          if (!this.Items.children.length || !this.Items.children[index] || !this.Items.children[index].skipFocus) {
              if (index !== this._selectedIndex) {
                  this._selectedIndex = index;
              }
              if (this.selected) {
                  this._selectedChange(this.selected, this.prevSelected);
              }
              this._refocus();
          }
      }
      _selectedChange(selected, prevSelected) {
          this._render(selected, prevSelected);
          this.signal("selectedChange", selected, prevSelected);
      }
      _render() {}
      _firstFocusableIndex() {
          if (!this.items.length) return 0;
          var firstItem = this.items.reduce(((acc, item, idx) => {
              if (!item.skipFocus) {
                  acc.push(_objectSpread(_objectSpread({}, item), {}, {
                      originalIdx: idx
                  }));
              }
              return acc;
          }), []).shift();
          return firstItem.originalIdx;
      }
      _lastFocusableIndex() {
          if (!this.items.length) return 0;
          var lastItem = this.items.reduce(((acc, item, idx) => {
              if (!item.skipFocus) {
                  acc.push(_objectSpread(_objectSpread({}, item), {}, {
                      originalIdx: idx
                  }));
              }
              return acc;
          }), []).pop();
          return lastItem.originalIdx;
      }
      selectPrevious() {
          this.shouldSmooth = true;
          var hasFocusable = !!(this.items || []).filter((i => !i.skipFocus)).length;
          if (this.selectedIndex === 0 && !this.wrapSelected || !hasFocusable) {
              return false;
          }
          var previousItemIndex = this.items.map((item => !!item.skipFocus)).lastIndexOf(false, this._selectedIndex - 1);
          if (previousItemIndex > -1) {
              this.selectedIndex = previousItemIndex;
              return true;
          } else if (this.wrapSelected) {
              this.selectedIndex = this._lastFocusableIndex();
              return true;
          }
          return false;
      }
      selectNext(shouldSmoothOverride) {
          if (this._lazyItems && this._lazyItems.length) {
              this._appendLazyItem(this._lazyItems.splice(0, 1)[0]);
          }
          this.shouldSmooth = shouldSmoothOverride !== null && shouldSmoothOverride !== void 0 ? shouldSmoothOverride : true;
          var hasFocusable = !!(this.items || []).filter((i => !i.skipFocus)).length;
          if (this.selectedIndex === this.Items.children.length - 1 && !this.wrapSelected || !hasFocusable) {
              return false;
          }
          var nextIndex = this.items.findIndex(((item, idx) => !item.skipFocus && idx > this._selectedIndex));
          if (nextIndex > -1) {
              this.selectedIndex = nextIndex;
              return true;
          } else if (this.wrapSelected) {
              this.selectedIndex = this._firstFocusableIndex();
              return true;
          }
          return false;
      }
      _getIndexOfItemNear(selected, prev) {
          var prevItem = prev.selected;
          if (!selected || !selected.items || !selected.items.length || !prevItem) {
              return 0;
          }
          var [itemX, itemY] = prevItem.core.getAbsoluteCoords(0, 0);
          var prevMiddle = [ itemX + prevItem.w / 2, itemY + prevItem.h / 2 ];
          var selectedCoordArray = selected.items.map(((item, index) => ({
              index: index,
              distance: !item.skipFocus ? getShortestDistance(prevMiddle, item) : null
          }))).filter((item => null !== item.distance)).sort((function(a, b) {
              return a.distance - b.distance;
          }));
          return selectedCoordArray[0].index;
      }
      _focus() {
          super._focus();
          this.items.forEach((item => item.parentFocus = true));
      }
      _unfocus() {
          super._unfocus();
          this.items.forEach((item => item.parentFocus = false));
      }
      _updateShouldSmooth() {}
      _getFocused() {
          var {selected: selected} = this;
          if (selected) {
              if (selected.focusRef) {
                  return selected.tag(selected.focusRef);
              } else if (selected.cparent) {
                  return selected;
              }
          }
          return this;
      }
      _updateTransitionTarget(element, property, newValue) {
          if (element && element.transition(property) && !element.transition(property).isRunning() && element.transition(property).targetValue !== newValue) {
              element.transition(property).updateTargetValue(newValue);
          }
      }
      get onScreenItems() {
          return this.Items.children.filter((child => this._isOnScreen(child)));
      }
      _isOnScreenCompletely(child) {
          return child.isFullyOnScreen ? child.isFullyOnScreen() : isComponentOnScreen(child);
      }
      get fullyOnScreenItems() {
          return this.Items.children.reduce(((rv, item) => {
              if (item instanceof FocusManager) {
                  return [ ...rv, ...item.Items.children.filter(this._isOnScreenCompletely) ];
              } else if (this._isOnScreenCompletely(item)) {
                  return [ ...rv, item ];
              } else {
                  return rv;
              }
          }), []);
      }
      _isOnScreen() {
          throw new Error("'_isOnScreen' must be implemented by 'row'/'column'");
      }
      _isComponentHorizontallyVisible(child) {
          var x = getX(child);
          if (!Number.isFinite(x)) return false;
          var transitionX = this.getTransitionXTargetValue();
          var px = this.core.renderContext.px;
          var itemX = px + transitionX + x;
          var [leftBounds = null, , clipWidth = null] = this.core._scissor || [];
          var stageW = this.stage.w / this.stage.getRenderPrecision();
          var {w: w} = child;
          var withinLeftStageBounds = itemX >= 0;
          var withinRightStageBounds = itemX + w <= stageW;
          if (!withinLeftStageBounds || !withinRightStageBounds) return false;
          var withinLeftClippingBounds = true;
          var withinRightClippingBounds = true;
          if (Number.isFinite(leftBounds)) {
              withinLeftClippingBounds = Math.round(itemX + w) >= Math.round(leftBounds);
              withinRightClippingBounds = Math.round(itemX) <= Math.round(leftBounds + clipWidth);
          }
          return withinLeftClippingBounds && withinRightClippingBounds;
      }
      _isComponentVerticallyVisible(child) {
          var y = getY(child);
          if (!Number.isFinite(y)) return false;
          var transitionY = this.getTransitionYTargetValue();
          var py = this.core.renderContext.py;
          var [, topBounds = null, , clipHeight = null] = this.core._scissor || [];
          var {h: h} = child;
          var itemY = py + transitionY + y;
          var stageH = this.stage.h / this.stage.getRenderPrecision();
          var withinTopStageBounds = itemY + h >= 0;
          var withingBottomStageBounds = itemY <= stageH;
          if (!withinTopStageBounds || !withingBottomStageBounds) return false;
          var withinTopClippingBounds = true;
          var withinBottomClippingBounds = true;
          if (Number.isFinite(topBounds)) {
              withinTopClippingBounds = Math.round(itemY + h) > Math.round(topBounds);
              withinBottomClippingBounds = Math.round(itemY) < Math.round(topBounds + clipHeight);
          }
          return withinTopClippingBounds && withinBottomClippingBounds;
      }
      getTransitionXTargetValue() {
          return this.Items.transition("x").targetValue;
      }
      getTransitionYTargetValue() {
          return this.Items.transition("y").targetValue;
      }
      static _states() {
          return [ class None extends(this){}, class Row extends(this){
              _handleLeft() {
                  return typeof this.onLeft === "function" ? this.onLeft(this) : this.selectPrevious();
              }
              _handleRight() {
                  return typeof this.onRight === "function" ? this.onRight(this) : this.selectNext();
              }
          }, class Column extends(this){
              _handleUp() {
                  return typeof this.onUp === "function" ? this.onUp(this) : this.selectPrevious();
              }
              _handleDown() {
                  return typeof this.onDown === "function" ? this.onDown(this) : this.selectNext();
              }
          } ];
      }
  }

  var base$N = theme => ({
      alwaysScroll: false,
      itemSpacing: theme.layout.gutterX,
      itemTransition: theme.animation.utility,
      neverScroll: false,
      scrollIndex: 0
  });

  var styles$N = Object.freeze({
      __proto__: null,
      base: base$N
  });

  var directionPropNames = {
      row: {
          axis: "x",
          crossAxis: "y",
          lengthDimension: "w",
          crossDimension: "h",
          innerLengthDimension: "innerW",
          innerCrossDimension: "innerH"
      },
      column: {
          axis: "y",
          crossAxis: "x",
          lengthDimension: "h",
          crossDimension: "w",
          innerLengthDimension: "innerH",
          innerCrossDimension: "innerW"
      }
  };

  class NavigationManager extends FocusManager {
      static get __componentName() {
          return "NavigationManager";
      }
      static get __themeStyle() {
          return styles$N;
      }
      static get properties() {
          return [ ...super.properties, "alwaysScroll", "neverScroll", "scrollIndex", "autoResizeWidth", "autoResizeHeight", "lazyUpCount", "lazyUpCountBuffer", "waitForDimensions" ];
      }
      _construct() {
          super._construct();
          this.shouldSmooth = false;
          this._lazyUpCountBuffer = 2;
      }
      _init() {
          var {lengthDimension: lengthDimension, axis: axis} = this._directionPropNames;
          if (!this[lengthDimension]) {
              this._initComponentSize();
          }
          this.Items.transition(axis).on("finish", this._transitionListener.bind(this));
          super._init();
      }
      _initComponentSize() {
          var {lengthDimension: lengthDimension} = this._directionPropNames;
          if ((this === null || this === void 0 ? void 0 : this.parent.parent) instanceof NavigationManager && this !== null && this !== void 0 && this.parent.parent[lengthDimension]) {
              this[lengthDimension] = this.parent.parent[lengthDimension];
          } else {
              var parent = this.parent;
              while (parent && !parent[lengthDimension]) {
                  parent = parent.parent;
              }
              this[lengthDimension] = parent && parent[lengthDimension] || this.stage.h / this.stage.getRenderPrecision();
          }
      }
      _update() {
          this._updateLayout();
      }
      _updateLayout() {
          var {lengthDimension: lengthDimension, crossDimension: crossDimension, crossAxis: crossAxis, innerCrossDimension: innerCrossDimension} = this._directionPropNames;
          var nextPosition = 0;
          var maxCrossDimensionSize = 0;
          var maxInnerCrossDimensionSize = 0;
          var childrenToCenter = [];
          var loadingChildren = [];
          for (var i = 0; i < this.Items.children.length; i++) {
              var child = this.Items.children[i];
              if (child.requestEarlyUpdate) {
                  var updateDidRun = child.requestEarlyUpdate();
                  if (!updateDidRun && (child.w === 0 || child.h === 0)) {
                      child._updateLayout && child._updateLayout();
                  }
              }
              var childCrossDimensionSize = this._calcCrossDimensionSize(child);
              if (this.waitForDimensions && (!childCrossDimensionSize || !child[lengthDimension])) {
                  loadingChildren.push(child);
              }
              maxCrossDimensionSize = max(maxCrossDimensionSize, childCrossDimensionSize);
              maxInnerCrossDimensionSize = max(maxInnerCrossDimensionSize, child[innerCrossDimension] || 0);
              this.updatePositionOnAxis(child, nextPosition);
              nextPosition += child[lengthDimension];
              if (i < this.Items.children.length - 1) {
                  var extraItemSpacing = child.extraItemSpacing || 0;
                  nextPosition += this.style.itemSpacing + extraItemSpacing;
              }
              if (child.centerInParent) {
                  var _childCrossDimensionSize = child.Items && child.Items[crossDimension] || child[crossDimension];
                  if (_childCrossDimensionSize < this[crossDimension] || !this.Items[innerCrossDimension]) {
                      childrenToCenter.push({
                          childIdx: i,
                          childCrossDimensionSize: _childCrossDimensionSize
                      });
                  }
              } else {
                  child[crossAxis] = 0;
              }
          }
          var itemChanged = this.Items[crossDimension] !== maxCrossDimensionSize || this.Items[lengthDimension] !== nextPosition;
          if (this.waitForDimensions) {
              this.Items.alpha = loadingChildren.length ? .001 : 1;
          }
          this.Items.patch({
              [crossDimension]: maxCrossDimensionSize,
              [innerCrossDimension]: maxInnerCrossDimensionSize || maxCrossDimensionSize,
              [lengthDimension]: nextPosition + (this._totalAddedWidth || 0)
          });
          this._autoResize();
          this._centerItemsInParent(childrenToCenter);
          this._updateLastScrollIndex();
          if (itemChanged) {
              this._performRender();
              this.fireAncestors("$itemChanged");
          }
      }
      _centerItemsInParent(items) {
          var {crossDimension: crossDimension, crossAxis: crossAxis, innerCrossDimension: innerCrossDimension} = this._directionPropNames;
          if (items.length) {
              var sizes = [ this.Items[crossDimension], this.Items[innerCrossDimension] ];
              if (this.children.length === 1) {
                  sizes.push(this[crossDimension]);
              }
              var crossDimensionSize = Math.max(...sizes);
              items.forEach((_ref15 => {
                  var {childIdx: childIdx, childCrossDimensionSize: childCrossDimensionSize} = _ref15;
                  this.Items.children[childIdx][crossAxis] = (crossDimensionSize - childCrossDimensionSize) / 2;
              }));
          }
      }
      _autoResize() {
          if (this.autoResizeWidth) {
              this.w = this.Items.w;
          }
          if (this.autoResizeHeight) {
              this.h = this.Items.h;
          }
      }
      _updateLastScrollIndex() {
          var {axis: axis, lengthDimension: lengthDimension} = this._directionPropNames;
          if (this.alwaysScroll) {
              this._lastScrollIndex = this.Items.children.length - 1;
              return;
          }
          var itemPos = this._isRow ? this.itemPosX : this.itemPosY;
          var scrollOffset = (this.Items.children[this.scrollIndex] || {
              [axis]: 0
          })[axis] + itemPos;
          var lastChild = this.Items.childList.last;
          var endOfLastChild = lastChild ? this._calcAxisPosition(lastChild) + lastChild[lengthDimension] : 0;
          if (endOfLastChild > this[lengthDimension]) {
              var lastScrollIndex;
              for (var i = this.Items.children.length - 1; i >= 0; i--) {
                  var childPosition = this._calcAxisPosition(this.Items.children[i]);
                  var canScrollToChild = childPosition + this[lengthDimension] - scrollOffset > endOfLastChild;
                  if (canScrollToChild) {
                      lastScrollIndex = i;
                  } else {
                      break;
                  }
              }
              this._lastScrollIndex = lastScrollIndex;
              return;
          }
          if (this._lastScrollIndex > this.items.length) {
              this._lastScrollIndex = this.items.length - 1;
          }
      }
      _calcCrossDimensionSize(comp) {
          if (this._isRow) {
              return getH(comp);
          }
          if (this._isColumn) {
              return getW(comp);
          }
      }
      _calcAxisPosition(comp) {
          if (this._isRow) {
              return getX(comp);
          }
          if (this._isColumn) {
              return getY(comp);
          }
      }
      _transitionListener() {
          this.shouldSmooth = false;
          this.transitionDone();
      }
      _withAfterUpdate(element) {
          return watchForUpdates({
              element: element,
              watchProps: [ this._directionPropNames.crossAxis, "w", "h", "innerW", "innerH" ],
              sideEffect: this.queueRequestUpdate.bind(this)
          });
      }
      _performRender() {}
      _appendItem(item, shouldSmoothOverride) {
          this.shouldSmooth = shouldSmoothOverride !== null && shouldSmoothOverride !== void 0 ? shouldSmoothOverride : false;
          item.parentFocus = this.hasFocus();
          item = this.Items.childList.a(item);
          var {crossDimension: crossDimension} = this._directionPropNames;
          if (!item[crossDimension]) {
              var itemCrossSize = this._isRow ? this.renderHeight : this.renderWidth;
              item[crossDimension] = item[crossDimension] || itemCrossSize;
          }
          item = this._withAfterUpdate(item);
          return item;
      }
      _appendLazyItem(item) {
          var {lengthDimension: lengthDimension, axis: axis} = this._directionPropNames;
          var lastChild = this._Items.children[this.items.length - 1];
          var nextPosition = lastChild[lengthDimension] + lastChild[axis] + (lastChild.extraItemSpacing || 0) + this.style.itemSpacing;
          var appended = this._appendItem(item, true);
          appended[axis] = nextPosition;
          this._Items[lengthDimension] += nextPosition + item[lengthDimension];
      }
      $itemChanged() {
          this.queueRequestUpdate();
      }
      appendItems() {
          var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.shouldSmooth = false;
          if (this._lazyItems) {
              this._lazyItems.push(...items);
              return;
          }
          if (items.length > this.lazyUpCount + this.lazyUpCountBuffer) {
              this._lazyItems = items.splice(this.lazyUpCount + this.lazyUpCountBuffer);
          }
          items.forEach((item => this._appendItem(item)));
          this.requestUpdate();
          this._refocus();
      }
      appendItemsAt() {
          var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var idx = arguments.length > 1 ? arguments[1] : undefined;
          if (this._lazyItems && idx > this.items.length - 1) {
              var addAtIdx = idx - this.items.length;
              this._lazyItems.splice(addAtIdx, 0, ...items);
              return;
          }
          var {crossDimension: crossDimension, lengthDimension: lengthDimension, innerLengthDimension: innerLengthDimension} = this._directionPropNames;
          var addIndex = Number.isInteger(idx) ? idx : this.Items.children.length;
          this.shouldSmooth = false;
          this._lastAppendedIdx = addIndex;
          this._totalAddedLength = 0;
          items.forEach(((item, itemIdx) => {
              var newItem = _objectSpread(_objectSpread({}, this._withAfterUpdate(item)), {}, {
                  parentFocus: this.hasFocus()
              });
              if (!item[crossDimension]) {
                  newItem[crossDimension] = item[crossDimension] || this.Items[crossDimension];
              }
              this.Items.childList.addAt(newItem, addIndex + itemIdx);
              var itemLength = item[lengthDimension] || item[innerLengthDimension] || 0;
              var extraItemSpacing = item.extraItemSpacing || 0;
              this._totalAddedLength += itemLength + this.style.itemSpacing + extraItemSpacing;
          }));
          if (this.selectedIndex >= this._lastAppendedIdx) {
              this._selectedPastAdded = true;
              this._selectedIndex += items.length;
          }
          this.requestUpdate();
          this._refocus();
      }
      updatePositionOnAxis(item, position) {
          var {axis: axis} = this._directionPropNames;
          this.applySmooth(item, {
              [axis]: position
          }, {
              [axis]: [ position, this.style.itemTransition ]
          });
          if (!this.shouldSmooth) {
              this._updateTransitionTarget(item, axis, position);
          }
      }
      scrollTo(index) {
          var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.style.itemTransition.duration * 100;
          if (index == undefined) {
              return;
          }
          if (duration === 0) {
              this.selectedIndex = index;
              return;
          }
          for (var i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
              setTimeout((() => {
                  this.selectedIndex > index ? this.selectPrevious() : this.selectNext();
              }), duration * i);
          }
      }
      transitionDone() {}
      shouldScrollLeft() {
          return this._isRow && this._canScrollBack;
      }
      shouldScrollRight() {
          return this._isRow && this._canScrollNext;
      }
      shouldScrollUp() {
          return this._isColumn && this._canScrollBack;
      }
      shouldScrollDown() {
          return this._isColumn && this._canScrollNext;
      }
      get _directionPropNames() {
          return directionPropNames[this.direction];
      }
      get _canScrollBack() {
          var shouldScroll = false;
          if (this._lastScrollIndex) {
              shouldScroll = this.selectedIndex < this._lastScrollIndex;
              if (this._prevLastScrollIndex !== undefined && this._prevLastScrollIndex !== this._lastScrollIndex) {
                  shouldScroll = true;
              }
          } else {
              shouldScroll = this.selectedIndex >= this.scrollIndex;
          }
          var itemsStartCoord = this._isRow ? this._itemsX : this._itemsY;
          return itemsStartCoord < (this._isRow ? this.itemPosX : this.itemPosY) && shouldScroll;
      }
      get _canScrollNext() {
          var {axis: axis, lengthDimension: lengthDimension} = this._directionPropNames;
          var lastChild = this.Items.childList.last;
          var endOfItemsPosition;
          if (this._isRow) {
              endOfItemsPosition = Math.abs(this._itemsX - this.w);
          }
          if (this._isColumn) {
              endOfItemsPosition = Math.abs(this._itemsY - this.h);
          }
          return this.selectedIndex > this.scrollIndex && endOfItemsPosition < lastChild[axis] + lastChild[lengthDimension];
      }
      get _isColumn() {
          return this.direction === "column";
      }
      get _isRow() {
          return this.direction === "row";
      }
      get _itemsX() {
          return getX(this.Items);
      }
      get _itemsY() {
          return getY(this.Items);
      }
      _getAlwaysScroll() {
          return this._alwaysScroll !== undefined ? this._alwaysScroll : this.style.alwaysScroll;
      }
      _getNeverScroll() {
          if (this.alwaysScroll) {
              return false;
          }
          return this._neverScroll !== undefined ? this._neverScroll : this.style.neverScroll;
      }
      _setScrollIndex(index) {
          return index >= 0 ? index : 0;
      }
      _getScrollIndex() {
          return this._scrollIndex !== undefined ? this._scrollIndex : this.style.scrollIndex;
      }
      _setLazyUpCountBuffer(buffer) {
          if (buffer < 0) {
              console.warn("lazyUpCountBuffer must be greater than or equal to 0. Setting to 0.");
              buffer = 0;
          }
          return buffer;
      }
      isFullyOnScreen() {
          var _this$parent;
          var {offsetX: offsetX = 0, offsetY: offsetY = 0} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var focusmanager = (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.parent;
          if (focusmanager instanceof FocusManager) {
              offsetX += focusmanager.Items.transition("x").targetValue || 0;
              offsetY += focusmanager.Items.transition("y").targetValue || 0;
          }
          return super.isFullyOnScreen({
              offsetX: offsetX,
              offsetY: offsetY
          });
      }
  }

  var base$M = theme => ({
      itemSpacing: theme.layout.gutterX,
      scrollIndex: 0,
      alwaysScroll: false,
      neverScroll: false,
      itemTransition: _objectSpread(_objectSpread({}, theme.animation.standardEntrance), {}, {
          duration: theme.animation.duration.fast
      })
  });

  var styles$M = Object.freeze({
      __proto__: null,
      base: base$M
  });

  class Row extends NavigationManager {
      static get __componentName() {
          return "Row";
      }
      static get __themeStyle() {
          return styles$M;
      }
      static _template() {
          return _objectSpread(_objectSpread({}, super._template()), {}, {
              direction: "row"
          });
      }
      static get properties() {
          return [ ...super.properties, "lazyScroll", "startLazyScrollIndex", "stopLazyScrollIndex" ];
      }
      _isOnScreenForScrolling(child) {
          if (!child) return false;
          var x = getX(child);
          if (!Number.isFinite(x)) return false;
          var itemsTransitionX = this.getTransitionXTargetValue();
          var rowX = this.core.renderContext.px;
          var itemX = rowX + itemsTransitionX + x;
          var xModifier;
          if (child.transition("x")) {
              xModifier = child.x - child.transition("x").targetValue;
              itemX = itemX - xModifier;
          }
          return itemX >= rowX && itemX + child.w <= rowX + this.w;
      }
      _shouldScroll() {
          var prevIndex = this.Items.childList.getIndex(this.prevSelected);
          if (this.alwaysScroll || this.lazyScroll && (this.selectedIndex < this.startLazyScrollIndex || this.selectedIndex > this.stopLazyScrollIndex || prevIndex < this.startLazyScrollIndex && this.selectedIndex === this.startLazyScrollIndex || prevIndex > this.stopLazyScrollIndex && this.selectedIndex === this.stopLazyScrollIndex)) {
              return true;
          }
          var shouldScroll = this._selectedPastAdded;
          if (!shouldScroll && !this.neverScroll) {
              var isCompletelyOnScreen = this._isOnScreenForScrolling(this.selected);
              if (this.lazyScroll) {
                  shouldScroll = !isCompletelyOnScreen;
              } else {
                  var lastChild = this.Items.childList.last;
                  shouldScroll = lastChild && (this.shouldScrollLeft() || this.shouldScrollRight() || !isCompletelyOnScreen);
              }
          }
          return shouldScroll;
      }
      _getPrependedOffset() {
          this._selectedPastAdded = false;
          return this.Items.x - this._totalAddedWidth;
      }
      _getLazyScrollX(prev) {
          var prevIndex = this.Items.childList.getIndex(this.prevSelected);
          if (this._selectedPastAdded) {
              return this._getPrependedOffset();
          }
          if (this.selectedIndex <= this.startLazyScrollIndex) {
              return this._getScrollX();
          } else if (this.selectedIndex >= this.stopLazyScrollIndex && this.selectedIndex < prevIndex) {
              var currItemsX = this.Items.x;
              return currItemsX + (this.prevSelected.w + this.style.itemSpacing + (this.selected.extraItemSpacing || 0));
          } else if (prev && this.selectedIndex > this.stopLazyScrollIndex) {
              var prevX = prev.x;
              return -prevX + this.prevSelected.w + this.style.itemSpacing + (this.selected.extraItemSpacing || 0) + this.itemPosX;
          } else if (prev) {
              var itemsContainerX;
              var _prevIndex = this.Items.childList.getIndex(prev);
              var selectedX = this.selected.x;
              if (_prevIndex === -1) {
                  return;
              }
              if (_prevIndex > this.selectedIndex) {
                  itemsContainerX = -selectedX + this.itemPosX;
              } else if (_prevIndex < this.selectedIndex) {
                  itemsContainerX = this.w - selectedX - this.selected.w;
              }
              return itemsContainerX;
          }
          return this._getScrollX();
      }
      _getScrollX() {
          if (this._selectedPastAdded) {
              return this._getPrependedOffset();
          }
          var itemsContainerX;
          var itemIndex = this.selectedIndex - this.scrollIndex;
          itemIndex = itemIndex < 0 ? 0 : itemIndex;
          if (itemIndex === this._firstFocusableIndex()) {
              itemIndex = 0;
          }
          if (this.Items.children[itemIndex]) {
              itemsContainerX = this.Items.children[itemIndex].transition("x") ? -this.Items.children[itemIndex].transition("x").targetValue + this.itemPosX : -this.Items.children[itemIndex].x + this.itemPosX;
          }
          return itemsContainerX;
      }
      _render(next, prev) {
          if (this.plinko && prev && prev.selected) {
              next.selectedIndex = this._getIndexOfItemNear(next, prev);
          }
          this._prevLastScrollIndex = this._lastScrollIndex;
          var itemsContainerX;
          if (!this.Items.children.length) {
              itemsContainerX = this.itemPosX;
          } else if (this._shouldScroll()) {
              itemsContainerX = this.lazyScroll && prev ? this._getLazyScrollX(prev) : this._getScrollX();
          }
          if (itemsContainerX !== undefined) {
              this.updatePositionOnAxis(this.Items, itemsContainerX);
          }
          this.onScreenEffect(this.onScreenItems);
      }
      _performRender() {
          this._render(this.selected, this.prevSelected);
      }
      _isOnScreen(child) {
          if (!child) return false;
          return this._isComponentHorizontallyVisible(child);
      }
      onScreenEffect() {}
      get _totalAddedWidth() {
          return this._totalAddedLength;
      }
      _getLazyScroll() {
          if (this.alwaysScroll) {
              return false;
          }
          return this._lazyScroll !== undefined ? this._lazyScroll : this.style.lazyScroll;
      }
      _getNeverScroll() {
          if (this.alwaysScroll || this.lazyScroll) {
              return false;
          }
          return this._neverScroll !== undefined ? this._neverScroll : this.style.neverScroll;
      }
  }

  var base$L = theme => ({
      backgroundColor: theme.color.interactiveNeutral,
      radius: theme.radius.md,
      animation: {}
  });

  var tone$m = theme => ({
      inverse: {
          backgroundColor: theme.color.interactiveInverse
      }
  });

  var mode$f = theme => ({
      focused: {
          backgroundColor: theme.color.interactiveNeutralFocus,
          tone: {
              inverse: {
                  backgroundColor: theme.color.interactiveInverseFocus
              }
          }
      },
      disabled: {
          backgroundColor: theme.color.fillNeutralDisabled
      }
  });

  var styles$L = Object.freeze({
      __proto__: null,
      base: base$L,
      mode: mode$f,
      tone: tone$m
  });

  class Surface extends Base$1 {
      static _template() {
          return {
              Background: {}
          };
      }
      static get __componentName() {
          return "Surface";
      }
      static get __themeStyle() {
          return styles$L;
      }
      static get properties() {
          return [];
      }
      static get tags() {
          return [ "Background" ];
      }
      get innerH() {
          return this.h;
      }
      get innerW() {
          return this.w;
      }
      get _radius() {
          return getMaxRoundRadius(this.style.radius, this.w, this.h);
      }
      _update() {
          this._updateLayout();
          this._updateScale();
      }
      _updateLayout() {
          this._Background.patch({
              texture: lng.Tools.getRoundRect(this.innerW - 2, this.innerH - 2, this._radius, 0, null, true, this.style.backgroundColor)
          });
      }
      _updateScale() {
          var scale = this._isFocusedMode ? this.getFocusScale(this.w, this.h) : this.getUnfocusScale(this.w, this.h);
          this.applySmooth(this, {
              scale: scale
          }, {
              scale: [ scale, this.style.animation ]
          });
      }
  }

  var base$K = theme => ({
      offsetY: theme.spacer.xxs,
      offsetX: 0,
      textStyle: theme.typography.body1
  });

  var tone$l = theme => ({
      neutral: {
          textStyle: {
              textColor: theme.color.fillNeutral
          }
      },
      inverse: {
          textStyle: {
              textColor: theme.color.fillInverse
          }
      },
      brand: {
          textStyle: {
              textColor: theme.color.fillBrand
          }
      }
  });

  var styles$K = Object.freeze({
      __proto__: null,
      base: base$K,
      tone: tone$l
  });

  var base$J = theme => ({
      textY: 0,
      iconWidth: theme.spacer.xxl + theme.spacer.xs,
      iconHeight: theme.spacer.xxl + theme.spacer.xs,
      contentSpacing: theme.spacer.md,
      marginBottom: 0,
      strikethroughRatio: .08,
      strikethroughColor: theme.color.textNeutral,
      textStyle: _objectSpread({}, theme.typography.body1),
      maxLines: 1,
      justify: "flex-start"
  });

  var styles$J = Object.freeze({
      __proto__: null,
      base: base$J
  });

  var isText = item => typeof item === "string" || !!item.text;

  var isIcon = item => !!item.icon;

  var isBadge = item => !!item.badge;

  class InlineContent extends Base$1 {
      static get properties() {
          return [ "content", "contentProperties", "badgeY", "badgeProperties", "justify", "contentWrap", "customStyleMappings", "maxLines", "maxLinesSuffix" ];
      }
      static get __componentName() {
          return "InlineContent";
      }
      static get __themeStyle() {
          return styles$J;
      }
      static get aliasStyles() {
          return [ {
              prev: "iconH",
              curr: "iconHeight"
          }, {
              prev: "iconW",
              curr: "iconWidth"
          } ];
      }
      _construct() {
          super._construct();
          this._maxLinesSuffix = "..";
      }
      _update() {
          this._updateContent();
          this._waitForComponentLoad();
      }
      _updateContent() {
          this.childList.clear();
          if (this._shouldTruncate) {
              this.alpha = .001;
          }
          if (this._parsedContent && this._parsedContent.length) {
              this.patch({
                  flex: {
                      direction: "row",
                      wrap: !!this.contentWrap,
                      justifyContent: this.justify != undefined ? this.justify : this.style.justify
                  }
              });
              this._parsedContent.forEach(((item, index) => {
                  var isLast = index === this._parsedContent.length - 1;
                  var base = {
                      flexItem: _objectSpread(_objectSpread({}, this.contentProperties), {}, {
                          marginBottom: isLast ? 0 : this._marginBottom,
                          marginRight: isLast ? 0 : this.contentProperties.marginRight || this.style.contentSpacing
                      })
                  };
                  if (isText(item)) {
                      var nextItem = this._parsedContent[index + 1];
                      if (nextItem && isText(nextItem) || this.contentWrap && nextItem && nextItem.newline && this._parsedContent[index + 2] && isText(this._parsedContent[index + 2])) {
                          base.flexItem.marginRight = 0;
                      }
                      this.childList.a(this._createText(base, item));
                  } else if (isIcon(item)) {
                      this.childList.a(this._createIcon(base, item));
                  } else if (isBadge(item)) {
                      this.childList.a(this._createBadge(base, item.badge));
                  } else if (item.newline && this.contentWrap) {
                      this.childList.a({
                          h: 0,
                          w: this.w
                      });
                  }
              }));
          }
      }
      _waitForComponentLoad() {
          if (this.children.length) {
              Promise.all(this.children.map((child => new Promise((resolve => {
                  if (child.h === 0 && child.w === this.w) {
                      resolve();
                  } else {
                      child.on("txLoaded", resolve);
                  }
              }))))).finally((() => this._contentLoaded()));
          } else {
              this.h = 0;
              this._contentLoaded();
          }
      }
      _notifyAncestors() {
          this.fireAncestors("$loadedInlineContent", this);
          this.signal("loadedInlineContent", this.finalW, this.multiLineHeight);
      }
      _contentLoaded() {
          if (this.children.length) {
              setTimeout((() => {
                  this.multiLineHeight = this.finalH;
                  if (this.flex && this.flex._layout && this.flex._layout._lineLayouter && this.flex._layout._lineLayouter._lines) {
                      var totalHeight = 0;
                      this.flex._layout._lineLayouter._lines.forEach((line => {
                          totalHeight += Object.entries(line.items).slice(line.startIndex, line.endIndex + 1).sort(((a, b) => b[1].h - a[1].h))[0][1].h;
                      }));
                      this.multiLineHeight = totalHeight;
                      if (this._shouldTruncate) {
                          this._renderMaxLines();
                      }
                      this._notifyAncestors();
                  } else {
                      this._contentLoaded();
                  }
              }), 10);
          } else {
              this._notifyAncestors();
          }
      }
      _renderMaxLines() {
          var childrenDimensions = this._calcChildrenDimensions();
          this.childList.clear();
          var renderedLastElement = false;
          childrenDimensions.forEach(((child, index) => {
              if (renderedLastElement) {
                  return;
              }
              var nextChild = childrenDimensions[index + 1];
              if (!nextChild) {
                  this.childList.add(child.component);
                  return;
              }
              var isOnLastLine = child.line === this.maxLines;
              var isLastBeforeMaxLines = isOnLastLine && nextChild.line > this.maxLines;
              var canRenderLastWithSuffix = isLastBeforeMaxLines && child.hasSpaceForSuffix;
              var isLastWithSpaceForSuffix = isOnLastLine && child.hasSpaceForSuffix && !nextChild.hasSpaceForSuffix;
              var isLast = !nextChild || canRenderLastWithSuffix || isLastWithSpaceForSuffix;
              if (child.line <= this.maxLines) {
                  if (isLast && index !== childrenDimensions.length - 1) {
                      this.childList.add(this._addSuffix(child));
                      renderedLastElement = true;
                  } else {
                      this.childList.add(child.component);
                  }
              }
          }));
          this.alpha = 1;
      }
      _calcChildrenDimensions() {
          var suffixW = measureTextWidth(_objectSpread(_objectSpread({}, this.style.textStyle), {}, {
              text: this.maxLinesSuffix
          }));
          var contentEndX = 0;
          var line = 1;
          return this.children.reduce(((acc, child) => {
              var component = child;
              var type, content, w;
              var isNewLineElement = child.w == this.w && child.h === 0;
              if (isNewLineElement) {
                  line++;
                  contentEndX = 0;
                  var _data = {
                      type: "linebreak",
                      component: component,
                      content: content,
                      line: line,
                      hasSpaceForSuffix: true
                  };
                  acc.push(_data);
                  return acc;
              }
              if (isText(child)) {
                  type = "text";
                  content = child.text.text;
                  w = child.texture.getRenderWidth();
              } else if (isIcon(child)) {
                  type = "icon";
                  w = child.w;
              } else if (child.constructor.__componentName === "Badge") {
                  type = "badge";
                  w = child.w;
              }
              contentEndX += w;
              contentEndX += child.flexItem.marginRight;
              if (Math.ceil(contentEndX) >= this.w) {
                  line++;
                  contentEndX = w;
              }
              var hasSpaceForSuffix = Math.ceil(contentEndX) + suffixW <= this.w;
              var data = {
                  type: type,
                  component: component,
                  content: content,
                  line: line,
                  hasSpaceForSuffix: hasSpaceForSuffix
              };
              acc.push(data);
              return acc;
          }), []);
      }
      _addSuffix(_ref16) {
          var {type: type, component: component, content: content} = _ref16;
          var negatedRightMargin = component.flexItem.marginRight * -1;
          var suffix;
          if (type === "text") {
              var {fontFace: fontFace, fontSize: fontSize, fontStyle: fontStyle, lineHeight: lineHeight, verticalAlign: verticalAlign} = component.text;
              suffix = this._createText({
                  flexItem: this.contentProperties
              }, {
                  text: "".concat(content.trim()).concat(this.maxLinesSuffix),
                  style: {
                      fontFace: fontFace,
                      fontSize: fontSize,
                      fontStyle: fontStyle,
                      lineHeight: lineHeight,
                      verticalAlign: verticalAlign
                  }
              });
          } else {
              this.childList.add(component);
              suffix = this._createText({
                  flexItem: _objectSpread(_objectSpread({}, this.contentProperties), {}, {
                      marginLeft: negatedRightMargin
                  })
              }, this.maxLinesSuffix);
          }
          return suffix;
      }
      _createIcon(base, iconProps) {
          var y = (this.textHeight > this.style.textStyle.lineHeight ? this.textHeight : this.style.textStyle.lineHeight) - this.style.iconHeight;
          return _objectSpread(_objectSpread({}, base), {}, {
              type: Icon,
              y: y,
              w: this.style.iconWidth,
              h: this.style.iconHeight,
              signals: {
                  itemChanged: "_updateIconPosition"
              }
          }, iconProps);
      }
      _createText(base, text) {
          var textOverrideStyles = typeof text.style === "string" ? this.customStyleMappings[text.style] : text.style;
          var textComponent = _objectSpread(_objectSpread({}, base), {}, {
              y: this.textY !== undefined ? this.textY : this.style.textY,
              h: (textOverrideStyles === null || textOverrideStyles === void 0 ? void 0 : textOverrideStyles.lineHeight) || (textOverrideStyles === null || textOverrideStyles === void 0 ? void 0 : textOverrideStyles.fontSize) || this.textHeight,
              text: _objectSpread(_objectSpread(_objectSpread({}, this.style.textStyle), textOverrideStyles), {}, {
                  text: text.text || text
              })
          });
          if ((textOverrideStyles === null || textOverrideStyles === void 0 ? void 0 : textOverrideStyles.textDecoration) === "line-through") {
              var textWidth = measureTextWidth(_objectSpread(_objectSpread(_objectSpread({}, this.style.textStyle), textOverrideStyles), {}, {
                  text: text.text || text
              }));
              var strikethroughLine = {
                  rect: true,
                  w: textWidth,
                  color: this.style.strikethroughColor || (textOverrideStyles === null || textOverrideStyles === void 0 ? void 0 : textOverrideStyles.textColor) || this.style.textStyle.textColor,
                  h: textComponent.h * this.style.strikethroughRatio,
                  y: textComponent.h / 2,
                  mountY: 1
              };
              return {
                  type: lng.Component,
                  w: textWidth + textComponent.flexItem.marginRight,
                  h: textComponent.h,
                  children: [ _objectSpread({}, textComponent), _objectSpread({}, strikethroughLine) ]
              };
          }
          return textComponent;
      }
      _createBadge(base, badge) {
          return _objectSpread(_objectSpread(_objectSpread({}, base), {}, {
              y: this.badgeY || 0
          }, this.badgeProperties), {}, {
              type: Badge,
              title: badge,
              signals: {
                  loadedBadge: "_loadedBadge"
              }
          });
      }
      _updateIconPosition(icon) {
          icon.y = this.style.textStyle.lineHeight - icon.h;
      }
      _loadedBadge(badge) {
          if (this.badgeY === undefined) {
              badge.y = this.style.textStyle.lineHeight - badge.h;
          }
      }
      _formatSpaces(parsedContent) {
          var whitespace = /(.+?\s+)/;
          return flatten((parsedContent || []).reduce(((acc, item) => {
              var parsed = item;
              if (isText(item)) {
                  if (typeof item === "object") {
                      var formattedWords = item.text.split(whitespace).map((word => word && _objectSpread(_objectSpread({}, item), {}, {
                          text: word
                      })));
                      acc.push(...formattedWords);
                      return acc;
                  }
                  parsed = item.split(whitespace);
              }
              acc.push(parsed);
              return acc;
          }), [])).map(((item, index, arr) => {
              if (item === " ") return false;
              if (arr[index + 1] === " ") return item + " ";
              return item;
          })).filter(Boolean);
      }
      _setContent(content) {
          if (content !== this._content) {
              this._content = content;
              var parsedContent = this._content;
              if (content && !Array.isArray(content)) {
                  parsedContent = parseInlineContent(content);
              }
              this._parsedContent = this._formatSpaces(parsedContent);
          }
          return content;
      }
      _setBadgeProperties(badgeProperties) {
          if (typeof badgeProperties === "object") {
              return badgeProperties;
          }
      }
      _getBadgeProperties() {
          return this._badgeProperties || {};
      }
      _setContentProperties(contentProperties) {
          if (typeof contentProperties === "object") {
              return contentProperties;
          }
      }
      _getContentProperties() {
          return this._contentProperties || {};
      }
      _setCustomStyleMappings(customStyleMappings) {
          if (typeof customStyleMappings === "object") {
              return customStyleMappings;
          }
      }
      _getCustomStyleMappings() {
          return this._customStyleMappings || {};
      }
      _setMaxLines(maxLines) {
          return maxLines >= 1 ? Math.floor(maxLines) : 0;
      }
      get textHeight() {
          return this.style.textStyle.lineHeight || this.style.textStyle.fontSize;
      }
      get _marginBottom() {
          if (this.contentProperties.marginBottom !== undefined) {
              return this.contentProperties.marginBottom;
          }
          if (this.style.marginBottom) {
              return this.style.marginBottom;
          }
          return 0;
      }
      get _shouldTruncate() {
          return this.contentWrap && this.maxLines;
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          if (this._announce) {
              return this._announce;
          }
          var announce = this._parsedContent && this._parsedContent.reduce(((announce, item) => {
              if (typeof item === "string") {
                  announce += item;
              } else if (item.announce) {
                  announce += item.announce;
              } else if (item.text) {
                  var _item$style;
                  announce += item.text;
                  if (((_item$style = item.style) === null || _item$style === void 0 ? void 0 : _item$style.textDecoration) === "line-through") {
                      announce += "strikethrough";
                  }
              } else if (item.title) {
                  announce += item.title;
              } else if (item.badge) {
                  announce += item.badge;
              }
              return announce + " ";
          }), "");
          return announce ? announce.replace(/\s+(?=\s)|\s$/g, "") : "";
      }
  }

  var base$I = theme => ({
      fadeWidth: 100,
      offset: theme.spacer.xxl,
      shouldSmooth: false,
      textStyle: theme.typography.body1
  });

  var styles$I = Object.freeze({
      __proto__: null,
      base: base$I
  });

  class FadeShader extends lng.shaders.WebGLDefaultShader {
      constructor(context) {
          super(context);
          this._margin = {
              left: 0,
              right: 0
          };
      }
      set positionLeft(v) {
          this._positionLeft = v;
      }
      set positionRight(v) {
          this._positionRight = v;
      }
      setupUniforms(operation) {
          super.setupUniforms(operation);
          var owner = operation.shaderOwner;
          if (this._positionLeft === 0) {
              this._positionLeft = .001;
          }
          if (this._positionRight === 0) {
              this._positionRight = .001;
          }
          var renderPrecision = this.ctx.stage.getRenderPrecision();
          this._setUniform("margin", [ this._positionLeft * renderPrecision, this._positionRight * renderPrecision ], this.gl.uniform1fv);
          this._setUniform("resolution", new Float32Array([ owner._w * renderPrecision, owner._h * renderPrecision ]), this.gl.uniform2fv);
      }
  }

  FadeShader.fragmentShaderSource = "\n  #ifdef GL_ES\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision lowp float;\n  # endif\n  #endif\n\n  #define PI 3.14159265359\n\n  varying vec2 vTextureCoord;\n  varying vec4 vColor;\n\n  uniform sampler2D uSampler;\n  uniform vec2 resolution;\n  uniform float margin[2];\n\n  void main() {\n      vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n      vec2 halfRes = 0.5 * resolution.xy;\n      vec2 point = vTextureCoord.xy * resolution;\n\n\n      vec2 pos1 = vec2(point.x, point.y);\n      vec2 pos2 = pos1;\n      pos2.x += margin[0];\n\n      vec2 d = pos2 - pos1;\n      float t = dot(pos1, d) / dot(d, d);\n      t = smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));\n\n      vec2 pos3 = vec2(vTextureCoord.x * resolution.x, vTextureCoord.y);\n      pos3.x -= resolution.x - margin[1];\n      vec2 pos4 = vec2(vTextureCoord.x + margin[1], vTextureCoord.y);\n\n      vec2 d2 = pos4 - pos3;\n      float t2 = dot(pos3, d2) / dot(d2, d2);\n      t2 = smoothstep(0.0, 1.0, clamp(t2, 0.0, 1.0));\n\n      color = mix(vec4(0.0), color, t);\n      color = mix(color, vec4(0.0), t2);\n\n      gl_FragColor = color;\n  }\n";

  class Marquee extends Base$1 {
      static _template() {
          return {
              ContentClipper: {
                  boundsMargin: [],
                  ContentBox: {
                      Content: {},
                      ContentLoopTexture: {}
                  }
              }
          };
      }
      static get __componentName() {
          return "Marquee";
      }
      static get __themeStyle() {
          return styles$I;
      }
      static get tags() {
          return [ "ContentClipper", {
              name: "ContentBox",
              path: "ContentClipper.ContentBox"
          }, {
              name: "Content",
              path: "ContentClipper.ContentBox.Content"
          }, {
              name: "ContentLoopTexture",
              path: "ContentClipper.ContentBox.ContentLoopTexture"
          } ];
      }
      static get properties() {
          return [ "autoStart", "title", "contentTexture", "color", "centerAlign", "delay", "repeat", "overrideLoopX" ];
      }
      static get aliasStyles() {
          return [ {
              prev: "fadeW",
              curr: "fadeWidth"
          } ];
      }
      _construct() {
          super._construct();
          this._scrolling = false;
          this._autoStart = false;
          this._centerAlign = false;
      }
      _init() {
          this._Content.on("txLoaded", this._updateContentTexture.bind(this));
          super._init();
      }
      _updateContentTexture() {
          var restartScrolling = this._restartScrolling;
          this.stopScrolling();
          if (!this._currentTexture.h) {
              this._ContentClipper.h = this._currentTexture.text && this._currentTexture.text.lineHeight ? this._currentTexture.text.lineHeight : this._Content.finalH;
          }
          if (this._shouldClip) {
              this._updateShader();
          } else {
              this._ContentClipper.shader = null;
              this._positionTexture();
          }
          restartScrolling && this.startScrolling();
          this.signal("marqueeContentLoaded");
      }
      _update() {
          this._updateColor();
          this._updateTexture();
          this._updateShader();
          this._restartScrolling && this.startScrolling();
      }
      get _restartScrolling() {
          return this.autoStart || this._scrolling || this._shouldTryScrolling;
      }
      _updateColor() {
          if (this.color) {
              this._Content.smooth = {
                  color: utils$1.getValidColor(this.color)
              };
          }
      }
      get _currentTexture() {
          return this._Content.text || this._Content.texture || {};
      }
      _updateTexture() {
          var content = {
              rtt: true
          };
          if (this.contentTexture) {
              content.texture = this.contentTexture;
          } else if (this.title) {
              content.text = _objectSpread(_objectSpread(_objectSpread({}, this.style.textStyle), this.title), {}, {
                  text: this.textContent
              });
          }
          this.patch({
              ContentClipper: {
                  w: this.w + 14,
                  ContentBox: {
                      Content: content,
                      ContentLoopTexture: {}
                  }
              }
          });
          this.signal("marqueeContentLoaded");
      }
      _updateShader() {
          this._ContentClipper.patch({
              w: this.w > 0 ? this.w + this.style.fadeWidth / 2 : 0,
              shader: {
                  type: FadeShader,
                  positionLeft: 0,
                  positionRight: this.style.fadeWidth
              },
              rtt: true
          });
      }
      _updateAnimation() {
          this._scrollAnimation && this._scrollAnimation.stopNow();
          this._scrollAnimation = this.animation({
              duration: this._loopWidth / 50,
              delay: isNaN(this.delay) ? 1.5 : this.delay,
              repeat: isNaN(this.repeat) ? -1 : this.repeat,
              actions: [ {
                  t: "ContentBox",
                  p: "x",
                  v: {
                      sm: 0,
                      0: {
                          v: 0
                      },
                      .5: {
                          v: -(this._loopWidth + this.style.offset)
                      }
                  }
              }, {
                  t: "ContentClipper",
                  p: "shader.positionLeft",
                  v: {
                      sm: 0,
                      0: {
                          v: 0
                      },
                      .1: {
                          v: this.style.fadeWidth
                      },
                      .4: {
                          v: this.style.fadeWidth
                      },
                      .5: {
                          v: 0
                      }
                  }
              } ]
          });
      }
      _positionTexture() {
          var x = this._shouldCenter() ? (this.w - this._textRenderedW) / 2 : 0;
          if (this.style.shouldSmooth) {
              this._ContentBox.smooth = {
                  x: x
              };
          } else {
              this._ContentBox.x = x;
          }
      }
      startScrolling() {
          this._Content.off("txLoaded", this.startScrolling.bind(this));
          this._shouldTryScrolling = true;
          if (this._textRenderedW === 0) {
              this._Content.on("txLoaded", this.startScrolling.bind(this));
          }
          if (this._shouldClip) {
              this._scrolling = true;
              this._ContentLoopTexture.x = this._loopWidth + this.style.offset;
              this._ContentLoopTexture.texture = this._Content.getTexture();
              this._updateAnimation();
              this._scrollAnimation.start();
          } else {
              this._scrolling = false;
          }
      }
      stopScrolling() {
          this._shouldTryScrolling = false;
          this._scrolling = false;
          if (this._scrollAnimation) {
              this._scrollAnimation.stopNow();
              this._ContentLoopTexture.texture = null;
          }
      }
      get _shouldClip() {
          return this._textRenderedW > this.w - this.style.fadeWidth / 4;
      }
      _shouldCenter() {
          return this._centerAlign || this._Content.text && this._Content.text.textAlign === "center";
      }
      _setAutoStart(autoStart) {
          if (this.autoStart && !autoStart) {
              this._updateContentTexture();
          }
          return autoStart;
      }
      _setCenterAlign(center) {
          this._centerAlign = center;
          this._updateContentTexture();
          return center;
      }
      get textContent() {
          var _ref17, _this$title$text, _this$title;
          return (_ref17 = (_this$title$text = (_this$title = this.title) === null || _this$title === void 0 ? void 0 : _this$title.text) !== null && _this$title$text !== void 0 ? _this$title$text : this.title) !== null && _ref17 !== void 0 ? _ref17 : "";
      }
      get _loopWidth() {
          return this.overrideLoopX || this._textRenderedW;
      }
      get _textRenderedW() {
          return this._Content.renderWidth;
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          return this._announce || this.title && this.title.text;
      }
  }

  var lightningTextDefaults = Object.entries(Object.getOwnPropertyDescriptors(lng.textures.TextTexture.prototype)).reduce(((acc, _ref18) => {
      var [prop] = _ref18;
      var value = lng.textures.TextTexture.prototype[prop];
      if (prop.startsWith("_") || [ "undefined", "function" ].includes(typeof value)) return acc;
      return _objectSpread({
          [prop]: value
      }, acc);
  }), {});

  class TextBox extends Base$1 {
      static _template() {
          return {
              alpha: .001
          };
      }
      static get __componentName() {
          return "TextBox";
      }
      static get __themeStyle() {
          return styles$K;
      }
      static get tags() {
          return [ "InlineContent", "Marquee", "Text" ];
      }
      static get properties() {
          return [ ...InlineContent.properties, "content", "fixed", "marquee", "marqueeProps", "hideOnLoad" ];
      }
      _setDimensions(w, h) {
          var width = w;
          var height = h;
          if (!this._isInlineContent) {
              width = this._Text.texture.getRenderWidth();
              height = this._Text.texture.getRenderHeight();
          }
          var sizeChanged = this.w !== width || this.h !== height;
          if (width && height && sizeChanged) {
              this.h = height;
              if (!this.fixed) {
                  this.w = width;
              }
              if (!this.hideOnLoad && this.alpha < 1) {
                  this.alpha = 1;
              }
              this._notifyAncestors();
          }
      }
      _setContent(content) {
          this._isInlineContent = false;
          if (Array.isArray(content) || utils$1.isMarkupString(content)) {
              this._isInlineContent = true;
          }
          if ("string" !== typeof content && !this._isInlineContent) {
              return "";
          }
          return content;
      }
      get title() {
          return this._content;
      }
      _notifyAncestors() {
          var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.w;
          var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.h;
          this.fireAncestors("$itemChanged");
          this.signal("textBoxChanged", {
              w: w,
              h: h
          });
      }
      _construct() {
          super._construct();
          this._marqueeContentListenerAttached = false;
          this._marqueeOverrideLoopX = undefined;
          this._resetMarqueePromise();
      }
      _update() {
          if (!this.content) {
              if (this._Text || this._InlineContent) {
                  this.w = this.h = 0;
                  this._notifyAncestors();
                  this._updateMarquee();
                  this.patch({
                      Text: undefined,
                      InlineContent: undefined
                  });
              }
              return;
          }
          this._isInlineContent ? this._updateInlineContent() : this._updateText();
          this._updateMarquee();
      }
      _updateInlineContent() {
          this.patch({
              Text: undefined
          });
          var inlineContentPatch = InlineContent.properties.reduce(((acc, prop) => {
              if (this[prop] != undefined) {
                  acc[prop] = this[prop];
              }
              return acc;
          }), {
              style: _objectSpread(_objectSpread({}, this.style), {}, {
                  textStyle: this._textStyleSet
              })
          });
          if (this._textStyleSet.wordWrapWidth) {
              inlineContentPatch.w = this._textStyleSet.wordWrapWidth;
              inlineContentPatch.rtt = true;
          }
          if (this._textStyleSet.maxLines) {
              inlineContentPatch.maxLines = this._textStyleSet.maxLines;
          }
          if (this._textStyleSet.maxLinesSuffix) {
              inlineContentPatch.maxLinesSuffix = this._textStyleSet.maxLinesSuffix;
          }
          this.patch({
              alpha: 1,
              InlineContent: _objectSpread(_objectSpread({
                  type: InlineContent,
                  w: this.w
              }, inlineContentPatch), {}, {
                  signals: {
                      loadedInlineContent: "_setDimensions"
                  }
              })
          });
      }
      _updateText() {
          this.patch({
              InlineContent: undefined
          });
          if (!this._Text) {
              this.patch({
                  Text: {}
              });
              this._Text.on("txLoaded", this._setDimensions.bind(this));
          }
          var fontStyle = this._textStyleSet;
          if (this._Text) {
              this._Text.patch({
                  y: this.style.offsetY,
                  x: this.style.offsetX,
                  text: _objectSpread(_objectSpread({}, lightningTextDefaults), fontStyle)
              });
          }
      }
      set marqueeOverrideLoopX(v) {
          this._marqueeOverrideLoopX = v;
          if (this._Marquee) this._Marquee.overrideLoopX = this._marqueeOverrideLoopX;
          this._resolveAwaitMarqueeOverrideX();
      }
      get marqueeOverrideLoopX() {
          return this._marqueeOverrideLoopX;
      }
      _resetMarqueePromise() {
          this._awaitMarqueeOverrideX = new Promise(((resolve, reject) => {
              this._resolveAwaitMarqueeOverrideX = resolve;
              this._rejectAwaitMarqueeOverrideX = reject;
          }));
      }
      _loadedMarqueeContent() {
          this.signal("willMarquee", this._Marquee);
      }
      _updateMarquee() {
          if (this._Marquee && !this.marquee) {
              this._toggleMarquee(this._contentTag);
          }
          if (this.marquee) {
              this._resetMarqueePromise();
              var marqueePatch = _objectSpread(_objectSpread({}, this.marqueeProps), {}, {
                  w: this._textStyleSet.wordWrapWidth || this.w,
                  h: this.h,
                  y: this.style.offsetY,
                  x: this.style.offsetX,
                  signals: {
                      marqueeContentLoaded: "_loadedMarqueeContent"
                  }
              });
              if (!this._Marquee) {
                  marqueePatch.type = Marquee;
              }
              if (this._isInlineContent) {
                  this._InlineContent.w = 0;
                  marqueePatch.title = undefined;
                  marqueePatch.contentTexture = this._contentTag.getTexture();
                  marqueePatch.w = this._textStyleSet.wordWrapWidth || this.w;
              } else {
                  marqueePatch.contentTexture = undefined;
                  marqueePatch.title = _objectSpread(_objectSpread({
                      text: this._contentTag.text.text
                  }, this._textStyleSet), {}, {
                      wordWrapWidth: 0,
                      maxLines: 1
                  });
              }
              this.patch({
                  Marquee: marqueePatch
              });
              if (!this._marqueeContentListenerAttached) {
                  this._marqueeContentListenerAttached = true;
              }
              if ("undefined" !== typeof this._marqueeOverrideLoopX) {
                  this._awaitMarqueeOverrideX.then((() => {
                      this._toggleMarquee(this._contentTag);
                  }));
              } else {
                  this._toggleMarquee(this._contentTag);
              }
          }
      }
      _getMarqueeProps() {
          var _this$_marqueeProps;
          return (_this$_marqueeProps = this._marqueeProps) !== null && _this$_marqueeProps !== void 0 ? _this$_marqueeProps : {};
      }
      get _textStyleSet() {
          var fontStyle = _objectSpread(_objectSpread({}, this.theme.typography.body1), null !== this.style.textStyle && "object" === typeof this.style.textStyle && Object.keys(this.style.textStyle) ? this.style.textStyle : this.theme.typography[this.style.textStyle]);
          this.constructor.properties.forEach((prop => {
              if ("fontStyle" !== prop && "undefined" !== typeof this["_".concat(prop)]) {
                  var key = "content" === prop ? "text" : prop;
                  fontStyle[key] = this["_".concat(prop)];
              }
          }));
          if (this.w && !this._isInlineContent && !this.style.textStyle.wordWrapWidth && this.fixed) {
              fontStyle.wordWrapWidth = this.w;
          }
          return fontStyle;
      }
      get _contentTag() {
          return this._isInlineContent ? this._InlineContent : this._Text;
      }
      _toggleMarquee(contentTag) {
          if (this.marquee) {
              if (contentTag) {
                  contentTag.alpha = .001;
              }
              if (this._Marquee) {
                  this._Marquee.alpha = 1;
                  this._Marquee.startScrolling();
              }
          } else {
              if (contentTag) {
                  contentTag.alpha = 1;
              }
              if (this._Marquee) {
                  this._Marquee.alpha = .001;
                  this._Marquee.stopScrolling();
              }
          }
      }
      toggleMarquee() {
          this._toggleMarquee(this._contentTag);
      }
      get announce() {
          return this._announce || (this._isInlineContent && this._InlineContent ? this._InlineContent.announce : this.content);
      }
      set announce(announce) {
          super.announce = announce;
      }
      set smooth(v) {
          contextInstance.warn("warning: value smoothing is known to cause bugs with the TextBox - patch updated values instead.");
          super.smooth = v;
      }
  }

  class Button extends Surface {
      static get __componentName() {
          return "Button";
      }
      static get __themeStyle() {
          return styles$O;
      }
      static get properties() {
          return [ "fixed", "justify", "prefix", "suffix", "title" ];
      }
      static get aliasStyles() {
          return [ {
              prev: "titlePadding",
              curr: "contentSpacing"
          } ];
      }
      static get tags() {
          return [ ...super.tags, "Content", {
              name: "TextWrapper",
              path: "Content.TextWrapper"
          }, {
              name: "Title",
              path: "Content.TextWrapper.Title"
          }, {
              name: "Prefix",
              path: "Content.Prefix"
          }, {
              name: "Suffix",
              path: "Content.Suffix"
          } ];
      }
      static _template() {
          return _objectSpread(_objectSpread({}, super._template()), {}, {
              Content: {
                  mount: .5,
                  x: w => w / 2,
                  y: h => h / 2,
                  zIndex: 2
              }
          });
      }
      _update() {
          this._updatePrefix();
          this._updateTitle();
          this._updateSuffix();
          this._updateAllPositioning();
          this._updateTruncation();
      }
      _updateAllPositioning() {
          this._updatePositions();
          this._updateContentDimensions();
          this._updateSurfaceDimensions();
          this._updateContentPosition();
          super._update();
      }
      $itemChanged() {
          this._updateAllPositioning();
          this._updateTruncation();
      }
      _onTitleTextBoxChanged() {
          this._updateAllPositioning();
      }
      _updatePositions() {
          if (this._hasPrefix && this._Prefix !== undefined) {
              this._Prefix.x = this._prefixX;
          }
          if (this._hasTitle) {
              this._TextWrapper.x = this._titleX;
          }
          if (this._hasSuffix && this._Suffix !== undefined) {
              this._Suffix.x = this._suffixX;
          }
      }
      _updatePrefix() {
          var prefixString = JSON.stringify(this.prefix);
          if (this.prefix) {
              var prefixPatch = {
                  style: {
                      itemSpacing: this.style.itemSpacing
                  }
              };
              if (!this._Prefix) {
                  prefixPatch = _objectSpread(_objectSpread({}, this._rowProps), prefixPatch);
              }
              this._Content.patch({
                  Prefix: prefixPatch
              });
              this._updatePrefixSuffixStyles("prefix");
          } else {
              this._Content.patch({
                  Prefix: undefined
              });
          }
          this._prevPrefix = prefixString;
      }
      _updatePrefixSuffixStyles() {
          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "prefix";
          var map = {
              prefix: {
                  tag: this._Prefix,
                  prop: this.prefix,
                  prevProp: this._prevPrefix
              },
              suffix: {
                  tag: this._Suffix,
                  prop: this.suffix,
                  prevProp: this._prevSuffix
              }
          };
          var {tag: tag, prop: prop} = map[type];
          var {prevProp: prevProp} = map[type];
          var propString = JSON.stringify(prop);
          if (propString !== prevProp) {
              prevProp = propString;
              tag.items = this._addButtonProps(prop);
          } else {
              tag.Items.children.forEach(((item, idx) => {
                  item.color = Array.isArray(prop) ? prop[idx].color : prop.color;
                  item.style = _objectSpread(_objectSpread({}, item.style), {}, {
                      color: this.style.contentColor
                  });
              }));
          }
      }
      _updateTitle() {
          if (this._hasTitle) {
              var titlePatch = {
                  content: this.title,
                  style: {
                      textStyle: this.style.textStyle
                  }
              };
              if (!this._Title) {
                  titlePatch = _objectSpread({
                      type: TextBox,
                      mountY: .5,
                      y: h => h / 2,
                      signals: {
                          textBoxChanged: "_onTitleTextBoxChanged"
                      }
                  }, titlePatch);
              }
              this._Content.patch({
                  TextWrapper: {
                      mountY: .5,
                      Title: titlePatch
                  }
              });
          } else {
              this._Content.patch({
                  TextWrapper: {
                      Title: undefined
                  }
              });
          }
      }
      _updateSuffix() {
          if (this.suffix) {
              var suffixPatch = {
                  style: {
                      itemSpacing: this.style.itemSpacing
                  }
              };
              if (!this._Suffix) {
                  suffixPatch = _objectSpread(_objectSpread({}, this._rowProps), suffixPatch);
              }
              this._Content.patch({
                  Suffix: suffixPatch
              });
              this._updatePrefixSuffixStyles("suffix");
          } else {
              this._Content.patch({
                  Suffix: undefined
              });
          }
      }
      _updateTruncation() {
          if (this._Title) {
              this._Title.patch({
                  style: {
                      textStyle: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
                          wordWrap: this.fixed,
                          wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
                      })
                  }
              });
          }
      }
      _updateContentDimensions() {
          var contentDimensionsPatch = {};
          var y = this.h / 2;
          if (this._Content.transition("w").targetValue !== this._contentW) {
              this._Content.w = this._contentW;
          }
          if (this._Content.y !== y) {
              contentDimensionsPatch.y = y;
          }
          if (Object.keys(contentDimensionsPatch).length > 0) {
              this._Content.patch(contentDimensionsPatch);
          }
      }
      _updateContentPosition() {
          this._Content.patch(this._contentProps);
      }
      _updateSurfaceDimensions() {
          var newWidth = this.w;
          if (this.fixed) {
              newWidth = this._w;
          } else {
              newWidth = this._calcDynamicWidth();
          }
          if (newWidth !== this.w) {
              this.w = newWidth;
          }
          if (!this._hSetByUser && !this.style.h) {
              this._h = this.style.textStyle.lineHeight + this.style.paddingY * 2;
          }
          this.fireAncestors("$itemChanged");
      }
      _calcDynamicWidth() {
          return !this._hasTitle && (this._hasPrefix || this._hasSuffix) || this._Title && !this._Title.visible && (this._hasPrefix || this._hasSuffix) ? this._contentW + this._paddingX : Math.max(this._contentW + this._paddingX, this.style.minWidth);
      }
      _addButtonProps(arr) {
          var items = Array.isArray(arr) ? arr : [ arr ];
          return items.map((item => _objectSpread(_objectSpread(_objectSpread({}, this._buttonProps), item), {}, {
              style: _objectSpread({
                  color: this.style.contentColor
              }, item.style)
          })));
      }
      _getJustify() {
          return !!this._justify ? this._justify : this.style.justify;
      }
      get _contentProps() {
          var mountX;
          var x;
          switch (this.justify) {
            case "left":
              mountX = 0;
              x = this._paddingLeft;
              break;

            case "right":
              mountX = 1;
              x = this.w - this._paddingRight;
              break;

            case "center":
            default:
              mountX = .5;
              x = this.w / 2;
              break;
          }
          return {
              mountX: mountX,
              x: x
          };
      }
      get _buttonProps() {
          return {
              centerInParent: true,
              mode: this.mode
          };
      }
      get _hasPrefix() {
          return !!(this.prefix && Object.keys(this.prefix).length);
      }
      get _prefixW() {
          return this._hasPrefix && this._Prefix !== undefined ? this._Prefix.w : 0;
      }
      get _prefixX() {
          return 0;
      }
      get _hasTitle() {
          return !!this.title;
      }
      get _titleW() {
          if (this._hasTitle && this._Title && this._Title._Text && this._Title.visible) {
              return this._Title.w;
          }
          return 0;
      }
      get _titleX() {
          return this._hasPrefix ? this._prefixW + this.style.contentSpacing : 0;
      }
      get _hasSuffix() {
          return !!(this.suffix && Object.keys(this.suffix).length);
      }
      get _suffixW() {
          return this._hasSuffix && this._Suffix !== undefined ? this._Suffix.w : 0;
      }
      get _suffixX() {
          if (this._hasTitle) {
              return this._titleW + this._TextWrapper.x + this.style.contentSpacing;
          } else if (this._hasPrefix) {
              return this._prefixW + this.style.itemSpacing;
          }
          return 0;
      }
      get _contentW() {
          if (this._hasSuffix) {
              return this._suffixX + this._suffixW;
          } else if (this._hasTitle && this._Title && this._Title.visible) {
              return this._titleX + this._titleW;
          } else if (this._hasPrefix) {
              return this._prefixX + this._prefixW;
          }
          return 0;
      }
      get _rowProps() {
          return {
              type: Row,
              mountY: .5,
              autoResizeHeight: true,
              autoResizeWidth: true
          };
      }
      get _totalTitlePaddingX() {
          var totalTitlePadding = 0;
          if (this._hasPrefix) {
              totalTitlePadding += this.style.contentSpacing;
          }
          if (this._hasSuffix) {
              totalTitlePadding += this.style.contentSpacing;
          }
          return totalTitlePadding;
      }
      get _fixedWordWrapWidth() {
          var {w: w, _paddingX: _paddingX, _prefixW: _prefixW, _suffixW: _suffixW, _totalTitlePaddingX: _totalTitlePaddingX} = this;
          var nonTextSpace = _paddingX + _prefixW + _suffixW + _totalTitlePaddingX;
          return Math.max(1, w - nonTextSpace);
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          if (this._announce) {
              return this._announce;
          }
          var announce = [];
          if (this.title) {
              announce.push(this.title);
          }
          announce.push(this._announceComponentName);
          if (this._hasPrefix && this._Prefix.items.length) {
              announce.push(...this._Prefix.items.map((item => item.announce)));
          }
          if (this._hasSuffix && this._Suffix.items.length) {
              announce.push(...this._Suffix.items.map((item => item.announce)));
          }
          return announce;
      }
      get _announceComponentName() {
          return Button.__componentName;
      }
      get _paddingX() {
          return this._paddingLeft + this._paddingRight;
      }
      get _paddingLeft() {
          return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
      }
      get _paddingRight() {
          return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
      }
  }

  var base$H = theme => ({
      minWidth: getWidthByColumnSpan(theme, 1),
      paddingX: theme.spacer.xxl,
      paddingXNoTitle: theme.spacer.lg,
      paddingY: theme.spacer.lg,
      textStyle: theme.typography.button2
  });

  Object.freeze({
      __proto__: null,
      base: base$H
  });

  var base$G = theme => ({
      height: theme.spacer.xxl * 12,
      paddingHorizontal: theme.spacer.xl,
      paddingVertical: theme.spacer.xl,
      radius: theme.radius.md,
      titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
          wordWrap: true,
          maxLines: 2,
          textColor: theme.color.textNeutral
      }),
      width: utils$1.getWidthByUpCount(theme, 6)
  });

  var mode$e = theme => ({
      focused: {
          tone: {
              neutral: {
                  backgroundColor: theme.color.interactiveNeutralFocusSoft
              },
              inverse: {
                  backgroundColor: theme.color.interactiveInverseFocusSoft
              },
              brand: {
                  backgroundColor: theme.color.interactiveBrandFocusSoft
              }
          }
      },
      disabled: {
          titleTextStyle: {
              textColor: theme.color.textNeutralDisabled
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$G,
      mode: mode$e
  });

  var base$F = theme => ({
      titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
          wordWrap: true,
          maxLines: 2,
          textColor: theme.color.textNeutral
      }),
      descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          textColor: theme.color.textNeutral,
          wordWrap: true,
          maxLines: 3
      }),
      detailsTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
          textColor: theme.color.textNeutral,
          wordWrap: true,
          maxLines: 1
      })
  });

  var mode$d = theme => ({
      disabled: {
          descriptionTextStyle: {
              textColor: theme.color.textNeutralDisabled
          },
          detailsTextStyle: {
              textColor: theme.color.textNeutralDisabled
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$F,
      mode: mode$d
  });

  var base$E = theme => ({
      descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          textColor: theme.color.textNeutralSecondary,
          wordWrap: true,
          maxLines: 8
      }),
      height: theme.spacer.xxxl * 15,
      subtitleTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
          maxLines: 2,
          textColor: theme.color.textNeutral,
          wordWrap: true
      }),
      width: utils$1.getWidthByColumnSpan(theme, 4)
  });

  var mode$c = theme => ({
      disabled: {
          descriptionTextStyle: {
              textColor: theme.color.textNeutralDisabled
          },
          subtitleTextStyle: {
              textColor: theme.color.textNeutralDisabled
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$E,
      mode: mode$c
  });

  var base$D = theme => {
      var size = theme.spacer.xxl;
      return {
          alpha: theme.alpha.primary,
          width: size,
          height: size,
          knobHeight: size / 2,
          knobWidth: size / 2,
          radius: size / 2,
          strokeWidth: theme.stroke.sm
      };
  };

  var tone$k = theme => ({
      neutral: {
          backgroundColor: theme.color.fillInverseSecondary,
          backgroundColorChecked: theme.color.fillNeutral,
          knobColor: theme.color.fillInverse,
          strokeColor: theme.color.strokeNeutralSecondary
      },
      inverse: {
          backgroundColor: theme.color.fillNeutralSecondary,
          backgroundColorChecked: theme.color.fillInverse,
          knobColor: theme.color.fillNeutral,
          strokeColor: theme.color.strokeInverseSecondary
      },
      brand: {
          backgroundColor: theme.color.fillNeutralSecondary,
          backgroundColorChecked: theme.color.fillBrand,
          knobColor: theme.color.fillInverse,
          strokeColor: theme.color.strokeNeutralSecondary
      }
  });

  var mode$b = theme => ({
      disabled: {
          alpha: theme.alpha.inactive
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$D,
      mode: mode$b,
      tone: tone$k
  });

  var base$C = theme => {
      var size = theme.spacer.xl;
      return {
          width: size,
          height: size,
          knobHeight: size / 2,
          knobWidth: size / 2,
          radius: size / 2
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$C
  });

  var base$B = theme => ({
      height: theme.spacer.xxl * 5,
      iconWidth: theme.spacer.xxl,
      iconHeight: theme.spacer.xxl,
      width: utils$1.getWidthByColumnSpan(theme, 3)
  });

  Object.freeze({
      __proto__: null,
      base: base$B
  });

  var base$A = theme => {
      var strokeWidth = theme.stroke.sm;
      var size = theme.spacer.xxl;
      return {
          alpha: theme.alpha.primary,
          width: size,
          height: size,
          iconWidth: theme.spacer.lg,
          iconHeight: theme.spacer.lg,
          icon: theme.asset.check,
          radius: theme.radius.xs,
          strokeWidth: strokeWidth
      };
  };

  var tone$j = theme => ({
      neutral: {
          strokeColor: theme.color.strokeNeutralSecondary,
          checkColor: theme.color.fillInverse,
          backgroundColor: theme.color.fillInverseSecondary,
          backgroundColorChecked: theme.color.fillNeutral
      },
      inverse: {
          strokeColor: theme.color.strokeInverseSecondary,
          checkColor: theme.color.fillNeutral,
          backgroundColor: theme.color.fillNeutralSecondary,
          backgroundColorChecked: theme.color.fillInverse
      },
      brand: {
          strokeColor: theme.color.strokeNeutralSecondary,
          checkColor: theme.color.fillInverse,
          backgroundColor: theme.color.fillNeutralSecondary,
          backgroundColorChecked: theme.color.fillBrand
      }
  });

  var mode$a = theme => ({
      disabled: {
          alpha: theme.alpha.inactive
      }
  });

  var styles$A = Object.freeze({
      __proto__: null,
      base: base$A,
      mode: mode$a,
      tone: tone$j
  });

  class Checkbox extends Base$1 {
      static get __componentName() {
          return "Checkbox";
      }
      static get __themeStyle() {
          return styles$A;
      }
      static _template() {
          var center = {
              mount: .5,
              x: w => w / 2,
              y: h => h / 2
          };
          return {
              Body: _objectSpread(_objectSpread({
                  rtt: true
              }, center), {}, {
                  Check: _objectSpread(_objectSpread({
                      type: Icon
                  }, center), {}, {
                      alpha: 0
                  })
              }),
              Stroke: center
          };
      }
      static get tags() {
          return [ "Check", "Body", "Stroke" ];
      }
      static get properties() {
          return [ "checked" ];
      }
      static get aliasStyles() {
          return [ {
              prev: "checkSrc",
              curr: "icon"
          }, {
              prev: "checkH",
              curr: "iconHeight"
          }, {
              prev: "checkW",
              curr: "iconWidth"
          }, {
              prev: "checkHeight",
              curr: "iconHeight"
          }, {
              prev: "checkWidth",
              curr: "iconWidth"
          } ];
      }
      _update() {
          this._updateBody();
          this._updateStroke();
          this._updateCheck();
          if (this._checkedChanged) {
              this.fireAncestors("$announce", this.announce);
              this._checkedChanged = false;
          }
          this._updateOpacity();
      }
      _updateCheck() {
          this._Check.patch({
              w: this.style.iconWidth,
              h: this.style.iconHeight,
              icon: this.style.icon,
              style: {
                  color: this.style.checkColor
              }
          });
          var alphaPatch = {
              alpha: this.checked ? 1 : 0
          };
          this.applySmooth(this._Check, alphaPatch);
      }
      _updateBody() {
          var bodyColor = this.checked ? this.style.backgroundColorChecked : this.style.backgroundColor;
          var width = this.w - this.style.strokeWidth * 2 - 2;
          var height = this.h - this.style.strokeWidth * 2 - 2;
          this._Body.patch({
              texture: lng.Tools.getRoundRect(width, height, getMaxRoundRadius(this.style.radius, width, height, this.style.strokeWidth * 2 - 2), 0, null, true, bodyColor)
          });
      }
      _updateStroke() {
          this._Stroke.patch({
              texture: lng.Tools.getRoundRect(this.w - 2, this.h - 2, getMaxRoundRadius(this.style.radius, this.w - 2, this.h - 2), this.style.strokeWidth, this.style.strokeColor, false)
          });
      }
      _updateOpacity() {
          this.applySmooth(this, {
              alpha: this.style.alpha
          });
      }
      _setChecked(checked) {
          this._checkedChanged = checked !== this._checked;
          return checked;
      }
      toggle() {
          if (!this._isDisabledMode) {
              this.checked = !this.checked;
          }
          return this;
      }
      _handleEnter() {
          if (typeof this.onEnter === "function") {
              return this.onEnter(this);
          } else {
              this.toggle();
          }
          return false;
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          return this._announce || (this.checked ? "Checked" : "Unchecked");
      }
  }

  var base$z = theme => ({
      radius: [ theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none ],
      paddingX: theme.spacer.lg,
      paddingY: theme.spacer.md,
      offsetY: theme.spacer.xxs,
      textStyle: theme.typography.caption1
  });

  var tone$i = theme => ({
      neutral: {
          textStyle: {
              textColor: theme.color.textInverse
          },
          backgroundColor: theme.color.fillNeutral
      },
      inverse: {
          textStyle: {
              textColor: theme.color.textNeutral
          },
          backgroundColor: theme.color.fillInverse
      },
      brand: {
          textStyle: {
              textColor: theme.color.textNeutral
          },
          backgroundColor: theme.color.fillBrand
      }
  });

  var styles$z = Object.freeze({
      __proto__: null,
      base: base$z,
      tone: tone$i
  });

  class Label extends Base$1 {
      static _template() {
          return {
              Background: {},
              Text: {
                  mountY: .5,
                  mountX: .5,
                  text: {}
              }
          };
      }
      static get __componentName() {
          return "Label";
      }
      static get __themeStyle() {
          return styles$z;
      }
      static get properties() {
          return [ "title" ];
      }
      static get tags() {
          return [ "Background", "Text" ];
      }
      _init() {
          this._Text.on("txLoaded", this._updateBackground.bind(this));
          super._init();
      }
      _update() {
          this._updateBackground();
          this._updateText();
      }
      _updateText() {
          if (this._Text) {
              this._Text.patch({
                  text: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
                      text: this.title
                  })
              });
          }
      }
      _updateBackground() {
          this._Text.x = this.w / 2;
          this._Text.y = this.h / 2 + this.style.offsetY;
          this.h = !this.title ? 0 : this._Text.renderHeight + 2 * this.style.paddingY;
          this.w = !this.title ? 0 : this._Text.renderWidth + 2 * this.style.paddingX;
          this._Background.patch({
              texture: lng.Tools.getRoundRect(this.w - 2, this.h - 2, this.style.radius, 0, null, true, this.style.backgroundColor)
          });
          this.signal("loadedLabel", this);
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          return this._announce || this._Text && this._Text.text.text;
      }
  }

  function withMarqueeSync(Base) {
      return class extends Base {
          static get name() {
              return Base.name;
          }
          _init() {
              super._init();
              if (this._shouldSync) {
                  this._updateSignals();
              }
          }
          _update() {
              super._update();
              if (this._shouldSync) {
                  this._updateSignals();
              } else {
                  this._cleanupSyncValues();
              }
          }
          _cleanupSyncValues() {
              this.syncArray.map((component => {
                  component.marqueeOverrideLoopX = undefined;
                  component.signals && component.signals.willMarquee && delete component.signals.willMarquee;
              }));
          }
          _updateSignals() {
              if (this.syncArray) {
                  this.syncArray.map((component => {
                      component.signals = _objectSpread(_objectSpread({}, component.signals), {}, {
                          willMarquee: "_willMarquee"
                      });
                  }));
              }
          }
          _willMarquee(compRef) {
              if (this._shouldSync) {
                  this._longestMarqueeWidth = Math.max(compRef._textRenderedW || 0, this._longestMarqueeWidth || 0);
                  this.syncArray.map((component => {
                      component.marqueeOverrideLoopX = this._longestMarqueeWidth;
                  }));
              }
          }
          get _shouldSync() {
              if (this.style.marqueeSync === false) {
                  return false;
              }
              if (!this.syncArray) {
                  loggerInstance.warn("warning: components using MarqueeSync must have a syncArray getter defined.");
                  return false;
              } else if (!Array.isArray(this.syncArray)) {
                  loggerInstance.warn("warning: syncArray must be typeof array.");
                  return false;
              } else if (this.syncArray.length < 2) {
                  loggerInstance.warn("warning: syncArray must contain at least two component references.");
                  return false;
              } else {
                  return true;
              }
          }
      };
  }

  var base$y = theme => ({
      descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          maxLines: 1
      }),
      fadeWidth: 100,
      logoWidth: theme.typography.body3.lineHeight,
      logoHeight: theme.typography.body3.lineHeight,
      logoPadding: theme.spacer.lg,
      detailsTextStyle: theme.typography.body3,
      subtitleTextStyle: theme.typography.body3,
      titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
          maxLines: 1
      }),
      marqueeSync: true,
      alpha: theme.alpha.primary
  });

  var mode$9 = theme => ({
      disabled: {
          detailsTextStyle: {
              textColor: theme.color.textNeutralDisabled
          },
          alpha: theme.alpha.inactive
      }
  });

  var tone$h = theme => ({
      neutral: {
          titleTextStyle: {
              textColor: theme.color.textNeutral
          },
          subtitleTextStyle: {
              textColor: theme.color.textNeutralSecondary
          },
          detailsTextStyle: {
              textColor: theme.color.textNeutral
          },
          descriptionTextStyle: {
              textColor: theme.color.textNeutralSecondary
          },
          mode: {
              disabled: {
                  titleTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  descriptionTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      },
      inverse: {
          titleTextStyle: {
              textColor: theme.color.textInverse
          },
          subtitleTextStyle: {
              textColor: theme.color.textInverseSecondary
          },
          detailsTextStyle: {
              textColor: theme.color.textInverse
          },
          descriptionTextStyle: {
              textColor: theme.color.textInverseSecondary
          },
          mode: {
              disabled: {
                  titleTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  subtitleTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  descriptionTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      },
      brand: {
          titleTextStyle: {
              textColor: theme.color.textNeutral
          },
          subtitleTextStyle: {
              textColor: theme.color.textNeutralSecondary
          },
          detailsTextStyle: {
              textColor: theme.color.textNeutral
          },
          descriptionTextStyle: {
              textColor: theme.color.textNeutralSecondary
          },
          mode: {
              disabled: {
                  titleTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  descriptionTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      }
  });

  var styles$y = Object.freeze({
      __proto__: null,
      base: base$y,
      mode: mode$9,
      tone: tone$h
  });

  class MetadataBase extends Base$1 {
      static get __componentName() {
          return "MetadataBase";
      }
      static get __themeStyle() {
          return styles$y;
      }
      static _template() {
          return {
              Text: {
                  flex: {
                      direction: "column",
                      justifyContent: "flex-start"
                  },
                  DetailsWrapper: {}
              }
          };
      }
      static get properties() {
          return [ "description", "logo", "logoHeight", "logoPosition", "logoTitle", "logoWidth", "details", "subtitle", "title", "marquee" ];
      }
      static get tags() {
          return [ "Text", {
              name: "Title",
              path: "Text.Title"
          }, {
              name: "Subtitle",
              path: "Text.Subtitle"
          }, {
              name: "DetailsWrapper",
              path: "Text.DetailsWrapper"
          }, {
              name: "Details",
              path: "Text.DetailsWrapper.Details"
          }, {
              name: "Description",
              path: "Text.Description"
          }, "Logo" ];
      }
      _titleLoaded() {
          this._updateLayout();
      }
      _subtitleLoaded() {
          this._updateLayout();
      }
      _detailsLoaded(_ref19) {
          var {w: w, h: h} = _ref19;
          this._updateDetailsLayout({
              w: w,
              h: h
          });
          this._updateLayout();
      }
      _descriptionLoaded() {
          this._updateLayout();
      }
      _updateDetailsLayout(_ref20) {
          var {w: w, h: h} = _ref20;
          if (!this.details && !this._Details) {
              return;
          }
          if (this._DetailsWrapper) {
              this._DetailsWrapper.alpha = this.style.alpha;
              this._DetailsWrapper.w = w;
              this._DetailsWrapper.h = h;
          }
      }
      _update() {
          this._updateLines();
          this._updateLayout();
      }
      _updateLines() {
          this._Text.w = this._textW();
          this._updateTitle();
          this._updateSubtitle();
          this._updateDetails();
          this._updateDescription();
      }
      _updateLayout() {
          this._Text.h = this._textH();
          this._updateMetadataHeight();
          this._updatePositions();
          this._updateLogo();
      }
      _updatePositions() {
          this._Text.x = this.logo && this.logoPosition === "left" ? this.logoWidth + this.style.logoPadding : 0;
          this._Text.y = (this.h - this._Text.h) / 2;
      }
      _updateMetadataHeight() {
          var newH = Math.max(this.logoHeight, this._Text.h);
          if (this.h !== newH) {
              this.h = newH;
              this.signal("updateComponentDimensions");
          }
      }
      _updateTitle() {
          if (!this.title && !this._Title) {
              return;
          }
          if (!this._Title) {
              this._Text.childList.addAt({
                  ref: "Title",
                  type: TextBox,
                  signals: {
                      textBoxChanged: "_titleLoaded"
                  }
              }, 0);
          }
          this._Title.patch({
              content: this.title,
              marquee: this.marquee,
              style: {
                  textStyle: _objectSpread(_objectSpread({}, this.style.titleTextStyle), {}, {
                      maxLines: 1,
                      wordWrap: true,
                      wordWrapWidth: this._Text.w
                  })
              }
          });
      }
      _updateSubtitle() {
          if (!this.subtitle && !this._Subtitle) {
              return;
          }
          if (!this._Subtitle) {
              this._Text.childList.addAt({
                  ref: "Subtitle",
                  type: TextBox,
                  signals: {
                      textBoxChanged: "_subtitleLoaded"
                  }
              }, 1);
          }
          this._Subtitle.patch({
              content: this.subtitle,
              marquee: this.marquee,
              style: {
                  textStyle: _objectSpread(_objectSpread({}, this.style.subtitleTextStyle), {}, {
                      maxLines: 1,
                      wordWrap: true,
                      wordWrapWidth: this._Text.w
                  })
              }
          });
      }
      resetMarquee() {
          if (this.marquee) {
              if (this.title) {
                  if (!this._Title) {
                      this._updateTitle();
                  }
                  this._Title.toggleMarquee();
              }
              if (this.description) {
                  if (!this._Description) {
                      this._updateDescription();
                  }
                  this._Description.toggleMarquee();
              }
          }
      }
      _updateDetails() {
          if (!this.details && !this._Details) {
              return;
          }
          if (!this._Details) {
              this._DetailsWrapper.patch({
                  Details: {
                      type: TextBox,
                      signals: {
                          textBoxChanged: "_detailsLoaded"
                      }
                  }
              });
          }
          this._Details.patch({
              content: this.details,
              style: {
                  textStyle: this.style.detailsTextStyle
              }
          });
          if (this._Details.finalW > this._textW()) {
              this._Details.patch({
                  w: this._textW() + this.style.fadeWidth / 2,
                  shader: {
                      type: FadeShader,
                      positionLeft: 0,
                      positionRight: this.style.fadeWidth
                  },
                  rtt: true
              });
          } else {
              this._DetailsWrapper.shader = undefined;
          }
          this._DetailsWrapper.visible = this.details ? true : false;
          this._DetailsWrapper.alpha = this.style.alpha;
      }
      _updateDescription() {
          if (!this.description && !this._Description) {
              return;
          }
          if (!this._Description) {
              this._Text.childList.add({
                  ref: "Description",
                  type: TextBox,
                  signals: {
                      textBoxChanged: "_descriptionLoaded"
                  }
              });
          }
          this._Description.patch({
              content: this.description,
              marquee: this.marquee,
              style: {
                  textStyle: _objectSpread(_objectSpread({}, this.style.descriptionTextStyle), {}, {
                      maxLines: 1,
                      wordWrap: true,
                      wordWrapWidth: this._Text.w
                  })
              }
          });
      }
      _updateLogo() {
          if (!this.logo && !this._Logo) {
              return;
          }
          if (!this._Logo) {
              this.patch({
                  Logo: {
                      flexItem: false,
                      type: Icon
                  }
              });
          }
          this.logoPosition = this.logoPosition || "right";
          var subtitleH = this.subtitle && this._Subtitle && this._Subtitle.h || 0;
          this._Logo.patch({
              w: this.logoWidth,
              h: this.logoHeight,
              icon: this.logo,
              alpha: this.style.alpha
          });
          this._Logo.x = this.logoPosition === "left" ? 0 : this.w - this._Logo.w;
          this._Logo.y = (this.h - this.logoHeight + subtitleH) / 2;
      }
      _textW() {
          return this.w - (this.logo ? this.logoWidth + this.style.logoPadding : 0);
      }
      _textH() {
          var titleH = this.title && this._Title && this._Title.h || 0;
          var subtitleH = this.subtitle && this._Subtitle && this._Subtitle.h || 0;
          var detailsH = this.details && this._DetailsWrapper && this._DetailsWrapper.h || 0;
          var descriptionH = this.description && this._Description && this._Description.h || 0;
          return titleH + subtitleH + detailsH + descriptionH;
      }
      _getLogoWidth() {
          return this._logoWidth !== undefined ? this._logoWidth : this.style.logoWidth;
      }
      _setLogoWidth(w) {
          return w !== undefined ? w : this.logoWidth;
      }
      _getLogoHeight() {
          return this._logoHeight !== undefined ? this._logoHeight : this.style.logoHeight;
      }
      _setLogoHeight(h) {
          return h !== undefined ? h : this.logoHeight;
      }
      get syncArray() {
          return [ ...this._Title ? [ this._Title ] : [], ...this._Subtitle ? [ this._Subtitle ] : [], ...this._Description ? [ this._Description ] : [], ...this._Details ? [ this._Details ] : [] ];
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          return this._announce || [ this._Title && this._Title.announce, this._Subtitle && this._Subtitle.announce, this._Details && this._Details.announce, this._Description && this._Description.announce, this.logoTitle ];
      }
  }

  var MetadataBase$1 = withMarqueeSync(MetadataBase);

  var base$x = theme => ({
      titleTextStyle: theme.typography.headline3,
      descriptionTextStyle: theme.typography.body3
  });

  var tone$g = theme => ({
      neutral: {
          detailsTextStyle: {
              textColor: theme.color.textNeutralSecondary
          },
          descriptionTextStyle: {
              textColor: theme.color.textNeutral
          },
          mode: {
              disabled: {
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  descriptionTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      },
      inverse: {
          detailsTextStyle: {
              textColor: theme.color.textInverseSecondary
          },
          descriptionTextStyle: {
              textColor: theme.color.textInverse
          },
          mode: {
              disabled: {
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  descriptionTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      },
      brand: {
          detailsTextStyle: {
              textColor: theme.color.textNeutralSecondary
          },
          descriptionTextStyle: {
              textColor: theme.color.textNeutral
          },
          mode: {
              disabled: {
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  },
                  descriptionTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      }
  });

  var styles$x = Object.freeze({
      __proto__: null,
      base: base$x,
      tone: tone$g
  });

  class MetadataTile extends MetadataBase$1 {
      static get __componentName() {
          return "MetadataTile";
      }
      static get __themeStyle() {
          return styles$x;
      }
      _updateDetails() {
          if (!this.details && !this._Details) {
              return;
          }
          if (this.description && this._Details) {
              this._Details.patch({
                  content: ""
              });
              this._Details.alpha = 0;
              this._Details.visible = false;
          } else {
              super._updateDetails();
          }
      }
      _updateDetailsLayout(_ref21) {
          var {h: h} = _ref21;
          if (!this.details && !this._Details) {
              return;
          }
          if (this._Details && !this.description) {
              this._DetailsWrapper.h = h;
              this._DetailsWrapper.alpha = this.style.alpha;
          } else {
              this._DetailsWrapper.h = 0;
          }
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          return this._announce || [ this._Title && this._Title.announce, this._Details && this._Details.announce || this._Description && this._Description.announce, this.logoTitle ];
      }
      _textH() {
          var titleH = this.title && this._Title && this._Title.h || 0;
          var detailsH = this.details && this._Details && this._Details.visible && this._DetailsWrapper.h || 0;
          var descriptionH = this.description && this._Description && this._Description.h || 0;
          return titleH + detailsH + descriptionH;
      }
  }

  var base$w = theme => ({
      height: theme.spacer.md,
      animation: theme.animation.utility,
      radius: theme.radius.xs
  });

  var tone$f = theme => ({
      neutral: {
          barColor: theme.color.fillNeutralTertiary,
          progressColor: theme.color.fillNeutral
      },
      inverse: {
          barColor: theme.color.fillInverseTertiary,
          progressColor: theme.color.fillInverse
      },
      brand: {
          barColor: theme.color.fillNeutralTertiary,
          progressColor: theme.color.fillBrand
      }
  });

  var styles$w = Object.freeze({
      __proto__: null,
      base: base$w,
      tone: tone$f
  });

  class ProgressBar extends Base$1 {
      static _template() {
          return {
              Bar: {
                  zIndex: 1
              },
              Progress: {
                  alpha: 0,
                  zIndex: 2
              }
          };
      }
      static get __themeStyle() {
          return styles$w;
      }
      static get __componentName() {
          return "ProgressBar";
      }
      static get properties() {
          return [ "progress" ];
      }
      static get tags() {
          return [ "Bar", "Progress" ];
      }
      _construct() {
          super._construct && super._construct();
          this._progress = 0;
      }
      _update() {
          this._updateTextures();
          this._updateProgress();
          if (this._progressChanged) {
              this.fireAncestors("$announce", this.announce);
              this._progressChanged = false;
          }
      }
      _updateTextures() {
          var w = this._getProgressWidth();
          var radius = getMaxRoundRadius(this.style.radius, this.w - 2, this.h);
          this._Bar.texture = lng.Tools.getRoundRect(this.w - 2, this.h, radius, 0, 0, true, this.style.barColor);
          this._Progress.texture = lng.Tools.getRoundRect(w + 1, this.h, radius, 0, 0, true, this.style.progressColor);
      }
      _updateProgress() {
          var w = this._getProgressWidth();
          this._Progress.smooth = {
              w: [ w, this.style.animation ],
              alpha: Number(w > 0)
          };
      }
      _setProgress(progress) {
          this._progressChanged = progress !== this._progress;
          return progress;
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          if (this._announce !== undefined && this._announce !== null) {
              return this._announce;
          }
          var progress = this.progress;
          if (progress > 1) {
              progress = 1;
          } else if (progress < 0) {
              progress = 0;
          }
          return "".concat(Math.round(progress * 100), "%");
      }
      _getProgressWidth() {
          var p = this.w * this._progress;
          var w = p <= 0 ? 0 : Math.min(p, this.w);
          return w;
      }
  }

  var base$v = theme => ({
      animationEntrance: theme.animation.standardEntrance,
      animationExit: theme.animation.standardExit,
      logoWidth: theme.spacer.lg * 5,
      logoHeight: theme.spacer.xxl + theme.spacer.md,
      metadataLocation: "standard",
      paddingX: theme.spacer.xl,
      paddingY: theme.spacer.lg,
      paddingYProgress: theme.spacer.xl,
      paddingYBetweenContent: theme.spacer.md,
      radius: theme.radius.md,
      alpha: theme.alpha.primary
  });

  var tone$e = theme => ({
      neutral: {
          mode: {
              focused: {
                  backgroundColor: theme.color.interactiveNeutralFocusSoft
              }
          }
      },
      inverse: {
          mode: {
              focused: {
                  backgroundColor: theme.color.interactiveInverseFocusSoft
              }
          }
      },
      brand: {
          mode: {
              focused: {
                  backgroundColor: theme.color.interactiveBrandFocusSoft
              }
          }
      }
  });

  var mode$8 = theme => ({
      disabled: {
          alpha: theme.alpha.inactive
      }
  });

  var styles$v = Object.freeze({
      __proto__: null,
      base: base$v,
      mode: mode$8,
      tone: tone$e
  });

  class Tile extends Surface {
      static get __componentName() {
          return "Tile";
      }
      static get __themeStyle() {
          return styles$v;
      }
      static _template() {
          return _objectSpread(_objectSpread({}, super._template()), {}, {
              Tile: {
                  Artwork: {
                      type: Artwork,
                      signals: {
                          imageLoaded: "_imageLoaded"
                      },
                      mount: .5
                  },
                  Content: {
                      mount: .5
                  }
              }
          });
      }
      static get properties() {
          return [ "artwork", "badge", "checkbox", "circle", "label", "logo", "metadata", "metadataLocation", "persistentMetadata", "progressBar", "src" ];
      }
      static get aliasStyles() {
          return [ {
              prev: "iconHeight",
              curr: "logoHeight"
          }, {
              prev: "iconWidth",
              curr: "logoWidth"
          } ];
      }
      static get aliasProperties() {
          return [ {
              prev: "iconSrc",
              curr: "logo"
          } ];
      }
      static get tags() {
          return [ ...super.tags, "Artwork", "Content", "Tile", {
              name: "Badge",
              path: "Content.Badge"
          }, {
              name: "Checkbox",
              path: "Content.Checkbox"
          }, {
              name: "Logo",
              path: "Content.Logo"
          }, {
              name: "Metadata",
              path: "Content.Metadata"
          }, {
              name: "ProgressBar",
              path: "Content.ProgressBar"
          }, {
              name: "Label",
              path: "Content.Label"
          } ];
      }
      set announce(announce) {
          super.announce = announce;
      }
      get announce() {
          return this._announce || [ this._Metadata && this._Metadata.announce, this._Badge && this._Badge.announce, this._Label && this._Label.announce, this._ProgressBar && this._ProgressBar.announce ];
      }
      _update() {
          super._update();
          this._updateTileColor();
          this._updateContent();
          this._updateArtwork();
          this._updateBadge();
          this._updateLabel();
          this._updateCheckbox();
          this._updateProgressBar();
          this._updateMetadata();
          this._updateLogo();
      }
      _getRenderHeight() {
          var _this$_Metadata;
          return !this._isInsetMetadata ? this._h + (((_this$_Metadata = this._Metadata) === null || _this$_Metadata === void 0 ? void 0 : _this$_Metadata.h) + this.style.paddingY || 0) : super._getRenderHeight();
      }
      get innerH() {
          return this._h;
      }
      get _shouldShowGradient() {
          var _this$progressBar;
          return Boolean((this._isInsetMetadata && this._hasMetadata && this._shouldShowMetadata || ((_this$progressBar = this.progressBar) === null || _this$progressBar === void 0 ? void 0 : _this$progressBar.progress) > 0 || this._shouldShowLogo) && !this._isCircleLayout);
      }
      get _isCircleLayout() {
          return Boolean(this._itemLayout && this._itemLayout.circle);
      }
      get _foregroundDefaultWidth() {
          return parseFloat(this._w / this._h).toFixed(2) === parseFloat(16 / 9).toFixed(2) ? this.innerW * .5 : this.innerW * .75;
      }
      _updateTileColor() {
          this._Tile.alpha = this.style.alpha;
      }
      _updateContent() {
          var itemContainerPatch = {
              h: this._h,
              w: this._w,
              x: this._w / 2,
              y: this._h / 2
          };
          this.applySmooth(this._Content, itemContainerPatch, Object.keys(itemContainerPatch).reduce(((acc, prop) => {
              acc[prop] = [ itemContainerPatch[prop], this._isFocusedMode ? this.style.animationEntrance : this.style.animationExit ];
              return acc;
          }), {}));
      }
      _updateLogo() {
          if (!this.logo) {
              this.patch({
                  Logo: undefined
              });
              return;
          }
          var logoObject = {
              w: this.style.logoWidth,
              h: this.style.logoHeight,
              icon: this.logo,
              alpha: this._shouldShowLogo ? this.style.alpha : .001,
              x: this.style.paddingX,
              y: this._calculateLogoYPosition()
          };
          if (!this._Logo) {
              this.patch({
                  Logo: _objectSpread({
                      type: Icon,
                      mountY: 1
                  }, logoObject)
              });
          } else {
              this.applySmooth(this._Logo, logoObject);
          }
      }
      _calculateLogoYPosition() {
          if (this._isInsetMetadata && this._Metadata) {
              return this._metadataY - this._Metadata.h;
          }
          return this._progressBarY ? this._progressBarY - this.style.paddingYBetweenContent : this._h - this.style.paddingY;
      }
      get _shouldShowLogo() {
          return this.logo && (this.persistentMetadata || this._isFocusedMode);
      }
      _updateArtwork() {
          var _this$style3, _this$artwork;
          this._Artwork.patch(_objectSpread(_objectSpread({
              mode: this.mode,
              h: this._h,
              w: this._w,
              x: this._w / 2,
              y: this._h / 2,
              src: this.src
          }, this.artwork || {}), {}, {
              style: _objectSpread({
                  radius: (_this$style3 = this.style) === null || _this$style3 === void 0 ? void 0 : _this$style3.radius
              }, (_this$artwork = this.artwork) === null || _this$artwork === void 0 ? void 0 : _this$artwork.style),
              gradient: this._shouldShowGradient,
              shouldScale: this._isFocusedMode
          }));
      }
      _getSrc() {
          return this.artwork && this.artwork.src || this._src;
      }
      _imageLoaded() {
          this._Background.alpha = 0;
      }
      _updateBadge() {
          var _this$badge;
          if (!((_this$badge = this.badge) !== null && _this$badge !== void 0 && _this$badge.title) || this._isCircleLayout) {
              if (this._Badge) {
                  this._Content.patch({
                      Badge: undefined
                  });
              }
              return;
          }
          var badgePatch = _objectSpread(_objectSpread({}, this.badge), {}, {
              mode: this.mode,
              x: this.style.paddingX,
              y: this.style.paddingY,
              alpha: this._shouldShowBadgeLabel ? 1 : .001
          });
          if (!this._Badge) {
              this._Content.patch({
                  Badge: _objectSpread(_objectSpread({
                      type: Badge
                  }, badgePatch), {}, {
                      signals: {
                          loadedBadge: "_updateBadge"
                      }
                  })
              });
              return;
          } else {
              this._Badge.patch(badgePatch);
          }
          this.applySmooth(this._Badge, badgePatch, _objectSpread(_objectSpread({}, badgePatch), this._badgeLabelTransitions));
      }
      _updateLabel() {
          var _this$label;
          if (!((_this$label = this.label) !== null && _this$label !== void 0 && _this$label.title) || this._isCircleLayout) {
              if (this._Label) {
                  this._Content.patch({
                      Label: undefined
                  });
              }
              return;
          }
          var labelPatch = _objectSpread(_objectSpread({}, this.label), {}, {
              mode: this.mode,
              x: this._w - this.style.paddingX,
              y: this.style.paddingY,
              alpha: this._shouldShowBadgeLabel ? 1 : .001
          });
          if (!this._Label) {
              this._Content.patch({
                  Label: _objectSpread(_objectSpread({
                      type: Label,
                      mountX: 1
                  }, labelPatch), {}, {
                      signals: {
                          loadedLabel: "_updateLabel"
                      }
                  })
              });
              return;
          } else {
              this._Label.patch(labelPatch);
          }
          this.applySmooth(this._Label, labelPatch, _objectSpread(_objectSpread({}, labelPatch), {}, {
              x: [ labelPatch.x, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit ]
          }, this._badgeLabelTransitions));
      }
      get _shouldShowBadgeLabel() {
          return this.persistentMetadata || this._isFocusedMode && !this._isCircleLayout;
      }
      get _badgeLabelTransitions() {
          return {
              y: [ this._shouldShowBadgeLabel ? this.style.paddingY : 0, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit ],
              alpha: [ this._shouldShowBadgeLabel ? 1 : .001, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit ]
          };
      }
      _updateCheckbox() {
          var _this$checkbox;
          if (!(typeof ((_this$checkbox = this.checkbox) === null || _this$checkbox === void 0 ? void 0 : _this$checkbox.checked) === "boolean" && this.checkbox.checked) || this._isCircleLayout) {
              if (this._Checkbox) {
                  this._Content.patch({
                      Checkbox: undefined
                  });
              }
              return;
          }
          var checkboxPatch = _objectSpread(_objectSpread({}, this.checkbox), {}, {
              mode: this.mode,
              x: this._w - this.style.paddingX,
              y: this._h - this.style.paddingY
          });
          if (!this._Checkbox) {
              this._Content.patch({
                  Checkbox: _objectSpread(_objectSpread({}, checkboxPatch), {}, {
                      type: Checkbox,
                      mount: 1
                  })
              });
              return;
          }
          this.applySmooth(this._Checkbox, checkboxPatch);
      }
      get _progressBarY() {
          return (this._ProgressBar && this._ProgressBar._getTransition("alpha")._targetValue !== 0 ? this._ProgressBar._getTransition("y")._targetValue || this._ProgressBar.y : 0) || 0;
      }
      _updateProgressBar() {
          var _this$progressBar2;
          if (!(typeof ((_this$progressBar2 = this.progressBar) === null || _this$progressBar2 === void 0 ? void 0 : _this$progressBar2.progress) === "number" && this.progressBar.progress) || this._isCircleLayout) {
              if (this._ProgressBar) {
                  if (this.shouldSmooth) {
                      this._ProgressBar._getTransition("alpha").once("finish", (() => {
                          this._removeProgressBar();
                      }));
                      this._ProgressBar.smooth = {
                          alpha: 0
                      };
                  } else {
                      this._removeProgressBar();
                  }
              }
              return;
          }
          if (this.progressBar.progress > 0) {
              var progressPatch = _objectSpread(_objectSpread({}, this.progressBar), {}, {
                  mode: this.mode,
                  w: this._w - this.style.paddingX * 2,
                  x: this._w / 2,
                  y: this._h - this.style.paddingYProgress
              });
              if (!this._ProgressBar) {
                  this._Content.patch({
                      ProgressBar: _objectSpread(_objectSpread({}, progressPatch), {}, {
                          type: ProgressBar,
                          mountX: .5,
                          mountY: 1,
                          alpha: this._hasMetadata && this.shouldSmooth ? .001 : 1
                      })
                  });
                  if (this.shouldSmooth) {
                      this._ProgressBar.smooth = {
                          alpha: [ 1, {
                              delay: this.style.animationEntrance.duration
                          } ]
                      };
                  }
                  return;
              }
              this.applySmooth(this._ProgressBar, progressPatch, Object.keys(progressPatch).reduce(((acc, prop) => {
                  acc[prop] = [ progressPatch[prop], this._isFocusedMode ? this.style.animationEntrance : this.style.animationExit ];
                  return acc;
              }), {}));
          }
      }
      _removeProgressBar() {
          this._Content.patch({
              ProgressBar: undefined
          });
          this._updateMetadata();
      }
      get _shouldShowMetadata() {
          return this._hasMetadata && (this.persistentMetadata && !this._isInsetMetadata || this._isFocusedMode && !this._isInsetMetadata || (this.persistentMetadata || this._isFocusedMode) && this._isInsetMetadata && !this._isCircleLayout);
      }
      get _isInsetMetadata() {
          return this.metadataLocation === "inset";
      }
      get _metadataTransitions() {
          return {
              y: [ this._metadataY, this._shouldShowMetadata ? this.style.animationEntrance : this.style.animationExit ],
              alpha: [ this._metadataAlpha, this._shouldShowMetadata ? this.style.animationEntrance : this.style.animationExit ]
          };
      }
      get _hasMetadata() {
          return MetadataTile.properties.some((prop => this.metadata && this.metadata[prop]));
      }
      get _metadataY() {
          if (this._shouldShowMetadata) {
              if (this._isInsetMetadata) {
                  return this._progressBarY ? this._progressBarY - this.style.paddingYBetweenContent : this._h - this.style.paddingY;
              }
          }
          return this._h + this.style.paddingY;
      }
      get _metadataAlpha() {
          return this._shouldShowMetadata ? 1 : .001;
      }
      get _metadataPatch() {
          return {
              alpha: this._metadataAlpha,
              w: this._w - this.style.paddingX * 2,
              x: this._w / 2,
              y: this._metadataY
          };
      }
      get _nonSmoothingMetadataPatch() {
          return _objectSpread({
              mode: this.mode,
              mountX: .5,
              mountY: this._isInsetMetadata ? 1 : 0,
              marquee: this._isFocusedMode
          }, this.metadata || {});
      }
      _getMetadataLocation() {
          var _this$_metadataLocati;
          return (_this$_metadataLocati = this._metadataLocation) !== null && _this$_metadataLocati !== void 0 ? _this$_metadataLocati : this.style.metadataLocation;
      }
      _updateMetadata() {
          if (!this._hasMetadata) {
              this._Content.patch({
                  Metadata: undefined
              });
              return;
          }
          if (!this._Metadata && this._hasMetadata) {
              this._Content.patch({
                  Metadata: _objectSpread(_objectSpread({
                      type: MetadataTile,
                      signals: {
                          updateComponentDimensions: "_metadataLoaded"
                      }
                  }, this._nonSmoothingMetadataPatch), this._metadataPatch)
              });
              return;
          }
          this._Metadata.patch(this._nonSmoothingMetadataPatch);
          this._animateMetadata();
      }
      _animateMetadata() {
          if (!this._Metadata) {
              return;
          }
          this.applySmooth(this._Metadata, this._metadataPatch, this._metadataTransitions);
          if (!this._isFocusedMode) {
              this._resetMarqueeAnimation();
          }
      }
      _metadataLoaded() {
          this._animateMetadata();
          this._updateLogo();
          this._updateDimensions();
          if (!this._isInsetMetadata) {
              this.fireAncestors("$itemChanged");
          }
      }
      _resetMarqueeAnimation() {
          var alphaTransition = this._Metadata._getTransition("alpha");
          if (alphaTransition) {
              alphaTransition.on("finish", (() => {
                  if (this._Metadata) {
                      this._Metadata.resetMarquee();
                  }
              }));
          } else {
              this._Metadata.resetMarquee();
          }
      }
  }

  function base$u(theme) {
      return {
          alpha: theme.alpha.primary,
          counterTextStyle: theme.typography.headline3,
          itemSize: theme.layout.gutterX * 2,
          itemSpacing: theme.spacer.md,
          radius: theme.radius.sm
      };
  }

  var mode$7 = theme => ({
      disabled: {
          alpha: theme.alpha.inactive
      }
  });

  var tone$d = theme => ({
      neutral: {
          counterBackgroundColor: theme.color.fillInverseSecondary
      },
      inverse: {
          counterBackgroundColor: theme.color.fillNeutralSecondary
      },
      brand: {
          counterBackgroundColor: theme.color.fillInverseSecondary
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$u,
      mode: mode$7,
      tone: tone$d
  });

  var base$t = theme => ({
      detailsTextStyle: theme.typography.body3,
      descriptionTextStyle: {
          maxLines: 3
      },
      descriptionDetailsStyle: {
          paddingY: 5
      },
      fadeWidth: theme.spacer.md * theme.spacer.md,
      provider: {
          itemSize: theme.spacer.xxxl + theme.spacer.md
      }
  });

  var tone$c = theme => ({
      neutral: {
          detailsTextStyle: {
              textColor: theme.color.textNeutral
          },
          mode: {
              disabled: {
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      },
      inverse: {
          detailsTextStyle: {
              textColor: theme.color.textInverse
          },
          mode: {
              disabled: {
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      },
      brand: {
          detailsTextStyle: {
              textColor: theme.color.textNeutral
          },
          mode: {
              disabled: {
                  detailsTextStyle: {
                      textColor: theme.color.textNeutralDisabled
                  }
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$t,
      tone: tone$c
  });

  var base$s = theme => ({
      expandedWidth: utils$1.getWidthByUpCount(theme, 2),
      expandedHeight: utils$1.getDimensions(theme, {
          ratioX: 16,
          ratioY: 9,
          upCount: 4
      }).h,
      imageSize: {
          width: utils$1.getDimensions(theme, {
              ratioX: 16,
              ratioY: 9,
              upCount: 4
          }).w,
          height: utils$1.getDimensions(theme, {
              ratioX: 16,
              ratioY: 9,
              upCount: 4
          }).h
      },
      metadata: {
          descriptionTextStyle: {
              maxLines: 2
          }
      },
      paddingVertical: theme.spacer.md * 1.5
  });

  Object.freeze({
      __proto__: null,
      base: base$s
  });

  var base$r = theme => {
      var {w: w, h: h} = utils$1.getDimensions(theme, {
          ratioX: 16,
          ratioY: 9,
          upCount: 3
      });
      return {
          expandedWidth: utils$1.getWidthByColumnSpan(theme, 8),
          expandedHeight: h,
          imageSize: {
              width: w,
              height: h
          },
          metadata: {
              descriptionTextStyle: {
                  maxLines: 3
              }
          }
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$r
  });

  var base$q = theme => ({
      expandedWidth: utils$1.getWidthByUpCount(theme, 4),
      expandedHeight: utils$1.getDimensions(theme, {
          ratioX: 16,
          ratioY: 9,
          upCount: 4
      }).h + theme.spacer.xxxl * 7 + theme.spacer.lg + theme.spacer.xxs,
      metadata: {
          descriptionTextStyle: {
              maxLines: 3
          }
      },
      marqueeOnFocus: true
  });

  Object.freeze({
      __proto__: null,
      base: base$q
  });

  var base$p = theme => ({
      expandedHeight: utils$1.getDimensions(theme, {
          ratioX: 16,
          ratioY: 9,
          upCount: 4
      }).h + theme.spacer.md * 14,
      metadata: {
          descriptionTextStyle: {
              maxLines: 1
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$p
  });

  var base$o = theme => {
      var strokeWidth = theme.stroke.sm;
      var size = theme.spacer.xl;
      return {
          width: size,
          height: size,
          iconWidth: theme.spacer.md,
          iconHeight: theme.spacer.md,
          radius: theme.radius.xs,
          strokeWidth: strokeWidth
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$o
  });

  var base$n = theme => ({
      itemSpacing: theme.layout.gutterY,
      scrollIndex: 0,
      itemTransition: _objectSpread(_objectSpread({}, theme.animation.standardEntrance), {}, {
          duration: theme.animation.duration.fast
      })
  });

  Object.freeze({
      __proto__: null,
      base: base$n
  });

  var base$m = theme => {
      var paddingX = theme.spacer.lg;
      var radius = theme.radius.xl;
      var logoRadius = Math.max(radius - paddingX / 2, 0);
      return {
          height: theme.spacer.md * 8,
          iconStyle: {
              radius: radius,
              width: theme.spacer.xxxl,
              height: theme.spacer.xxxl
          },
          logoStyle: {
              radius: logoRadius,
              width: theme.spacer.md * 7,
              height: theme.spacer.md * 6
          },
          minWidth: theme.spacer.md * 9,
          paddingX: paddingX,
          paddingXNoTitle: theme.spacer.md,
          prefixPadding: theme.spacer.md,
          radius: radius,
          contentSpacing: theme.spacer.md
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$m
  });

  var base$l = theme => {
      var parentStyle = base$m(theme);
      var height = theme.spacer.md * 7;
      var radiusOffset = (parentStyle.height - height) / 2;
      var radius = Math.max(parentStyle.radius - radiusOffset, 0);
      var logoRadius = Math.max(radius - parentStyle.paddingX / 2, 0);
      return {
          height: height,
          logoStyle: {
              radius: logoRadius,
              height: theme.spacer.md * 5,
              width: theme.spacer.md * 6
          },
          radius: radius,
          minWidth: theme.spacer.md * 8,
          textStyle: theme.typography.button2
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$l
  });

  var base$k = theme => ({
      width: getWidthByUpCount(theme, 1),
      titleMarginBottom: theme.spacer.lg,
      titleMarginLeft: theme.layout.gutterX,
      titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
          textColor: theme.color.textNeutral
      })
  });

  var tone$b = theme => ({
      neutral: {
          titleTextStyle: {
              textColor: theme.color.textNeutral
          }
      },
      inverse: {
          titleTextStyle: {
              textColor: theme.color.textInverse
          }
      },
      brand: {
          titleTextStyle: {
              textColor: theme.color.textNeutral
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$k,
      tone: tone$b
  });

  var base$j = theme => ({
      extraItemSpacing: theme.spacer.lg
  });

  Object.freeze({
      __proto__: null,
      base: base$j
  });

  var base$i = theme => ({
      propertyTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
          textColor: theme.color.textNeutral
      }),
      valueTextStyle: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
          textColor: theme.color.textNeutral
      })
  });

  Object.freeze({
      __proto__: null,
      base: base$i
  });

  var base$h = theme => ({
      cursorStyle: {
          textColor: theme.color.textNeutral,
          blink: true,
          width: theme.spacer.xs,
          height: theme.spacer.xxl
      },
      eyebrowTextStyle: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
          maxLines: 1,
          textColor: theme.color.textNeutral
      }),
      textStyle: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
          maxLines: 1,
          textColor: theme.color.textNeutral
      }),
      helpTextStyle: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
          maxLines: 1,
          textColor: theme.color.textNeutralSecondary
      }),
      minWidth: getWidthByUpCount(theme, 4),
      paddingX: theme.spacer.xl,
      paddingY: theme.spacer.xl,
      backgroundColor: theme.color.interactiveNeutral
  });

  var mode$6 = theme => ({
      disabled: {
          eyebrowTextStyle: {
              textColor: theme.color.textNeutralDisabled
          },
          helpTextStyle: {
              textColor: theme.color.textNeutralDisabled
          }
      },
      focused: {
          cursorStyle: {
              textColor: theme.color.textInverse
          },
          eyebrowTextStyle: {
              textColor: theme.color.textNeutral
          },
          helpTextStyle: {
              textColor: theme.color.textNeutralSecondary
          }
      }
  });

  var tone$a = theme => ({
      inverse: {
          mode: {
              focused: {
                  eyebrowTextStyle: {
                      textColor: theme.color.textNeutral
                  },
                  helpTextStyle: {
                      textColor: theme.color.textNeutral
                  }
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$h,
      mode: mode$6,
      tone: tone$a
  });

  var base$g = theme => {
      var textStyle = theme.typography.headline2;
      return {
          height: theme.spacer.md * 9,
          minWidth: theme.spacer.md * 7,
          paddingX: theme.spacer.md,
          textStyle: textStyle,
          sizes: {
              sm: 1,
              md: 2,
              lg: 3,
              xl: 4,
              xxl: 5
          },
          baseWidth: theme.spacer.md * 7,
          iconWidth: textStyle.lineHeight,
          iconHeight: textStyle.lineHeight
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$g
  });

  var base$f = theme => ({
      keySpacing: theme.spacer.md,
      screenW: theme.layout.screenW,
      marginX: theme.layout.marginX,
      inputSpacing: theme.spacer.md * 10 + theme.spacer.md,
      inputStyle: {
          radius: theme.radius.md
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$f
  });

  var base$e = theme => {
      var size = theme.spacer.lg;
      return {
          width: size,
          height: size,
          radius: size / 2
      };
  };

  var tone$9 = theme => ({
      neutral: {
          circleColor: theme.color.interactiveNeutralFocus,
          mode: {
              disabled: {
                  circleColor: theme.color.fillNeutralDisabled
              }
          }
      },
      inverse: {
          circleColor: theme.color.interactiveInverseFocus,
          mode: {
              disabled: {
                  circleColor: theme.color.fillInverseDisabled
              }
          }
      },
      brand: {
          circleColor: theme.color.interactiveBrandFocus,
          mode: {
              disabled: {
                  circleColor: theme.color.fillInverseDisabled
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$e,
      tone: tone$9
  });

  var base$d = theme => ({
      alpha: theme.alpha.primary,
      descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
          maxLines: 1,
          textColor: theme.color.textNeutralSecondary
      }),
      height: theme.spacer.xxl * 3,
      logoStyle: {
          width: theme.spacer.xxl * 2,
          height: theme.spacer.xxl * 2,
          radius: theme.radius.sm
      },
      paddingX: theme.spacer.xl,
      contentSpacing: theme.spacer.lg,
      titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
          maxLines: 1,
          textColor: theme.color.textNeutral
      }),
      width: utils$1.getWidthByColumnSpan(theme, 3)
  });

  var mode$5 = theme => ({
      disabled: {
          alpha: theme.alpha.inactive,
          descriptionTextStyle: {
              textColor: theme.color.textNeutralDisabled
          },
          titleTextStyle: {
              textColor: theme.color.textNeutralDisabled
          }
      },
      focused: {
          descriptionTextStyle: {
              textColor: theme.color.textInverseSecondary
          },
          titleTextStyle: {
              textColor: theme.color.textInverse
          }
      }
  });

  var tone$8 = theme => ({
      inverse: {
          mode: {
              focused: {
                  descriptionTextStyle: {
                      textColor: theme.color.textNeutral
                  },
                  titleTextStyle: {
                      textColor: theme.color.textNeutral
                  }
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$d,
      mode: mode$5,
      tone: tone$8
  });

  var base$c = () => ({
      showArrows: false,
      showKnob: false
  });

  var mode$4 = () => ({
      focused: {
          showArrows: true
      }
  });

  var tone$7 = theme => ({
      neutral: {
          mode: {
              focused: {
                  arrowColor: theme.color.fillInverse,
                  progressBar: {
                      barColor: theme.color.fillInverseTertiary,
                      progressColor: theme.color.fillInverse
                  }
              }
          }
      },
      inverse: {
          mode: {
              focused: {
                  arrowColor: theme.color.fillNeutral,
                  progressBar: {
                      barColor: theme.color.fillNeutralTertiary,
                      progressColor: theme.color.fillNeutral
                  }
              }
          }
      },
      brand: {
          mode: {
              focused: {
                  arrowColor: theme.color.fillInverse,
                  progressBar: {
                      barColor: theme.color.fillBrandTertiary,
                      progressColor: theme.color.fillBrand
                  }
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$c,
      mode: mode$4,
      tone: tone$7
  });

  var base$b = theme => {
      var size = theme.spacer.lg;
      return {
          arrowAlphaValue: theme.alpha.primary,
          arrowAlphaValueLimit: theme.alpha.secondary,
          arrowHeight: theme.spacer.xxl,
          arrowSpacing: theme.spacer.md,
          arrowWidth: theme.spacer.xxl,
          arrowColor: theme.color.fillNeutral,
          containerHeight: theme.spacer.lg + theme.spacer.xs,
          iconLeftSrc: theme.asset.arrowLeft,
          iconRightSrc: theme.asset.arrowRight,
          minWidth: getWidthByColumnSpan(theme, 2),
          progressBar: {},
          width: size,
          height: size,
          radius: size / 2,
          showArrows: true,
          showKnob: true,
          circleAnimation: {}
      };
  };

  var mode$3 = () => ({
      disabled: {
          arrowAlphaValue: 0
      }
  });

  var tone$6 = theme => ({
      neutral: {
          arrowColor: theme.color.fillNeutral,
          circleColor: theme.color.interactiveNeutralFocus
      },
      inverse: {
          arrowColor: theme.color.fillInverse,
          circleColor: theme.color.interactiveInverseFocus
      },
      brand: {
          arrowColor: theme.color.fillNeutral,
          circleColor: theme.color.interactiveNeutralFocus
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$b,
      mode: mode$3,
      tone: tone$6
  });

  var base$a = theme => ({
      paddingY: theme.spacer.md + theme.spacer.xs,
      valueTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
          maxLines: 1,
          textColor: theme.color.textNeutralSecondary
      })
  });

  var mode$2 = theme => ({
      disabled: {
          valueTextStyle: {
              textColor: theme.color.textNeutralDisabled
          }
      },
      focused: {
          valueTextStyle: {
              textColor: theme.color.textInverseSecondary
          }
      }
  });

  var tone$5 = theme => ({
      neutral: {
          mode: {
              focused: {
                  valueTextStyle: {
                      textColor: theme.color.textInverseSecondary
                  }
              }
          }
      },
      inverse: {
          mode: {
              focused: {
                  valueTextStyle: {
                      textColor: theme.color.textNeutralSecondary
                  }
              }
          }
      },
      brand: {
          mode: {
              focused: {
                  valueTextStyle: {
                      textColor: theme.color.textInverseSecondary
                  }
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$a,
      mode: mode$2,
      tone: tone$5
  });

  var base$9 = theme => ({
      arrowAlphaValue: theme.alpha.primary,
      arrowAlphaValueLimit: theme.alpha.secondary,
      arrowWidth: theme.spacer.xxl,
      arrowHeight: theme.spacer.xxl,
      iconLeftSrc: theme.asset.arrowLeft,
      iconRightSrc: theme.asset.arrowRight
  });

  var tone$4 = theme => ({
      neutral: {
          mode: {
              focused: {
                  arrowColor: theme.color.fillInverse
              }
          }
      },
      inverse: {
          mode: {
              focused: {
                  arrowColor: theme.color.fillNeutral
              }
          }
      },
      brand: {
          mode: {
              focused: {
                  arrowColor: theme.color.fillInverse
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$9,
      tone: tone$4
  });

  var base$8 = theme => ({
      textStyle: theme.typography.body2,
      fadeHeight: 100,
      scroll: {
          timingFunction: "linear",
          duration: theme.animation.duration.xfast
      },
      contentMarginTop: theme.spacer.md,
      contentMarginLeft: theme.spacer.xl,
      sliderMarginLeft: theme.spacer.lg + theme.spacer.xxs
  });

  Object.freeze({
      __proto__: null,
      base: base$8
  });

  var base$7 = theme => {
      var {scroll: scroll} = base$8(theme);
      return {
          progressBar: {
              animation: scroll
          },
          circleAnimation: scroll
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$7
  });

  var base$6 = theme => ({
      alpha: theme.alpha.none,
      animation: theme.animation.standardEntrance,
      blur: theme.spacer.xxl,
      color: theme.color.shadowNeutralFocus,
      offsetX: 0,
      offsetY: theme.spacer.lg,
      radius: theme.radius.md,
      spread: theme.spacer.md * -1,
      maxOffsetY: theme.spacer.xxl,
      maxOffsetX: 0
  });

  var mode$1 = theme => ({
      focused: {
          alpha: theme.alpha.secondary,
          offsetY: theme.spacer.xxl
      }
  });

  var tone$3 = theme => ({
      neutral: {
          color: theme.color.shadowNeutralFocus
      },
      inverse: {
          color: theme.color.shadowInverseFocus
      },
      brand: {
          color: theme.color.shadowBrandFocus
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$6,
      mode: mode$1,
      tone: tone$3
  });

  var base$5 = theme => {
      var size = theme.spacer.xxl;
      return {
          width: size,
          height: size,
          radius: size / 2
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$5
  });

  var base$4 = theme => ({
      tabSpacing: theme.spacer.lg,
      tabsMarginBottom: theme.spacer.xxl
  });

  Object.freeze({
      __proto__: null,
      base: base$4
  });

  var base$3 = theme => ({
      radius: theme.radius.xl,
      paddingX: theme.spacer.xxxl + theme.spacer.xxs,
      paddingY: theme.spacer.md + theme.spacer.xs,
      paddingXNoTitle: theme.spacer.xl,
      iconSize: theme.spacer.xxxl,
      iconMarginRight: theme.spacer.md,
      textStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
          textColor: theme.color.textNeutral
      }),
      backgroundColor: theme.color.fillTransparent,
      contentColor: theme.color.fillNeutral
  });

  var mode = theme => ({
      focused: {
          backgroundColor: theme.color.interactiveNeutralFocus,
          contentColor: theme.color.fillInverse,
          textStyle: {
              textColor: theme.color.textInverse
          }
      },
      selected: {
          backgroundColor: theme.color.interactiveNeutralFocusSoft,
          contentColor: theme.color.fillNeutral,
          textStyle: {
              textColor: theme.color.textNeutral
          }
      },
      disabled: {
          backgroundColor: theme.color.fillTransparent,
          contentColor: theme.color.fillNeutralDisabled,
          textStyle: {
              textColor: theme.color.textNeutralDisabled
          }
      }
  });

  var tone$2 = theme => ({
      neutral: {},
      inverse: {
          mode: {
              focused: {
                  contentColor: theme.color.fillNeutral,
                  textStyle: {
                      textColor: theme.color.textNeutral
                  }
              }
          }
      },
      brand: {
          mode: {
              focused: {
                  contentColor: theme.color.fillNeutral,
                  textStyle: {
                      textColor: theme.color.textNeutral
                  }
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$3,
      mode: mode,
      tone: tone$2
  });

  var base$2 = theme => {
      var knobSize = theme.spacer.xl;
      var knobPadding = theme.spacer.xs;
      var strokeWidth = theme.stroke.sm;
      return {
          height: knobSize + (knobPadding + strokeWidth) * 2,
          knobWidth: knobSize,
          knobHeight: knobSize,
          knobRadius: knobSize / 2,
          knobPadding: knobPadding,
          strokeWidth: strokeWidth,
          width: (strokeWidth + knobPadding * 2 + knobSize) * 2
      };
  };

  var tone$1 = theme => ({
      neutral: {
          strokeColor: theme.color.fillNeutral,
          backgroundColor: theme.color.fillInverseTertiary,
          backgroundColorChecked: theme.color.fillNeutral,
          knobColor: theme.color.fillNeutral,
          knobColorChecked: theme.color.fillInverse,
          mode: {
              disabled: {
                  strokeColor: theme.color.fillNeutralDisabled,
                  backgroundColor: theme.color.fillInverseDisabled,
                  backgroundColorChecked: theme.color.fillNeutralDisabled,
                  knobColor: theme.color.fillNeutralDisabled,
                  knobColorChecked: theme.color.fillInverseDisabled
              }
          }
      },
      inverse: {
          strokeColor: theme.color.fillInverse,
          backgroundColor: theme.color.fillNeutralTertiary,
          backgroundColorChecked: theme.color.fillInverse,
          knobColor: theme.color.fillInverse,
          knobColorChecked: theme.color.fillNeutral,
          mode: {
              disabled: {
                  strokeColor: theme.color.fillInverseDisabled,
                  backgroundColor: theme.color.fillNeutralDisabled,
                  backgroundColorChecked: theme.color.fillInverseDisabled,
                  knobColor: theme.color.fillInverseDisabled,
                  knobColorChecked: theme.color.fillNeutralDisabled
              }
          }
      },
      brand: {
          strokeColor: theme.color.fillBrand,
          backgroundColor: theme.color.fillBrandTertiary,
          backgroundColorChecked: theme.color.fillBrand,
          knobColor: theme.color.fillBrand,
          knobColorChecked: theme.color.fillInverse,
          mode: {
              disabled: {
                  strokeColor: theme.color.fillNeutralDisabled,
                  backgroundColor: theme.color.fillInverseDisabled,
                  backgroundColorChecked: theme.color.fillNeutralDisabled,
                  knobColor: theme.color.fillNeutralDisabled,
                  knobColorChecked: theme.color.fillInverseDisabled
              }
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base$2,
      tone: tone$1
  });

  var base$1 = theme => {
      var knobSize = theme.spacer.lg;
      var knobPadding = theme.spacer.xxs;
      var strokeWidth = theme.stroke.sm;
      return {
          height: knobSize + (knobPadding + strokeWidth) * 2,
          knobWidth: knobSize,
          knobHeight: knobSize,
          knobRadius: knobSize / 2,
          knobPadding: knobPadding,
          strokeWidth: strokeWidth,
          width: (strokeWidth + knobPadding * 2 + knobSize) * 2
      };
  };

  Object.freeze({
      __proto__: null,
      base: base$1
  });

  class Bubble extends lng.Texture {
      constructor(stage) {
          super(stage);
          this._w = 0;
          this._h = 0;
          this._radius = 0;
          this._pointerWidth = 0;
          this._pointerHeight = 0;
          this._strokeWidth = 0;
          this._color = "white";
      }
      set w(w) {
          this._w = w;
          this._changed();
      }
      get w() {
          return this._w;
      }
      set h(h) {
          this._h = h;
          this._changed();
      }
      get h() {
          return this._h;
      }
      set radius(radius) {
          if (Array.isArray(radius)) {
              this._radius = new Array(4).fill().map(((_, index) => radius[index] || 0));
          } else {
              this._radius = radius;
          }
          this._changed();
      }
      get radius() {
          return this._radius;
      }
      set pointerWidth(pointerWidth) {
          this._pointerWidth = pointerWidth;
          this._changed();
      }
      get pointerWidth() {
          return this._pointerWidth;
      }
      set pointerHeight(pointerHeight) {
          this._pointerHeight = pointerHeight;
          this._changed();
      }
      get pointerHeight() {
          return this._pointerHeight;
      }
      set strokeWidth(strokeWidth) {
          this._strokeWidth = strokeWidth;
          this._changed();
      }
      get strokeWidth() {
          return this._strokeWidth;
      }
      set color(color) {
          this._color = lng.StageUtils.getRgbaString(color);
          this._changed();
      }
      get color() {
          return this._color;
      }
      createBubble(_ref24) {
          var {stage: stage, w: w = 0, h: h = 0, radius: radius = 0, pointerWidth: pointerWidth = 0, pointerHeight: pointerHeight = 0, strokeWidth: strokeWidth = 1, color: color = "white"} = _ref24;
          var canvas = stage.platform.getDrawingCanvas();
          var ctx = canvas.getContext("2d");
          canvas.width = w + strokeWidth + 4;
          canvas.height = h + strokeWidth + 4;
          ctx.imageSmoothingEnabled = true;
          ctx.fillStyle = color;
          ctx.strokeStyle = color;
          ctx.lineWidth = strokeWidth;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          var initialCoord = .5 * strokeWidth + 1;
          var leftX = initialCoord;
          var rightX = leftX + w;
          var topY = initialCoord;
          var bottomY = topY + h;
          var bottomBubbleY = bottomY - pointerHeight;
          var isRadiusAnArray = Array.isArray(radius);
          ctx.beginPath();
          ctx.moveTo(leftX + (isRadiusAnArray ? radius[0] : radius), topY);
          ctx.lineTo(rightX - (isRadiusAnArray ? radius[0] : radius), topY);
          ctx.arcTo(rightX, topY, rightX, topY + (isRadiusAnArray ? radius[1] : radius), isRadiusAnArray ? radius[1] : radius);
          ctx.lineTo(rightX, bottomBubbleY - (isRadiusAnArray ? radius[2] : radius));
          ctx.arcTo(rightX, bottomBubbleY, rightX - (isRadiusAnArray ? radius[2] : radius), bottomBubbleY, isRadiusAnArray ? radius[2] : radius);
          ctx.lineTo(w / 2 + pointerWidth / 2, bottomBubbleY);
          ctx.arcTo(w / 2, bottomY, w / 2 - pointerWidth / 2, bottomBubbleY, 2);
          ctx.lineTo(w / 2 - pointerWidth / 2, bottomBubbleY);
          ctx.lineTo(leftX + (isRadiusAnArray ? radius[3] : radius), bottomBubbleY);
          ctx.arcTo(leftX, bottomBubbleY, leftX, bottomBubbleY - (isRadiusAnArray ? radius[3] : radius), isRadiusAnArray ? radius[3] : radius);
          ctx.lineTo(leftX, topY + (isRadiusAnArray ? radius[0] : radius));
          ctx.arcTo(leftX, topY, leftX + (isRadiusAnArray ? radius[0] : radius), topY, isRadiusAnArray ? radius[0] : radius);
          ctx.stroke();
          ctx.fill();
          return canvas;
      }
      _getLookupId() {
          var {w: w, h: h, radius: radius, pointerWidth: pointerWidth, pointerHeight: pointerHeight, color: color} = this;
          return "__bubble_".concat(w, "x").concat(h, "_radius-").concat(radius, "_pointer-").concat(pointerWidth, "x").concat(pointerHeight, "_fill-").concat(color);
      }
      _getSourceLoader() {
          return cb => {
              cb(null, {
                  source: this.createBubble(this)
              });
          };
      }
  }

  var base = theme => ({
      marginBottom: theme.spacer.xl,
      paddingX: theme.spacer.lg,
      paddingY: theme.spacer.md,
      pointerWidth: theme.spacer.xxl,
      pointerHeight: theme.spacer.lg,
      radius: theme.radius.sm,
      textStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
          textColor: theme.color.textInverse
      }),
      transition: theme.animation.utility
  });

  var tone = theme => ({
      neutral: {
          backgroundColor: theme.color.fillNeutral,
          textStyle: {
              textColor: theme.color.textInverse
          }
      },
      inverse: {
          backgroundColor: theme.color.fillInverse,
          textStyle: {
              textColor: theme.color.textNeutral
          }
      },
      brand: {
          backgroundColor: theme.color.fillBrand,
          textStyle: {
              textColor: theme.color.textNeutral
          }
      }
  });

  Object.freeze({
      __proto__: null,
      base: base,
      tone: tone
  });

  var defaultAbbreviations = [ {
      pattern: "TV-14",
      replacer: "Rated TV-14"
  }, {
      pattern: "CC",
      replacer: "Closed Captions available"
  }, {
      pattern: "HD",
      replacer: "High Definition available"
  }, {
      pattern: /ENG(?!\+)/,
      replacer: "English Available"
  }, {
      pattern: /ENG\+ES/,
      replacer: "Available in English and Spanish"
  }, {
      pattern: "AD",
      replacer: "Audio Description available"
  }, {
      pattern: "RT",
      replacer: "Rotten Tomatoes"
  }, {
      pattern: /(S)+(\d+)+(E)+(\d+)+/,
      replacer: (match, p1, p2, p3, p4) => "Season ".concat(p2, " Episode ").concat(p4)
  } ];

  generateAbbrevConfig(defaultAbbreviations);

  function wrapWithBoundary(str) {
      return "\\b".concat(str, "\\b");
  }

  function getNumberOfCaptureGroups(regExp) {
      return new RegExp(regExp.toString() + "|").exec("").length - 1;
  }

  function generateAbbrevConfig() {
      var abbreviations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAbbreviations;
      var extendDefault = arguments.length > 1 ? arguments[1] : undefined;
      var abbrev = extendDefault ? [ ...defaultAbbreviations, ...abbreviations ] : abbreviations;
      var stringPatternMap = {};
      var regExpPatternMap = {};
      var abbreviationsPattern = "";
      var patternGroupOffset = 0;
      abbrev.forEach(((_ref27, idx) => {
          var {pattern: pattern, replacer: replacer} = _ref27;
          var stringPattern;
          if (pattern instanceof RegExp) {
              var patternMapIdx = idx + patternGroupOffset;
              regExpPatternMap[patternMapIdx] = {
                  pattern: pattern,
                  replacer: replacer
              };
              stringPattern = wrapWithBoundary(pattern.source);
              patternGroupOffset += getNumberOfCaptureGroups(pattern);
          } else {
              stringPatternMap[pattern] = {
                  replacer: replacer
              };
              stringPattern = wrapWithBoundary(pattern);
          }
          abbreviationsPattern = abbreviationsPattern === "" ? "(".concat(stringPattern, ")") : "".concat(abbreviationsPattern, "|(").concat(stringPattern, ")");
      }));
      abbreviationsPattern = new RegExp(abbreviationsPattern, "g");
      return {
          abbreviationsPattern: abbreviationsPattern,
          stringPatternMap: stringPatternMap,
          regExpPatternMap: regExpPatternMap
      };
  }

  var rad = deg => deg * Math.PI / 180;

  var deg = rad => rad * 180 / Math.PI;

  var getBreakpoints = (width, height) => {
      var a = height / 2;
      var b = width / 2;
      var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      var C = 90;
      var A = Math.ceil(deg(Math.asin(a * Math.sin(rad(C)) / c)));
      var B = 180 - C - A;
      return [ B, 90, 90 + A, 180, 180 + B, 270, 270 + A, 360 ];
  };

  var points = (degrees, width, height) => {
      var breakAngles = getBreakpoints(width, height);
      var breakIndex = breakAngles.findIndex((angle => angle >= degrees));
      var b = height / 2;
      var max = width / 2;
      if ([ 1, 2, 5, 6 ].includes(breakIndex)) {
          b = width / 2;
          max = height / 2;
      }
      if ([ 2, 4, 6 ].includes(breakIndex)) {
          degrees = degrees - breakAngles[breakIndex - 1];
      } else if (breakIndex > 0) {
          degrees = breakAngles[breakIndex] - degrees;
      }
      var A = degrees;
      var B = 90 - A;
      var a = Math.ceil(Math.sin(rad(A)) * b / Math.sin(rad(B)));
      if (a > max) {
          a = max;
      }
      var x0 = 0;
      var y0 = 0;
      var x1 = 0;
      var y1 = 0;
      switch (breakIndex) {
        case 0:
          x0 = width / 2 + a;
          break;

        case 1:
          x0 = width;
          y0 = height / 2 - a;
          break;

        case 2:
          x0 = width;
          y0 = height / 2 + a;
          break;

        case 3:
          x0 = width / 2 + a;
          y0 = height;
          break;

        case 4:
          x0 = width / 2 - a;
          y0 = height;
          break;

        case 5:
          y0 = height / 2 + a;
          break;

        case 6:
          y0 = height / 2 - a;
          break;

        case 7:
          x0 = width / 2 - a;
          break;
      }
      if (x0 == 0) {
          x1 = width;
          y1 = height - y0;
      }
      if (y0 == 0) {
          y1 = height;
          x1 = width - x0;
      }
      if (x0 == width) {
          x1 = 0;
          y1 = height - y0;
      }
      if (y0 == height) {
          y1 = 0;
          x1 = width - x0;
      }
      return {
          x0: x0,
          y0: y0,
          x1: x1,
          y1: y1
      };
  };

  class LinearGradient extends lng.Texture {
      constructor(stage) {
          super(stage);
          this._w = 0;
          this._h = 0;
          this._steps = [];
          this._degrees = 0;
      }
      get w() {
          return this._w;
      }
      set w(w) {
          this._w = w;
          this._changed();
      }
      get h() {
          return this._h;
      }
      set h(h) {
          this._h = h;
          this._changed();
      }
      get steps() {
          return this._steps;
      }
      set steps(steps) {
          this._steps = steps;
          this._changed();
      }
      get degrees() {
          return this._degrees;
      }
      set degrees(degrees) {
          this._degrees = degrees;
          this._changed();
      }
      _getLookupId() {
          return "__linearGradient_".concat(this._h, "_").concat(this._w, "_").concat(this._steps.count, "_").concat(this._degrees);
      }
      _getSourceLoader() {
          var w = this._w;
          var h = this._h;
          var d = this._degrees;
          var p = points(d, w, h);
          var {x0: x0, y0: y0, x1: x1, y1: y1} = p;
          var steps = this._steps;
          var strokeWidth = this.strokeWidth;
          var strokeRadius = this.strokeRadius ? Array.isArray(this.strokeRadius) && this.strokeRadius.length === 4 ? this.strokeRadius : Array(4).fill(this.strokeRadius) : Array(4).fill(0);
          return function(cb) {
              var canvas = this.stage.platform.getDrawingCanvas();
              canvas.width = w + strokeWidth + 2;
              canvas.height = h + strokeWidth + 2;
              var ctx = canvas.getContext("2d");
              var gradient = ctx.createLinearGradient(x0, y0, x1, y1);
              steps.forEach((step => {
                  gradient.addColorStop(step.percent, step.color);
              }));
              if (strokeWidth) {
                  var x = .5 * strokeWidth + 1, y = .5 * strokeWidth + 1;
                  ctx.beginPath();
                  ctx.moveTo(x + strokeRadius[0], y);
                  ctx.lineTo(x + w - strokeRadius[1], y);
                  ctx.arcTo(x + w, y, x + w, y + strokeRadius[1], strokeRadius[1]);
                  ctx.lineTo(x + w, y + h - strokeRadius[2]);
                  ctx.arcTo(x + w, y + h, x + w - strokeRadius[2], y + h, strokeRadius[2]);
                  ctx.lineTo(x + strokeRadius[3], y + h);
                  ctx.arcTo(x, y + h, x, y + h - strokeRadius[3], strokeRadius[3]);
                  ctx.lineTo(x, y + strokeRadius[0]);
                  ctx.arcTo(x, y, x + strokeRadius[0], y, strokeRadius[0]);
                  ctx.closePath();
                  ctx.lineWidth = strokeWidth;
                  ctx.strokeStyle = gradient;
                  ctx.stroke();
              } else {
                  ctx.fillStyle = gradient;
                  ctx.fillRect(0, 0, w, h);
              }
              cb(null, {
                  source: canvas,
                  w: w,
                  h: h
              });
          };
      }
  }

  class Circle extends lng.Texture {
      constructor(stage) {
          super(stage);
          this._color = "rgb(0,0,0)";
          this._fill = true;
          this._radius = 100;
          this._stroke = false;
          this._strokeColor = "rgb(0,0,0)";
          this._strokeWidth = 1;
      }
      get fill() {
          return this._fill;
      }
      set fill(fill) {
          this._fill = fill;
          this._changed();
      }
      get radius() {
          return this._radius;
      }
      set radius(radius) {
          this._radius = radius;
          this._changed();
      }
      get color() {
          return this._color;
      }
      set color(color) {
          this._color = color;
          this._changed();
      }
      get stroke() {
          return this._stroke;
      }
      set stroke(stroke) {
          this._stroke = stroke;
          this._changed();
      }
      get strokeWidth() {
          return this._strokeWidth;
      }
      set strokeWidth(strokeWidth) {
          this._strokeWidth = strokeWidth;
          this._changed();
      }
      get strokeColor() {
          return this._strokeColor;
      }
      set strokeColor(strokeColor) {
          this._strokeColor = strokeColor;
          this._changed();
      }
      _getLookupId() {
          return "__circle_".concat(this._radius);
      }
      _getSourceLoader() {
          var color = this._color;
          var fill = this._fill;
          var radius = this._radius;
          var stroke = this._stroke;
          var strokeColor = this._strokeColor;
          var strokeWidth = this._strokeWidth;
          var canvas = this.stage.platform.getDrawingCanvas();
          var dimension = radius;
          if (stroke) {
              dimension = radius + strokeWidth * 2;
          }
          canvas.width = dimension * 2;
          canvas.height = dimension * 2;
          return function(cb) {
              var ctx = canvas.getContext("2d");
              ctx.lineWidth = strokeWidth;
              ctx.strokeStyle = strokeColor;
              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.arc(dimension, dimension, radius, 0, 2 * Math.PI);
              if (fill) {
                  ctx.fill();
              }
              if (stroke) {
                  ctx.stroke();
              }
              cb(null, {
                  source: canvas,
                  radius: radius
              });
          };
      }
  }

  class Arrow extends lng.Texture {
      constructor(stage) {
          super(stage);
          this._color = "rgb(13, 13, 15)";
          this._w = 0;
          this._h = 0;
          this._direction = "right";
      }
      get w() {
          return this._w;
      }
      set w(l) {
          this._w = l;
          this._changed();
      }
      get h() {
          return this._h;
      }
      set h(l) {
          this._h = l;
          this._changed();
      }
      get direction() {
          return this._direction;
      }
      get color() {
          return this._color;
      }
      set color(color) {
          this._color = color;
          this._changed();
      }
      set direction(direction) {
          this._direction = direction;
          this._changed();
      }
      _getLookupId() {
          return "__triangle_".concat(this._direction, "_").concat(this._w, "x").concat(this._h);
      }
      _getSourceLoader() {
          var color = this._color;
          var w = this._w;
          var h = this._h;
          var direction = this._direction;
          var canvas = this.stage.platform.getDrawingCanvas();
          return function(cb) {
              var ctx = canvas.getContext("2d");
              canvas.width = w;
              canvas.height = h;
              ctx.fillStyle = color;
              ctx.strokeStyle = ctx.fillStyle;
              ctx.lineWidth = 2;
              ctx.lineCap = "round";
              ctx.lineJoin = "round";
              var p = ctx.lineWidth / 2;
              ctx.beginPath();
              if (direction === "right") {
                  ctx.moveTo(p, p);
                  ctx.lineTo(p, h - p);
                  ctx.lineTo(w - p, h / 2);
              } else if (direction === "down") {
                  ctx.moveTo(p, p);
                  ctx.lineTo(w - p, p);
                  ctx.lineTo(w / 2, h - p);
              } else {
                  ctx.moveTo(p, h / 2);
                  ctx.lineTo(w - p, p);
                  ctx.lineTo(w - p, h - p);
              }
              ctx.closePath();
              ctx.stroke();
              ctx.fill();
              cb(null, {
                  source: canvas,
                  w: w,
                  h: h,
                  direction: direction
              });
          };
      }
  }

  class Line extends lng.Texture {
      constructor(stage) {
          super(stage);
          this._w = 0;
          this._h = 0;
          this._rounded = false;
      }
      get w() {
          return this._w;
      }
      set w(l) {
          this._w = l;
          this._changed();
      }
      get h() {
          return this._h;
      }
      set h(l) {
          this._h = l;
          this._changed();
      }
      get rounded() {
          return this._rounded;
      }
      set rounded(rounded) {
          this._rounded = rounded;
          this._changed();
      }
      _getLookupId() {
          return "__line_".concat(this._w, "x").concat(this._h).concat(this._rounded ? "_rounded" : "");
      }
      _getSourceLoader() {
          var w = this._w;
          var h = this._h;
          var rounded = this._rounded;
          var canvas = this.stage.platform.getDrawingCanvas();
          return function(cb) {
              var ctx = canvas.getContext("2d");
              canvas.width = w;
              canvas.height = h;
              ctx.lineWidth = h;
              if (rounded) {
                  ctx.lineCap = "round";
              }
              ctx.strokeStyle = "white";
              ctx.beginPath();
              ctx.moveTo(rounded ? 2 : 0, h / 2);
              ctx.lineTo(rounded ? w - 2 : w, h / 2);
              ctx.stroke();
              cb(null, {
                  source: canvas,
                  w: w,
                  h: h,
                  rounded: rounded
              });
          };
      }
  }

  class Home extends lng.Component {
    constructor() {
      super(...arguments);
      _defineProperty$1(this, "_index", 0);
      _defineProperty$1(this, "_movies", []);
    }
    static _template() {
      return {
        rect: true,
        w: 1920,
        h: 1080,
        colorTop: 0xff141e30,
        colorBottom: 0xff243b55,
        Overlay: {
          rect: true,
          w: 1920,
          h: 1080,
          colorTop: 0xaa000000,
          colorBottom: 0x00000000
        },
        AppTitle: {
          x: 60,
          y: 40,
          text: {
            text: '🎬 My CTV App',
            fontSize: 40,
            fontFace: 'Bold',
            textColor: 0xffffffff,
            shadow: true,
            shadowColor: 0xff000000
          }
        },
        Thumbnails: {
          x: 60,
          y: 250,
          w: 1800,
          flex: {
            direction: "row",
            wrap: true,
            justifyContent: 'space-around',
            alignItems: 'center'
          },
          children: []
        },
        Footer: {
          x: 80,
          y: 1000,
          text: {
            text: 'Powered by LightningJS',
            fontSize: 20,
            textColor: 0xffcccccc
          }
        }
      };
    }
    async _init() {
      await this.fetchMovies();
    }
    async fetchMovies() {
      try {
        const url = Utils.asset('data/movies.json');
        const res = await fetch(url);
        const data = await res.json();
        const thumbnails = data.map(movie => ({
          y: 200,
          type: Tile,
          artwork: {
            src: movie.img,
            w: 350,
            h: 250,
            ProgressBar: {
              type: ProgressBar,
              w: 300,
              progress: 0.5,
              y: 220
            }
          },
          metadata: {
            title: movie.title
          }
        }));
        this._movies = data;
        this.tag('Thumbnails').patch({
          children: thumbnails
        });
        this._refocus();
      } catch (e) {
        console.error("Failed to fetch movies:", e);
      }
    }
    _getFocused() {
      return this.tag('Thumbnails').children[this._index];
    }
    _handleLeft() {
      if (this._index > 0) {
        this._index--;
        this._refocus();
      }
    }
    _handleRight() {
      if (this._index < this.tag('Thumbnails').children.length - 1) {
        this._index++;
        this._refocus();
      }
    }
    _handleEnter() {
      const selectedMovie = this._movies[this._index];
      Router.navigate('details', selectedMovie);
    }
  }

  class Details extends lng.Component {
    static _template() {
      return {
        Background: {
          rect: true,
          w: 1920,
          h: 1080,
          colorTop: 0xff1a1a2e,
          colorBottom: 0xff16213e
        },
        Overlay: {
          rect: true,
          w: 1920,
          h: 1080,
          colorTop: 0xaa000000,
          colorBottom: 0x00000000
        },
        BackButton: {
          x: 100,
          y: 40,
          type: Button,
          title: '←',
          fixed: true,
          justify: 'center',
          w: 80,
          h: 40,
          backgroundColor: 0xffffffff,
          radius: 10,
          mode: 'focused'
        },
        ContextRow: {
          x: 100,
          y: 120,
          w: 1720,
          h: 800,
          flex: {
            direction: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          },
          DetailsColumn: {
            flex: {
              direction: 'column'
            },
            Title: {
              text: {
                text: '',
                fontSize: 64,
                fontFace: 'Bold',
                textColor: 0xffffffff
              }
            },
            Author: {
              text: {
                text: '',
                fontSize: 30,
                fontFace: 'Medium',
                textColor: 0xffffffff
              }
            },
            ReleaseDate: {
              text: {
                text: '',
                fontSize: 30,
                textColor: 0xffbbbbbb
              }
            },
            Description: {
              w: 600,
              text: {
                text: '',
                fontSize: 30,
                lineHeight: 30,
                wordWrap: true,
                maxLines: 4,
                textColor: 0xffcccccc
              }
            }
          },
          ImageBox: {
            w: 630,
            h: 400,
            src: null,
            texture: true
          }
        },
        WatchButton: {
          x: 100,
          y: 440,
          type: Button,
          title: '▶ Watch Now',
          fixed: true,
          w: 300,
          h: 80,
          justify: 'center',
          fontSize: 25,
          backgroundColor: 0xffe50914,
          radius: 20
        }
      };
    }
    set params(selectedMovie) {
      this.tag('Title').text.text = (selectedMovie === null || selectedMovie === void 0 ? void 0 : selectedMovie.title) || 'No Title';
      this.tag('ContextRow.ImageBox').src = (selectedMovie === null || selectedMovie === void 0 ? void 0 : selectedMovie.img) || '';
      this.tag('Author').text.text = selectedMovie !== null && selectedMovie !== void 0 && selectedMovie.author ? "Director: ".concat(selectedMovie.author) : '';
      this.tag('ReleaseDate').text.text = selectedMovie !== null && selectedMovie !== void 0 && selectedMovie.releaseDate ? "Released: ".concat(selectedMovie.releaseDate) : '';
      this.tag('Description').text.text = (selectedMovie === null || selectedMovie === void 0 ? void 0 : selectedMovie.description) || '';
    }
  }

  var routes = {
    root: 'home',
    routes: [{
      path: 'home',
      component: Home
    }, {
      path: 'details',
      component: Details
    }]
  };

  class App extends Router.App {
    static getFonts() {
      return [{
        family: 'Regular',
        url: Utils.asset('fonts/Roboto-Regular.ttf')
      }];
    }
    _setup() {
      Router.startRouter(routes);
    }
  }

  function index () {
    return Launch(App, ...arguments);
  }

  return index;

})();
//# sourceMappingURL=appBundle.js.map
