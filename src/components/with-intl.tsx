import { useQuery } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'
import { IntlProvider } from 'use-intl'
import { getMessages, resolveLocale } from '../locale'

export function WithIntl(props: PropsWithChildren) {
  const { isPending, error, data } = useQuery({
    queryKey: ['locale'],
    queryFn: async () => {
      const locale = await resolveLocale()
      const messages = await getMessages(locale)
      const timeZone = 'UTC'
      return { locale, messages, timeZone }
    }
  })

  if (isPending) return null

  if (error) return null

  return <IntlProvider {...data}>{props.children}</IntlProvider>
}
