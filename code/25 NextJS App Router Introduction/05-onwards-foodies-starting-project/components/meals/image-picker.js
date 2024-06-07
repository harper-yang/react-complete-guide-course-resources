'use client'

import classes from "./image-picker.module.css";
import {useRef, useState} from 'react'
import Image from "next/image";

export default function ImagePicker({label, name}) {

  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();

  const handlePickImage = () => {
    imageInput.current.click();
  }

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }
  }

  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickedImage && <p>No picture picked</p>}
        {pickedImage && <Image src={pickedImage} alt="The image been picked" fill/>}
      </div>
      <input id={name} type="file" name={name} accept="image/png, image/jpeg" className={classes.input}
             ref={imageInput} onChange={handleInputChange} required/>
      <button className={classes.button} type="button" onClick={handlePickImage}>Pick image</button>
    </div>
  </div>
};
