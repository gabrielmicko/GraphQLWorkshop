## GraphQL Workshop

### Task 7

Let's write your first mutation. Whenever you want to insert, update or delete from / to your database, you are suggested to write a mutation.
Say you want to write an `addSpeaker` mutation.

Here is how a mutation call would look like:

```javascript
mutation addSpeaker {
  addSpeaker(
    name: "John Doe"
    twitter: "github.com/john.doe"
    github: "github.com/john.doe"
    linkedin: "linkedin.com/john.doe"
    bio: "John Doe is a test user."
  ) {
    name
    bio
    github
    twitter
    linkedin
  }
}
```

As you see you have to pass arguments which represents the data you want to insert. Besides that you have to define what do you want to receive back as a response. In this example I would like to get back the inserted speakers data.

The first thing you have to do is open `src/resolvers/index.js`. Add the Mutation object with an `addSpeaker` key which is a function. This will be your resolver for mutation call. Use previously written function `saveSpeakers` from the model `src/model/db.js`. Before you call `saveSpeakers` make sure you generate a random ID for the speaker. For that you can use `makeID` from `utils/utils.js`.
The next step is to create the mutation type `addSpekers` with all the necessary arguments (`src/types/index.js`). Dont forget to add the mutation to the schema and export it.

#### Hints:

- Use the graphql-tools documentation https://github.com/apollographql/graphql-tools.

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
yarn run seed
```

##### Good luck!
