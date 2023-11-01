import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  const loaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    marginTop: '150px',
  };

  const percentageStyle = {
    fontSize: 24,
    color: '#f1f1f1',
    fontWeight: 800,
    marginTop: 20,
    opacity: 1 - progress, 
    transition: 'opacity 0.5s ease-in-out',
  };

  const spinKeyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <Html>
      <style>{spinKeyframes}</style>
      <div style={loaderStyle}>
        <div
          className="loader-circle"
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            border: '4px solid #f1f1f1',
            borderTop: '4px solid #3666F6',
            animation: 'spin 0.8s linear infinite',
          }}
        ></div>
        <p style={percentageStyle}>{(progress).toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default Loader;
