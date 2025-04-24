import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image, ScrollView } from 'react-native';

const About = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Side-by-side layout with Profile Image on the Left */}
      <View style={styles.mainContent}>
        {/* Profile Image Section (Left Side) */}
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/images/profile.jpg')} // Add your profile image in assets
            style={styles.profileImage}
          />
        </View>

        {/* Info Section (Right Side) */}
        <View style={styles.infoSection}>
          <Text style={styles.heroText}>Hey, I’m Shreya!</Text>
          <Text style={styles.subheading}>
            I’m an entrepreneurial engineer specializing in AI, full-stack development, and building scalable solutions.
          </Text>
          <Text style={styles.paragraph}>
            With a passion for tech that solves real-world problems, I’ve been fortunate to work with some incredible teams and clients.
            From web apps to 3D visualizations, I bring ideas to life with precision and creativity.
          </Text>

          {/* Skills Section */}
          <View style={styles.skillsSection}>
            <Text style={styles.heading}>Skills</Text>
            <View style={styles.skills}>
              <Text style={styles.skill}>JavaScript</Text>
              <Text style={styles.skill}>React Native</Text>
              <Text style={styles.skill}>AI Research</Text>
              <Text style={styles.skill}>Web Design</Text>
              <Text style={styles.skill}>Node.js</Text>
            </View>
          </View>

          {/* Social Links */}
          <View style={styles.contactSection}>
            <Text style={styles.heading}>Contact</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('mailto:shreya@example.com')}
            >
              <Text style={styles.buttonText}>Email Me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#3b82f6' }]}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/shreya')}
            >
              <Text style={styles.buttonText}>Connect on LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A23',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  mainContent: {
    flexDirection: 'row', // Side-by-side layout (horizontal)
    alignItems: 'center', // Vertically center the content
    marginBottom: 24,
  },
  profileSection: {
    flex: 1, // This makes sure the image gets 1/3 of the screen width
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#B39DDB',
  },
  infoSection: {
    flex: 2, // Info section takes more width
    marginLeft: 20, // Adding some space between the image and text
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 18,
    color: '#c4b5fd',
    marginBottom: 12,
    lineHeight: 26,
  },
  paragraph: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
    lineHeight: 24,
  },
  skillsSection: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 16,
  },
  skill: {
    backgroundColor: '#B39DDB',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  contactSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
