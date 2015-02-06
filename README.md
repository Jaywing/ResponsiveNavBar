# ResponsiveNavBar

This implementation follows unobtrusive javascript priciples.

The menu remains as a normal "inline" nav-bar when javascript is disabled.

Otherwise, the nav-bar transforms to a collapsable dropdown menu with a toggle link on mobile viewports.

## Implementation

The markup pattern can be used as a static nav-bar, but the responsive version is enabled by adding a class of *js-nav-bar--responsive* to the nav-bar container.

The breakpoint for the responsive menu can be adjusted as a variable at the top of the sass file.
