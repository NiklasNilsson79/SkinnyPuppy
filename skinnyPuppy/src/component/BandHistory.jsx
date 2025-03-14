import React from 'react';
import './BandHistory.css';

const BandHistory = () => {
  return (
    <section className='band-history'>
      <div className='container'>
        <h2 className='section-title'>Band History</h2>

        <div className='history-content'>
          <div className='text-content'>
            <p>
              Skinny Puppy formed in Vancouver, Canada in 1982 by vocalist Nivek
              Ogre (Kevin Ogilvie) and multi-instrumentalist cEvin Key (Kevin
              Crompton). They pioneered industrial music, blending electronic
              sounds with dark themes and theatrical performances.
            </p>

            <p>
              The band's early albums "Bites" (1985) and "Mind: The Perpetual
              Intercourse" (1986) established their unique style. Dwayne Goettel
              joined in 1986, completing the classic lineup.
            </p>

            <p>
              Skinny Puppy is known for addressing controversial topics in their
              music and their provocative live shows. Despite challenges,
              including Goettel's death in 1995, they continued making music
              with their last album "Weapon" released in 2013.
            </p>
          </div>

          <div className='key-facts'>
            <h3>Key Facts</h3>
            <ul>
              <li>
                <strong>Formed:</strong> 1982 in Vancouver, Canada
              </li>
              <li>
                <strong>Founding Members:</strong> Nivek Ogre, cEvin Key
              </li>
              <li>
                <strong>Genre:</strong> Industrial, Electronic
              </li>
              <li>
                <strong>Notable Albums:</strong> VIVIsectVI (1988), Too Dark
                Park (1990)
              </li>
            </ul>
          </div>
        </div>

        <div className='history-timeline'>
          <h3>Band Timeline</h3>
          <ul className='timeline'>
            <li>
              <span className='year'>1982:</span>
              <span className='event'>Skinny Puppy formed</span>
            </li>
            <li>
              <span className='year'>1985:</span>
              <span className='event'>Released first album "Bites"</span>
            </li>
            <li>
              <span className='year'>1988:</span>
              <span className='event'>Released "VIVIsectVI"</span>
            </li>
            <li>
              <span className='year'>1995:</span>
              <span className='event'>Band temporarily disbands</span>
            </li>
            <li>
              <span className='year'>2003:</span>
              <span className='event'>
                Reunion album "The Greater Wrong of the Right"
              </span>
            </li>
            <li>
              <span className='year'>2013:</span>
              <span className='event'>Released "Weapon"</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BandHistory;
