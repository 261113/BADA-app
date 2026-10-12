import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Chip } from '../../../components/ui';
import { colors, radius, spacing } from '../../../constants/theme';
import { boardTypes } from '../../../data/mock';

export default function CommunityWriteScreen() {
  const [board, setBoard] = useState(0);
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('알림', '제목과 내용을 입력해주세요.');
      return;
    }
    Alert.alert('등록 완료', '게시글이 등록되었어요. (테스트 화면)', [
      { text: '확인', onPress: () => router.back() },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>게시판</Text>
        <View style={styles.chipRow}>
          {boardTypes.map((type, index) => (
            <Chip key={type} label={type} selected={board === index} onPress={() => setBoard(index)} />
          ))}
        </View>

        <Text style={styles.label}>제목</Text>
        <TextInput
          style={styles.input}
          placeholder="제목을 입력해주세요"
          placeholderTextColor={colors.textSecondary}
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>기간</Text>
        <TextInput
          style={styles.input}
          placeholder="예: 2026.10.01 - 2026.10.15"
          placeholderTextColor={colors.textSecondary}
          value={period}
          onChangeText={setPeriod}
        />

        <Text style={styles.label}>내용</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="내용을 입력해주세요"
          placeholderTextColor={colors.textSecondary}
          value={content}
          onChangeText={setContent}
          multiline
          textAlignVertical="top"
        />
      </ScrollView>

      <View style={styles.footer}>
        <Text onPress={handleSubmit} style={styles.submitButton}>
          등록하기
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xl * 2,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    marginTop: spacing.lg,
  },
  chipRow: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    fontSize: 14,
    color: colors.textPrimary,
  },
  textArea: {
    height: 160,
  },
  footer: {
    padding: spacing.lg,
  },
  submitButton: {
    textAlign: 'center',
    backgroundColor: colors.cobalt,
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
});
