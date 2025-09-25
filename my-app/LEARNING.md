## Common things about Next.js
1. We can't use any react hook in sever side rendering.
2. All component or page is server by default.
3. We can fetch date inside a server component.
4. We can directly access backend resources.
5. We can't add event handlers

## Router Concepts
1. When we need dynamic routing like id we use square brackets folder name like [id].
2. Generally [slug] is used instead of [id].

### Catch All Route
It is used when we don't want to route for every single route let's say for filtering we don't create a route for every single route, instead we create one route and consider all that in one slug. Like `catch-all-route=>[...slug]`.

### optinal Catch All Route
It is used when we want to open without having slug. Like `optional-catch-all-route=>[[...slug]]`.