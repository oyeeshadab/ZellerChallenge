import React from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

import Wrapper from 'components/Wrapper/Wrapper';
import RadioSelector from 'components/RadioSelector/RadioSelector';
import UserCard from 'components/UserCard/UserCard';
import styles from './UserList.styles';
import { useUserList } from './UserList.hook';
import colors from 'common/colors';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import ItemSeparator from 'components/ItemSeparator/ItemSeparator';

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
  
  return (
    <Wrapper>
      <FlatList
        data={error ? [] : filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard data={item} navigation={navigation} />
        )}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={
          <View>
            <RadioSelector testID="radio-selector" selected={selectedRole} onSelect={setSelectedRole} />
            <Text style={styles.title}>{selectedRole} Users</Text>
            {error && !loading && <ErrorComponent />}
            { loading && 
               <View style={styles.loader}>
               <ActivityIndicator testID="ActivityIndicator" animating={true} size="large" color={colors.royalBlue}/>
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
