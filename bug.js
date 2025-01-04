```javascript
// In a React Native component

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error appropriately, maybe set a loading state to false
        // Or display an error message to the user
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>; // Or a loading indicator
  }

  return (
    <View>
      {/* Render your data here */}
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
```