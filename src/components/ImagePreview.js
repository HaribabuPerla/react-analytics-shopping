import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImagePreview = () => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  const onImageLoaded = (image) => {
    imgRef.current = image;
  };

  const onCropComplete = (crop) => {
    if (imgRef.current && crop.width && crop.height) {
      const croppedImage = getCroppedImage(imgRef.current, crop);
      setCroppedImageUrl(croppedImage);
    }
  };

  const getCroppedImage = (image, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // As a base64 URL
    const croppedImageUrl = canvas.toDataURL('image/jpeg');
    return croppedImageUrl;
  };

  const handleImageUpload = (e) => {
    console.log("eeee",e)
    // const file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setSrc(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {src && (
        <ReactCrop
          src={src}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={(newCrop) => setCrop(newCrop)}
        />
      )}
      {croppedImageUrl && (
        <div>
          <h4>Cropped Image Preview:</h4>
          <img src={croppedImageUrl} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
