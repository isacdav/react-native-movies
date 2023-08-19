import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICast} from '../interfaces/MovieInterfaces';

interface IProps {
  actor: ICast;
}

const CastItem = ({actor}: IProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.itemContainer}>
      {actor.profile_path && <Image source={{uri}} style={styles.profileImg} />}

      <View style={styles.infoContainer}>
        <Text style={styles.nameTitle}>{actor.name}</Text>
        <Text style={styles.characterTitle}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
    height: 50,
  },
  infoContainer: {
    marginLeft: 10,
    marginTop: 2,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  nameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  characterTitle: {
    fontSize: 16,
    opacity: 0.7,
  },
});

export default CastItem;
