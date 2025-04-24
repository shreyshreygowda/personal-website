// app/(tabs)/project.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  View,
  Text,
  Animated,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;

const projects = [
  {
    title: '3D Solar System Planets',
    description:
      'Explore a captivating 3D simulation of our solar system using Three.js.',
    image: require('../../assets/images/profile.jpg'),
    tags: ['Three.js', '3D', 'Interactive'],
  },
  {
    title: 'Yoom - Video Conferencing App',
    description:
      'Simplify your video conferencing with a sleek, modern UI and smooth UX.',
    image: require('../../assets/images/profile.jpg'),
    tags: ['React Native', 'UI/UX', 'Video'],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <LinearGradient
      colors={['#8e44ad', '#3498db']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <Text style={styles.tagText}>{label}</Text>
    </LinearGradient>
  );
}

function ProjectCard({
  project,
  reverse,
}: {
  project: any;
  reverse?: boolean;
}) {
  // Animated value for scale
  const scale = useRef(new Animated.Value(0.8)).current;
  const [hovered, setHovered] = useState(false);

  // Pop-up animation on mount
  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);

  const onEnter = () => {
    if (Platform.OS === 'web') {
      setHovered(true);
      Animated.spring(scale, {
        toValue: 1.05,
        useNativeDriver: true,
      }).start();
    }
  };
  const onLeave = () => {
    if (Platform.OS === 'web') {
      setHovered(false);
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Animated.View
      style={[
        styles.card,
        reverse && styles.reverse,
        {
          transform: [{ scale }],
          shadowColor: hovered ? '#a29bfe' : '#000',
          shadowOpacity: hovered ? 0.7 : 0.25,
          elevation: hovered ? 12 : 8,
        },
      ]}
      // @ts-ignore: web-only hover event
      onMouseEnter={onEnter}
      // @ts-ignore: web-only hover event
      onMouseLeave={onLeave}
    >
      <Image source={project.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <View style={styles.tagContainer}>
          {project.tags.map((t: string, i: number) => (
            <Tag key={i} label={t} />
          ))}
        </View>
      </View>
    </Animated.View>
  );
}

export default function ProjectScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {projects.map((p, i) => (
        <ProjectCard
          key={i}
          project={p}
          reverse={i % 2 === 1}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 16,
    padding: 12,
    marginBottom: 24,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  image: {
    width: screenWidth * 0.4,
    height: 150,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  gradient: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
