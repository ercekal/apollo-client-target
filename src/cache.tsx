
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        inputText: {
          read () {
            return inputVar();
          }
        },
      }
    }
  }
});

/**
 * Set initial values when we create cache variables.
 */

const inputInitialValue: String = 'Example text'

export const inputVar: ReactiveVar<String> = makeVar<String>(
  inputInitialValue
);
