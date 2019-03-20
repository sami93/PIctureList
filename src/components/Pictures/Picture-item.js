import React from 'react';
import { css } from 'emotion';
import { PICSUM_URL } from '../../constants';
import { withRouter } from 'react-router-dom';
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";



const calculateUrl = (itemPictureProp) => {
    return (`${PICSUM_URL}/ ${itemPictureProp.width} / ${itemPictureProp.height} ?image=  ${itemPictureProp.id}`);
}

const goToDetailPicture = (itemPictureProp, history) => {
  history.push({
    pathname: `/image/${itemPictureProp.id}`,
    // search: '?id=' + this.itemPicture.id,
  });
};



const  PictureItem = (props) => {
   let {history} = props;

    return (
        props.itemPicture ?
            <span className={css(container)}>
                <img
                    className={css(styleImg)}
                    alt={props.itemPicture.valueSelected}
                    src={calculateUrl(props.itemPicture)}
                    onClick = {() =>{
                        goToDetailPicture(props.itemPicture, history )}} />
                <div className={css(favBlock)} >
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={(props.itemPicture.rating)}

                />
                </div>

 <div className={css(favBlock1)} >
                <FontAwesomeIcon
                    icon={faHeart}
                    color={ props.itemPicture.valueSelected === true ? 'red' : 'black' }
                    size="md" />

              </div> </span>  :''
    );
};

export default withRouter (PictureItem) ;


const styleImg  = {
    padding: '25px',
    margin: '30px 0px',
    width: '150px',
    height: '150px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
};
// const card = {
//     boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
//     transition: '0.3'
// };

const container  = {
    position: 'relative'
};

const favBlock =  {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'white',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px'
};

const favBlock1 =  {
    position: 'absolute',


    backgroundColor: 'white',
    color: 'white',
    bottom: '20px',
    left: '20px'
};

