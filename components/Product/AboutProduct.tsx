import React, { FunctionComponent } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  info?: string;
  review?: string;
  rate?: string;
  interest?: string;
}

const AboutProduct: FunctionComponent<Props> = ({
  info= 'Addition Infomation',
  review= 'Reviews',
  rate= '35',
  interest= 'You may be interested in',
  }) =>

{

  const stars = [];
  for (let i = 0; i < 4; i++) {
    stars.push(
      <Image
        key={i}
        style={styles.imageStar}
        source={require('../../assets/icon/star.png')}
      />
    )
  }

  return (
    <>
      <View style={styles.about}>
        <View style={styles.info}>
          <Text style={styles.textInfo}>{info}</Text>
          <Image
            style={styles.imageNext}
            source={require('../../assets/icon/next.png')}
          />
        </View>
      </View>
      <View style={styles.reviewAbout}>
        <View style={styles.review}>
          <Text style={styles.textReview}>{review}</Text>
          <View style={styles.starView}>
            {stars}
            <Image
              style={styles.imageStar}
              source={require('../../assets/icon/star_corner.png')}
            />
            <Text style={styles.textStar}>{rate}</Text>
            <Image
              style={styles.imageNextOfStar}
              source={require('../../assets/icon/next.png')}
            />
          </View>

        </View>
      </View>
      <View style={styles.interestAbout}>
        <View style={styles.interest}>
          <Text style={styles.textInterest}>{interest}</Text>
        </View>
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  about: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 15,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 62,
    left: 15,
  },
  textInfo: {
    fontSize: 20,
  },
  imageNext: {
    resizeMode: 'stretch',
    height: 18,
    width: 20,
    right: 30,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 62,
    backgroundColor: 'white',
  },
  reviewAbout: {
    marginTop: 5,
  },
  textReview: {
    fontSize: 20,
    left: 15,
  },
  starView: {
    flexDirection: 'row',
    left: 180,
  },
  imageStar: {
    resizeMode: 'stretch',
    height: 18,
    width: 18,
    right: 30,
  },
  textStar: {
    fontSize: 18,
    right: 20,
    color: '#777070'
  },
  imageNextOfStar: {
    resizeMode: 'stretch',
    height: 18,
    width: 20,
    right: 10,
  },
  interest: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    height: 74,
  },
  interestAbout: {
    flex: 1,
    backgroundColor: 'rgb(249,249,249)',
    marginTop: 5,
    paddingBottom: 20,
  },
  textInterest: {
    fontWeight: '300',
    fontSize: 20,
  },
})

export default AboutProduct
