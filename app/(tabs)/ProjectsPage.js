import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProjectsPage() {
	return (
		<View style={styles.container}>
			<Text style={styles.subtitle}>THIS IS THE PROJECTS PAGE</Text>
			<Link style={styles.pageLink} push href= '/SkillsPage'>Go to Skills Page!</Link>
            <Link style={styles.pageLink} push href= '/ContactPage'>Go to Contact Page!</Link>
            <Link style={styles.pageLink} push href="/">
          <ThemedText style={styles.pageLink} type="link">Go to home screen!</ThemedText>
        </Link>
		</View>
	);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'top',
    padding: 20,
    backgroundColor: '#FFF7CB',
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