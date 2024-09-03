'use client';

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage,setPickedImage] = useState();
  const imageInput = useRef();
  function pickImageHandler() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPickedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else{
      setPickedImage(null);
    }
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && <Image src={pickedImage} alt="Preview" fill />}
          {!pickedImage && <p>No image picked yet.</p>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png image/jpeg" 
          ref={imageInput}
          onChange={handleImageChange}
          />
          <button className={classes.button} type="button" onClick={pickImageHandler}>Pick Image</button>
      </div>
    </div>
  );
}