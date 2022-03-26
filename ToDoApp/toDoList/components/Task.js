import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Task (props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        
    },
    itemsLeft: {},
    square: {},
    itemText: {},
    circular: {},
  });
  