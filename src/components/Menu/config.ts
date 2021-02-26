import { MenuEntry } from 'toastswapuikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://www.toastfinance.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://www.toastfinance.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://www.toastfinance.com/pools',
  },
]

export default config
