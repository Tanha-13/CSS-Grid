// Grid Container, Grid line, Grid Item, Grid Cell

// topic: display: grid
/**
 * grid - generates a block level grid container
 * inline-grid - generates an inline level grid container
 */

// topic: grid-template-columns and grid-template-rows
/**
 * grid-template-columns specifies the number and widths of columns browsers should display in the selected grid container.
 *     grid-template-columns: <track-sizes>
 * track-size: can be a length(px,em,rem), percentage, fraction of available space(fr unit), auto or combination of these.
 * 
 * grid-template-rows specifies the number and heights of rows browsers should display in the selected grid container.
 *     grid-template-rows: <track-size>
 * 
 * grid-auto-columns and grid-auto-rows
 *
 * defines the columns(width) and rows(height) of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.
 * 
 * in grid layout, we get a new flexible unit - Fr unit(fraction of the available space). Fr is a fractional unit and 1 fr is for 1 part of the available space. This unit allows to set the size of a track as a fraction of the free space of the grid container. The free space is calculated after any non-flexible items. 
 * 
 * repeat() notation - is used to make rules more concise and easier to understand when creating a large amount of columns or rows. It is used to repeat a track pattern. 
 *      grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr;
        grid-template-rows: 100px auto 20% 100px auto 20%;
 * But we can write - 
        grid-template-columns: repeat(3, 1fr 2fr);
        grid-template-rows: repeat(2, 100px auto 20%)
 */
// topic: grid-column-start, grid-column-end, grid-column, grid-row-start, grid-row-end, grid-row
/**
 * grid-column-start specifies where the selected grid item should start along the grid container's row axis.
 *     values: auto, column-line-number, span(number-of-columns)
 * 
 * grid-column-end specifies where the selected grid item should end (or span) along the grid container's row (inline) axis.
 * 
 * grid-column is the shorthand property of grid-column-start and grid-column-end.
 * 
 * 
 * grid-row-start specifies where the selected grid item should start along the grid container's column axis.
 *     values: auto, row-line-number, span(number-of-rows)
 * 
 * grid-row-end specifies where the selected grid item should end along the grid container's column axis.
 * 
 * grid-row is the shorthand property of grid-row-start and grid-row-end properties.
 * 
 * 
 * determines a grid items' location within the grid by referring to specific grid lines. grid-column-start/grid-row-start is the starting line of any items and grid-column-end/grid-row-end is the line where the item ends.
 * 
 * grid-column : grid-column-start / grid-column-end;
 * grid-row: grid-row-start / grid-row-end
 */

// topic: grid template areas
/**
 * grid-template-areas specifies the area where to place named grid items within a grid container. grid-area property is used to name grid items.
 *     grid-template-areas: 
 *            "<grid-area-name> <grid-area-name> ...."     (row)
 *            "<grid-area-name>"
 *     values: <grid-area-name>, .(specifies an empty cell), none(no grid areas are defined)
 * 
 * 
 * use grid-template-columns and grid-template-rows for creating a more predictable and controlled layout. 
 */

// topic: grid-area
/**
 * grid-area property is used on grid items to specify the name of the area they should occupy, as defined by "grid-template-areas".Given an item a name so that it can be referenced by a template created with the grid-template-areas property.
 * 
 * shorthand: grid-row-start | column-start | row-end | column-end
 * 
 */

// topic: grid-template
/**
 * shorthand property for setting grid-template-columns, grid-template-rows, grid-template-areas
 */


