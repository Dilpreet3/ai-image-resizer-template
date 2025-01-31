import pica from 'pica';
import * as tf from '@tensorflow/tfjs';

// Resize with Pica
export const resize = async (img, width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  await pica().resize(img, canvas);
  return canvas;
};

// AI Compression
export const optimizeWithAI = async (imageData) => {
  const model = await tf.loadGraphModel('/models/quality_predictor/model.json');
  const tensor = tf.browser.fromPixels(imageData).expandDims(0);
  const prediction = model.predict(tensor);
  return Math.round(prediction.dataSync()[0] * 100);
};
