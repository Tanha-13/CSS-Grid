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
 * determines a grid items' location within the grid by referring to specific grid lines. grid-column-start/grid-row-start is the starting line of any items and grid-column-end/grid-row-end is the line where the item ends.
 * 
 * grid-column : grid-column-start / grid-column-end;
 * grid-row: grid-row-start / grid-row-end
 */

// topic: grid template areas
/**
 * 
 */
