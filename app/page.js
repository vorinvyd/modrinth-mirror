import HomeClient from './HomeClient'
import { getModrinthSixTypeCreationsTotal } from '@/lib/modrinthCatalogTotals'

export const metadata = {
  title: 'Modrinth.MomentariyModder.com',
  description: 'Скачать моды, плагины, шейдеры, ресурспаки и датапаки для Minecraft. Удобный каталог на русском языке. Тысячи модификаций для любой версии.',
}

export default async function Home() {
  let catalogCreationsTotal = null
  try {
    const n = await getModrinthSixTypeCreationsTotal()
    if (n > 0) catalogCreationsTotal = n
  } catch {
    catalogCreationsTotal = null
  }
  return <HomeClient catalogCreationsTotal={catalogCreationsTotal} />
}
