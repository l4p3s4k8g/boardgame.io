/*
 * Copyright 2017 Google Inc.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { configure } from '@storybook/react';

function loadStories() {
  require('./index.js');
}

configure(loadStories, module);
