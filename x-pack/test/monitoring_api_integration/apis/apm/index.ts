/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { FtrProviderContext } from '../../../api_integration/ftr_provider_context';

export default function ({ loadTestFile }: FtrProviderContext) {
  // Failing ES Promotion: https://github.com/elastic/kibana/issues/153123
  describe.skip('APM', () => {
    loadTestFile(require.resolve('./overview'));
    loadTestFile(require.resolve('./instances'));
    loadTestFile(require.resolve('./instance'));
  });
}
