## GraphQL Workshop

### Task 6

You are AMAZING 😱. Let's put it together now. As we did in the first task, we need to write a model. We are not going to use the old file model anymore, but we are going to keep the same structure and functions. Open `src/model/db.js"`. You'll see, no magic there 🎩.
Your task is to write the logic for the functions by using the `src/model/helper.js`. Some details you might already know. The two tables are `speakers` and `talks`. When you are ready the final step is to replace the path for your model in `src/resolvers/index.js` (from file to db).
If you have done everything right and the tests are passing you should run the GraphQL server and check your results manually.

#### Hints:

- Make sure to seed at least once, before running the tests.
- Before you test, make sure to change the path of the resolver to use the new model.

#### Running the GraphQL server:

```bash
yarn start
```

#### Testing:

When you are done, please run this command:

```bash
yarn test
```

Or if you want to run the test on every change run this command:

```bash
yarn test:watch
```

#### Seed:

```bash
yarn seed
```

##### Good luck!
