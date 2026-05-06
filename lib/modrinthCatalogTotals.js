import { unstable_cache } from 'next/cache'
import { searchMods } from './modrinth'

const DAY_SEC = 60 * 60 * 24

const SIX_PROJECT_TYPE_GROUPS = [
  ['project_type:mod'],
  ['project_type:plugin'],
  ['project_type:shader'],
  ['project_type:resourcepack'],
  ['project_type:datapack'],
  ['project_type:modpack'],
]

async function sumSixTypeTotalsUncached() {
  const chunks = await Promise.all(
    SIX_PROJECT_TYPE_GROUPS.map((facetGroup) =>
      searchMods({
        facets: [facetGroup],
        limit: 1,
        offset: 0,
        nextRevalidate: DAY_SEC,
      }).then((p) =>
        typeof p?.total_hits === 'number' ? p.total_hits : 0,
      ).catch(() => 0),
    ),
  )
  return chunks.reduce((a, b) => a + b, 0)
}

export const getModrinthSixTypeCreationsTotal = unstable_cache(
  sumSixTypeTotalsUncached,
  ['modrinth-six-project-types-total-hits'],
  { revalidate: DAY_SEC },
)
