// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { TSESLint } from '@typescript-eslint/experimental-utils';
import { mechanics } from './mechanics';
import { circularDeps } from './circular-deps';

interface IPlugin {
  rules: { [ruleName: string]: TSESLint.RuleModule<string, unknown[]> };
  configs: { [ruleName: string]: any };
}

const plugin: IPlugin = {
  rules: {
    // Full name: "@rushstack/packlets/mechanics"
    mechanics: mechanics,
    // Full name: "@rushstack/packlets/circular-deps"
    'circular-deps': circularDeps
  },
  configs: {
    recommended: {
      plugins: ['@rushstack/eslint-plugin-packlets'],
      rules: {
        '@rushstack/packlets/mechanics': 'warn',
        '@rushstack/packlets/circular-deps': 'warn'
      }
    }
  }
};

export = plugin;
