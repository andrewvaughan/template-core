##
# Global Makefile.
#
# Don't edit this file directly. Please refer to the `.config/make` directory for managing, adding, or removing targets.
# File order matters for Makefiles, so it's important that all files in this directory are appropriately named, as
# they're loaded in alphabetical-order.
#

-include $(addsuffix /*.mk, $(shell find .config/make -type d))
