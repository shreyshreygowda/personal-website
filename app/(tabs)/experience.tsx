import React, { useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const experienceData = [
  {
    title: 'Software Development Intern @ Fem Entity',
    description: 'Worked on frontend development with React Native and integrated backend APIs.',
    keywords: ['React Native', 'API', 'Frontend'],
  },
  {
    title: 'AI Researcher @ FemTech Future',
    description: 'Conducted research on AI applications in healthcare and built ML models.',
    keywords: ['Machine Learning', 'AI', 'Healthcare'],
  },
];

const cardData = [
  {
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c44367e',
    title: '3D Solar System Explorer',
    description: 'Interactive tour of planets using Three.js and WebGL.',
    tags: ['Three.js', 'WebGL', '3D'],
    link: 'https://example.com/solar-system',
  },
  {
    image: 'https://images.unsplash.com/photo-1612831455546-bf26f9f5e18b',
    title: 'AI-Powered Diagnosis Tool',
    description: 'Machine learning model that predicts symptoms from user input.',
    tags: ['AI', 'TensorFlow', 'Python'],
    link: 'https://example.com/diagnosis-ai',
  },
  {
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
    title: 'Sustainable Fashion Platform',
    description: 'Marketplace for eco-friendly fashion brands.',
    tags: ['E-commerce', 'Sustainability', 'React'],
    link: 'https://example.com/fashion',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Smart Weather App',
    description: 'Real-time forecasts with personalized recommendations.',
    tags: ['React Native', 'API', 'Weather'],
    link: 'https://example.com/weather-app',
  },
];

export default function App() {
  const { width } = useWindowDimensions();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // One animation per row
  const animatedValues = Array.from({ length: 2 }, () => useRef(new Animated.Value(0)).current);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    animatedValues.forEach((val, rowIndex) => {
      Animated.timing(val, {
        toValue: scrollY > rowIndex * 350 - 150 ? 1 : 0,
        duration: 600,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#0A0A23', padding: 20 }}
      scrollEventThrottle={16}
      onScroll={handleScroll}
    >
      {/* Header */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
      <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', textAlign: 'center' }}>
        shreya <Text style={{ color: '#B39DDB' }}>is a</Text>
      </Text>
      <Text style={{ color: 'white', fontSize: 52, textAlign: 'center', fontStyle: 'italic' }}>
        entrepreneurial engineer
      </Text>
      <Text style={{ color: '#B39DDB', fontSize: 50, textAlign: 'center', fontWeight: 'bold' }}>
        scaling solutions
      </Text>
    </View>
     {/* Experience Tags */}
    <View style={{ alignItems: 'center', marginVertical: 10 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 350 }}>
        {experienceData.map((exp, index) => (
          <LinearGradient
            key={index}
            colors={["#8E2DE2", "#4A00E0"]}
            start={[0, 0]} end={[1, 1]}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 10,
              margin: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>{exp.title}</Text>
          </LinearGradient>
        ))}
      </View>
    </View>

      {/* Endeavors Grid */}
        <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', textAlign: 'center', paddingTop: 100, paddingBottom: 50, fontStyle: 'italic' }}>my endeavors.</Text>
      {[0, 1].map((rowIdx) => {
        const fadeAnim = animatedValues[rowIdx];
        return (
          <Animated.View
            key={rowIdx}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [40, 0],
                  }),
                },
              ],
            }}
          >
            {[0, 1].map((colIdx) => {
              const i = rowIdx * 2 + colIdx;
              const card = cardData[i];
              return (
                <TouchableOpacity
                  key={i}
                  onPressIn={() => setHoveredIndex(i)}
                  onPressOut={() => setHoveredIndex(null)}
                  activeOpacity={1}
                  style={{
                    backgroundColor: '#1F1F3D',
                    borderRadius: 10,
                    padding: 15,
                    width: '48%',
                    shadowColor: hoveredIndex === i ? '#B39DDB' : 'transparent',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.8,
                    shadowRadius: 10,
                    elevation: hoveredIndex === i ? 10 : 5,
                    transform: hoveredIndex === i ? [{ scale: 1.03 }] : [{ scale: 1 }],
                  }}
                >
                  <Image
                    source={{ uri: card.image }}
                    style={{ height: 200, borderRadius: 10 }}
                  />
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
                    {card.title}
                  </Text>
                  <Text style={{ color: '#AAA' }}>{card.description}</Text>
                  <TouchableOpacity onPress={() => console.log('Link pressed')}>
                    <Text style={{ color: '#B39DDB', marginTop: 5 }}>Check Live Site ↗</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
                    {card.tags.map((tag, idx) => (
                      <LinearGradient
                        key={idx}
                        colors={["#FF5F6D", "#FFC371"]}
                        start={[0, 0]} end={[1, 1]}
                        style={{
                          paddingVertical: 4,
                          paddingHorizontal: 8,
                          borderRadius: 8,
                          marginRight: 5,
                          marginBottom: 5,
                        }}
                      >
                        <Text style={{ color: 'white', fontSize: 12 }}>{tag}</Text>
                      </LinearGradient>
                    ))}
                  </View>
                </TouchableOpacity>
              );
            })}
          </Animated.View>
        );
      })}
    </ScrollView>
  );
}
