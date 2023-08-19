import currencyFormater from 'currency-formatter';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ICast, IDetails} from '../interfaces/MovieInterfaces';
import CastItem from './CastItem';

interface IProps {
  details: IDetails;
  cast: ICast[];
}

const MovieDetails = ({details, cast}: IProps) => {
  return (
    <>
      <View style={styles.infoContainer}>
        <View style={styles.iconTextCont}>
          <Icon name="film-outline" color="grey" size={18} />
          <Text style={styles.textCont}>
            {details.genres.map(g => g.name).join(', ')}{' '}
          </Text>
        </View>
        <View style={styles.iconTextCont}>
          <Icon name="calendar-outline" color="grey" size={18} />
          <Text style={styles.textCont}>
            {details.release_date.split('-').join('/')}
          </Text>
        </View>
        <View style={styles.iconTextCont}>
          <Icon name="star-outline" color="grey" size={18} />
          <Text style={styles.textCont}>{details.vote_average}</Text>
        </View>

        <Text style={styles.titleDtl}>Synopsis</Text>
        <Text style={styles.detailText}>{details.overview}</Text>

        <Text style={styles.titleDtl}>Budget</Text>
        <Text style={styles.detailText}>
          {currencyFormater.format(details.budget, {code: 'USD'})}
        </Text>
      </View>

      <View style={styles.castContainer}>
        <Text style={styles.titleCast}>Cast</Text>
        <FlatList
          style={styles.flatList}
          data={cast}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  infoContainer: {marginHorizontal: 20, marginTop: 5},
  iconTextCont: {flexDirection: 'row'},
  textCont: {marginLeft: 5},
  titleDtl: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailText: {fontSize: 16, textAlign: 'justify'},
  castContainer: {marginTop: 10, marginBottom: 10},
  titleCast: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 20,
  },
  flatList: {marginTop: 5, height: 70},
});

export default MovieDetails;
