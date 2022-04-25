# chordplay

This app has 3 pages.
-still needs a lot of nice rendering
-needs logo to be finished
-scrolling for songs and chords isn't good. It scrolls the whole screen and not just the list.

## to be done

- sidebar changes size based on page. This is bad.
- scrolls out of the page.

### home

-remove input box for chords and rely only on chord buttons.
-graph chart needs a timeline that shows every day and not just days that the user learned chords.
-chart needs cosmetic fixes.
-number of songs you can play should be a link to the songs page.
-make the info look better.

### songs

-artist images need to be added to the songs database for each artist maybe from the spotify api.
-filter by artist should filter only songs by the artist input. I wanted to do it by genre but it seems complicated although I could use theaudiodb as the api. This could be an extra feature.

### chords

-currently not displaying chords
-clicking chord buttons doesn't display that chord
-below displayed chord, should show a button
-buttons need to be uniform size
-info needs to update automatically when button is clicked.
-crashes when info is updated because the info takes longer to update than the page takes to render. maybe try async functions.
-if chord is not known by the user, there should be a button with a link 'I know this chord' which adds the chord to the chordsKnow array in the user object and updates the page info.

- chord listed should be links to the chord diagram on the chord page.
