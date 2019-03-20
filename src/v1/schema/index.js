/** *****************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 ****************************************************************************** */

import _ from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import * as placements from './placement';
import * as compliance from './compliance';
import * as json from './json';
import * as namespace from './namespace';
import * as policy from './policy';
import * as genericResources from './generic-resources';
import * as query from './query';
import * as userQuery from './user-query';

const modules = [
  placements,
  compliance,
  json,
  namespace,
  policy,
  query,
  genericResources,
  userQuery,
];

const mainDefs = [`
schema {
  query: Query,
  mutation: Mutation,
}
`];

export const typeDefs = mainDefs.concat(modules.map(m => m.typeDef));
export const resolvers = _.merge(...modules.map(m => m.resolver));

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
