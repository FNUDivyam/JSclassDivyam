# week 12 - Higher Order Function

## notes
React popularzied higher order function.
a function that takes a function as a parameter or returns a function

Function factory is not a Factory Function
what is a factory function? not sure
but a function factory is a higher order function because it returns a function

## my attempt at fixing avg and render average
to fix avg calculation, I replaced totalMPG, totalCost
with sums.mpg and sums.tripCost

to fix render Average
I moved it to the render module, and called in 
initially right next to renderTable
and when deleting

also moved updateDOM into render.js to organise it a bit better

along with some additional minor changes 