const ActionContext = require("./ActionContext");
const util = require("util");

/**
 * EnhancedCore.
 *
 * @classdesc
 * Provides formatting standards and improvements to the logging capabilities provided by the GitHub Actions toolkit
 * `core` object.
 *
 * @see {@link https://github.com/actions/toolkit/tree/main/packages/core}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class
 */
class EnhancedCore {
  static ANSI_ESC = "\u001b[";

  /**
   * ANSI terminal codes for various formatting.
   *
   * @public @static @constant @enum @type {Object<String, String|Object>}
   */
  static ANSI = {
    /**
     * ANSI foreground text color codes.
     *
     * @public @static @constant @enum @type {Object<String, String>}
     */
    FG: {
      BLACK: `${EnhancedCore.ANSI_ESC}30m`,
      RED: `${EnhancedCore.ANSI_ESC}31m`,
      GREEN: `${EnhancedCore.ANSI_ESC}32m`,
      YELLOW: `${EnhancedCore.ANSI_ESC}33m`,
      BLUE: `${EnhancedCore.ANSI_ESC}34m`,
      MAGENTA: `${EnhancedCore.ANSI_ESC}35m`,
      CYAN: `${EnhancedCore.ANSI_ESC}36m`,
      WHITE: `${EnhancedCore.ANSI_ESC}37m`,
    },

    /**
     * ANSI background text color codes.
     *
     * @public @static @constant @enum @type {Object<String, String>}
     */
    BG: {
      BLACK: `${EnhancedCore.ANSI_ESC}40m`,
      RED: `${EnhancedCore.ANSI_ESC}41m`,
      GREEN: `${EnhancedCore.ANSI_ESC}42m`,
      YELLOW: `${EnhancedCore.ANSI_ESC}43m`,
      BLUE: `${EnhancedCore.ANSI_ESC}44m`,
      MAGENTA: `${EnhancedCore.ANSI_ESC}45m`,
      CYAN: `${EnhancedCore.ANSI_ESC}46m`,
      WHITE: `${EnhancedCore.ANSI_ESC}47m`,
    },

    BOLD: `${EnhancedCore.ANSI_ESC}1m`,
    DIM: `${EnhancedCore.ANSI_ESC}2m`,
    ITALIC: `${EnhancedCore.ANSI_ESC}3m`,
    UNDERLINE: `${EnhancedCore.ANSI_ESC}4m`,

    RESET: `${EnhancedCore.ANSI_ESC}0m`,
  };

  /**
   * Levels of verbosity for debug logging.
   *
   * @public @static @constant @enum @type {Object<String, Number>}
   */
  static LOG_LEVEL = {
    DISABLED: 0,
    ERROR: 100,
    WARNING: 200,
    INFO: 300,
    DEBUG: 400,
    VERBOSE: 500,
  };

  /**
   * The logging group levels currently opened.
   *
   * @protected @type {Number}
   */
  _groupLevel = 0;

  /**
   * Then name of the locale to format date and time to.
   *
   * If not set, formatting uses the system default.
   *
   * @protected @type {DateTimeFormat}
   */
  _dateFormatter;

  /**
   * The name of the logger for this core object.
   *
   * @protected @constant @type {String}
   */
  _loggerName;

  /**
   * Create a core object.
   *
   * @param {String} [name=undefined] - the name of the logger for this object
   * @param {String} [locale=system] - the name of the locale to use for dates and times
   * @param {String} [timezone=system] - the name of the timezone to use for dates and times
   *
   * @public @constructor
   */
  constructor(loggerName = undefined, locale = undefined, timezone = undefined) {
    this._loggerName = loggerName;

    this._dateFormatter = new Intl.DateTimeFormat(locale, {
      timeZone: timezone,
      timeZoneName: "short",

      year: "numeric",
      month: "short",
      day: "2-digit",

      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",

      hour12: false,
      fractionalSecondDigits: 1,
    });
  }

  // Logging Levels ----------------------------------------------------------------------------------------------------

