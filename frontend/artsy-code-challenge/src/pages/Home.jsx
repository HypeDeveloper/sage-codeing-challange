import React from 'react'
import BrandText from '../components/TextComponent'
import './styles.css'

import slideImg1 from '../assets/images/woman_with_orange_glasses.png'
import slideImg2 from '../assets/images/holding_autum_leaf.png'
import slideImg3 from '../assets/images/a_wild_animal.png'
import slideImg4 from '../assets/images/a_girl_standing.png'
import slideImg5 from '../assets/images/hand and plant.png'

import testImg from '../assets/images/fair Woman.png'


//@Section HomeMain
function HomePage() {

  const slideImages = [slideImg1, slideImg2, slideImg3, slideImg4, slideImg5]
  const images = slideImages.map((element, index) => {
    return (
      <div className="imgBoxes" key={`slideImage_${index}`}>
        <img src={element} alt="" />
      </div>
    )
  })

  return (
    <div className="homePageWrap pageOffset">
      <div className="home-Intro">
        <BrandText type='styledHeader' align='center' space='35px 0 0'>
          Photography is poetry & <br /> beautiful untold stories
        </BrandText>
        <BrandText space='35px 230px 90px' align='center'>
          Flip more than 10,000 venintage shots, old Photograph
          historic <br /> images and captures seamlessly in one palce. Register to get top access.
        </BrandText>
      </div>
      <div className="home-Slide">
        <div className="slidebox">
          <div className="slidewrap">
            {images}
          </div>
        </div>
        <div className="slidebox">
          <div className="slidewrap">
            {images}
          </div>
        </div>
        <div className="slidebox">
          <div className="slidewrap">
            {images}
          </div>
        </div>
        <div className="slidebox">
          <div className="slidewrap">
            {images}
          </div>
        </div>

      </div>

      <FeaturedProduct />
    </div>
  )
}


//@Section  FeaturedProduct 
import { ArrowButton } from '../components/QuickComponents'
function FeaturedProduct() {
  
  let currentImgPoition = 'right'
  const fakeData = [
    {
      contentTitle: "The Fair Sleeping Girl",
      contentText: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit ut aliquam, purus sit amet luctus 
            venenatis, lectus magna fringilla urna, porttitor 
            rhoncus dolor pur`,
      contentCreators: [
          {
            creatorName: 'David Joe',
            creatorImage: '.png',
          }
        ]
    },
    {
      contentTitle: "The Fair Sleeping Girl",
      contentText: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit ut aliquam, purus sit amet luctus 
            venenatis, lectus magna fringilla urna, porttitor 
            rhoncus dolor pur`,
      contentCreators: [
          {
            creatorName: 'David Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Bot Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          }
        ]
    },
    {
      contentTitle: "The Fair Sleeping Girl",
      contentText: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit ut aliquam, purus sit amet luctus 
            venenatis, lectus magna fringilla urna, porttitor 
            rhoncus dolor pur`,
      contentCreators: [
          {
            creatorName: 'David Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Bot Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          },
          {
            creatorName: 'David Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Bot Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          }
        ]
    },
    {
      contentTitle: "The Fair Sleeping Girl",
      contentText: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit ut aliquam, purus sit amet luctus 
            venenatis, lectus magna fringilla urna, porttitor 
            rhoncus dolor pur`,
      contentCreators: [
          {
            creatorName: 'David Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Bot Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          },
          {
            creatorName: 'Bot Joe',
            creatorImage: '.png',
          },
          {
            creatorName: 'Rad Jump',
            creatorImage: '.png',
          }
        ]
    }
  ]
  
  const features = fakeData.map((element, index) => {
    
     // Getting [contentCreators] form parent [element] 
    //  @CodeStart Get Number of creators if the creators are large if cuts some to fit
    //             😉This helps to create dynamic and upto date list form the back end 
    const creatorsArray = element.contentCreators
    const creators = creatorsArray.map((element, index)=>{
        if(index > 4) return // checks if the limit has been reached
        if(creatorsArray.length < 6){ // if less than limit 6 go on
          return <div className="creatorCircle" key={`${element.creatorName}_${index}`}></div>
        }
        else{
          // visual feed back to show the limit
          if(creatorsArray.length > 6 && index === 4){ 
            return(
              <div className="creatorCircle" style={{background: 'black', border: 'none'}} key={`${element.creatorName}_${index}`}>{
                <BrandText color='white' type='smallText'> {`${creatorsArray.length - 4}+`}</BrandText>
              }</div>
            )
          }
          else{ 
            return(
              <div className="creatorCircle" key={`${element.creatorName}_${index}`}></div>
            )
          }
        }
    })
    // @CodeEnd 

    if (currentImgPoition == 'right') {
      currentImgPoition = 'left'
    } else {
      currentImgPoition = 'right'
    }

    // 👇this  is just a normal map sequence
    return(
      <div className="featured-Content"  key={`${element.contentTitle}_${index}`}>
        <div className="linewrap">
          <div className="line"></div>
        </div>
        <div className="content" style={{flexDirection: currentImgPoition === 'left'? 'row' : 'row-reverse'}}>
          <div className="content-Image">
            <img src={testImg} alt="" />
            <div className="overlay">
              {/* linkable */}
              <div className="ccinfo">
                <BrandText color='white'>View Product</BrandText> 
        <ArrowButton color='white'/>
              </div>
            </div>
          </div>
          <div className="content-Des">
            <BrandText type='subHeader' space='0 0 40px'>{element.contentTitle}</BrandText>
            <BrandText>
            {element.contentText}
            </BrandText>
            <div className="content-Info">
              <div className="content-Creators">
                <div className="creatorsBox">
                  <div className="creatorsBox-Wrap">
                    {
                     creators
                    }
                  </div>
                </div>
                <div className="creatorsInfo">
                  <BrandText>{creatorsArray.length} major creator{creatorsArray.length < 2 ? '' : 's'}</BrandText>
                </div>
              </div>  
              <div className="content-Arrow">
                <ArrowButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="featured">
      <BrandText type='normalHeader' space='0 0 34px'>Featured Product</BrandText>

      {features}
    </div>
  )
}

export default HomePage