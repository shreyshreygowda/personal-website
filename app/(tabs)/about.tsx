import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

const interests = [
  { label: 'Poetry', image: require('../../assets/images/profile.jpg') },
  { label: 'Digital Art', image: require('../../assets/images/profile.jpg') },
  { label: 'Milk Tea', image: require('../../assets/images/profile.jpg') },
  { label: 'Thrifting', image: require('../../assets/images/profile.jpg') },
  { label: 'Journaling', image: require('../../assets/images/profile.jpg') },
];

const photoWall = [
  require('../../assets/images/profile.jpg'),
  require('../../assets/images/profile.jpg'),
  require('../../assets/images/profile.jpg'),
  require('../../assets/images/profile.jpg'),
];

const About = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <Animated.View style={[styles.mainContent, { opacity: fadeAnim, transform: [{ scale: fadeAnim }] }]}>
        {/* Profile Image */}
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={styles.profileImage}
          />
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.heroText}>Hey, I’m Shreya!</Text>
          <Text style={styles.subheading}>
            I’m an entrepreneurial engineer specializing in AI, full-stack development, and building scalable solutions.
          </Text>
          {/* ENTJ Button */}
          <TouchableOpacity style={styles.entjButton}>
            <Text style={styles.entjButtonText}>ENTJ - My MBTI </Text>
          </TouchableOpacity>


          <Text style={styles.sectionTitle}>mission.</Text>
          <Text style={styles.paragraph}>
            I’m a Software Development Intern at Fem Entity...{'\n\n'}
            In my free time, I flip thrifted dresses, write poetry, and get creative with digital painting. I love collaging and mixing art with organization.
          </Text>

          {/* Skills */}
          <Text style={styles.sectionTitle}>skills.</Text>
          <View style={styles.skills}>
            {['JavaScript', 'React Native', 'AI Research', 'Web Design', 'Node.js'].map((skill, i) => (
              <Text key={i} style={styles.skill}>{skill}</Text>
            ))}
          </View>

          {/* Social Links */}
          <Text style={styles.sectionTitle}>connect.</Text>
          <View style={styles.socialRow}>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:shreyanadagowda@gmail.com')}>
              <Ionicons name="mail" size={28} color="#C0A4FD" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/shreyanadagowda/')}>
              <Feather name="linkedin" size={28} color="#C0A4FD" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/shreyshreygowda')}>
              <Feather name="github" size={28} color="#C0A4FD" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      {/* Photo Wall */}
      <View style={{ marginTop: 60 }}>
        <Text style={styles.sectionTitle}>memories so far.</Text>
        <View style={styles.interestsGrid}>
          {interests.map((item, i) => (
            <View key={i} style={styles.interestCard}>
              <Image source={item.image} style={styles.interestImage} />
              <Text style={styles.interestLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Interests Grid */}
      <View style={{ marginTop: 60 }}>
        <Text style={styles.sectionTitle}>things I love.</Text>
        <View style={styles.interestsGrid}>
          {interests.map((item, i) => (
            <View key={i} style={styles.interestCard}>
              <Image source={item.image} style={styles.interestImage} />
              <Text style={styles.interestLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Current Obsessions */}
      <View style={{ marginTop: 60 }}>
        <Text style={styles.sectionTitle}>current obsessions.</Text>
        <View style={styles.currentObsessions}>
          <View style={styles.obsessionCard}>
            <FontAwesome name="tv" size={30} color="#C0A4FD" />
            <Text style={styles.obsessionText}>Favorite Shows</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://spotify.com')}>
              <Text style={styles.spotifyLink}>Spotify Playlist</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.obsessionCard}>
            <FontAwesome name="book" size={30} color="#C0A4FD" />
            <Text style={styles.obsessionText}>Books I’m Reading</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://spotify.com')}>
              <Text style={styles.spotifyLink}>Spotify Playlist</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.obsessionCard}>
            <FontAwesome name="music" size={30} color="#C0A4FD" />
            <Text style={styles.obsessionText}>Music/Podcasts</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://spotify.com')}>
              <Text style={styles.spotifyLink}>Spotify Playlist</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;  // Default export

export 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0A1F',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  mainContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  profileSection: {
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 160,
    height: 220,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C0A4FD',
    shadowColor: '#C0A4FD',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  infoSection: {
    flex: 2,
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F0EFFF',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 18,
    color: '#C0A4FD',
    marginBottom: 20,
    lineHeight: 26,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F0EFFF',
    fontStyle: 'italic',
    marginTop: 30,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#B0AFC2',
    lineHeight: 24,
  },
  entjButton: {
    backgroundColor: '#8b5cf6',
    borderColor: 'white',
    borderWidth: 2,
    borderEndEndRadius: 10,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: 200
  },
  entjButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    fontStyle: 'italic'
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skill: {
    backgroundColor: '#9A88F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderColor: 'white',
    borderWidth: 2,
    borderEndEndRadius: 10,
    borderRadius: 18,
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  icon: {
    backgroundColor: '#1A1A33',
    padding: 12,
    borderRadius: 100,
  },
  photoWall: {
    marginTop: 60,
    height: 300,
    position: 'relative',
  },
  wallImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    position: 'absolute',
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#9A88F2',
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 20,
  },
  interestCard: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  interestImage: {
    width: 120,
    height: 120,
    borderRadius: 14,
    marginBottom: 8,
  },
  interestLabel: {
    color: '#F0EFFF',
    fontSize: 14,
  },
  currentObsessions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 20,
  },
  obsessionCard: {
    width: '30%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#1A1A33',
    borderRadius: 12,
    justifyContent: 'center',
  },
  obsessionText: {
    color: '#F0EFFF',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  spotifyLink: {
    color: '#9A88F2',
    fontSize: 14,
    marginTop: 5,
  },
});
