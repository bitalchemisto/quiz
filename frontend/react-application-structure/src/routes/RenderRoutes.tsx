import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const Scheduler = lazy(() => import('pages/Scheduler'));

type routeItem = {
  path: string;
  key: string;
  exact: boolean;
  component: Function;
};

type routes = routeItem & {
  routes?: routeItem[];
};

export const LINKS = {
  MEETING_ROOMS: '/shop/meeting-rooms',
  SCHEDULER: '/shop/scheduler'
};

const ROUTES: routes[] = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: (props) => {
      <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: LINKS.MEETING_ROOMS,
        key: 'MEETING_ROOMS',
        exact: true,
        component: Home
      },
      {
        path: LINKS.SCHEDULER,
        key: 'SCHEDULER',
        exact: true,
        component: Scheduler
      }
    ]
  }
];

export default ROUTES;

export function RenderRoutes({ routes }: { routes: routes[] }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes {...route} />;
      })}

      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

function RouteWithSubRoutes(route: routes) {
  return (
    <Route
      key={route.key}
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
