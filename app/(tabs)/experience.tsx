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
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const experienceData = [
  {
    title: 'Software Development Intern @ Fem Entity',
    description: 'Developed 6+ interactive mobile screens using React Native, Django, and TypeScript (TSX), supporting user onboarding and profile creation workflows. Created data collection features connecting users with certified practitioners across Canada, enhancing user engagement with reusable UI patterns, and Expo Router for smooth navigation.',
    keywords: ['React Native', 'Django', 'TypeScript'],
  },
  {
    title: 'AI Researcher @ FemTech Future',
    description: 'Conducted research on AI applications in healthcare and built ML models.',
    keywords: ['Machine Learning', 'AI', 'Healthcare'],
  },
];

const cardData = [
  {
    image: require('../../assets/images/fementity.png'),
    title: 'Software Development Intern @ FemEntity',
    description: '\nDeveloped 6+ interactive mobile screens, supporting user onboarding and profile creation workflows. Created data collection features connecting users with certified practitioners across Canada, enhancing user engagement with reusable UI patterns, and Expo Router for smooth navigation.Collaborated in an Agile environment, participating in sprint planning, code reviews, and weekly code demos. Engineered dynamic forms with input validation and interactive UI elements (e.g., password visibility toggle, “Remember Me” switch) to collect and securely store user credentials for a scalable user profile database.',
    tags: ['React Native', 'Django', 'TypeScript'],
    link: 'https://www.linkedin.com/company/fem-entity/posts/?feedView=all',
  },
  {
    image: require('../../assets/images/ucsf.png'),
    title: 'Machine Learning Research Intern @ Department of Epidemiology and Biostatistics, University of California, San Francisco',
    description: '\nAnalyzed clinical datasets across 200+ trials to evaluate the impact of 3 key social determinants of health (SDOH), contributing to equity-focused research insights. Selected as 1 of 11 from over 200 candidates for a competitive global health internship. Developed machine learning models and pipelines for health data interpretation, self-studied linear algebra to complete master level ML labs, and presented research findings at UCSF Institute for Global Health Sciences’ symposium. Coded and deployed a functional research website for Dr. Jean Feng’s PROSPECT Lab, enhancing digital presence and research dissemination.',
    tags: ['Python', 'MIMIC', 'Hugging Face Transformers'],
    link: 'https://zsfg-prospect.github.io/',
  },
  {
    image: require('../../assets/images/femtech-future.png'),
    title: 'AI Researcher @ FemTech Future Limited, Business Consulting and Services',
    description: '\nResearch AI applications in FemTech, focusing on how company founders leverage artificial intelligence for breast cancer screening, drug development, and chatbot creation to support content strategy for LinkedIn posts and podcast features. Examined training datasets for AI models, identifying and synthesizing potential gender biases in data used for healthcare applications.',
    tags: ['AI', 'Health Informatics', 'Data Mining'],
    link: 'https://www.femtechfuture.com/',
  },
  {
    image: require('../../assets/images/stem-e.png'),
    title: 'Data Analyst & Website Manager Team Lead Intern @ STEM·E Youth Career Development Program',
    description: '\nLead technical training sessions for 30+ interns weekly on Python programming, Mailchimp, Asana, Power BI, and Google Ads, driving cross-functional digital literacy. Conduct asynchronous data analysis on 200+ member records to identify engagement patterns and recommend workflow optimizations, improving operational efficiency, spearheading initiatives to digitize internal processes using automation tools and analytics dashboards, enhancing team productivity, onboarding, and offboarding. Built and led live coding sessions in Google Colab and Jupyter Notebook, demonstrating Python fundamentals, data wrangling, and basic automation workflows to interns with diverse technical backgrounds.',
    tags: ['Python', 'Jupyter Notebook', 'Power BI'],
    link: 'https://www.steme.org/',
  }
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

  // Adjust the card width based on the screen width
  const cardWidth = width < 600 ? '100%' : '48%'; // Use 100% for mobile, 48% for larger screens

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#0A0A23', padding: 20 }}
      scrollEventThrottle={16}
      onScroll={handleScroll}
    >
      {/* HERO SECTION */}
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
      <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', textAlign: 'center', paddingTop: 100, paddingBottom: 50, fontStyle: 'italic' }}>
        my endeavors.
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
        {cardData.map((card, i) => {
          return (
            <TouchableOpacity
              key={i}
              // @ts-ignore
              onMouseEnter={() => setHoveredIndex(i)} // For web support
              onMouseLeave={() => setHoveredIndex(null)} // For web support
              onPressIn={() => setHoveredIndex(i)} // For mobile support
              onPressOut={() => setHoveredIndex(null)} // For mobile support
              activeOpacity={1}
              style={{
                backgroundColor: '#1F1F3D',
                borderRadius: 10,
                padding: 15,
                width: width < 600 ? '100%' : '48%',
                marginBottom: 20,
                marginRight: width < 600 || (i % 2 === 1) ? 0 : '4%',
                shadowColor: hoveredIndex === i ? '#B39DDB' : 'transparent',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: hoveredIndex === i ? 10 : 5,
                transform: hoveredIndex === i ? [{ scale: 1.03 }] : [{ scale: 1 }],
              }}
            >
              <Image
                source={card.image}
                style={{
                  width: '75%',
                  height: 200,
                  borderRadius: 10,
                  resizeMode: 'cover',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
                {card.title}
              </Text>
              <Text style={{ color: '#AAA' }}>{card.description}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(card.link)}>
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
      </View>
    </ScrollView>
  );
}
