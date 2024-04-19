import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "relay-runtime";
import environment from "../relay/environment";

const termsAndConditionsGQL = graphql`
  mutation UpdatePersonTermsMutation($personTerms: Boolean!) {
    updatePersonTerms(input: { personTerms: $personTerms }) {
      preflight
    }
  }
`;


export const updatePersonTerms = (accepted: boolean) => {
    return new Promise((res, rej) => {
      commitMutation(environment, {
        mutation: termsAndConditionsGQL,
        variables: {
          personTerms: accepted,
        },
        onCompleted(response, errors) {
          if (!errors) {
            res(response);
            return;
          }
          rej(errors);
        },
      });
    });
  };
  