import React from 'react';

import './about.css';

const About = () => {
  return (
    <div className="about">
      <p>
        My name is Andrew Johnson and I am a web application developer based out
        of Minneapolis, MN. Simple Blog is a personal project, intended to be a
        minimalistic blog application. It was built using React on the
        front-end, and a basic JSON server to maintain the storage of posts.
      </p>
      <p>
        If you have any questions about Simple Blog or are interested in using
        my services as a developer you are welcome to contact me:
      </p>
      <div>
        <a href="mailto:andrew.johnson612@gmail.com">
          andrew.johnson612@gmail.com
        </a>
      </div>
    </div>
  );
};

export default About;
