# Websocket in node js

## Steps to follows
step1: initialize an empty nodejs project

```base
npm init -y
```

step 2: Add tsconfig to it:
```base
npx tsc --init
```
step 3:update tsconfig
```typescript
"rootDir":"./src",
"outDir":"./dist"
```

step 4:create index.ts file

step 5:install ws

```base
npm i ws @types/ws
```

# Client Side Code:

`Websocket` is a browser api that you can access (very similar to fetch).
will work in a `row project`,  `react project` and `nextjs project`(needs to be client side)

step to follow:
- step 1:

    ```base
    npm create vite@latest
    ```
- step 2: create a websocket connection to the server
    

