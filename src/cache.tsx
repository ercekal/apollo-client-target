
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        firstName: {
          read () {
            return firstNameVar();
          }
        },
        lastName: {
          read () {
            return lastNameVar();
          }
        },
      }
    }
  }
});

/**
 * Set initial values when we create cache variables.
 */

const firstNameInitialValue: String = 'Enter first name'
const lastNameInitialValue: String = 'Enter last name'

export const firstNameVar: ReactiveVar<String> = makeVar<String>(
  firstNameInitialValue
);

export const lastNameVar: ReactiveVar<String> = makeVar<String>(
  lastNameInitialValue
);
