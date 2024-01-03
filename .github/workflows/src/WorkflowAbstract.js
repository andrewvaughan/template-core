const EnhancedCore = require("./GitHub/Common/EnhancedCore");

/**
 * WorkflowAbstract.
 *
 * @classdesc
 * Implements shared methods used across all classes within this workflow library.
 *
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @abstract @class
 */
module.exports = class WorkflowAbstract {
  /**
   * The enhanced core, providing logging and other capabilities.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/core}
   *
   * @protected @constant @type {EnhancedCore}
   */
  _eCore;

  /**
   * Instantiate common elements used in all classes.
   *
   * @param {String|Object} [loggerConfig=undefined] - an optional config to include with the logger name
   *
   * @public @constructor
   */
  constructor(loggerConfig = undefined) {
    let subtype = "";

    if (typeof loggerConfig === "string" || loggerConfig instanceof String) {
      subtype = `[${loggerConfig}]`;
    } else if (typeof loggerConfig !== "undefined") {
      subtype = `(${JSON.stringify(loggerConfig)})`;
    }

    this._eCore = new EnhancedCore(`${this.constructor.name}${subtype}`);
  }

  /**
   * Print a standard debug message describing the method called.
   *
   * @param {String} func - the name of the function, not including the class
   * @param {Object} args - the `arguments` variable provided to each function
   * @param {Boolean} [verbose=false] - whether to debug this as a verbose message
   *
   * @protected
   */
  _debugCall(func, args, verbose = false) {
    WorkflowAbstract._debugStaticCall(this.constructor.name, func, args, verbose, this._eCore);
  }

  /**
   * Print a standard debug message describing the static method called.
   *
   * @param {String} cls - the name of the class calling the function
   * @param {String} func - the name of the function, not including the class
   * @param {Object} args - the `arguments` variable provided to each function
   * @param {Boolean} [verbose=false] - whether to debug this as a verbose message
   * @param {EnhancedCore} [logger=undefined] - the logger to use when logging, or created, if undefined
   *
   * @protected @static
   */
  static _debugStaticCall(cls, func, args, verbose = false, logger = undefined) {
    if (!logger) {
      logger = new EnhancedCore(cls);
    }

    const cleanArgs = Object.keys(args)
      .map((name) => {
        return JSON.stringify(args[name]);
      })
      .join(", ");

    const msg = `CALL ${cls}.${func}(${cleanArgs})`;

    if (verbose) {
      logger.verbose(msg);
      return;
    }

    logger.debug(msg);
  }
};