  /**
   * The current debug level configured for the environment.
   *
   * @see EnhancedCore.LOG_LEVEL
   *
   * @see {@link https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging}
   * @see {@link https://docs.github.com/en/actions/learn-github-actions/variables}
   *
   * The `EnhancedCore` implementation suppresses debug messages unless the environment has the debug variable
   * explicitly set, unlike the normal `core` logging behavior. In addition, setting the `ACTIONS_RUNNER_DEBUG` variable
   * to `true` enables additional, verbose logging capabilities. You must enable regular debugging for verbose logging
   * to function.
   *
   * While GitHub allows developers to enable debugging via GitHub Secrets, this utility doesn't, as scripts don't have
   * access to secrets, by default, for security purposes. To mimic this capability, set your secret as an environment
   * variable simlar to:
   *
   * ```yml
   * - name: Verbose via secret
   *   uses: actions/github-script@v6
   *   env:
   *     ACTIONS_RUNNER_DEBUG: ${{ secrets.ACTIONS_RUNNER_DEBUG }}
   *   with:
   *     (new EnhancedCore(core).debug("Hello World");
   * ```
   *
   * @public @type {Number}
   */
  get debugLevel() {
    if (typeof this._debugLevel === "undefined") {
      this._debugLevel = EnhancedCore.LOG_LEVEL.INFO;

      // Check for the enablement of GitHub Actions, first
      if (
        ("ACTIONS_RUNNER_DEBUG" in process.env && process.env.ACTIONS_RUNNER_DEBUG) ||
        ("ACTIONS_STEP_DEBUG" in process.env && process.env.ACTIONS_STEP_DEBUG) ||
        this.isDebug()
      ) {
        this._debugLevel = EnhancedCore.LOG_LEVEL.DEBUG;

        // If the user has enabled GitHub Actions debugging, see if they have set verbose debugging, too
        if (
          ("ACTIONS_RUNNER_DEBUG_VERBOSE" in process.env && process.env.ACTIONS_RUNNER_DEBUG_VERBOSE) ||
          this.getInput("ACTIONS_RUNNER_DEBUG_VERBOSE")
        ) {
          this._debugLevel = EnhancedCore.LOG_LEVEL.VERBOSE;
        }
      }
    }

    return this._debugLevel;
  }

  /**
   * Return a level name given a level, or the level number if a name isn't configured.
   *
   * @param {Number} level - the level number to lookup the name for
   *
   * @returns {String|Int} the level name, if set, otherwise, the level number
   *
   * @public @static
   */
  static getLevelName(level) {
    const name = Object.keys(EnhancedCore.LOG_LEVEL).find((key) => {
      return EnhancedCore.LOG_LEVEL[key] == level;
    });

    if (typeof name !== "undefined") {
      return name;
    }

    return level;
  }

  // Logging -----------------------------------------------------------------------------------------------------------

  /**
   * Generate an object containing only defined arguments.
   *
   * @param {Object<String, *>} args - the arguments to parse
   *
   * @returns {Object<String, *>} any defined parameters
   *
   * @protected
   */
  _buildAnnotationParams(args) {
    let params = {};

    Object.keys(args).forEach((key) => {
      if (typeof args[key] !== "undefined") {
        params[key] = args[key];
      }
    });

    return params;
  }

  /**
   * Log a verbose debug message.
   *
   * @param {*} message - the message or object to output
   *
   * @public
   */
  verbose(message) {
    if (this.debugLevel < EnhancedCore.LOG_LEVEL.VERBOSE) {
      return;
    }

    const debug = super.debug;

    this._format(
      message,
      EnhancedCore.LOG_LEVEL.VERBOSE,
      EnhancedCore.ANSI.DIM + EnhancedCore.ANSI.FG.YELLOW + EnhancedCore.ANSI.BOLD,
      EnhancedCore.ANSI.DIM + EnhancedCore.ANSI.FG.YELLOW + EnhancedCore.ANSI.ITALIC,
    ).forEach((line) => {
      debug(line);
    });
  }

