import React from 'react';
import Figure from 'react-bootstrap/Figure';

function ProfileImg(props: any) {
  return (
    <Figure className={`text-center ${props.classNameFigure}`}>
        <Figure.Image
            className={`img-fluid rounded ${props.classNameImg}`}
            width={props.width}
            height={props.height}
            alt="profile image"
            src={props.img}
        />
    </Figure>
  )
}

export default ProfileImg