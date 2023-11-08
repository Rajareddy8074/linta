import React from 'react';
import './PythonLibrariesShowcase.css'; // Import your CSS file for styling

function PythonLibrariesShowcase() {
  return (
    <div>
      <header>
        <h1>Python Libraries Showcase</h1>
      </header>
      <section className="library-container">
        <div className="library-card">
          <img src="./numpy.png" alt="NumPy" />
          <h2>NumPy</h2>
          <p>NumPy is a fundamental package for scientific computing with Python. It contains among other things a powerful N-dimensional array object and useful linear algebra capabilities.</p>
          <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>

        <div className="library-card">
          <img src="./pandas.png" alt="Pandas" />
          <h2>Pandas</h2>
          <p>Pandas is a fast, powerful, and flexible open-source data analysis and manipulation library built on top of NumPy.</p>
          <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>

        <div className="library-card">
          <img src="./matplotlib.png" alt="Matplotlib" />
          <h2>Matplotlib</h2>
          <p>Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.</p>
          <a href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>

        <div className="library-card">
          <img src="./sckirt.jpg" alt="Scikit-Learn" />
          <h2>Scikit-Learn</h2>
          <p>Scikit-Learn is a simple and efficient tool for machine learning and data mining.</p>
          <a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>

        <div className="library-card">
          <img src="./seaborn.jpg" alt="Seaborn" />
          <h2>Seaborn</h2>
          <p>Seaborn is a data visualization library based on Matplotlib. It provides a high-level interface for creating informative and attractive statistical graphics.</p>
          <a href="https://seaborn.pydata.org/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>

        <div className="library-card">
          <img src="./tensorflow.png" alt="TensorFlow" />
          <h2>TensorFlow</h2>
          <p>TensorFlow is an open-source machine learning framework developed by Google for building and training machine learning models.</p>
          <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      </section>
    </div>
  );
}

export default PythonLibrariesShowcase;
