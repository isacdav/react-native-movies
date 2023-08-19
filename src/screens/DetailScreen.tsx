import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from '../components/MovieDetails';
import useMovieDetails from '../hooks/useMovieDetails';
import {RootStackParams} from '../navigation/MoviesNavigator';

const screenHeight = Dimensions.get('screen').height;

interface IProps extends StackScreenProps<RootStackParams, 'Detail'> {}

const DetailScreen = ({route, navigation}: IProps) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, details, cast} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.detailsContainer}>
        {movie.original_title !== movie.title && (
          <Text style={styles.subTitle}>{movie.original_title}</Text>
        )}
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator color="grey" size={35} style={{marginTop: 20}} />
      ) : (
        <MovieDetails details={details!} cast={cast} />
      )}

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          navigation.pop();
        }}>
        <Icon
          name={`${Platform.OS == 'ios' ? 'chevron' : 'arrow'}-back-outline`}
          color="white"
          size={40}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  detailsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    opacity: 0.8,
  },
  backBtn: {
    position: 'absolute',
    zIndex: 999,
    elevation: 999,
    top: 20,
    left: 10,
  },
});

export default DetailScreen;