  /**
   * @inheritdoc
   *
   * @param {*} message - message or object to output
   */
  debug(message) {
    if (this.debugLevel < EnhancedCore.LOG_LEVEL.DEBUG) {
      return;
    }

    const debug = super.debug;

    this._format(
      message,
      EnhancedCore.LOG_LEVEL.DEBUG,
      EnhancedCore.ANSI.FG.YELLOW + EnhancedCore.ANSI.BOLD,
      EnhancedCore.ANSI.FG.YELLOW,
    ).forEach((line) => {
      debug(line);
    });
  }

  /**
   * @inheritdoc
   *
   * @param {*} message - message or object to output
   */
  info(message) {
    const info = super.info;

    this._format(message).forEach((line) => {
      info(line);
    });
  }

  /**
   * @alias EnhancedCore.info
   */
  log(message) {
    this.info(message);
  }

  /**
   * Log a notice annotation.
   *
   * @see {@link https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-a-notice-message}
   *
   * @param {*} message - the message or object to output
   * @param {String} [title=undefined] - the title of the annotation
   * @param {String} [file=undefined] - the filename
   * @param {Number} [line=undefined] - the file start line number
   * @param {Number} [endLine=undefined] - the file end line number
   * @param {Number} [col=undefined] - the column number
   * @param {Number} [endCol=undefined] - the ending column number
   *
   * @public
   */
  notice(
    message,
    title = undefined,
    file = undefined,
    line = undefined,
    endLine = undefined,
    col = undefined,
    endCol = undefined,
  ) {
    super.notice(
      this._format(message).join("\n"),
      this._buildAnnotationParams({ title: title, file: file, line: line, endLine: endLine, col: col, endCol: endCol }),
    );
  }

  /**
   * Log a warning annotation.
   *
   * @see {@link https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-a-warning-message}
   *
   * @param {*} message - the message or object to output
   * @param {String} [title=undefined] - the title of the annotation
   * @param {String} [file=undefined] - the filename
   * @param {Number} [line=undefined] - the file start line number
   * @param {Number} [endLine=undefined] - the file end line number
   * @param {Number} [col=undefined] - the column number
   * @param {Number} [endCol=undefined] - the ending column number
   *
   * @public
   */
  warning(
    message,
    title = undefined,
    file = undefined,
    line = undefined,
    endLine = undefined,
    col = undefined,
    endCol = undefined,
  ) {
    super.warning(
      this._format(message).join("\n"),
      this._buildAnnotationParams({ title: title, file: file, line: line, endLine: endLine, col: col, endCol: endCol }),
    );
  }

  /**
   * Log an error annotation.
   *
   * @see {@link https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-error-message}
   *
   * @param {*} message - the message or object to output
   * @param {String} [title=undefined] - the title of the annotation
   * @param {String} [file=undefined] - the filename
   * @param {Number} [line=undefined] - the file start line number
   * @param {Number} [endLine=undefined] - the file end line number
   * @param {Number} [col=undefined] - the column number
   * @param {Number} [endCol=undefined] - the ending column number
   *
   * @public
   */
  error(
    message,
    title = undefined,
    file = undefined,
    line = undefined,
    endLine = undefined,
    col = undefined,
    endCol = undefined,
  ) {
    super.error(
      this._format(message).join("\n"),
      this._buildAnnotationParams({ title: title, file: file, line: line, endLine: endLine, col: col, endCol: endCol }),
    );
  }

  // Formatting --------------------------------------------------------------------------------------------------------

