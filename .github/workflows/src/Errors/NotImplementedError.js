/**
 * NotImplementedError.
 *
 * @classdesc
 * Error raised when calling a method or piece of code that's not yet implemented.
 *
 * @see {@link https://docs.github.com/en/rest/issues}
 * @see {@link https://docs.github.com/en/graphql/reference/objects#issue}
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class @extends Error
 */
module.exports = class NotImplementedError extends Error {};
