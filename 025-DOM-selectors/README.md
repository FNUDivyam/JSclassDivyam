# week 12 - Fixing issues and DOM selector

## fixing decimal input
changed input type to text and removed the parseInt
it seems to be working but not sure about this.

## which dom selectors
just before the end of renderTables()
querySelectorAll or getElementsByTagName
can be used, but not sure where to get the index

### I see the issue with my proposed soulution
I didn't think of putting the disabled code inside the edit buttons click evenListener,
but Once I saw your solution video it "clicked" for me.