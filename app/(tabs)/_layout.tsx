import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import About from './about';
import Experience from './experience';
import Projects from './project';

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'impact & recognition'>('experience');

  const renderTab = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'impact & recognition':
        return <Projects />;
      default:
        return <Experience />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Nav */}
      <View style={styles.topNav}>
        {['about', 'experience', 'impact & recognition'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab as any)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        {renderTab()}
      </View>
    </View>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A23',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    gap: 24,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  activeTabText: {
    color: '#fff',
    borderBottomColor: '#B39DDB',
    borderBottomWidth: 2,
  },
  tabContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