  /**
   * Format a given message into the standard logging format.
   *
   * Formatting includes:
   *
   *  - Adding the name of the logger
   *  - Adding the logging level
   *  - Adding a locale-friendly timestamp
   *  - Colorization and text formatting
   *
   * @param {*} message - the message to format
   * @param {Number} [level=null] - the logging level
   * @param {String} [lvlANSI=EnhancedCore.ANSI.BOLD] - the ANSI code for the level
   * @param {String} [msgANSI=""] - the ANSI formatting code for the message
   * @param {String} [dateANSI=EnhancedCore.ANSI.DIM] - the ANSI formatting code for the date/time
   *
   * @returns {String[]} the formatted message lines
   *
   * @protected
   */
  _format(message, level = null, lvlANSI = EnhancedCore.ANSI.BOLD, msgANSI = "", dateANSI = EnhancedCore.ANSI.DIM) {
    // Use the timezone and locale from the constructor to format the date
    const timestamp = this._dateFormatter.format(new Date(Date.now()));

    // Center pad the level name based on the longest level name
    let levelName = "";

    if (level) {
      levelName = EnhancedCore.getLevelName(level);

      levelName = String(levelName)
        .toUpperCase()
        .padStart((levelName.length + 7) / 2)
        .padEnd(7);

      levelName = `${lvlANSI}[${levelName}]${EnhancedCore.ANSI.RESET} `;
    }

    // If the message is a string, split up the newlines
    if (typeof message === "string" || (message instanceof String)) {
      message = message.split("\n");

    // If the message isn't a String, convert it
    } else {
      message = util.inspect(message).split("\n");
    }

    // If the message still isn't an array, convert it
    if (!Array.isArray(message)) {
      message = [message];
    }

    let response = [];

    message.forEach((line) => {
      response.push(`${levelName}${msgANSI}${line.trimEnd()}${EnhancedCore.ANSI.RESET}`);
    });

    // Append the date to the last line, only
    response[response.length - 1] = `${response[response.length - 1]} ${dateANSI}(${this._loggerName} @ ${timestamp})${
      EnhancedCore.ANSI.RESET
    }`;

    return response;
  }

  /**
   * Helper method to wrap long lines of text.
   *
   * Cuts long words at the given length if longer than the `length` variable, as well.
   *
   * @param {String} message - the message to word-wrap
   * @param {Number} [length=100] - the maximum length of a line to wrap with
   *
   * @returns {String[]} of wrapped strings
   *
   * @protected
   */
  _wrap(message, length = 100) {
    return message.match(new RegExp(`.{1,${length}}(\\s|$)|.{${length}}|.+\$`, "g"));
  }

  /**
   * Reduces multiple whitespace characters in a string, including tabs, but not newlines, into a single space.
   *
   * This is useful for creating large messages and strings formatted in mutiple, indented lines for code, but that
   * need to have that indentation whitespace removed when used.
   *
   * @param {String} message - the message to reduce whitespace from
   *
   * @returns {String} the shrunk message
   *
   * @public
   */
  shrinkWhitespace(message) {
    return message.replace(/([^\n])\n([^\n])/g, "$1 $2").replace(/ +/g, " ").trim();
  }

  // Logging Groups ----------------------------------------------------------------------------------------------------

  /**
   * @inheritdoc
   */
  startGroup(name) {
    this._groupLevel++;
    super.startGroup(name);
  }

  /**
   * @inheritdoc
   */
  endGroup() {
    this._groupLevel--;
    super.endGroup();
  }

  /**
   * Ends all groups that haven't closed.
   *
   * @see endGroup
   *
   * @public
   */
  endAllGroups() {
    while (this._groupLevel > 0) {
      this.endGroup();
    }
  }

  /**
   * Wraps a `Promise` in a logging group.
   *
   * Similar to the base {@link core#group} call, but uses a provided promise instead of a `Function` name.
   *
   * @see core.group
   *
   * @param {Promise} promise - the promise to wrap
   * @param {String|null} [name=undefined] - the name to provide with the group
   *
   * @returns {Promise} that wraps the call in a logging group
   *
   * @public @async
   */
  async groupPromise(promise, name = undefined) {
    this.startGroup(name);

    const self = this;

    return promise.then(function endGroupAfterPromise() {
      self.endGroup();
    });
  }
}

// Extend the GitHub core module via prototype setting, as core isn't implemented as class
Object.setPrototypeOf(EnhancedCore.prototype, ActionContext.core);

module.exports = EnhancedCore;
