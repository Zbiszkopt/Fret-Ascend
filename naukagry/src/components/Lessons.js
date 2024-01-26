import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div className="b-ground-a d-flex justify-content-center">
      <div>
        <h2>Lista lekcji</h2>
        {lessons.length === 0 ? (
          <p>Brak dostępnych lekcji.</p>
        ) : (
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.id}>
                <h3>{lesson.title}</h3>
                <iframe
                  title={`Video for ${lesson.title}`}
                  width="560"
                  height="315"
                  src={lesson.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Lessons;