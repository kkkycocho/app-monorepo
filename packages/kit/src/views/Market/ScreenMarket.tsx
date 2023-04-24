import { TabRoutes } from '../../routes/routesEnum';

import { ScreenMarketOrSwap } from './ScreenMarketOrSwap';

export function ScreenMarket() {
  return <ScreenMarketOrSwap marketTopTabName={TabRoutes.Market} />;
}
