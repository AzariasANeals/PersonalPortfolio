import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SkillsPage() {
	return (
		<View style={styles.container}>
			<Text style={styles.subtitle}>THIS IS THE SKILLS PAGE</Text>
			<Link style={styles.pageLink} push href= '/ContactPage'>Go to Contact Page!</Link>
            <Link style={styles.pageLink} push href= '/ProjectsPage'>Go to Projects Page!</Link>
            <Link  style={styles.pageLink}push href="/" >
          <ThemedText style={styles.pageLink} type="link">Go to home screen!</ThemedText>
      </Link>
      <Text> I have created this page to highlight some of my skills! One thing that I am skillful 
        at is snowboarding. I have been snowboarding since I was about 14 years old. I try my best to
        go every year if possible, but lately it's been getting more and more expensive.
      </Text>
      <Text>
        Another one of my skills is 
      </Text>
		</View>
	);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'top',
    padding: 20,
    backgroundColor:'#FFF7CB',
    marginHorizontal: "auto"

  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    },
  pageLink: {
    fontSize: 25,
    color: "#38434D",
    },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    }
});