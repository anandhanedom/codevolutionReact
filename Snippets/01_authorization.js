const pages = [
  { path: "/", groups: ["Developer admin", "admin"] },
  { path: "shipments", groups: ["Developer admin", "admin"] },
];


const ProtectedRoute = ({ path, component, ...props }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  let propObject = parse(location.search.slice(1));
  const accessor = useSelector((state) => state.accessor);
  const userGroups = accessor && accessor.groups;

  // Wait for groups
  if (!userGroups) return <>Waiting to sign you in</>;
  // Authenticated user -> go to route, while waiting for group
  else if (
    accessor &&
    !accessor.deactivatedAt &&
    (path === '/' || userHasAccess(path, userGroups))
  )
    return <Route exact path={path} component={component} {...props} />;
  else if (accessor && accessor.deactivatedAt) return <ErrorPage />;
  // Unauthenticated user -> go to login path, but redirect to requested page once logged in
  else if (accessor) {
    // dispatch(showErrorAlert("You don't have access to this page"));
    return <Redirect to="/" />;
  } else {
    return (
      <Redirect
        to={`/login?redirect=${path.slice(1, 100)}${Object.entries(propObject)
          .map(([key, value]) => `&${key}=${value}`)
          .join('')}`}
      />
    );
  }
};

// Check if user groups has access to roles defined
const userHasAccess = (path, userGroups) =>
  pages
    .find((page) => page.path === path.split('/')[1])
    .groups.some((group) =>
      userGroups.some((userGroup) => userGroup === group)
    );
