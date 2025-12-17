import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { WithIntl, WithQuery } from '../components'

function Root() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <WithQuery>
          <WithIntl>
            <Outlet />
          </WithIntl>
        </WithQuery>
        <Scripts />
      </body>
    </html>
  )
}

export const Route = createRootRoute({
  component: Root
})
