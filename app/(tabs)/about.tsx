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
    
          {/* Mission Section */}
          <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 20, fontStyle: 'italic'}}>mission.</Text>
          <Text style={{ color: 'white', marginBottom: 20, paddingTop: 10}}>
            I’m a Software Development Intern at Fem Entity, where I design mobile interfaces using React Native, Django, and TypeScript. I also work as a Data Analyst & Website Manager Team Lead Intern at STEM·E, leading technical training and data analysis initiatives. Currently, I research AI applications in FemTech at FemTech Future, focusing on breast cancer screening, drug development, and bias detection in healthcare datasets. 
            {'\n\n'}
            In the past, I collaborated on the Ethical AI Challenge at Ethicura AI, co-developing an API for deepfake detection that improved accuracy by 50%. I was a Machine Learning Research Intern at UCSF, where I analyze clinical data to explore the role of social determinants of health. So far, I've built and deployed research websites, led live coding sessions, and worked in agile teams to create user-friendly tech solutions. 
            {'\n\n'}
            In my free time, I flip thrifted dresses and tops, write poetry, and get creative with digital painting. I’m also passionate about collaging for bulletin boards, where I can mix art and organization. I’m always looking for new ways to experiment, create, and push boundaries in both tech and personal hobbies.
            </Text>
    

          {/* Skills Section */}
          <View style={styles.skillsSection}>
            <Text style={styles.heading}>skills.</Text>
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
            <Text style={styles.heading}>contact.</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('shreyanadagowda@gmail.com')}
            >
              <Text style={styles.buttonText}>Email Me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#3b82f6' }]}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/shreyanadagowda/')}
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
    fontStyle: 'italic'
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
