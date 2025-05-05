import React from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

import Wrapper from 'components/Wrapper/Wrapper';
import RadioSelector from 'components/RadioSelector/RadioSelector';
import UserCard from 'components/UserCard/UserCard';
import styles from './UserList.styles';
import { useUserList } from './UserList.hook';
import colors from 'common/colors';

const UserList = ({ navigation }: { navigation: any }) => {
  const {
    loading,
    error,
    filtered,
    selectedRole,
    setSelectedRole,
    refreshing,
    onRefresh,
  } = useUserList();
    console.log("🚀 ~ UserList ~ filtered:", filtered)

  // if (loading) {
  //   return (
  //     <View style={styles.loader}>
  //       <ActivityIndicator animating={true} size="large" />
  //     </View>
  //   );
  // }

  const ErrorComponent = () => (
    <View style={styles.errorContainer}>
      <Text style={[styles.errorTitle, styles.errorTextStyle]}>
        Failed to load users
      </Text>
      <Text style={styles.errorTextStyle}>
        {error?.message}. Please pull down to refresh and try again.
      </Text>
    </View>
  );

  return (
    <Wrapper>
      <FlatList
        data={error ? [] : filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard data={item} navigation={navigation} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View>
            <RadioSelector selected={selectedRole} onSelect={setSelectedRole} />
            <Text style={styles.title}>{selectedRole} Users</Text>
            {error && !loading && <ErrorComponent />}
            { loading && 
               <View style={styles.loader}>
               <ActivityIndicator animating={true} size="large" color={colors.royalBlue}/>
             </View>
            }
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.container}
        ListEmptyComponent={
          !error && !loading ? (
            <View style={styles.emptyComponentContainer}>
              <Text style={styles.noUserText}>No users found.</Text>
            </View>
          ) : null
        }
      />
    </Wrapper>
  );
};

export default UserList;
