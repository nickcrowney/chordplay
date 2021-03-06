import React from 'react';
import '../Styles/SidebarRight.css';

function SidebarRight({
  user,
  setUser,
  songs,
  sortedChordsObject,
  userChords,
  userSongsMastered,
  newChord,
  setNewChord,
}) {
  return (
    <>
      <div className="sidebar-right-comp">
        <div className="chordsknow-notification">
          <div>You know...</div>
          <div className="right-know-chords">
            {userChords ? userChords.length : 0} chords
            {/* {user.chordsKnow ? user.chordsKnow.length : 0} chords */}
          </div>
        </div>
        <div className="chordsknow-notification">
          <div>You have mastered...</div>
          <div className="right-know-chords">
            {user.songsMastered ? user.songsMastered.length : 0} songs
          </div>
        </div>
        <div className="chordsknow-notification">
          <div>Last chord you</div>
          <div>learned...</div>
          <div className="right-know-chords">
            {userChords?.length
              ? userChords[userChords.length - 1]
              : "None... Let's get started!"}
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarRight;
