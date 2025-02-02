/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import path from 'path';

const PACKAGES = [
  { name: 'beat', version: '0.0.1' },
  { name: 'elasticsearch', version: '1.4.1' },
  { name: 'enterprisesearch', version: '1.0.0' },
  { name: 'logstash', version: '2.2.2-preview1' },
  { name: 'kibana', version: '2.3.0-preview1' },
];

export const getPackagesArgs = (): string[] => {
  return PACKAGES.flatMap((pkg, i) => {
    return [
      `--xpack.fleet.packages.${i}.name=${pkg.name}`,
      `--xpack.fleet.packages.${i}.version=${pkg.version}`,
    ];
  });
};

export const bundledPackagesLocation = path.join(path.dirname(__filename), '/fixtures/packages');
