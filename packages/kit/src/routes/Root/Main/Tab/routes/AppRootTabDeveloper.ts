import { withTabLayout } from '@onekeyhq/components/src/Layout/withTabLayout';

import { toFocusedLazy } from '../../../../../components/LazyRenderWhenFocus';
import { TabRoutes } from '../../../../routesEnum';

import { tabRoutesConfigBaseMap } from './tabRoutes.base';

import type { TabRouteConfig } from '../../../../types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const DeveloperScreen = require('../../../../../views/Developer').default;

const name = TabRoutes.Developer;
const config: TabRouteConfig = {
  ...tabRoutesConfigBaseMap[name],
  component: toFocusedLazy(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    withTabLayout(DeveloperScreen, name),
    {
      rootTabName: name,
    },
  ),
  children: [],
};
export default config;
