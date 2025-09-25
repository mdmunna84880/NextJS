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

### useRouter()
It is a object of router. Using it we can nevigate to previous router, or any desired router and so on.

### Client Side Rendering (`use client`)
To render the page through client side rendering use `use client` with double or singal inverted commas like string in js.

### usePathname()
It is for knowing the current router(path).

### useSearchParams()
It is use to know the searching through params.

## Not Found Page
If any page that is not found and we want to navigate to the the specific page so we can create a page using this file name wherever we want to give specific page for not found page like this ``not-found.tsx``. Generally we create a only one not-found page for all in the root(home) router.

## Loading Page
The lading page can be used for any page where we are gating fetching data. We can use loading page for intractivity. Loading page is must created using `loading.tsx` inside any folder on which router we want to show the loading while fetching data.
