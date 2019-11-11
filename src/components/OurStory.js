import React, { Component } from 'react';

import { Parallax } from 'react-parallax';
import Footer from './Footer';

const image = 'https://w.wallhaven.cc/full/0j/wallhaven-0jgmvw.png';

export default class OurStory extends Component {
  render() {
    return (
      <>
        <Parallax bgImage={image} strength={500}>
          <div className='parallax-bg'>
            <h2 className='parallax-h1'>Smart. Strategic. Step Ahead.</h2>
          </div>
        </Parallax>
        <div className='our-story-container'>
          <h3>Our Story</h3>
          <p>
            The TJ Luxury Group partnership began in 2000 when Tracy Welch hired
            James Fletcher as a Sales Executive for the Rena Lange Couture
            collection. After 15 years the two formed TJ Luxury Group, quickly
            establishing themselves as premier brand builders of emerging
            talent.
          </p>
          <p>
            Working with the finest retailers in over 50 doors our experience in
            catering to and serving the end consumer is supreme.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
            amet sem eu lacus gravida euismod eget vel massa. In consequat
            hendrerit orci, et sollicitudin ipsum commodo in. Donec ipsum
            mauris, lacinia non rutrum id, maximus eget turpis. Suspendisse a
            porttitor augue. Aliquam et bibendum orci, quis ultricies mauris.
            Vestibulum ipsum turpis, pulvinar eget consequat non, rutrum vitae
            lectus. Sed eu dolor nec dui accumsan tincidunt. Nullam euismod
            massa et ante lobortis, id aliquet velit sollicitudin. Nulla in
            aliquet erat, a sagittis mauris. In sodales a ligula ut rhoncus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo
            mi, consectetur sed nisl et, rhoncus rhoncus lectus. Mauris
            tincidunt convallis sem, a dictum leo dapibus vitae. Ut pharetra
            volutpat enim eget laoreet. Suspendisse consequat massa augue, eu
            luctus ex consequat eu. Suspendisse in nunc in odio venenatis
            bibendum eget at leo. Donec nec velit id felis porta feugiat. Cras
            ligula dolor, accumsan vitae convallis eget, aliquet eu magna.
            Maecenas varius efficitur massa sed egestas. Curabitur congue magna
            turpis, vel sodales ipsum cursus sit amet. Nunc nec scelerisque
            urna, sed gravida ipsum. Donec sit amet quam pulvinar, euismod mi
            vel, vestibulum velit. Nam ut lacus ut ex gravida interdum.
            Phasellus vel bibendum nulla, quis laoreet quam. Donec interdum
            molestie porttitor. Fusce dictum iaculis nulla, feugiat tempus erat
            faucibus id. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
            amet sem eu lacus gravida euismod eget vel massa. In consequat
            hendrerit orci, et sollicitudin ipsum commodo in. Donec ipsum
            mauris, lacinia non rutrum id, maximus eget turpis. Suspendisse a
            porttitor augue. Aliquam et bibendum orci, quis ultricies mauris.
            Vestibulum ipsum turpis, pulvinar eget consequat non, rutrum vitae
            lectus. Sed eu dolor nec dui accumsan tincidunt. Nullam euismod
            massa et ante lobortis, id aliquet velit sollicitudin. Nulla in
            aliquet erat, a sagittis mauris. In sodales a ligula ut rhoncus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo
            mi, consectetur sed nisl et, rhoncus rhoncus lectus. Mauris
            tincidunt convallis sem, a dictum leo dapibus vitae. Ut pharetra
            volutpat enim eget laoreet. Suspendisse consequat massa augue, eu
            luctus ex consequat eu. Suspendisse in nunc in odio venenatis
            bibendum eget at leo. Donec nec velit id felis porta feugiat. Cras
            ligula dolor, accumsan vitae convallis eget, aliquet eu magna.
            Maecenas varius efficitur massa sed egestas. Curabitur congue magna
            turpis, vel sodales ipsum cursus sit amet. Nunc nec scelerisque
            urna, sed gravida ipsum. Donec sit amet quam pulvinar, euismod mi
            vel, vestibulum velit. Nam ut lacus ut ex gravida interdum.
            Phasellus vel bibendum nulla, quis laoreet quam. Donec interdum
            molestie porttitor. Fusce dictum iaculis nulla, feugiat tempus erat
            faucibus id. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
            amet sem eu lacus gravida euismod eget vel massa. In consequat
            hendrerit orci, et sollicitudin ipsum commodo in. Donec ipsum
            mauris, lacinia non rutrum id, maximus eget turpis. Suspendisse a
            porttitor augue. Aliquam et bibendum orci, quis ultricies mauris.
            Vestibulum ipsum turpis, pulvinar eget consequat non, rutrum vitae
            lectus. Sed eu dolor nec dui accumsan tincidunt. Nullam euismod
            massa et ante lobortis, id aliquet velit sollicitudin. Nulla in
            aliquet erat, a sagittis mauris. In sodales a ligula ut rhoncus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo
            mi, consectetur sed nisl et, rhoncus rhoncus lectus. Mauris
            tincidunt convallis sem, a dictum leo dapibus vitae. Ut pharetra
            volutpat enim eget laoreet. Suspendisse consequat massa augue, eu
            luctus ex consequat eu. Suspendisse in nunc in odio venenatis
            bibendum eget at leo. Donec nec velit id felis porta feugiat. Cras
            ligula dolor, accumsan vitae convallis eget, aliquet eu magna.
            Maecenas varius efficitur massa sed egestas. Curabitur congue magna
            turpis, vel sodales ipsum cursus sit amet. Nunc nec scelerisque
            urna, sed gravida ipsum. Donec sit amet quam pulvinar, euismod mi
            vel, vestibulum velit. Nam ut lacus ut ex gravida interdum.
            Phasellus vel bibendum nulla, quis laoreet quam. Donec interdum
            molestie porttitor. Fusce dictum iaculis nulla, feugiat tempus erat
            faucibus id. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
        </div>
        <Footer/>
      </>
    );
  }
}
