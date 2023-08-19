import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IMovie} from '../interfaces/MovieInterfaces';
import MoviePoster from './MoviePoster';

interface IProps {
  title?: string;
  movies: IMovie[];
}

const HorizontalSlider = ({title, movies}: IProps) => {
  return (
    <View style={{height: !!title ? 260 : 220}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 4,
  },
});

export default HorizontalSlider;
